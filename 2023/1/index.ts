/**
 * Part 1
 */

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

function findFirst(str: string): string {
  const chars = str.split('');

  for (let i = 0; i < chars.length; i++) {
    if (numbers.includes(chars[i])) {
      return chars[i];
    }
  }

  return "0";
}

function findLast(str: string): string {
  const chars = str.split('');

  for (let i = chars.length - 1; i >= 0; i--) {
    if (numbers.includes(chars[i])) {
      return chars[i];
    }
  }

  return "0";
}

export function algo(input: string): number {
  const rows = input.split('\n');
  rows.pop();

  return rows.reduce((acc, row) => {
    const first = findFirst(row);
    const last = findLast(row);

    const rowNumber = first + '' + last;

    return acc + Number(rowNumber);
  }, 0);
}

/**
 * Part 2
 */

const numbers2 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "zero"];

function mapToNumber(str: string): string {
  switch (str) {
    case "one":
      return "1";

    case "two":
      return "2";

    case "three":
      return "3";

    case "four":
      return "4";

    case "five":
      return "5";

    case "six":
      return "6";

    case "seven":
      return "7";

    case "eight":
      return "8";

    case "nine":
      return "9";

    case "zero":
      return "0";

    default:
      return str;
  }
}

function findFirst2(str: string): string {
  const results = numbers2.map((nr) => {
    return {
      index: str.indexOf(nr),
      number: nr,
    };
  });

  const min = Math.min(
    ...results
    .filter((i) => i.index !== -1)
    .map((i) => i.index)
  );

  const nr = results.find((i) => Number(i.index) === min);

  if ('undefined' === typeof nr) {
    return "0";
  }

  return mapToNumber(String(nr.number));
}

function findLast2(str: string): string {
  const results = numbers2.map((nr) => {
    return {
      index: str.lastIndexOf(nr),
      number: nr,
    };
  });

  const max = Math.max(
    ...results
    .filter((i) => i.index !== -1)
    .map((i) => i.index)
  );

  const nr = results.find((i) => Number(i.index) === max);

  if ('undefined' === typeof nr) {
    return "0";
  }

  return mapToNumber(String(nr.number));
}

export function algo2(input: string): number {
  const rows = input.split('\n');
  rows.pop();

  return rows.reduce((acc, row) => {
    const first = findFirst2(row);
    const last = findLast2(row);

    const rowNumber = first + '' + last;

    return acc + Number(rowNumber);
  }, 0);
}
