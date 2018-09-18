/* Write a function that takes in a string
and an integer that represents the true length of the string
and returns a new url string with spaces replaced by %20 */

const URLify = (str, length) => {
  let url = '';

  for (let i = 0; i < length; i += 1) {
    const char = str[i];

    char === ' ' ? url += '%20' : url += char;
  }

  return url;
};

module.exports = URLify;
