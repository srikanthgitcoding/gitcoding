function fndeclaration() {
  console.log(this);
}

const fnExpresssion = function () {
  console.log("%%", this);
};

// fnExpresssion();

const obj = {
  firsTName: "srikanth",
  fullName: function () {
    console.log(this);
    const expression = function () {
      console.log("expressiion", this);
    };
    expression();
  },
};

obj.fullName();
