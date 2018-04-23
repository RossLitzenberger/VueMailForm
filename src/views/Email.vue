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
    bodyField: computedHelper("body")
  }
};
</script>

<template>
  <div>
    <form id="email" name="email" action="">
      <header>Send a Friendly Email</header>
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
        <button type="submit">Send an Email</button>
        <input id="cancel" @click="reset" type="reset" value="cancel">
      </footer>
    </form>
  </div>
</template>
