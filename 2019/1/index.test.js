const fs = require("fs");
const { algo } = require("./index.js");

const challengeInput = fs.readFileSync(__dirname + "/input.txt").toString();

test("algo", () => {
  expect(algo("12")).toBe(2);
  expect(algo("14")).toBe(2);
  expect(algo("1969")).toBe(654);
  expect(algo("100756")).toBe(33583);

  console.log(algo(challengeInput));
});

test("algo part 2", () => {
  expect(algo("12", 2)).toBe(2);
  expect(algo("14", 2)).toBe(2);
  expect(algo("1969", 2)).toBe(966);
  expect(algo("100756", 2)).toBe(50346);

  console.log(algo(challengeInput, 2, true));
});
