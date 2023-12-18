function getPrediction(historyItems: number[], part: 1 | 2 = 1): number {
  const diffs: number[] = [];

  for (let i = 0; i < historyItems.length - 1; i++) {
    diffs.push(historyItems[i + 1] - historyItems[i]);
  }

  if (diffs.every((i) => 0 === i)) {
    return 1 === part ? historyItems[historyItems.length - 1] : historyItems[0];
  }

  const prediction = getPrediction(diffs, part);

  return 1 === part
    ? historyItems[historyItems.length - 1] + prediction
    : historyItems[0] - prediction;
}

export function algo(input: string, part: 1 | 2 = 1): number {
  const valuesHistories = input.split('\n');

  const predictions: number[] = [];

  for (const valueHistory of valuesHistories) {
    const historyItems = valueHistory.split(' ').map((i) => Number(i));
    predictions.push(getPrediction(historyItems, part));
  }

  return predictions.reduce((acc, i) => acc += i, 0);
}
