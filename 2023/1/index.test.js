const fs = require("fs");
const { algo, algo2 } = require("./index.js");

const inputDemo = fs.readFileSync(__dirname + "/input-demo").toString();
const inputDemo2 = fs.readFileSync(__dirname + "/input-demo-2").toString();
const challengeInput = fs.readFileSync(__dirname + "/input").toString();

test("algo", () => {
  expect(algo(inputDemo)).toBe(142);
  expect(algo2(inputDemo2)).toBe(281);
  console.log('1', algo(challengeInput));
  console.log('2', algo2(challengeInput));
});
