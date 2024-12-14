export function getBlocks(input: string): (number | string)[] {
  const chars = input.split('').map((c) => Number(c));
  const blocks = [];
  let id = 0;

  for (let i = 0; i < chars.length; i++) {
    if (i % 2 === 0) {
      for (let j = 0; j < chars[i]; j++) {
        blocks.push(id);
      }

      id++;
    } else {
      for (let j = 0; j < chars[i]; j++) {
        blocks.push('.');
      }
    }
  }

  return blocks;
}

export function compactBlocks(input: (number | string)[]): number[] {
  const res = [...input];

  for (let i = res.length - 1; i >= 0; i--) {
    if (res[i] === '.') {
      continue;
    }

    for (let j = 0; j < res.length; j++) {
      if (res[j] !== '.') {
        continue;
      }

      res[j] = res[i];
      res[i] = '.'
      break;
    }
  }

  return res.filter((c) => typeof c === 'number');
}

export function algo(input: string): number {
  const blocks = getBlocks(input);
  console.log('Blocks:', blocks);
  const compacted = compactBlocks(blocks);
  console.log('Compacted:', compacted);

  let sum = 0;

  for (let i = 0; i < compacted.length; i++) {
    sum += i * compacted[i];
  }

  return sum;
}
