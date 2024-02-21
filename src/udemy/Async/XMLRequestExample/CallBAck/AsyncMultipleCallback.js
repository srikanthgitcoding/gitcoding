const asyn1 = (callback) => {
  setTimeout(() => {
    callback(1);
  }, 1000);
};

const asyn2 = (callback) => {
  setTimeout(() => {
    callback(2);
  }, 2000);
};

const asyn3 = (callback) => {
  setTimeout(() => {
    callback(3);
  }, 3000);
};

const asynResult =
  ([asyn1, asyn2, asyn3],
  (result) => {
    console.log("---", result);
  });
