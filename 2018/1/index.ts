export function algo(input: string, part: 1 | 2 = 1) {
  const changes: number[] = input.split(/\r?\n/).map((i) => Number(i));

  // Handle extra 0 at the handle
  changes.pop();

  if (1 === part) {
    return changes.reduce((carry, item) => carry += item, 0);
  }

  let current = 0;
  const frequencies = [0];

  for (let i = 0; i < changes.length; i++) {
    current += changes[i];
    
    if (frequencies.includes(current)) {
      return current;
    }

    frequencies.push(current);

    if (i === changes.length - 1) {
      i = -1;
    }
  }
}
