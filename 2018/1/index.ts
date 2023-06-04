export function algo(input: string) {
  const changes: number[] = input.split(/\r?\n/).map((i) => Number(i));

  return changes.reduce((carry, item) => carry += item, 0);
}
