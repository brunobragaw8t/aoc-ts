const fs = require("fs");
const { algo, algo2 } = require("./index.js");

const inputDemo = fs.readFileSync(__dirname + "/input-demo-1.txt").toString();
const inputDemo2 = fs.readFileSync(__dirname + "/input-demo-2.txt").toString();
const inputChallenge = fs.readFileSync(__dirname + "/input.txt").toString();

test("algo", () => {
  expect(algo(inputDemo)).toBe(14);
  console.log('Result: ', algo(inputChallenge));
});

test("algo2", () => {
  expect(algo2(inputDemo2)).toBe(9);
  expect(algo2(inputDemo)).toBe(34);
  console.log('Result2: ', algo2(inputChallenge));
});
