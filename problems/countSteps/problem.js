/* A child is jumping up the steps. They can take either 1, 2, or 3 steps.
Count the number of permutations of steps a child can take to reach exactly
the top step */

const countSteps = (steps, jumps = [1, 2, 3], counter = 0, cache = {}) => {
  if (typeof steps !== 'number') {
    return null;
  }
  if (steps === 0) {
    return 1;
  }
  if (steps < 0) {
    return 0;
  }
  if (cache[steps] !== undefined) {
    return cache[steps];
  }

  let perms = 0;

  for (let i = 0; i < jumps.length; i += 1) {
    perms += countSteps(steps - jumps[i], jumps, counter, cache);
  }

  cache[steps] = perms;
  return counter + perms;
};

module.exports = countSteps;
