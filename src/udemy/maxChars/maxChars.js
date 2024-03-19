function maxChars(str) {
  const obj = {};
  let max = 0;
  let maxChar = "";

  for (let char of str) {
    // if (!obj[char]) {
    //   obj[char] = 1;
    // } else {
    //   obj[char]++;
    // }
    obj[char] = obj[char] + 1 || 1;
  }
  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      maxChar = key;
    }
  }
  return [max, maxChar];
}
console.log(maxChars("abcabccddddd"));
