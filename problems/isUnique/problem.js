// Determine if a string has all unique characters

const isUnique = (str) => {
  if (typeof str !== 'string') {
    return null;
  }

  const chars = {};

  for (let i = 0; i < str.length; i += 1) {
    const letter = str[i];

    if (chars[letter] !== undefined) {
      return false;
    }
    chars[letter] = true;
  }

  return true;
};

module.exports = isUnique;
