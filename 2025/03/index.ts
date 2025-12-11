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
