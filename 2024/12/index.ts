type Coordinate = {
  typeOfPlant: string;
  x: number;
  y: number;
};

function getArea(coordinate: Coordinate, map: string[][], scannedCoordinates: string[]): Coordinate[] {
  const coordinateString = `${coordinate.x}|${coordinate.y}`;

  scannedCoordinates.push(coordinateString);

  const area: Coordinate[] = [];

  area.push({ typeOfPlant: coordinate.typeOfPlant, x: coordinate.x, y: coordinate.y });

  if (
    coordinate.y - 1 >= 0
    && coordinate.typeOfPlant === map[coordinate.y - 1][coordinate.x]
    && !scannedCoordinates.includes(`${coordinate.x}|${coordinate.y - 1}`)
  ) {
    // console.log(`Go up looking for ${coordinate.typeOfPlant}`);

    area.push(
      ...getArea({ typeOfPlant: coordinate.typeOfPlant, x: coordinate.x, y: coordinate.y - 1 }, map, scannedCoordinates)
    );
  }

  if (
    coordinate.x + 1 < map[coordinate.y].length
    && coordinate.typeOfPlant === map[coordinate.y][coordinate.x + 1]
    && !scannedCoordinates.includes(`${coordinate.x + 1}|${coordinate.y}`)
  ) {
    // console.log(`Go right looking for ${coordinate.typeOfPlant}`);

    area.push(
      ...getArea({ typeOfPlant: coordinate.typeOfPlant, x: coordinate.x + 1, y: coordinate.y }, map, scannedCoordinates)
    );
  }

  if (
    coordinate.y + 1 < map.length
    && coordinate.typeOfPlant === map[coordinate.y + 1][coordinate.x]
    && !scannedCoordinates.includes(`${coordinate.x}|${coordinate.y + 1}`)
  ) {
    // console.log(`Go down looking for ${coordinate.typeOfPlant}`);

    area.push(
      ...getArea({ typeOfPlant: coordinate.typeOfPlant, x: coordinate.x, y: coordinate.y + 1 }, map, scannedCoordinates)
    );
  }

  if (
    coordinate.x - 1 >= 0
    && coordinate.typeOfPlant === map[coordinate.y][coordinate.x - 1]
    && !scannedCoordinates.includes(`${coordinate.x - 1}|${coordinate.y}`)
  ) {
    // console.log(`Go left looking for ${coordinate.typeOfPlant}`);

    area.push(
      ...getArea({ typeOfPlant: coordinate.typeOfPlant, x: coordinate.x - 1, y: coordinate.y }, map, scannedCoordinates)
    );
  }

  return area;
}

function getAreas(map: string[][]): Coordinate[][] {
  const scannedCoordinates: string[] = [];

  const areas: Coordinate[][] = [];

  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      const coordinateString = `${x}|${y}`;

      if (scannedCoordinates.includes(coordinateString)) {
        continue;
      }

      scannedCoordinates.push(coordinateString);

      const typeOfPlant = map[y][x];

      areas.push(getArea({ typeOfPlant, x, y }, map, scannedCoordinates));
    }
  }

  return areas;
}

export function algo(input: string): number {
  const map = input
    .split('\n')
    .slice(0, -1)
    .map((r) => r.split(''));

  const areas = getAreas(map);

  // console.log('Areas:');
  // console.dir(areas, { colors: true, depth: Infinity });

  let price = 0;

  for (const area of areas) {
    let perimeter = 0;

    for (const coordinate of area) {
      if (
        coordinate.y - 1 < 0
        || coordinate.typeOfPlant !== map[coordinate.y - 1][coordinate.x]
      ) {
        perimeter++;
      }

      if (
        coordinate.x + 1 >= map[coordinate.y].length
        || coordinate.typeOfPlant !== map[coordinate.y][coordinate.x + 1]
      ) {
        perimeter++;
      }

      if (
        coordinate.y + 1 >= map.length
        || coordinate.typeOfPlant !== map[coordinate.y + 1][coordinate.x]
      ) {
        perimeter++;
      }

      if (
        coordinate.x - 1 < 0
        || coordinate.typeOfPlant !== map[coordinate.y][coordinate.x - 1]
      ) {
        perimeter++;
      }
    }

    price += area.length * perimeter;

    // console.log(`Perimeter of ${area[0].typeOfPlant} is ${perimeter}`);
  }

  return price;
}

