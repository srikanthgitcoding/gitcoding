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

const async = (callback, timeout) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(users);
    }, timeout);
  });
};

const async1 = (callback, timeout) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(usersStatus);
    }, timeout);
  });
};

const manipulatedData = (users, userStatus) => {
  return users.map((currentUser) => {
    const isActive = userStatus.find(
      (currentUserStatus) => currentUserStatus.id == currentUser.id
    ).isActive;
    return { ...currentUser, isActive };
  });
};

Promise.all([async(), async1()])
  .then(([user, userstatus]) => {
    return manipulatedData(user, userstatus);
  })
  .then((dataa) => console.log(dataa));
