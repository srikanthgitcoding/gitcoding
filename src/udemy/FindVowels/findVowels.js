function vowels(str) {
  const listOfVowels = ["a", "e", "i", "o", "u"];
  return str
    .toLowerCase()
    .split("")
    .filter((char) => listOfVowels.includes(char)).length;
}
console.log(vowels("Hi There"));
console.log(vowels("Why Do You Ask!"));
