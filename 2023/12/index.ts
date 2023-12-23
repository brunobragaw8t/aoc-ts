import { getPossibleArrangements } from './get-possible-arrangements';
import { isArrangementValid } from './is-arrangement-valid';

export function algo(input: string): number {
  const rows = input.split('\n');

  let nrOfPossibleArrangements = 0;

  const possibleArrangementsPerLength: Record<number, string[]> = {};

  let i = 0;
  for (const row of rows) {
    console.log('row', i);
    i++;

    const [springs, damagedGroupsStr] = row.split(' ');

    let possibleArrangements: string[];

    if ('undefined' !== typeof possibleArrangementsPerLength[springs.length]) {
      possibleArrangements = possibleArrangementsPerLength[springs.length];
    } else {
      possibleArrangements = getPossibleArrangements(springs.length);
      possibleArrangementsPerLength[springs.length] = possibleArrangements;
    }

    const damagedGroups = damagedGroupsStr.split(',').map((i) => Number(i));

    for (const arrangement of possibleArrangements) {
      if (isArrangementValid(arrangement, springs, damagedGroups)) {
        nrOfPossibleArrangements++;
      }
    }
  }

  return nrOfPossibleArrangements;
}
