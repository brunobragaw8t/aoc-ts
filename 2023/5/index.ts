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

export function algo(input: string): number {
  const sections = input.split('\n\n');

  const seeds = sections[0]
    .replace('seeds: ', '')
    .split(' ')
    .map((s) => Number(s));

  const locations: number[] = [];

  for (const seed of seeds) {
    console.log('Seed: ' + seed);

    let result = 0;

    for (let i = 1; i < 8; i++) {
      const iterationItem = 0 === result ? seed : result;

      console.log('Iteration item: ' + iterationItem);

      const maps = generateMaps(sections[i]);

      let iterationMap: Map | null = null;

      for (const map of maps) {
        if (iterationItem >= map.sourceStart) {
          console.log('Found map: ', map);
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

      const diff = iterationMap.destinationStart - iterationMap.sourceStart;

      const iterationResult =
        iterationMap.sourceStart + iterationMap.rangeLength > iterationItem
          ? iterationItem + diff
          : iterationItem;

      console.log('Iteration result: ' + iterationResult);

      result = iterationResult;
    }

    console.log('Location result: ' + result);
    locations.push(result);
  }

  return Math.min(...locations);
}
