import Vue from "vue";
import Vuex from "vuex";

import mutations from "./store/mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    fields: {
      to: "",
      cc: [],
      subject: "",
      body: ""
    }
  },
  mutations,
  actions: {}
});
