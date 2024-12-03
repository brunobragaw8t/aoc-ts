export function algo(input: string): number {
  const matches = input.match(/mul\(\d{1,3},\d{1,3}\)/g);

  if (!matches) {
    return 0;
  }

  let sum = 0;

  for (const match of matches) {
    const [left, right] = match
      .replace('mul(', '')
      .replace(')', '')
      .split(',');

    sum += Number(left) * Number(right);
  }

  return sum;
}
