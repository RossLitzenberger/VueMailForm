export default {
  /**
   * This resets the form
   * @param {Object} Param State coming from the Vuex lib
   */
  clearFields({ commit }) {
    commit("updateToField", "");
    commit("updateCCField", "");
    commit("updateSubjectField");
    commit("updateBodyField", "");
    return Promise.resolve();
  },

  /**
   * Users will update the internal list with what's coming from UI
   * @param {Object} param0 State coming from Vuex
   * @param {Array} newUsers This should be an array coming from UI
   */
  users({ commit, state }, newUsers) {
    // Improve with a service worker
    const mergedUsers = state.users.concat(newUsers);
    const keys = new Set();
    const uniq = mergedUsers.filter(user => {
      if (keys.has(user.id)) {
        return false;
      }
      keys.add(user.id);
      return true;
    });
    commit("users", uniq);
    return Promise.resolve(uniq);
  },
  error({ commit }) {
    commit("success", false);
    commit("error", true);
    return Promise.resolve();
  },
  success({ commit, dispatch }) {
    commit("error", false);
    commit("success", true);
    return dispatch("clearFields");
  },
  submit({ commit, state, dispatch }) {
    const fields = state.fields;
    const body = {
      to: fields.to,
      subject: fields.subject,
      body: fields.body
    };
    if (fields.cc.length > 0) {
      body.cc = fields.cc;
    }
    commit("submitting", true);
    return fetch(state.api + "submit", {
      body: JSON.stringify(body),
      cache: "no-cache",
      headers: {
        "content-type": "application/json"
      },
      method: "POST"
    })
      .then(res => res.json())
      .then(json => {
        if (json.statusCode && json.statusCode !== 200) {
          dispatch("error");
        } else {
          dispatch("success");
        }
        return json;
      })
      .catch(err => {
        // sometimes error
        dispatch("error");
        console.error(err);
      })
      .finally(() => commit("submitting", false));
  }
};
