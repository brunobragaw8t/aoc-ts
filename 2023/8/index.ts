function getMapData(map: string) {
  const matches = map.match(/([A-Z]{3})\s=\s\(([A-Z]{3})\,\s([A-Z]{3})\)/);

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
