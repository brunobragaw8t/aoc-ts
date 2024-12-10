function addAntinode(antinodes: string[], xLimit: number, yLimit: number, x: number, y: number) {
  // Prevent out of bounds
  if (x < 0 || x >= xLimit || y >= yLimit || y < 0) {
    return;
  }

  const antinode = `${x}|${y}`;

  if (!antinodes.includes(antinode)) {
    antinodes.push(antinode);
  }
}

export function algo(input: string): number {
  const map = input
    .split('\n')
    .slice(0, -1)
    .map((r) => r.split(''));

  const yLimit = map.length;
  const xLimit = map[0].length;

  const antennas: { frequency: string, x: number, y: number }[] = [];
  const antinodes: string[] = [];

  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      if (map[y][x] !== '.') {
        antennas.push({ frequency: map[y][x], x, y });
      }
    }
  }

  for (const antenna of antennas) {
    const sameFrequencyAntennas = antennas.filter((a) => {
      return (
        a.frequency === antenna.frequency
        && a.x !== antenna.x
        && a.y !== antenna.y
      );
    });

    for (const sameFrequencyAntenna of sameFrequencyAntennas) {
      const xDiff = Math.abs(antenna.x - sameFrequencyAntenna.x);
      const yDiff = Math.abs(antenna.y - sameFrequencyAntenna.y);

      if (
        antenna.x >= sameFrequencyAntenna.x
        && antenna.y >= sameFrequencyAntenna.y
      ) {
        addAntinode(antinodes, xLimit, yLimit, antenna.x + xDiff, antenna.y + yDiff);
        addAntinode(antinodes, xLimit, yLimit, sameFrequencyAntenna.x - xDiff, sameFrequencyAntenna.y - yDiff);
        continue;
      }

      if (
        antenna.x >= sameFrequencyAntenna.x
        && antenna.y <= sameFrequencyAntenna.y
      ) {
        addAntinode(antinodes, xLimit, yLimit, antenna.x + xDiff, antenna.y - yDiff);
        addAntinode(antinodes, xLimit, yLimit, sameFrequencyAntenna.x - xDiff, sameFrequencyAntenna.y + yDiff);
        continue;
      }

      if (
        antenna.x <= sameFrequencyAntenna.x
        && antenna.y <= sameFrequencyAntenna.y
      ) {
        addAntinode(antinodes, xLimit, yLimit, antenna.x - xDiff, antenna.y - yDiff);
        addAntinode(antinodes, xLimit, yLimit, sameFrequencyAntenna.x + xDiff, sameFrequencyAntenna.y + yDiff);
        continue;
      }

      if (
        antenna.x <= sameFrequencyAntenna.x
        && antenna.y >= sameFrequencyAntenna.y
      ) {
        addAntinode(antinodes, xLimit, yLimit, antenna.x - xDiff, antenna.y + yDiff);
        addAntinode(antinodes, xLimit, yLimit, sameFrequencyAntenna.x + xDiff, sameFrequencyAntenna.y - yDiff);
        continue;
      }
    }
  }

  return antinodes.length;
}
