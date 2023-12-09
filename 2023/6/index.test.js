const fs = require("fs");
const { algo } = require("./index.js");

const inputDemo1 = fs
  .readFileSync(__dirname + "/input-demo-1")
  .toString()
  .trim();

const input = fs
  .readFileSync(__dirname + "/input")
  .toString()
  .trim();

test("algo", () => {
  expect(algo(inputDemo1)).toBe(288);
  console.log('part 1', algo(input));
  expect(algo(inputDemo1, 2)).toBe(71503);
  console.log('part 2', algo(input, 2));
});
