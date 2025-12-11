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

function getCombinations(value: string, bank: string): string[] {
  if (bank.length === 0 && value.length !== 12) return [];

  if (value.length === 12) return [`${value}`];

  const combinations = [];
  let currMaxValue = 0;

  for (let i = 0; i < bank.length; i++) {
    if (Number(bank[i]) <= currMaxValue) continue;
    currMaxValue = Number(bank[i]);

    combinations.push(
      Math.max(
        ...getCombinations(`${value}${bank[i]}`, bank.slice(i + 1)).map(Number),
      ).toString(),
    );
  }

  return combinations;
}

export function algo2(input: string): number {
  const banks = input.trim().split("\n");

  let sum = 0;
  let i = 0;

  for (const bank of banks) {
    const combinations = getCombinations("", bank);

    const max = Math.max(...combinations.map(Number));

    sum += max;

    console.log("i", i);
    console.log("max", max);
    console.log("sum", sum);

    i++;
  }

  return sum;
}
