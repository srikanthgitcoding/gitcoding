var arr = ["cart-1", "cart-2", "cart-3", "cart-4", "cart-5"];

let divElem = "";
for (let i = 0; i < arr.length; i++) {
  divElem += `<div>${arr[i]}</div>`;
}

document.querySelector("#cart-id").innerHTML = divElem;
