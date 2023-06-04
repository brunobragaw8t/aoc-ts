const fs = require("fs");
const { algo } = require("./index.js");

const input1 = fs.readFileSync(__dirname + "/input-1.txt").toString();
const input2 = fs.readFileSync(__dirname + "/input-2.txt").toString();
const input3 = fs.readFileSync(__dirname + "/input-3.txt").toString();
const input4 = fs.readFileSync(__dirname + "/input-4.txt").toString();
const challengeInput = fs.readFileSync(__dirname + "/input.txt").toString();

test("algo", () => {
  expect(algo(input1)).toBe(3);
  expect(algo(input2)).toBe(3);
  expect(algo(input3)).toBe(0);
  expect(algo(input4)).toBe(-6);

  console.log(algo(challengeInput));
});
