const backendErrors = {
  email: {
    errors: [
      {
        message: "Can't be blank",
      },
    ],
  },
  password: {
    errors: [
      {
        message: "Must contain symbols in different case",
      },
      {
        message: "Must be at least 8 symbols length",
      },
    ],
  },
  passwordConfirmation: {
    errors: [
      {
        message: "Must match with password",
      },
    ],
  },
};
var arr = [];
function test(obj) {
  for (key in obj) {
    for (ke in obj[key]) {
      let str = "";
      obj[key][ke].map((item, index) => {
        str += item.message + " , ";
      });
      console.log(str);
      arr.push(str);
    }
  }
}
test(backendErrors);
console.log(arr);

function objectFn(data) {}

function ArrayFunction() {}

function looping(data) {
  if (typeof data === Object && data !== null) {
    objectFn(data);
  }
}

looping(backendErrors);
