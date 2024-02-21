const asynFn = (callback) => {
  setTimeout(() => {
    callback("done");
  }, 1000);
};

asynFn((message) => {
  console.log(message);
});
