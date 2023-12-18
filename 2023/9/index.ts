function getPrediction(historyItems: number[]): number {
  const diffs: number[] = [];

  for (let i = 0; i < historyItems.length - 1; i++) {
    diffs.push(historyItems[i + 1] - historyItems[i]);
  }

  if (diffs.every((i) => 0 === i)) {
    return historyItems[historyItems.length - 1];
  }

  const prediction = getPrediction(diffs);

  return historyItems[historyItems.length - 1] + prediction;
}

export function algo(input: string): number {
  const valuesHistories = input.split('\n');

  const predictions: number[] = [];

  for (const valueHistory of valuesHistories) {
    const historyItems = valueHistory.split(' ').map((i) => Number(i));
    predictions.push(getPrediction(historyItems));
  }

  return predictions.reduce((acc, i) => acc += i, 0);
}
