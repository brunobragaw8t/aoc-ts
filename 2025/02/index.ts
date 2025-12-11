function isInvalidId(id: number): boolean {
  const string = id.toString();
  const length = string.length;
  const first = string.slice(0, length / 2);
  const last = string.slice(length / 2);
  return first === last;
}

export function algo(input: string): number {
  const ranges = input.trim().split(",");

  let sum = 0;

  for (const range of ranges) {
    const [start, end] = range.split("-").map(Number);

    for (let id = start; id <= end; id++) {
      if (isInvalidId(id)) {
        sum += id;
      }
    }
  }

  return sum;
}
