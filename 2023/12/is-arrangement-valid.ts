export function isArrangementValid(arrangement: string, springs: string, damagedGroups: number[]) {
  const groupedSprings = arrangement.split('.').filter((i) => '' !== i);

  if (groupedSprings.length !== damagedGroups.length) {
    return false;
  }

  for (let i = 0; i < damagedGroups.length; i++) {
    if (
      'undefined' === typeof groupedSprings[i]
      || groupedSprings[i].length !== damagedGroups[i]
    ) {
      return false;
    }
  }

  for (let i = 0; i < springs.length; i++) {
    if ('#' === springs[i] && '#' !== arrangement[i]) {
      return false;
    }

    if ('.' === springs[i] && '.' !== arrangement[i]) {
      return false;
    }
  }

  return true;
}
