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
    }
  },
  name: "EmailInput"
};
</script>
  
<template>
  <div>
    <label v-if="label" :for="id">{{label}}</label>
    <textarea
      :id="id"
      :placeholder="placeholder"
      v-bind="$attrs">
    </textarea>
  </div>
</template>
