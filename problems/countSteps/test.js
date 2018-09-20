const countSteps = require('./problem');

jest.setTimeout(1);

test('Should exist', () => {
  expect(typeof countSteps).toBe('function');
});

test('Should output number of permutations for a given amount of steps', () => {
  expect(countSteps(3)).toBe(4);
});

test('Should be able to handle large step input', () => {
  expect(countSteps(5000)).toBeTruthy();
});

test('Should be able to take in a steps array', () => {
  expect(countSteps(5, [1, 2, 3, 4])).toBe(15);
});