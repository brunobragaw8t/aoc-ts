const fs = require("fs");
const { algo, algo2 } = require("./index.js");

const inputDemo1 = fs.readFileSync(__dirname + "/input-demo-1.txt").toString();
const inputDemo2 = fs.readFileSync(__dirname + "/input-demo-2.txt").toString();
const inputDemo3 = fs.readFileSync(__dirname + "/input-demo-3.txt").toString();
const inputDemo4 = fs.readFileSync(__dirname + "/input-demo-4.txt").toString();
const inputDemo5 = fs.readFileSync(__dirname + "/input-demo-5.txt").toString();
const inputChallenge = fs.readFileSync(__dirname + "/input.txt").toString();

test("algo", () => {
  expect(algo(inputDemo1)).toBe(140);
  expect(algo(inputDemo2)).toBe(772);
  expect(algo(inputDemo3)).toBe(1930);
  expect(algo(inputChallenge)).toBe(1483212);
});

test("algo2", () => {
  expect(algo2(inputDemo1)).toBe(80);
  expect(algo2(inputDemo2)).toBe(436);
  expect(algo2(inputDemo3)).toBe(1206);
  expect(algo2(inputDemo4)).toBe(236);
  expect(algo2(inputDemo5)).toBe(368);
  console.log('Result 2: ', algo2(inputChallenge));
});
