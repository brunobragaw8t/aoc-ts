function getPossibleWays(speedPerMmHold: number, time: number, distance: number): number {
  let possibleWays = 0;

  for (let j = 1; j < time; j++) {
    const speed = speedPerMmHold * j;
    const remainingTime = time - j;
    const distanceCleared = remainingTime * speed;

    if (distanceCleared > distance) {
      possibleWays++;
    }
  }

  return possibleWays;
}

export function algo(input: string, part: 1 | 2 = 1): number {
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

  if (1 === part) {
    for (let i = 0; i < times.length; i++) {
      totalPossibleWays.push(
        getPossibleWays(speedPerMmHold, times[i], distances[i])
      );
    }
  } else {
    totalPossibleWays.push(
      getPossibleWays(
        speedPerMmHold, Number(times.join('')), Number(distances.join(''))
      )
    );
  }

  return totalPossibleWays.reduce((acc, i) => acc *= i, 1);
}
