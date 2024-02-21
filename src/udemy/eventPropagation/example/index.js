window.addEventListener("DOMContentLoaded", function () {
  const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const randomcolor = () =>
    `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)},${randomInt(0, 255)})`;

  document.querySelector(".navs").addEventListener("click", function (e) {
    console.log(randomcolor());
    this.style.backgroundColor = randomcolor();
    console.log("navs", e.target);
  });

  document.querySelector(".nav-link").addEventListener("click", function (e) {
    this.style.backgroundColor = randomcolor();

    console.log("nav-link", e.target);
  });

  document.querySelector(".navBar").addEventListener("click", function (e) {
    this.style.backgroundColor = randomcolor();

    console.log("navBar", e.target);
  });
});

// event listeners they lisetning
// the event handler functions are listening for click events that happen on the element itself,
// and on child elemnts

//event listener are listening for events in the bubbling phase,but not in the capturing phase.
// 1) in js we have 2 phases  caputing phase and bubbling phase
// * Document -> html element -> body -> div -> ul-> li
// * what exactly hapens when someone click on event say link tag ?
// * event gets generated at root of dom tree not at link tag from there capturing phae happens
// * the event travells all the way down from document route to the target element, which means it passes through every single parent element of the target element.
// * as soon as it reaches target elemnt, target phase happens
// * after reaching the target,the event then actually travels,all the way up to the document route again, in the so-called bubbling phase. events bubble up from target to root 
// what is caputing phase  and target phase and bubbling phase ?
// whagt is bubbling phase ?
