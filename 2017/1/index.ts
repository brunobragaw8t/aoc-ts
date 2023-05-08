export function algo(input: string, part: 1 | 2 = 1) {
  const digits: number[] = input.split('').map((i) => Number(i));

  let sum = 0;

  for (let i = 0; i < digits.length; i++) {
    let jump = 1 === part ? i + 1 : i + digits.length / 2;

    if (jump >= digits.length) {
      jump -= digits.length;
    }

    if (digits[i] === digits[jump]) {
      sum += digits[i];
    }
  }

  return sum;
}
