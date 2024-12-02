function isIncreasing(input: number[]) {
  for (let i = 1; i < input.length; i++) {
    if (input[i] <= input[i - 1]) {
      return false;
    }
  }

  return true;
}

function isDecreasing(input: number[]) {
  for (let i = 1; i < input.length; i++) {
    if (input[i] >= input[i - 1]) {
      return false;
    }
  }

  return true;
}

export function algo(input: string): number {
  let safe = 0;

  rows: for (const row of input.split('\n').slice(0, -1)) {
    const levels = row.split(' ').map((l) => Number(l));

    if (isIncreasing(levels) || isDecreasing(levels)) {
      for (let i = 1; i < levels.length; i++) {
        const diff = Math.abs(levels[i] - levels[i - 1]);

        if (diff < 1 || diff > 3) {
          continue rows;
        }
      }

      safe++;
    }
  }

  return safe;
}
