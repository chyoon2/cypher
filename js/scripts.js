const sentence = prompt("Please enter a sentence");

alert(reverseFirstLast(sentence));

const string1 = firstLastUppercase(sentence);
const string2 = reverseFirstLast(string1);

function firstLastUpper(sentence) {
  const n = sentence.length;
  const firstLast = sentence.charAt(0) + sentence.charAt(n-1);
  const result = firstLast.toUpperCase();
  return result;
};

function reverseFirstLast(sentence) {
  const string1 = firstLastUpper(sentence);
  return string1.charAt(1) + string1.charAt(0);
};





// function getLastTwo () {
//   const string1 = firstLastUpper(sentence);
//   const string2 = reverseFirstLast(string1);
//   return string2;
// };

