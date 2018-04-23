export default {
  updateToField(state, value) {
    state.fields.to = value;
  },
  updateCCField(state, value) {
    let emails = value.split(",");
    emails = emails.map(email => email.trim());
    state.fields.cc = [...new Set(emails)]; // only save unique
  },
  updateSubjectField(state, value) {
    state.fields.subject = value;
  },
  updateBodyField(state, value) {
    state.fields.body = value;
  },
  users(state, uniqueUserList) {
    state.users = uniqueUserList;
  },
  searching(state, value) {
    state.searching = value;
  }
};
