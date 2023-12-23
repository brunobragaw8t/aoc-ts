export type Galaxy = {
  x: number;
  y: number;
};

function isColEmpty(rows: string[], col: number): boolean {
  let isEmpty = true;

  for (let i = 0; i < rows.length; i++) {
    if ('#' === rows[i][col]) {
      isEmpty = false;
      break;
    }
  }

  return isEmpty;
}

function isRowEmpty(rows: string[], row: number): boolean {
  let isEmpty = true;

  for (let i = 0; i < rows[row].length; i++) {
    if ('#' === rows[row][i]) {
      isEmpty = false;
      break;
    }
  }

  return isEmpty;
}

export function getGalaxies(
  rows: string[],
  expansionRate: number = 1,
): Galaxy[] {
  const galaxies: Galaxy[] = [];

  const emptyCols: number[] = [];

  let rowOffset = 0;
  let colOffset = 0;

  for (let i = 0; i < rows.length; i++) {
    colOffset = 0;

    if (isRowEmpty(rows, i)) {
      rowOffset += expansionRate;
      continue;
    }

    for (let j = 0; j < rows[i].length; j++) {
      if (emptyCols.includes(j)) {
        colOffset += expansionRate;
        continue;
      }

      if (isColEmpty(rows, j)) {
        colOffset += expansionRate;
        emptyCols.push(j);
        continue;
      }

      if ('#' === rows[i][j]) {
        galaxies.push({
          x: j + colOffset,
          y: i + rowOffset,
        });
      }
    }
  }

  return galaxies;
}
