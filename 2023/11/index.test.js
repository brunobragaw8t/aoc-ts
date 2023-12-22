const fs = require("fs");
const { algo } = require("./index.js");
const { getExpandedUniverse } = require("./helpers/get-expanded-universe.js");

const inputDemo1 = fs
  .readFileSync(__dirname + "/input-demo-1")
  .toString()
  .trim();

const inputDemo1ExpansionTest = fs
  .readFileSync(__dirname + "/input-demo-1-expansion-test")
  .toString()
  .trim();

const input = fs
  .readFileSync(__dirname + "/input")
  .toString()
  .trim();

test("input demo 1 to be expanded correctly", () => {
  const rows = inputDemo1.split('\n');
  const expandedRows = inputDemo1ExpansionTest.split('\n');
  expect(getExpandedUniverse(rows)).toStrictEqual(expandedRows);
});

test("algo", () => {
  expect(algo(inputDemo1)).toBe(374);
  console.log('part 1', algo(input));
});
