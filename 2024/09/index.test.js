const fs = require("fs");
const { algo, getBlocks, compactBlocks } = require("./index.js");

const inputDemo = fs.readFileSync(__dirname + "/input-demo-1.txt").toString();
const inputChallenge = fs.readFileSync(__dirname + "/input.txt").toString();

test("getBlocks", () => {
  expect(getBlocks('12345')).toEqual([0, '.', '.', 1, 1, 1, '.', '.', '.', '.', 2, 2, 2, 2, 2]);
  expect(getBlocks(inputDemo)).toEqual([0, 0, '.', '.', '.', 1, 1, 1, '.', '.', '.', 2, '.', '.', '.', 3, 3, 3, '.', 4, 4, '.', 5, 5, 5, 5, '.', 6, 6, 6, 6, '.', 7, 7, 7, '.', 8, 8, 8, 8, 9, 9]);
})

test("compactBlocks", () => {
  expect(compactBlocks([0, '.', '.', 1, 1, 1, '.', '.', '.', '.', 2, 2, 2, 2, 2])).toEqual([0, 2, 2, 1, 1, 1, 2, 2, 2]);
  expect(compactBlocks([0, 0, '.', '.', '.', 1, 1, 1, '.', '.', '.', 2, '.', '.', '.', 3, 3, 3, '.', 4, 4, '.', 5, 5, 5, 5, '.', 6, 6, 6, 6, '.', 7, 7, 7, '.', 8, 8, 8, 8, 9, 9])).toEqual([0, 0, 9, 9, 8, 1, 1, 1, 8, 8, 8, 2, 7, 7, 7, 3, 3, 3, 6, 4, 4, 6, 5, 5, 5, 5, 6, 6]);
})

test("algo", () => {
  expect(algo(inputDemo)).toBe(1928);
  console.log('Result: ', algo(inputChallenge));
});
