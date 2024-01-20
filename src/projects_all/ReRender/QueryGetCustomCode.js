const useQuery = ({ queryKey, queryFn, enabled }) => {
  var data = {},
    isLoading = false;
  (async function () {
    if (enabled) {
      let respone = await queryFn();
      console.log("respone", respone);
      data = respone;
      return { data, isLoading: false };
    }
  })();
  return { data, isLoading };
};

async function whichDoesGetCall() {
  return setTimeout(() => {
    return {
      fname: "srikanth",
      lName: "mothkuri",
    };
  }, 1);
}
console.log(
  useQuery({ queryKey: ["data"], queryFn: whichDoesGetCall, enabled: true })
);
