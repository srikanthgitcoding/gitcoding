// const main1 = document.getElementById("main");
// const str =
//   "srikanth I am tesing this myselftocheckf charsaremorethan8 hightlihht that word";

// const result = str
//   .split(" ")
//   .map((word) =>
//     word.length >= 8
//       ? `<span style="background-color: yellow">${word}</span>`
//       : `<span>${word}</span>`
//   )
//   .join(" ");
// console.log(main1);
// main1.innerHTML = result;

const main1 = document.getElementById("main");
const str =
  "srikanth I am tesing this myselftocheckf charsaremorethan8 hightlihht that word";

const result = str
  .split(" ")
  .map((word) => `<div>${word}</div>`)
  .join(" ");
console.log(main1);
main1.append(<div>`${result}`</div>);
