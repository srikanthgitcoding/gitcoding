const name1 = "srikanth";

const nameObj = {
  firstName: "sss",
  passportNumber: 1234,
};

function fn(name, nameObj) {
  name = "changhed";
  nameObj.passportNumber = 98762;
}

fn(name1, Object.assign({}, nameObj));
console.log(name1, nameObj);

// const name = name1
// const nameObj = nameObj // this is same as aboves
