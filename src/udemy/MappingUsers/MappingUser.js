const arr = [
  {
    id: 1,
    name: "srikabnth",
    isActive: false,
    age: 20,
  },
  {
    id: 2,
    name: "mothkuri",
    isActive: true,
    age: 50,
  },
  {
    id: 3,
    name: "manisha",
    isActive: false,
    age: 30,
  },
  {
    id: 4,
    name: "sahoo",
    isActive: false,
    age: 40,
  },
];

const data = arr
  .sort((u1, u2) => (u1.age < u2.age ? -1 : 1))
  .filter((user) => user.isActive)
  .map((user) => user.name);
console.log(data);

// const data = arr.filter((user) => user.age >= 30 ).map((v) => v.name);
// console.log(data);

// const aa = arr.reduce((acc, currentValue) => {
//   currentValue.isActive && acc.push(currentValue.name);
//   return acc;
// }, []);

// console.log(aa);
