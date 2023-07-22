export function algo(input: string, part: 1 | 2 = 1): number {
  const entries = input.split('\n').map((e) => Number(e));

  // Handle empty item from last line
  entries.pop();

  if (1 === part) {
    for (let i = 0; i < entries.length; i++) {
      for (let j = 0; j < entries.length; j++) {
        if (entries[i] + entries[j] === 2020) {
          return entries[i] * entries[j];
        }
      }
    }
  }

  for (let i = 0; i < entries.length; i++) {
    for (let j = 0; j < entries.length; j++) {
      for (let k = 0; k < entries.length; k++) {
        if (entries[i] + entries[j] + entries[k] === 2020) {
          return entries[i] * entries[j] * entries[k];
        }
      }
    }
  }

  return 1;
}
