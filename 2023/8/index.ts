/**
 * Common
 */

function getMapData(map: string) {
  const matches = map.match(/([A-Z0-9]{3})\s=\s\(([A-Z0-9]{3})\,\s([A-Z0-9]{3})\)/);

  if (matches) {
    return [matches[0], matches[1], matches[2], matches[3]];
  }

  return ['', '', ''];
}

function getLocationPosition(maps: string[], targetLocation: string): number {
  for (let i = 0; i < maps.length; i++) {
    const [, location] = getMapData(maps[i]);

    if (location === targetLocation) {
      return i;
    }
  }

  return -1;
}

/**
 * Part 1
 */

export function algo(input: string): number {
  const [stepsStr, mapsStr] = input.split('\n\n');

  const steps = stepsStr.split('');
  const maps = mapsStr.split('\n');

  let position = getLocationPosition(maps, 'AAA');
  let step = 0;
  let nrOfSteps = 0;
  let currentLocation = '';

  while ('ZZZ' !== currentLocation) {
    nrOfSteps++;

    const [, location, left, right] = getMapData(maps[position]);

    if ('L' === steps[step]) {
      currentLocation = left;
    } else {
      currentLocation = right;
    }

    position = getLocationPosition(maps, currentLocation);

    step++;

    if (step === steps.length) {
      step = 0;
    }
  }

  return nrOfSteps;
}

/**
 * Part 2
 */

type MapData = {
  location: string;
  left: string;
  right: string;
}

function getStartingNodes(maps: string[]): number[] {
  const positions: number[] = [];

  for (let i = 0; i < maps.length; i++) {
    const [, location] = getMapData(maps[i]);

    if ('A' === location.split('')[2]) {
      positions.push(i);
    }
  }

  return positions;
}

function countZs(locations: string[]): void {
  let count = 0;

  for (const location of locations) {
    if ('Z' === location.split('')[2]) {
      count++;
    }
  }

  if (count) {
    console.log(count);
  }
}

export function algo2(input: string): number {
  const [stepsStr, mapsStr] = input.split('\n\n');

  const steps = stepsStr.split('');
  const maps = mapsStr.split('\n');

  const mapsDatas: Record<string, MapData> = {};
  const locationsPositions: Record<string, number> = {};

  let positions = getStartingNodes(maps);
  let step = 0;
  let nrOfSteps = 0;
  let currentLocations: string[] = [];

  for (let i = 0; i < positions.length; i++) {
    const [, location] = getMapData(maps[positions[i]]);
    currentLocations.push(location);
  }

  console.log(positions);
  console.log(currentLocations);

  const scenarios: string[] = [];

  while (!currentLocations.every((i) => 'Z' === i.split('')[2])) {
    nrOfSteps++;

    currentLocations = [];

    for (let i = 0; i < positions.length; i++) {
      let location: string;
      let left: string;
      let right: string;

      if ('undefined' !== typeof mapsDatas[maps[positions[i]]]) {
        location = mapsDatas[maps[positions[i]]].location;
        left = mapsDatas[maps[positions[i]]].left;
        right = mapsDatas[maps[positions[i]]].right;
      } else {
        [, location, left, right] = getMapData(maps[positions[i]]);

        mapsDatas[maps[positions[i]]] = {
          location,
          left,
          right,
        };
      }
      
      if ('L' === steps[step]) {
        currentLocations[i] = left;
      } else {
        currentLocations[i] = right;
      }

      if ('undefined' !== typeof locationsPositions[currentLocations[i]]) {
        positions[i] = locationsPositions[currentLocations[i]];
      } else {
        positions[i] = getLocationPosition(maps, currentLocations[i]);
        locationsPositions[currentLocations[i]] = positions[i];
      }
    }

    countZs(currentLocations);

    const scenario = currentLocations.join();

    if (!scenarios.includes(scenario)) {
      scenarios.push(scenario);
    } else {
      console.log('repeated scenario!');
    }

    step++;

    if (step === steps.length) {
      step = 0;
    }
  }

  return nrOfSteps;
}
