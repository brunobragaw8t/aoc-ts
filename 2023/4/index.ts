import { match } from "assert";

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

export function algo2(input: string): number {
  const cards = input.split('\n');

  const cardsCopies: Record<string, number> = {};

  for (let i = 1; i <= cards.length; i++) {
    cardsCopies[i] = 1;
  }

  for (let i = 1; i <= cards.length; i++) {
    let matchingNumbers = 0;

    const [winningNumbers, numbersGot] = cards[i - 1]
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
        matchingNumbers++;
      }
    }

    for (let j = 0; j < cardsCopies[i]; j++) {
      for (let k = 1; k <= matchingNumbers; k++) {
        cardsCopies[i + k]++;
      }
    }
  }

  return Object.entries(cardsCopies).reduce((acc, [_, v]) => acc += v, 0);
}
