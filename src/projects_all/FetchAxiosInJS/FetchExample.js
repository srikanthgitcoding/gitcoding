const fetch = require("node-fetch");
const { resolve } = require("path");

// async function useQuery({ querykey, queryFn }) {
//   var data = {},
//     isLoading = true,
//     jsonresponse;
//   try {
//     const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     jsonresponse = await data.json();
//     return {
//       jsonresponse,
//       isLoading,
//     };
//   } catch {
//   } finally {
//   }
// }

// const getMeData = async () => {
//   return await fetch("https://jsonplaceholder.typicode.com/todos/1");
// };

// console.log("begin", useQuery({ querykey: ["get"], queryFn: getMeData }));
// async function asyncFunction() {
//   try {
//     console.log("Start");
//     const promise = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("Resolved");
//       }, 2000);
//     });
//     const result = await promise;
//     console.log(result);
//     console.log("End");
//   } catch (error) {
//     console.error(error);
//   }
// }

//console.log(asyncFunction());

function operation1() {
  return new Promise((resolve) => setTimeout(() => resolve(2), 2000));
}
function operation2(result1) {
  return new Promise((resolve) => resolve(result1 * 10));
}
function operation3(result2) {
  return new Promise((resolve) => resolve(result2 * 10));
}

// operation1((result1) => {
//   operation2(result1, (result2) => {
//     operation3(result2, (result3) => {
//       console.log(result3);
//     });
//   });
// });

// operation1()
//   .then((result1) => {
//     console.log("result1", result1);
//     return operation2(result1);
//   })
//   .then((resul2) => {
//     console.log("resul2", resul2);

//     return operation3(resul2 * 10);
//   })
//   .then((res) => console.log(res * 10));

async function asybcAwait() {
  const result1 = await operation1();
  const result2 = await operation2(result1);
  const result3 = await operation3(result2);
  console.log(result3);
}

asybcAwait();

console.log("after call");


