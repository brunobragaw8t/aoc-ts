const fs = require("fs");
const { algo, algo2 } = require("./index.js");

const inputDemo1 = fs.readFileSync(__dirname + "/input-demo-1.txt").toString();
const input = fs.readFileSync(__dirname + "/input.txt").toString();

test("algo", () => {
  expect(algo(inputDemo1)).toBe(357);
  expect(algo(input)).toBe(17193);
  expect(algo2(inputDemo1)).toBe(3121910778619);
  expect(algo2(input)).toBe(171297349921310);
});
