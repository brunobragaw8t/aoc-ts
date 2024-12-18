const fs = require("fs");
const { algo } = require("./index.js");

const inputDemo1 = fs.readFileSync(__dirname + "/input-demo-1.txt").toString();
const inputDemo2 = fs.readFileSync(__dirname + "/input-demo-2.txt").toString();
const inputChallenge = fs.readFileSync(__dirname + "/input.txt").toString();

test("algo", () => {
  expect(algo(inputDemo1, 1)).toBe(7);
  expect(algo(inputDemo2, 6)).toBe(22);
  expect(algo(inputDemo2, 25)).toBe(55312);
  expect(algo(inputChallenge, 25)).toBe(188902);
  // console.log('Result: ', algo(inputChallenge, 25));
});

test("algo2", () => {
  console.log('Result 2: ', algo(inputChallenge, 75));
});
