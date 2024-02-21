const users = [
  { id: 1, userName: "srikanth" },
  { id: 2, userName: "mothkuri" },
  { id: 3, userName: "manisha" },
];

const usersStatus = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
];

const async1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(users);
    }, 2000);
  });
};

const async2 = () => {
  return new Promise(async (resolve, reject) => {
    setTimeout(() => {
      resolve(usersStatus);
    }, 2000);
  });
};

const getUsersData = async () => {
  let data1 = await async1();
  let data2 = await async2();
  console.log(data1, data2);
};

getUsersData();
