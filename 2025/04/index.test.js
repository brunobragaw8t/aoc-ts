const fs = require("fs");
const { algo, algo2 } = require("./index.js");

const inputDemo1 = fs.readFileSync(__dirname + "/input-demo-1.txt").toString();
const input = fs.readFileSync(__dirname + "/input.txt").toString();

test("algo", () => {
  expect(algo(inputDemo1)).toBe(13);
  expect(algo(input)).toBe(1389);
  expect(algo2(inputDemo1)).toBe(43);
  console.log(algo2(input));
});
