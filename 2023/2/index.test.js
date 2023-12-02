const fs = require("fs");
const { algo, algo2 } = require("./index.js");

const inputDemo1 = fs
  .readFileSync(__dirname + "/input-demo-1")
  .toString()
  .trim();

const input = fs
  .readFileSync(__dirname + "/input")
  .toString()
  .trim();

test("algo", () => {
  expect(algo(inputDemo1)).toBe(8);
  console.log('part 1', algo(input));
  expect(algo2(inputDemo1)).toBe(2286);
  console.log('part 2', algo2(input));
});
