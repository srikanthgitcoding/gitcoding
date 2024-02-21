var initial = "/posts/:postId/comments/:commenId";

const replaceParamInUrl = (url, arr) => {
  return arr.reduce((acc, curr) => {
    return acc.replace(":" + curr.from, curr.to);
  }, url);
};

const restUrl = replaceParamInUrl(initial, [
  { from: "postId", to: "p123" },
  { from: "commenId", to: "c987" },
]);
console.log("restUrl", restUrl);
