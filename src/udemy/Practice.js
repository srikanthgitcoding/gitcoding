const delegation = (callback, timeout) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(function () {
      callback.apply(this, args);
    }, 2000);
  };
};

function input(args) {
  console.log("I am called", args);
}

const callMe = delegation(input, 3000);

callMe("s");
callMe("sr");
callMe("sri");
callMe("srik");
