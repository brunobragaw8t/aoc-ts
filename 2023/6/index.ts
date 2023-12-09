export function algo(input: string): number {
  const speedPerMmHold = 1;

  const [timesStr, distancesStr] = input.split('\n');

  const times = timesStr
    .replace(/Time:\s+/, '')
    .split(/\s+/)
    .map((i) => Number(i));

  const distances = distancesStr
    .replace(/Distance:\s+/, '')
    .split(/\s+/)
    .map((i) => Number(i));

  let totalPossibleWays: number[] = [];

  for (let i = 0; i < times.length; i++) {
    let possibleWays = 0;

    for (let j = 1; j < times[i]; j++) {
      const speed = speedPerMmHold * j;
      const remainingTime = times[i] - j;
      const distanceCleared = remainingTime * speed;

      if (distanceCleared > distances[i]) {
        possibleWays++;
      }
    }

    totalPossibleWays.push(possibleWays);
  }

  return totalPossibleWays.reduce((acc, i) => acc *= i, 1);
}
