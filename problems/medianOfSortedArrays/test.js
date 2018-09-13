const findMedian = require('./problem');

test('Should exist', () => {
  expect(typeof findMedian).toBe('function');
});

test('Should work for empty arrays', () => {
  expect(findMedian([],[])).toBe(null);
  expect(findMedian([],[1,2,3])).toBe(2);
  expect(findMedian([],[1,2])).toBe(1.5);
  expect(findMedian([1,2,3],[])).toBe(2);
  expect(findMedian([1,2],[])).toBe(1.5);
});

test('Should work with negative numbers', () => {
  expect(findMedian([-3,-2,-1], [-3,-2,-1])).toBe(-2);
  expect(findMedian([-2,-1],[-2,-1])).toBe(-1.5);
});

test('Should work with a mix of positive and negative numbers', () => {
  expect(findMedian([-3,-2,-1,1,2,3], [-2,-1,1,2])).toBe(0);
});