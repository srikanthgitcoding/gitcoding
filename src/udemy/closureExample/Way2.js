const privateProporty = () => {
  let secret = 0;

  return {
    increment(val) {
      secret += val;
    },
    getsecret() {
      return secret;
    },
  };
};

const sss = privateProporty();

console.log(sss.getsecret());
console.log(sss.increment(5));
console.dir(sss.getsecret);
