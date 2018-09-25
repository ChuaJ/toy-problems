const isPalindrome = require('./problem');

test('Should exist', () => {
  expect(typeof isPalindrome).toBe('function');
});

test('Should work for even and odd length palidromes', () => {
  expect(isPalindrome('aba')).toBe(true);
  expect(isPalindrome('abba')).toBe(true);
});

test('Should return false for non-palindrome inputs', () => {
  expect(isPalindrome('abc')).toBe(false);
  expect(isPalindrome('aabb')).toBe(false);
});
