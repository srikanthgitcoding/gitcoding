const counterFN = function () {
  let counter = 0; // this is private propety this cant be accessed when print it doesnt show this counter
  //   return (n) => {
  //     return (counter += n);
  //   };
};
const callCounter = counterFN();
console.log(callCounter);
//console.log(callCounter(3));
// console.log(callCounter(4));
// console.log(callCounter(6));
// console.log(callCounter(7));
