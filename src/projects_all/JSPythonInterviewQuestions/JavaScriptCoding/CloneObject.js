var trivia = {
  category: "Geography",
  type: "multiple",
  difficulty: "easy",
  question: "What is the capital of the American state of Arizona?",
  correct_answer: "Phoenix",
  incorrect_answers: ["Montgomery", "Tallahassee", "Raleigh"],
};
var triviaCopy = trivia;
trivia.category = "changed";
trivia.incorrect_answers[0] = "changed";
triviaCopy.type = "Single";
triviaCopy.incorrect_answers[0] = "changed nested";

console.log("trivia", trivia);
console.log("triviaCopy", triviaCopy);

//if u copy this way
//1) if u change original it effects copied including nested
//2) if iu change copy it effects original including nested

//object.assign
var objAss = {
  category: "Geography",
  type: "multiple",
  difficulty: "easy",
  question: "What is the capital of the American state of Arizona?",
  correct_answer: "Phoenix",
  incorrect_answers: ["Montgomery", "Tallahassee", "Raleigh"],
};
var objAssCopy = Object.assign({}, objAss);

objAss.category = "category changed";
objAss.incorrect_answers[0] = "o changed";
objAssCopy.type = "typechanged";
objAssCopy.incorrect_answers[1] = "1 changed";

console.log("objAss", objAss);
console.log("objAssCopy", objAssCopy);

// if u copy using object.assign
//1) original changes will nort effect copied and vise versa- one level, not nested
//2) nested objected changes vice versa original change effect copy, copy change effects obj

// JSON.parse();
// JSON.stringify(); //- //it converts js object to string

//JOSN.parse

var js = {
  category: "Geography",
  type: "multiple",
  difficulty: "easy",
  question: "What is the capital of the American state of Arizona?",
  correct_answer: "Phoenix",
  incorrect_answers: ["Montgomery", "Tallahassee", "Raleigh"],
};
var jsCopy = JSON.parse(JSON.stringify(js));
js.category = "category changed";
js.incorrect_answers[0] = "zer";
jsCopy.type = "type changed";
jsCopy.incorrect_answers[0] = "ss";
console.log(js);
console.log(jsCopy);

var clone1 = { name: "srikanth", last: "moth" };
var clone2 = { ...clone1 };

console.log(clone2);
