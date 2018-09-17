const checkPermutation = require('./problem');

test('Should exist', () => {
  expect(typeof checkPermutation).toBe('function');
});

test('Should return true for strings that contain the same characters', () => {
  expect(checkPermutation('abc', 'abc')).toBe(true);
  expect(checkPermutation('abc', 'cba')).toBe(true);
});

test('Should return false for strings that do not contain the same characters', () => {
  expect(checkPermutation('abc', 'abd')).toBe(false);
  expect(checkPermutation('aaa', 'aa')).toBe(false);
});
