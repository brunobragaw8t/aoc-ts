type Coordinate = {
  x: number;
  y: number;
};

function getMap(input: string) {
  return input
    .trim()
    .split("\n")
    .map((row) => row.split(""));
}

function isPaperRoll(map: string[][], coord: Coordinate): boolean {
  return (
    coord.y >= 0 &&
    coord.y < map.length &&
    coord.x >= 0 &&
    coord.x < map[0].length &&
    map[coord.y][coord.x] === "@"
  );
}

export function algo(input: string): number {
  const map = getMap(input);

  let sum = 0;

  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      if (!isPaperRoll(map, { x, y })) continue;

      const coordsToCheck = [
        { x: x, y: y - 1 },
        { x: x + 1, y: y - 1 },
        { x: x + 1, y: y },
        { x: x + 1, y: y + 1 },
        { x: x, y: y + 1 },
        { x: x - 1, y: y + 1 },
        { x: x - 1, y: y },
        { x: x - 1, y: y - 1 },
      ];

      let adjacentPaperRolls = 0;

      for (const coord of coordsToCheck) {
        if (isPaperRoll(map, coord)) {
          adjacentPaperRolls++;
        }
      }

      if (adjacentPaperRolls < 4) {
        sum++;
      }
    }
  }

  return sum;
}
