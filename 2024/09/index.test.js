const fs = require("fs");
const { algo, getBlocks, compactBlocks, getBlocks2, algo2 } = require("./index.js");

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

test("getBlocks2", () => {
  expect(getBlocks2(inputDemo)).toEqual([
    { id: 0, size: 2 },
    { id: -1, size: 3 },
    { id: 1, size: 3 },
    { id: -1, size: 3 },
    { id: 2, size: 1 },
    { id: -1, size: 3 },
    { id: 3, size: 3 },
    { id: -1, size: 1 },
    { id: 4, size: 2 },
    { id: -1, size: 1 },
    { id: 5, size: 4 },
    { id: -1, size: 1 },
    { id: 6, size: 4 },
    { id: -1, size: 1 },
    { id: 7, size: 3 },
    { id: -1, size: 1 },
    { id: 8, size: 4 },
    { id: 9, size: 2 },
  ]);
})

test("algo2", () => {
  expect(algo2(inputDemo)).toBe(2858);
  console.log('Result 2: ', algo2(inputChallenge));
});
