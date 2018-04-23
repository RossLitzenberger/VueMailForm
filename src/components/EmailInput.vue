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
        ...BaseInput.data()
      };
    },
    computed: {
      ...BaseInput.computed
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
      @input="updateValue"
      :id="id"
      v-bind="$props"> 
  </section>
</template>
