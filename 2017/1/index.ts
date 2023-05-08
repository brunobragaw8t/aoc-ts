export function algo(input: string) {
  const digits: number[] = input.split('').map((i) => Number(i));

  let sum = 0;

  for (let i = 0; i < digits.length - 1; i++) {
    if (digits[i] === digits[i + 1]) {
      sum += digits[i];
    }
  }

  if (digits[0] === digits[digits.length - 1]) {
    sum += digits[digits.length - 1];
  }

  return sum;
}

