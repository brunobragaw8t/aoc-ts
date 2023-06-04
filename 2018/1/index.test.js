const fs = require("fs");
const { algo } = require("./index.js");

const input1 = fs.readFileSync(__dirname + "/input-1.txt").toString();
const input2 = fs.readFileSync(__dirname + "/input-2.txt").toString();
const input3 = fs.readFileSync(__dirname + "/input-3.txt").toString();
const input4 = fs.readFileSync(__dirname + "/input-4.txt").toString();

const input21 = fs.readFileSync(__dirname + "/input-2-1.txt").toString();
const input22 = fs.readFileSync(__dirname + "/input-2-2.txt").toString();
const input23 = fs.readFileSync(__dirname + "/input-2-3.txt").toString();
const input24 = fs.readFileSync(__dirname + "/input-2-4.txt").toString();

const challengeInput = fs.readFileSync(__dirname + "/input.txt").toString();

test("algo", () => {
  expect(algo(input1)).toBe(3);
  expect(algo(input2)).toBe(3);
  expect(algo(input3)).toBe(0);
  expect(algo(input4)).toBe(-6);

  console.log(algo(challengeInput));
});

test("algo part 2", () => {
  expect(algo(input21, 2)).toBe(0);
  expect(algo(input22, 2)).toBe(10);
  expect(algo(input23, 2)).toBe(5);
  expect(algo(input24, 2)).toBe(14);

  console.log(algo(challengeInput, 2));
});
