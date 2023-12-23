"use strict";
exports.__esModule = true;
exports.addTodo3 = void 0;
var Types;
(function (Types) {
    Types["type"] = "ADD_TODO";
    Types["type1"] = "aaa";
})(Types || (Types = {}));
var addTodo3 = function (text) { return ({
    type: "ADD_TODO",
    text: text
}); };
exports.addTodo3 = addTodo3;
// export const addTodo2 = (text: string)  => ({
//     type: "ADD_TODO",
//     text
// })
var rd = exports.addTodo3("hellow world");
// const rd2 = addTodo2("hellow world")
console.log(rd);
