export function algo(input: string): number {
  const banks = input.trim().split("\n");

  let sum = 0;

  for (const bank of banks) {
    const combinations = [];

    for (let i = 0; i < bank.length - 1; i++) {
      for (let j = i + 1; j < bank.length; j++) {
        combinations.push(Number(`${bank[i]}${bank[j]}`));
      }
    }

    const max = Math.max(...combinations);

    sum += max;
  }

  return sum;
}

function getMax(value: number, valueLength: number, bank: string): number {
  if (bank.length === 0 && valueLength !== 12) return 0;

  if (valueLength === 12) return value;

  let currMaxDigit = 0;
  let currMaxValue = value;

  for (let i = 0; i < bank.length; i++) {
    let currDigit = Number(bank[i]);

    if (currDigit <= currMaxDigit) continue;
    currMaxDigit = currDigit;

    const max = getMax(
      value * 10 + currDigit,
      valueLength + 1,
      bank.slice(i + 1),
    );

    if (max > currMaxValue) currMaxValue = max;
  }

  return currMaxValue;
}

export function algo2(input: string): number {
  const banks = input.trim().split("\n");

  let sum = 0;
  let i = 0;

  for (const bank of banks) {
    const max = getMax(0, 0, bank);

    sum += max;

    console.log("i", i);
    console.log("max", max);
    console.log("sum", sum);

    i++;
  }

  return sum;
}
