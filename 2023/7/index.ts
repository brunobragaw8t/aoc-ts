type HandType = 'five' | 'four' | 'full' | 'three' | '2pair' | 'pair' | 'high';

export function getHandType(hand: string, part: 1 | 2): HandType {
  const labels: Record<string, number> = {};

  for (let i = 0; i < hand.length; i++) {
    if ('undefined' === typeof labels[hand[i]]) {
      labels[hand[i]] = 1;
      continue;
    }

    labels[hand[i]]++;
  }

  let labelsArr = Object.entries(labels)
    .reduce((acc, [k, v]) => {
      acc.push({ label: k, count: v });
      return acc;
    }, [] as { label: string, count: number }[])
    .sort((a, b) => a.count < b.count ? 1 : -1);

  if (2 === part && 'undefined' !== typeof labels['J']) {
    if ('J' !== labelsArr[0].label) {
      labelsArr[0].count += labels['J'];
      labelsArr = labelsArr.filter((i) => 'J' !== i.label);
    } else if (5 !== labelsArr[0].count) {
      labelsArr[1].count += labels['J'];
      labelsArr = labelsArr.filter((i) => 'J' !== i.label);
    }
  }

  if (5 === labelsArr[0].count) {
    return 'five';
  }

  if (4 === labelsArr[0].count) {
    return 'four';
  }

  if (3 === labelsArr[0].count && 2 === labelsArr[1].count) {
    return 'full';
  }

  if (3 === labelsArr[0].count) {
    return 'three';
  }

  if (2 === labelsArr[0].count && 2 === labelsArr[1].count) {
    return '2pair';
  }

  if (2 === labelsArr[0].count) {
    return 'pair';
  }

  return 'high';
}

const handTypeStrengths: Record<HandType, number> = {
  'five': 7,
  'four': 6,
  'full': 5,
  'three': 4,
  '2pair': 3,
  'pair': 2,
  'high': 1,
};

const labelsStrengths = {
  'A': 13,
  'K': 12,
  'Q': 11,
  'J': 10,
  'T': 9,
  '9': 8,
  '8': 7,
  '7': 6,
  '6': 5,
  '5': 4,
  '4': 3,
  '3': 2,
  '2': 1,
};

const labelsStrengths2 = {
  'A': 13,
  'K': 12,
  'Q': 11,
  'T': 10,
  '9': 9,
  '8': 8,
  '7': 7,
  '6': 6,
  '5': 5,
  '4': 4,
  '3': 3,
  '2': 2,
  'J': 1,
};

export function algo(input: string, part: 1 | 2 = 1): number {
  const lines = input.split('\n');

  const localLabelsStrengths = 1 === part ? labelsStrengths : labelsStrengths2;

  const sortedHands: { hand: string, handType: HandType, bid: number }[] = [];

  for (let i = 0; i < lines.length; i++) {
    const splitLine = lines[i].split(' ');

    const hand = splitLine[0];
    const handType = getHandType(hand, part);
    const bid = Number(splitLine[1]);

    if (0 === sortedHands.length) {
      sortedHands.push({
        hand: hand,
        handType: getHandType(hand, part),
        bid: bid,
      });
      continue;
    }

    handsComparison: for (let j = 0; j < sortedHands.length; j++) {
      const handTypeStrength = handTypeStrengths[sortedHands[j].handType];
      const newHandTypeStrength = handTypeStrengths[handType];

      if (newHandTypeStrength < handTypeStrength) {
        sortedHands.splice(j, 0, { hand, handType, bid });
        break;
      }

      if (newHandTypeStrength === handTypeStrength) {
        for (let k = 0; k < hand.length; k++) {
          const label = sortedHands[j].hand[k] as keyof typeof localLabelsStrengths;
          const newLabel = hand[k] as keyof typeof localLabelsStrengths;

          const labelStrength = localLabelsStrengths[label];
          const newLabelStrength = localLabelsStrengths[newLabel];

          if (newLabelStrength < labelStrength) {
            sortedHands.splice(j, 0, { hand, handType, bid });
            break handsComparison;
          }

          if (newLabelStrength === labelStrength) {
            continue;
          }

          if (j === sortedHands.length - 1) {
            sortedHands.push({ hand, handType, bid });
            break;
          }

          if (newLabelStrength > labelStrength) {
            continue handsComparison;
          }
        }

        break;
      }

      if (j === sortedHands.length - 1) {
        sortedHands.push({ hand, handType, bid });
        break;
      }
    }
  }

  let totalWinnings = 0;

  for (let i = 0; i < sortedHands.length; i++) {
    totalWinnings += sortedHands[i].bid * (i + 1);
  }

  return totalWinnings;
}
