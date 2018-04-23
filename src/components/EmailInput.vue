<script>
import BaseInput from "@/components/BaseInput.vue";

export default {
  extends: {
    props: {
      ...BaseInput.props,
      placeholder: {
        type: String,
        default() {
          return "Enter a name to search";
        }
      }
    },
    data() {
      return {
        ...BaseInput.data(),
        active: false
      };
    },
    computed: {
      ...BaseInput.computed,
      users() {
        const value = (this.textValue || "").toLocaleLowerCase();
        // Filter the users based on the typing
        return this.$store.state.users.filter(user => {
          return (
            `${user.firstName} ${user.lastName} ${user.email}`
              .toLocaleLowerCase()
              .indexOf(value) >= 0
          );
        });
      },
      simple() {
        return this.$store.state.simple;
      },
      isActive() {
        const value = this.textValue ? true : false;
        return !this.simple && this.active && value;
      }
    },
    methods: {
      ...BaseInput.methods
    }
  },
  name: "EmailInput"
};
</script>

<template>
  <section>
    <label v-if="label" :for="id">{{label}}</label>
    <input
      ref="input"
      @focus="active = true"
      @blur="active = false"
      @input="updateValue"
      :id="id"
      v-bind="$props">
    <ul class="dropdown" v-show="isActive">
      <li v-for="human in users" 
        :key="human.id" 
        :value="human.email">{{ human.firstName }} {{ human.lastName }} &lt;{{ human.email }}&gt;</li>
    </ul>
  </section>
</template>

<style lang="less">
ul.dropdown {
  position: absolute;
  list-style: none;
  background: #f8f8f8;
  padding: 10px;
  margin: 0;
  margin-top: 35px;
  display: inline-block;
}
</style>
