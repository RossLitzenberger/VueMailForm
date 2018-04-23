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
  name: "TextareaInput"
};
</script>
    
<template>
  <section>
    <label v-if="label" :for="id">{{label}}</label>
    <textarea
      ref="input"
      @input="updateValue"
      :id="id"
      v-bind="$props">
    </textarea>
  </section>
</template>
