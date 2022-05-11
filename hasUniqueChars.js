// const hasUniqueChars = (word) => {
//   let j = 1;
//   for (let i = 0; i < word.length; i++) {
//     for (let k = j; k < word.length; k++) {
//       console.log(i, j, k, unique);
//       if (word[i] === word[k]) {
//         return false;
//       }
//     }
//     j++;
//   }
//   return true;
// };

// console.log(
//   hasUniqueChars(
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz12345678900"
//   )
// );

// const hasUniqueChars = (word) => {
//   for (let i = 0; i < word.length; i++) {
//     for (let j = 0; j < word.length; j++) {
//       if (i !== j) {
//         if (word[i] === word[j]) {
//           return false;
//         }
//       }
//     }
//   }
//   return true;
// };

// console.log(hasUniqueChars("Jimy"));

// function hasUniqueChars(word) {
//   let result = [];
//   for (let i = 0; i < word.length; i++) {
//     result.push(word[i]);
//   }
//   let removeChar = [...new Set(result)];
//   return removeChar.length === result.length;
// }

// const hasUniqueChars2 = (word) => {
//   let checker = {};
//   for (let i = 0; i < word.length; i++) {
//     if (checker[word[i]] === undefined) {
//       checker[word[i]] = 1;
//     } else {
//       return false;
//     }
//   }
// };

// Check if a string is panagram

const isPanagram = (string) => {
  let j = 1;
  for (let i = 0; i < string.length; i++) {
    if (string[string.length - j] !== string[i]) {
      return false;
    }
    j++;
  }
  return true;
};

console.log(isPanagram("god dog"));
