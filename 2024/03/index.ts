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

export function algo2(input: string): number {
  const matches = input.match(/mul\(\d{1,3},\d{1,3}\)|do\(\)|don't\(\)/g);

  if (!matches) {
    return 0;
  }

  let sum = 0;
  let enabled = true;

  for (const match of matches) {
    if (match === 'do()') {
      enabled = true;
      continue;
    }

    if (match === "don't()") {
      enabled = false;
      continue;
    }

    if (!enabled) {
      continue;
    }

    const [left, right] = match
      .replace('mul(', '')
      .replace(')', '')
      .split(',');

    sum += Number(left) * Number(right);
  }

  return sum;
}
