const fs = require("fs");
const { algo, algo2 } = require("./index.js");

const inputDemo1 = fs.readFileSync(__dirname + "/input-demo-1.txt").toString();
const input = fs.readFileSync(__dirname + "/input.txt").toString();

test("algo", () => {
  expect(algo(inputDemo1)).toBe(3);
  expect(algo(input)).toBe(1029);
  expect(algo2(inputDemo1)).toBe(6);
  console.log(algo2(input));
});
