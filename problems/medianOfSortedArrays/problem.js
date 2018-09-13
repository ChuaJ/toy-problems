// find the median of 2 sorted arrays

const merge = (arr1, arr2) => {
  const merged = [];

  let idx1 = 0;
  let idx2 = 0;

  while (arr1[idx1] !== undefined || arr2[idx2] !== undefined) {
    if (arr1[idx1] === undefined) {
      merged.push(arr2[idx2]);
      idx2 += 1;
    } else if (arr2[idx2] === undefined) {
      merged.push(arr1[idx1]);
      idx1 += 1;
    } else {
      const val1 = arr1[idx1];
      const val2 = arr2[idx2];
      if (val1 === val2) {
        merged.push(val1);
        idx1 += 1;
      } else {
        val1 < val2 ? (merged.push(val1), idx1 += 1) : (merged.push(val2), idx2 += 1);
      }
    }
  }

  return merged;
};

const findMedian = (arr1, arr2) => {
  const length = arr1.length + arr2.length;
  
  if (length === 0) {
    return null;
  }

  const merged = merge(arr1, arr2);

  if (length % 2 === 0) {
    return (merged[(length / 2) - 1] + merged[length / 2]) / 2;
  } else {
    return merged[Math.floor(length / 2)];
  }
};

module.exports = findMedian;
