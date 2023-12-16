const fs = require("fs");
const { algo } = require("./index.js");

const inputDemo1 = fs
  .readFileSync(__dirname + "/input-demo-1")
  .toString()
  .trim();

const inputDemo2 = fs
  .readFileSync(__dirname + "/input-demo-2")
  .toString()
  .trim();

const input = fs
  .readFileSync(__dirname + "/input")
  .toString()
  .trim();

test("algo", () => {
  expect(algo(inputDemo1)).toBe(2);
  expect(algo(inputDemo2)).toBe(6);
  console.log('part 1', algo(input));
});
