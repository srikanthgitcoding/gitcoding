// u have 2 functions which returns promises, map data from users and useSytate to get array of useres with id,userName,useStatus

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

const fun1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(users);
    });
  });
};

const fun2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(usersStatus);
    });
  });
};

//solution 1
fun1().then((data1) => {
  fun2()
    .then((data2) => {
      return data1.map((user) => {
        const isActive = data2.find(
          (userstatus) => userstatus.id == user.id
        ).isActive;
        const data = { ...user, isActive };
        return data;
      });
    })
    .then((data) => console.log("####", data));
});
