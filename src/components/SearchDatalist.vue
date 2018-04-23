<script>
export default {
  name: "SearchDatalist",
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    users() {
      return this.$store.state.users;
    }
  }
};
</script>
<template>
  <datalist :id="id">
    <option v-for="human in users" 
      :key="human.id" 
      :value="human.email">{{ human.firstName }} {{ human.lastName }}</option>
  </datalist> 
</template>
