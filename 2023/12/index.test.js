const fs = require('fs');
const { algo, algo2 } = require('./index.js');

const inputDemo1 = fs
  .readFileSync(__dirname + '/input-demo-1')
  .toString()
  .trim();

const input = fs
  .readFileSync(__dirname + '/input')
  .toString()
  .trim();

// test('algo', () => {
//   expect(algo(inputDemo1)).toBe(21);
//   console.log('part 1', algo(input));
// });

test('algo part 2', () => {
  // expect(algo2(inputDemo1)).toBe(21);
  // expect(algo2(input)).toBe(7017);
  expect(algo2(inputDemo1, 2)).toBe(525152);
});
