const fs = require("fs");
const { algo } = require("./index.js");

const inputDemo = fs.readFileSync(__dirname + "/input-demo-1.txt").toString();
const inputChallenge = fs.readFileSync(__dirname + "/input.txt").toString();

test("algo", () => {
  expect(algo(inputDemo)).toBe(11);
  console.log('Result: ', algo(inputChallenge));
});

