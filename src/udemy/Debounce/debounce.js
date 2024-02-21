const debounce = (callback, timeOut = 300) => {
  let timer;
  return (...args) => {
    //...args returns s sr si srik
    //args returns ["s", "sr","sri"]
    clearTimeout(timer);
    // timer = setTimeout(() => {
    //   console.log(this); // this points to {}
    //   callback.apply(this, args);
    // }, timeOut);
    timer = setTimeout(function () {
      this.Ename = "ssrikanth";
      console.log("this", this); // here this points to timer object
      callback.apply(this, args);
    }, timeOut);
  };
};

const saveInput = function (name) {
  console.log("saveInput", name, this.Ename);
};

const processChange = debounce(saveInput, 2000);

processChange(["111"]);
processChange("fo"); // when u call it clears f
processChange("foo"); // when u call it clears f0
processChange(["1", "1"]); //// when u call it clears foo and creates new timer
