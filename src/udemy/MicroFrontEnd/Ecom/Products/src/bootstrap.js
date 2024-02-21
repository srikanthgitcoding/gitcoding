var arr = [
  "producst-1",
  "producst-2",
  "producst-3",
  "producst-4",
  "producst-5",
  "producst-6",
];
const mount = (e) => {
  var divEle = "";
  arr.forEach((item) => {
    divEle += `<div>${item}</div>`;
  });
  e.innerHTML = divEle;
};
console.log();
if (process.env.NODE_ENV === "development")
  mount(document.querySelector("#dev-products"));

export { mount };
