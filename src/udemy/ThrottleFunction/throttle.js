const throttle = (callBack, timeOut) => {
  let isWaiting = false;
  return (...args) => {
    if (!isWaiting) {
      callBack.apply(this, args);
      isWaiting = true;
      setTimeout(() => {
        isWaiting = false;
      }, timeOut);
    }
  };
};

const saveInput = (name) => {
  console.log("name", name);
};

const processChange = throttle(saveInput, 2000);
processChange("f");
setTimeout(() => {
  processChange("fo");
}, 1000);
setTimeout(() => {
  processChange("foo");
}, 2000);

setTimeout(() => {
  processChange("fooo");
}, 2001);
