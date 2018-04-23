<template>
  <div id="app">
    <email-view></email-view>
  </div>
</template>

<script>
import email from "@/views/Email.vue";

export default {
  name: "app",
  components: {
    "email-view": email
  }
};
</script>>
<style lang="less">
*,
*:before,
*:after {
  box-sizing: border-box;
}

body,
html {
  height: 100%;
  width: 100%;
}
body {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: #2c3e50;
  font-family: Raleway;
  color: white;
  letter-spacing: 1px;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: auto;

  input:not([type="reset"]),
  textarea {
    padding: 10px;
    width: 50vh;
  }
}
</style>
