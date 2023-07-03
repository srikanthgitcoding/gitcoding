class Circle {
  constructor(n) {
    this.n = n;
  }

  draw() {
    console.log("draw method changed", this.n);
  }
}
export default Circle;
