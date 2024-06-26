const fs = require("fs");
const { algo, algo2 } = require("./index.js");

const inputDemo1 = fs
  .readFileSync(__dirname + "/input-demo-1")
  .toString()
  .trim();

const inputDemo2 = fs
  .readFileSync(__dirname + "/input-demo-2")
  .toString()
  .trim();

const inputDemo3 = fs
  .readFileSync(__dirname + "/input-demo-3")
  .toString()
  .trim();

const input = fs
  .readFileSync(__dirname + "/input")
  .toString()
  .trim();

test("algo", () => {
  // expect(algo(inputDemo1)).toBe(2);
  // expect(algo(inputDemo2)).toBe(6);
  // expect(algo(input)).toBe(21797);
  expect(algo2(inputDemo3)).toBe(6);
  console.log('part 2', algo2(input));
});
