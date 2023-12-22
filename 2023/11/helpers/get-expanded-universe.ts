export function getExpandedUniverse(rows: string[]): string[] {
  const newRows: string[] = [];

  for (let i = 0; i < rows.length; i++) {
    let rowIsEmpty = true;

    for (let j = 0; j < rows[i].length; j++) {
      if ('#' === rows[i][j]) {
        rowIsEmpty = false;
        break;
      }
    }

    newRows.push(rows[i]);

    if (rowIsEmpty) {
      newRows.push(rows[i]);
    }
  }

  const newCols: string[] = [];

  for (let i = 0; i < newRows[0].length; i++) {
    let colIsEmpty = true;

    for (let j = 0; j < newRows.length; j++) {
      if ('undefined' === typeof newCols[j]) {
        newCols[j] = '';
      }

      newCols[j] += newRows[j][i];

      if ('#' === newRows[j][i]) {
        colIsEmpty = false;
      }
    }

    if (colIsEmpty) {
      for (let j = 0; j < newRows.length; j++) {
        newCols[j] += newRows[j][i];
      }
    }
  }

  return newCols;
}
