const fs = require("fs");
const { algo, isInvalidId, isInvalidIdPart2 } = require("./index.js");

const inputDemo1 = fs.readFileSync(__dirname + "/input-demo-1.txt").toString();
const input = fs.readFileSync(__dirname + "/input.txt").toString();

test("algo", () => {
  expect(algo(inputDemo1, isInvalidId)).toBe(1227775554);
  expect(algo(input, isInvalidId)).toBe(29940924880);
  expect(algo(inputDemo1, isInvalidIdPart2)).toBe(4174379265);
  console.log(algo(input, isInvalidIdPart2));
});
