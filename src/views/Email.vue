<script>
import BaseInput from "@/components/BaseInput.vue";
import EmailInput from "@/components/EmailInput.vue";
import SearchDatalist from "@/components/SearchDatalist.vue";
// @ is an alias to /src

export default {
  name: "email",
  components: {
    "email-input": EmailInput,
    "base-input": BaseInput,
    "search-datalist": SearchDatalist
  }
};
</script>

<template>
  <div>
    <form id="email" name="email" action="">
      <search-datalist id="emails"></search-datalist>
      <fieldset>
      <legend>Correspondence</legend>
      <email-input
          label="To"
          type="email"
          list="emails"
          name="to"
          autocomplete="email"
          autofocus
          required
      ></email-input>
      <br>
        <email-input
          label="CC (optional)"
          type="email"
          multiple
          list="emails"
          name="cc"
          autocomplete="email"
        ></email-input>
      </fieldset>
      <fieldset>
      <legend>Communication</legend>
      <base-input
          label="Subject"
          placeholder="E.G. I have those TPS reports you needed"
          required
        ></base-input>
      <br>
      <label for="email+body">Body</label>
      <textarea id="email+body" name="email+body"></textarea>
      </fieldset>

      <input type="reset" value="reset">
      <button type="submit">Send some mail!</button>
    </form>
  </div>
</template>
