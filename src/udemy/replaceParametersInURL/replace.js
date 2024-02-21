var initial = "/posts/:postId/comments/:commenId";
var updated = initial;
console.log(initial);
const replaceParamInUrl = (url, arr) => {
  arr.forEach((item) => {
    updated = updated.replace(":" + item.from, item.to);
  });
  console.log(updated);
};

const restUrl = replaceParamInUrl(initial, [
  { from: "postId", to: "p123" },
  { from: "commenId", to: "c987" },
]);