/**
 * Part 2
 */

type Fence = {
  side: 'top' | 'right' | 'bottom' | 'left';
  x: number;
  y: number;
};

function getSides(map: string[][], fences: Fence[]): number {
  const scannedFences: string[] = [];
  let sides = 0;
  console.log('Fences:');
  console.dir(fences, { colors: true, depth: Infinity });

  for (const fence of fences) {
    const fenceCoordinateString = `${fence.side}|${fence.x}|${fence.y}`;

    if (scannedFences.includes(fenceCoordinateString)) {
      continue;
    }

    sides++;
    scannedFences.push(fenceCoordinateString);

    if (fence.side === 'top' || fence.side === 'bottom') {
      for (let x = fence.x + 1; x <= map[0].length; x++) {
        const isItAFence = fences.find((f) => {
          return (
            f.side === fence.side
            && f.x === x
            && f.y === fence.y
          );
        });

        if (typeof isItAFence === 'undefined') {
          break;
        }

        scannedFences.push(`${fence.side}|${x}|${fence.y}`);
      }

      for (let x = fence.x - 1; x >= -1; x--) {
        const isItAFence = fences.find((f) => {
          return (
            f.side === fence.side
            && f.x === x
            && f.y === fence.y
          );
        });

        if (typeof isItAFence === 'undefined') {
          break;
        }

        scannedFences.push(`${fence.side}|${x}|${fence.y}`);
      }
    }

    if (fence.side === 'right' || fence.side === 'left') {
      for (let y = fence.y + 1; y <= map.length; y++) {
        const isItAFence = fences.find((f) => {
          return (
            f.side === fence.side
            && f.x === fence.x
            && f.y === y
          );
        });

        if (typeof isItAFence === 'undefined') {
          break;
        }

        scannedFences.push(`${fence.side}|${fence.x}|${y}`);
      }

      for (let y = fence.y - 1; y >= -1; y--) {
        const isItAFence = fences.find((f) => {
          return (
            f.side === fence.side
            && f.x === fence.x
            && f.y === y
          );
        });

        if (typeof isItAFence === 'undefined') {
          break;
        }

        scannedFences.push(`${fence.side}|${fence.x}|${y}`);
      }
    }
  }

  return sides;
}

export function algo2(input: string): number {
  const map = input
    .split('\n')
    .slice(0, -1)
    .map((r) => r.split(''));

  const areas = getAreas(map);

  // console.log('Areas:');
  // console.dir(areas, { colors: true, depth: Infinity });

  let price = 0;

  for (const area of areas) {
    const fences: Fence[] = [];

    for (const coordinate of area) {
      if (
        coordinate.y - 1 < 0
        || coordinate.typeOfPlant !== map[coordinate.y - 1][coordinate.x]
      ) {
        fences.push({ side: 'top', x: coordinate.x, y: coordinate.y - 1 });
      }

      if (
        coordinate.x + 1 >= map[coordinate.y].length
        || coordinate.typeOfPlant !== map[coordinate.y][coordinate.x + 1]
      ) {
        fences.push({ side: 'right', x: coordinate.x + 1, y: coordinate.y });
      }

      if (
        coordinate.y + 1 >= map.length
        || coordinate.typeOfPlant !== map[coordinate.y + 1][coordinate.x]
      ) {
        fences.push({ side: 'bottom', x: coordinate.x, y: coordinate.y + 1 });
      }

      if (
        coordinate.x - 1 < 0
        || coordinate.typeOfPlant !== map[coordinate.y][coordinate.x - 1]
      ) {
        fences.push({ side: 'left', x: coordinate.x - 1, y: coordinate.y });
      }
    }

    const sides = getSides(map, fences);

    price += area.length * sides;

    console.log(`Area of ${area[0].typeOfPlant} has ${sides} sides`);
  }

  return price;
}
