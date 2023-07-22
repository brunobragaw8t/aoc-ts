const fs = require("fs");
const { algo } = require("./index.js");

const inputExample1 = fs.readFileSync(__dirname + "/input-example-1.txt").toString();
const challengeInput = fs.readFileSync(__dirname + "/input.txt").toString();

test("algo", () => {
  expect(algo(inputExample1)).toBe(514579);
  console.log(algo(challengeInput));
});

test("algo part 2", () => {
  expect(algo(inputExample1, 2)).toBe(241861950);
  console.log(algo(challengeInput, 2));
});
