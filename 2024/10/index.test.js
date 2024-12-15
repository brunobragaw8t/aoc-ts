const fs = require("fs");
const { algo, getMap, getHeads } = require("./index.js");

const inputDemo1 = fs.readFileSync(__dirname + "/input-demo-1.txt").toString();
const inputDemo2 = fs.readFileSync(__dirname + "/input-demo-2.txt").toString();
const inputDemo3 = fs.readFileSync(__dirname + "/input-demo-3.txt").toString();
const inputDemo4 = fs.readFileSync(__dirname + "/input-demo-4.txt").toString();
const inputDemo5 = fs.readFileSync(__dirname + "/input-demo-5.txt").toString();
const inputChallenge = fs.readFileSync(__dirname + "/input.txt").toString();

test("getHeads", () => {
  expect(getHeads(getMap(inputDemo1))).toEqual([{ x: 0, y: 0 }]);
  expect(getHeads(getMap(inputDemo2))).toEqual([{ x: 3, y: 0 }]);
  expect(getHeads(getMap(inputDemo3))).toEqual([{ x: 3, y: 0 }]);
  expect(getHeads(getMap(inputDemo4))).toEqual([{ x: 1, y: 0 }, { x: 5, y: 6 }]);
});

test("algo", () => {
  expect(algo(inputDemo1)).toBe(1);
  expect(algo(inputDemo2)).toBe(2);
  expect(algo(inputDemo3)).toBe(4);
  expect(algo(inputDemo4)).toBe(3);
  expect(algo(inputDemo5)).toBe(36);
  console.log('Result: ', algo(inputChallenge));
});
