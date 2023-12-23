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
  expect(algo(inputDemo1)).toBe(374);
  console.log('part 1', algo(input));
});

test("algo part 2", () => {
  expect(algo(inputDemo1, 9)).toBe(1030);
  expect(algo(inputDemo1, 99)).toBe(8410);
  console.log('part 2', algo(input, 999_999));
});
