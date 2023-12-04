export function algo(input: string): number {
  const cards = input.split('\n');

  let total = 0;

  for (const card of cards) {
    let cardPoints = 0;

    const [winningNumbers, numbersGot] = card
      .replace(/^Card\s+\d+: /, '')
      .split(' | ');

    const winningNumbersArr = winningNumbers
      .split(/\s+/)
      .filter((n) => '' !== n);

    const numbersGotArr = numbersGot
      .split(/\s+/)
      .filter((n) => '' !== n);

    for (const nr of numbersGotArr) {
      if (winningNumbersArr.includes(nr)) {
        if (0 === cardPoints) {
          cardPoints = 1;
        } else {
          cardPoints *= 2;
        }
      }
    }

    total += cardPoints;
  }

  return total;
}
