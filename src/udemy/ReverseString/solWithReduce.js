function reverse(str) {
  return str
    .split("")
    .reduce(
      (accumulator, currentValue) => (currentValue + accumulator),
      ""
    );
}

console.log(reverse("srikanth"))
