const fs = require("fs");
const { algo } = require("./index.js");

const inputDemo1 = fs.readFileSync(__dirname + "/input-demo-1.txt").toString();
const inputDemo2 = fs.readFileSync(__dirname + "/input-demo-2.txt").toString();
const inputDemo3 = fs.readFileSync(__dirname + "/input-demo-3.txt").toString();
const inputChallenge = fs.readFileSync(__dirname + "/input.txt").toString();

test("algo", () => {
  expect(algo(inputDemo1)).toBe(140);
  expect(algo(inputDemo2)).toBe(772);
  expect(algo(inputDemo3)).toBe(1930);
  console.log('Result: ', algo(inputChallenge));
});

// test("algo2", () => {
//   console.log('Result 2: ', algo(inputChallenge));
// });
