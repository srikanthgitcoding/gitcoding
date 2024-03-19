let reversedd = "";
function fn(str) {
  for (let cha of str) {
    // in operator returns index number
    console.log(cha);
    reversedd = cha + reversedd;
  }
}

fn("srikanth");
console.log(reversedd);
