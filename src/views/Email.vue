<script>
import BaseInput from "@/components/BaseInput.vue";
import EmailInput from "@/components/EmailInput.vue";
import SearchDatalist from "@/components/SearchDatalist.vue";
import TextareaInput from "@/components/TextareaInput.vue";

function computedHelper(field) {
  const upperCased = field.charAt(0).toUpperCase() + field.slice(1);
  return {
    get() {
      return this.$store.state.fields[field];
    },
    set(value) {
      this.$store.commit(`update${upperCased}Field`, value);
    }
  };
}

export default {
  name: "email",
  components: {
    "email-input": EmailInput,
    "base-input": BaseInput,
    "search-datalist": SearchDatalist,
    "textarea-input": TextareaInput
  },
  methods: {
    reset(event) {
      event.preventDefault();
      this.$store.dispatch("clearFields");
    },
    submitEmail(event) {
      event.preventDefault();
      this.$store.dispatch("submit");
    }
  },
  computed: {
    toField: computedHelper("to"),
    ccField: {
      get() {
        return this.$store.getters.CCAsString;
      },
      set: computedHelper("CC").set
    },
    subjectField: computedHelper("subject"),
    bodyField: computedHelper("body"),
    submitURL() {
      return this.$store.state.api + "/submit";
    },
    submitting() {
      return this.$store.state.submitting;
    },
    success() {
      return this.$store.state.success;
    },
    error() {
      return this.$store.state.error;
    }
  }
};
</script>

<template>
  <div id="form-wrap">
    <form id="email" name="email" method="POST" :action="submitURL" @submit="submitEmail">
      <header>
        <p>Send a Friendly Email</p>
        <p v-if="success">Your email has been sent successfully!</p>
        <p v-if="error" class="error">A problem has occured, try again.</p>
        </header>
      <article>
        <search-datalist id="emails"></search-datalist>
        <email-input v-model="toField" label="To" type="email" list="emails" name="to" autocomplete="email" autofocus required="required"></email-input>
        <email-input v-model="ccField" label="CC" type="email" multiple list="emails" name="cc" autocomplete="email"></email-input>
        <base-input v-model="subjectField" label="Subject" placeholder="E.G. I have those TPS reports you needed" required="required"></base-input>
        <textarea-input v-model="bodyField" label="Body"
          placeholder="E.G. Yeah , Bill, let me ask you a real quick question here: How much time would you say you spend each week dealing with these TPS reports?" required>
        </textarea-input>
      </article>
      <footer>
        <button type="submit" :disabled="submitting">Send an Email</button>
        <input id="cancel" @click="reset" type="reset" value="cancel">
      </footer>
    </form>
  </div>
</template>

<style lang="less">
#form-wrap {
  width: 500px;
  border-radius: 10px;
  background: white;
  box-shadow: 0 27px 55px 0 rgba(0, 0, 0, 0.3),
    0 17px 17px 0 rgba(0, 0, 0, 0.15);
}
#email {
  header {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    min-height: 80px;
    font-size: 20px;
    font-weight: bold;
    background: #27ae60;
    border-radius: 10px 10px 0 0;
    color: white;

    p.error {
      background: #c00f0f;
    }
  }
  article {
    padding: 10px;
  }
  section {
    display: flex;
    justify-content: space-around;
    padding: 10px;

    label {
      width: 100px;
      text-align: right;
      display: block;
      margin: 5px;
      margin-top: 10px;
    }

    input:not([type="reset"]),
    textarea {
      appearance: none;
      width: 100%;
      margin: 0 15px;
      height: 35px;
      padding: 5px 15px;
      border-radius: 5px;
      outline: none;
      border: none;
      background: #e8ebed;
      color: #576366;
      font-size: 14px;
    }
    textarea {
      height: 10em;
    }

    input[required]:valid,
    textarea[required]:valid {
      border: 0px none;
    }
    input[required]:invalid,
    textarea[required]:invalid {
      border: 2px #c00f0f solid;
    }
  }
  footer {
    border-top: 2px #27ae60 solid;
    margin: 0 25px 15px 25px;
    padding: 15px 10px;
    display: flex;
    justify-content: flex-end;

    input[type="reset"],
    button {
      display: inline-block;
      height: 40px;
      border: none;
      border-radius: 5px;
      padding: 5px 15px;
      margin-right: 10px;
      font-size: 1.1em;
    }
    button {
      color: #e8ebed;
      background: #27ae60;
    }
  }
}
</style>
