const fs = require("fs");
const { algo } = require("./index.js");

const inputDemo1 = fs
  .readFileSync(__dirname + "/input-demo-1")
  .toString()
  .trim();

const inputTest1 = fs
  .readFileSync(__dirname + "/input-test-1")
  .toString()
  .trim();

const input = fs
  .readFileSync(__dirname + "/input")
  .toString()
  .trim();

test("algo", () => {
  expect(algo(inputDemo1)).toBe(6440);
  // console.log('part test', algo(inputTest1));
  expect(algo(input)).toBe(251029473);
  expect(algo(inputDemo1, 2)).toBe(5905);
  console.log('part 2', algo(input, 2));
});
