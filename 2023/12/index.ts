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

export function algo2(input: string, part: 1 | 2 = 1): number {
  const rows = input.split('\n');

  let nrOfPossibleArrangements = 0;

  let i = 0;
  for (const row of rows) {
    console.log('row', i);
    i++;

    let [springs, damagedGroupsStr] = row.split(' ');

    if (2 === part) {
      const origSprings = springs;
      const origDamagedGroupsStr = damagedGroupsStr;

      for (let i = 0; i < 4; i++) {
        springs += '?' + origSprings;
        damagedGroupsStr += ',' + origDamagedGroupsStr;
      }
    }

    const damagedGroups = damagedGroupsStr.split(',').map((i) => Number(i));

    const maxDecimalValue = Math.pow(2, springs.length);

    for (let i = 0; i < maxDecimalValue; i++) {
      const binary = i.toString(2).padStart(springs.length, '0');
      
      let replaced = '';

      for (let j = 0; j < binary.length; j++) {
        replaced += Number(binary[j]) ? '#' : '.';
      }


      if (isArrangementValid(replaced, springs, damagedGroups)) {
        nrOfPossibleArrangements++;
      }
    }
  }

  return nrOfPossibleArrangements;
}
