console.log(this); //window

//----------------------
function fn() { // function declaraion
  var aaa = "123";
  console.log(this); //window
}

const fn1 = function () { //named functions or anonymous function
  console.log(this); //window
};

const arr = () => { /// arrow function
  console.log(this); //window
};

//----------------------

setTimeout(function () {
  console.log(this); //window or window object
});

setTimeout(() => {
  console.log(this); // window object
});

const myObject = {
  regularExample: function () {
    console.log("REGULAR: points to object", this);
  },

  arrowExample: () => {
    console.log("ARROW: points to window object", this);
  },
};

myObject.regularExample();
myObject.arrowExample();
