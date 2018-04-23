<script>
import SearchDatalist from "@/components/SearchDatalist.vue";
// @ is an alias to /src

export default {
  name: "email",
  components: {
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
            <label for="email+to">To</label>
            <input
                type="email"
                id="email+to"
                name="email+to"
                list="emails"
                autocomplete="email"
                placeholder="Enter a name to search"
                required
                autofocus>
            <br>
            <label for="email+cc">CC</label>
            <input
                type="email"
                list="emails"
                id="email+cc"
                name="email+cc"
                autocomplete="email"
                placeholder="Enter more names to search"
                multiple>
            </fieldset>
            <fieldset>
            <legend>Communication</legend>
            <label for="email+subject">Subject</label>
            <input id="email+subject" name="email+subject">
            <br>
            <label for="email+body">Body</label>
            <textarea id="email+body" name="email+body"></textarea>
            </fieldset>

            <input type="reset" value="reset">
            <button type="submit">Send some mail!</button>
        </form>
    </div>
</template>
