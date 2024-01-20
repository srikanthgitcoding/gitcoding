const obj = {
  name: "srikanth",
  fatherName: "father",
  getName() {
    this.self = this;
    function getFatherName() {
      console.log("caled");
      return this.self.fatherName;
    }
    return getFatherName;
  },
};

console.log(obj.getName()());
