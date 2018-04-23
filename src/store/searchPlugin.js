let controller = null;

function search(url, name) {
  if (controller) {
    controller.abort(); // kill previous fetch
  }
  controller = new AbortController();
  return fetch(`${url}${name}`, {
    signal: controller.signal
  })
    .then(res => {
      return res.json();
    })
    .then(json => {
      // only deal with first 10 matches for perf
      if (!json || !json.users) {
        return [];
      }
      const users = json.users;
      return users.slice(0, 10);
    })
    .catch(err => {
      console.error(err);
    });
}

export default function updateEmailsPlugins(store) {
  store.subscribe(mutation => {
    if (!mutation.payload) {
      return false;
    }
    // Improve with a worker
    if (["updateToField", "updateCCField"].includes(mutation.type)) {
      search(store.state.api + "search/", mutation.payload).then(users => {
        if (users) {
          store.dispatch("users", users);
        }
      });
    }
  });
}
