const fs = require("fs");
const { algo, algo2 } = require("./index.js");

const inputDemo = fs.readFileSync(__dirname + "/input-demo-1.txt").toString();
const inputDemo2 = fs.readFileSync(__dirname + "/input-demo-2.txt").toString();
const inputChallenge = fs.readFileSync(__dirname + "/input.txt").toString();

test("algo", () => {
  // algo2(inputDemo2);
  // expect(algo(inputDemo)).toBe(41);
  // console.log('Result: ', algo(inputChallenge));
  expect(algo2(inputDemo)).toBe(6);
  console.log('Result 2: ', algo2(inputChallenge));
});
