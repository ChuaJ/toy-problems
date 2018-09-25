/* Write a function that takes in a string
and checks if that string is a palindrome */

const isPalindrome = (str) => {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;
    left += 1;
    right -= 1;
  }

  return true;
};

module.exports = isPalindrome;
