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

export function algo(input: string): number {
  const map = input
    .split('\n')
    .slice(0, -1)
    .map((r) => r.split(''));

  const scannedCoordinates: string[] = [];

  const areas: Coordinate[][] = []

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
