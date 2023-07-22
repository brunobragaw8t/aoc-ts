export function algo(input: string): number {
  const entries = input.split('\n').map((e) => Number(e));

  // Handle empty item from last line
  entries.pop();

  for (let i = 0; i < entries.length; i++) {
    for (let j = 0; j < entries.length; j++) {
      if (entries[i] + entries[j] === 2020) {
        return entries[i] * entries[j];
      }
    }
  }

  return 1;
}
