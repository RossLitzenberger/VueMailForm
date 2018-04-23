import Vue from "vue";
import Vuex from "vuex";

import mutations from "./store/mutations";
import actions from "./store/actions";
import searchPlugin from "./store/searchPlugin";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    simple: false,
    fields: {
      to: "",
      cc: [],
      subject: "",
      body: ""
    },
    users: [],
    searching: false,
    submitting: false,
    success: false,
    error: false,
    api: `https://trunkclub-ui-takehome.now.sh/`
  },
  getters: {
    CCAsString(state) {
      return state.fields.cc.join(", ");
    }
  },
  mutations,
  actions,
  plugins: [searchPlugin]
});
