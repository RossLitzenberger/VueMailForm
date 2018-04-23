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
  }
};
