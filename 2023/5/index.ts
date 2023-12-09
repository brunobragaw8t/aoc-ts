type Map = {
  destinationStart: number;
  sourceStart: number;
  rangeLength: number;
};

function generateMaps(section: string): Map[] {
  return section
    .split('\n')
    .slice(1)
    .reduce<Map[]>((acc, row) => {
      const [destinationStart, sourceStart, rangeLength] = row.split(' ');

      acc.push({
        destinationStart: Number(destinationStart),
        sourceStart: Number(sourceStart),
        rangeLength: Number(rangeLength),
      });

      return acc;
    }, [])
    .sort((a, b) => a.sourceStart - b.sourceStart);
}

function getSeedLocation(
  sections: string[], sectionsMaps: Record<string, Map[]>, seed: number
): [number, Map] {
  let result = 0;

  let firstIterationMap: Map | null = null;

  for (let i = 1; i < 8; i++) {
    const iterationItem = 0 === result ? seed : result;

    if ('undefined' === typeof sectionsMaps[i]) {
      sectionsMaps[i] = generateMaps(sections[i]);
    }

    const maps = sectionsMaps[i];

    let iterationMap: Map | null = null;

    for (const map of maps) {
      if (iterationItem >= map.sourceStart) {
        iterationMap = map;
      }
    }

    if (null === iterationMap) {
      iterationMap = {
        destinationStart: 1,
        sourceStart: 1,
        rangeLength: maps[0].sourceStart
      }
    }

    if (null === firstIterationMap) {
      firstIterationMap = iterationMap;
    }

    const diff = iterationMap.destinationStart - iterationMap.sourceStart;

    const iterationResult =
      iterationMap.sourceStart + iterationMap.rangeLength > iterationItem
        ? iterationItem + diff
        : iterationItem;

    result = iterationResult;
  }

  if (null === firstIterationMap) {
    firstIterationMap = {
      destinationStart: 1,
      sourceStart: 1,
      rangeLength: 1,
    }
  }

  return [result, firstIterationMap];
}

export function algo(input: string, part: 1 | 2 = 1): number {
  const sections = input.split('\n\n');

  const sectionsMaps: Record<string, Map[]> = {};

  let seeds = sections[0]
    .replace('seeds: ', '')
    .split(' ')
    .map((s) => Number(s));

  if (1 === part) {
    const locations: number[] = [];

    for (const seed of seeds) {
      locations.push(getSeedLocation(sections, sectionsMaps, seed)[0]);
    }

    return Math.min(...locations);
  } 

  let minLocation: number | null = null;

  for (let i = 0; i < seeds.length; i += 2) {
    console.log('seed range ' + i);

    for (let j = seeds[i]; j < seeds[i] + seeds[i + 1]; j++) {
      // console.log('seed ' + j);

      const [location, map] = getSeedLocation(sections, sectionsMaps, j);

      if (null === minLocation || location < minLocation) {
        minLocation = location;
      }

      // console.log('location', location);
      // console.log('Map range length', map.rangeLength);

      // j += map.rangeLength - 1;
    }
  }

  return minLocation ? minLocation : 0;
}
