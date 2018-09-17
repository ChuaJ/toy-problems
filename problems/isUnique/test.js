const isUnique = require('./problem');

test('Should exist', () => {
  expect(typeof isUnique).toBe('function');
});

test('Should return true when given a string of unique characters', () => {
  expect(isUnique('a')).toBe(true);
  expect(isUnique('abc')).toBe(true);
});

test('Should return false when given a string with repeated characters', () => {
  expect(isUnique('aa')).toBe(false);
  expect(isUnique('abcc')).toBe(false);
});

test('Should return true when given an empty string', () => {
  expect(isUnique('')).toBe(true);
});

test('Should return null when not given a string', () => {
  expect(isUnique({})).toBe(null);
  expect(isUnique([])).toBe(null);
  expect(isUnique(true)).toBe(null);
  expect(isUnique(0)).toBe(null);
  expect(isUnique(undefined)).toBe(null);
});