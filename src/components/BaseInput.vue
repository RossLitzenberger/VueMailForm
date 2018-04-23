<script>
// Each input that we create needs to have a unique identifier
let uid = 0;
export default {
  name: "BaseInput",
  props: {
    type: {
      type: String,
      default: "text",
      validator: val => ["text", "email"].includes(val)
    },
    placeholder: {
      type: String,
      default() {
        return "";
      }
    },
    label: {
      type: String,
      validation(label) {
        return label.length > 1;
      }
    },
    data() {
      return {
        // A simple unique id for instance
        id: `text-${Date.now()}${uid++}`
      };
    }
  }
};
</script>

<template>
  <div>
    <label v-if="label" :for="id">{{label}}</label>
    <input
        :id="id"
        :placeholder="placeholder"
        v-bind="$attrs"> 
  </div>
</template>
