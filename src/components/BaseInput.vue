<script>
let uid = 0;
export default {
  name: "BaseInput",
  props: {
    required: {},
    type: {},
    list: {},
    autofocus: {},
    autocomplete: {},
    multiple: {},
    value: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      validation(label) {
        return label.length > 1;
      }
    }
  },
  data() {
    return {
      // A simple unique id for instance
      id: `text-${Date.now()}${uid++}`
    };
  },
  methods: {
    updateValue() {
      this.$emit("input", this.$refs.input.value);
    }
  }
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
