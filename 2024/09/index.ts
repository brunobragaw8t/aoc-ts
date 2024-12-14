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

/**
 * Part 2
 */

export function getBlocks2(input: string) {
  const chars = input.split('').map((c) => Number(c));
  const blocks = [];
  let id = 0;

  for (let i = 0; i < chars.length; i++) {
    const size = chars[i];

    if (size === 0) continue;

    if (i % 2 === 0) {
      blocks.push({ id, size });
      id++;
    } else {
      blocks.push({ id: -1, size });
    }
  }

  return blocks;
}

export function compactBlocks2(input: { id: number, size: number }[]) {
  const it = [...input].filter((i) => i.id !== -1).reverse();
  const res = [...input];

  for (let i = 0; i < it.length; i++) {
    if (it[i].id === -1) {
      continue;
    }

    for (let j = 0; j < res.length; j++) {
      if (res[j].id === it[i].id) {
        break;
      }

      if (res[j].id !== -1 || res[j].size < it[i].size) {
        continue;
      }

      const diff = res[j].size - it[i].size;

      const tmp = { ...it[i] };

      const index = res.findIndex((item) => item.id === it[i].id);
      res[index].id = -1;

      if (diff === 0) {
        res[j] = tmp;
      } else {
        res.splice(j, 1, tmp);
        res.splice(j + 1, 0, { id: -1, size: diff });
      }

      break;
    }
  }

  return res.reduce<number[]>((acc, cur) => {
    const id = cur.id === -1 ? 0 : cur.id;
    acc.push(...new Array(cur.size).fill(id));
    return acc;
  }, []);
}

export function algo2(input: string): number {
  const blocks = getBlocks2(input);
  const compacted = compactBlocks2(blocks);

  let sum = 0;

  for (let i = 0; i < compacted.length; i++) {
    sum += i * compacted[i];
  }

  return sum;
}
