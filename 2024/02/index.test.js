const fs = require("fs");
const { algo, algo2 } = require("./index.js");

const inputDemo = fs.readFileSync(__dirname + "/input-demo-1.txt").toString();
const inputChallenge = fs.readFileSync(__dirname + "/input.txt").toString();

test("algo", () => {
  expect(algo(inputDemo)).toBe(2);
  expect(algo2(inputDemo)).toBe(4);
  console.log('Result: ', algo(inputChallenge));
  console.log('Result 2: ', algo2(inputChallenge));
});
