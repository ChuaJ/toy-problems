const URLify = require('./problem');

test('Should exist', () => {
  expect(typeof URLify).toBe('function');
});

test('Should replace spaces with %20', () => {
  expect(URLify('hello world', 11)).toBe('hello%20world');
});

test('Should handle trailing spaces in URL', () => {
  expect(URLify('abc cba    ', 7)).toBe('abc%20cba');
});