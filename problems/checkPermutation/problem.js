// given two strings, write a method to decide if one is a permutation of the other
// assume input will always be two valid strings

const checkPermutation = (str1, str2) => {
  if (str1 === str2) {
    return true;
  }
  
  if (str1.length !== str2.length) {
    return false;
  }

  const count = {};

  for (let i = 0; i < str1.length; i += 1) {
    const char1 = str1[i];
    const char2 = str2[i];

    if (char1 !== char2) {
      count[char1] === undefined ? count[char1] = 1 : count[char1] += 1;
      count[char2] === undefined ? count[char2] = -1 : count[char2] -= 1;
    }
  }

  const letters = Object.keys(count);

  for (let i = 0; i < letters.length; i += 1) {
    const letter = letters[i];

    if (count[letter] !== 0) {
      return false;
    }
  }

  return true;
};

module.exports = checkPermutation;
