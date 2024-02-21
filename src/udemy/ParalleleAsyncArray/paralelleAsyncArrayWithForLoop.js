const async1 = (callback) => {
  setTimeout(() => {
    callback({ name: "srikanth" });
  }, 3000);
};

const async2 = (callback) => {
  setTimeout(() => {
    callback(2);
  }, 2000);
};

const async3 = (callback) => {
  setTimeout(() => {
    callback(3);
  }, 1000);
};

const asynResult = (asyncFn, callback) => {
  const asynFuncSize = asyncFn.length;
  const resultarr = new Array(asynFuncSize);
  let resultCounter = 0;
  asyncFn.forEach((asyncFunction, index) => {
    asyncFunction((resultData) => {
      resultarr[index] = resultData;
      resultCounter++;
      if (resultCounter >= asynFuncSize) {
        callback(resultarr);
      }
    });
  });
};

asynResult([async1, async2, async3], (result) => {
  console.log(result);
});
