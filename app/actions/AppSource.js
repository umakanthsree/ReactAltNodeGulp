var AppSource = {
  fetch: function () {
    // returning a Promise because that is what fetch does.
    return new Promise(function (resolve, reject) {
      // simulate an asynchronous action where data is fetched on
      // a remote server somewhere.
      setTimeout(function () {
        // resolve with some mock data
        resolve(['Uma', 'Kanth']);
      }, 250);
    });
  }
};

export default AppSource;