import Vue from "vue";
import Vuex from "vuex";

import mutations from "./store/mutations";
import actions from "./store/actions";
import searchPlugin from "./store/searchPlugin";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    fields: {
      to: "",
      cc: [],
      subject: "",
      body: ""
    },
    users: []
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
