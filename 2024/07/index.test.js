const fs = require("fs");
const { algo, algo2, getResults } = require("./index.js");

const inputDemo = fs.readFileSync(__dirname + "/input-demo-1.txt").toString();
const inputChallenge = fs.readFileSync(__dirname + "/input.txt").toString();

test("algo", () => {
  expect(getResults(19, ['+', '*'], [10])).toEqual([29, 190]);
  expect(getResults(20, ['+', '*'], [19, 10])).toEqual([49, 210, 580, 3800]);
  expect(algo(inputDemo)).toBe(3749);
  console.log('Result: ', algo(inputChallenge));
  // expect(algo2(inputDemo)).toBe();
  // console.log('Result 2: ', algo2(inputChallenge));
});
