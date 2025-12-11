export function isInvalidId(id: number): boolean {
  const string = id.toString();
  const length = string.length;
  const first = string.slice(0, length / 2);
  const last = string.slice(length / 2);
  return first === last;
}

export function isInvalidIdPart2(id: number): boolean {
  const string = id.toString();

  for (let i = 1; i <= string.length / 2; i++) {
    const firstValue = string.slice(0, i);

    const values = [];

    for (let j = i; j < string.length; j += i) {
      values.push(string.slice(j, j + i));
    }

    if (values.every((value) => value === firstValue)) {
      return true;
    }
  }

  return false;
}

export function algo(
  input: string,
  isInvalidId: (id: number) => boolean,
): number {
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
