/**
 * Common
 */

function isDigit(input: string): boolean {
  return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].includes(input);
}

/**
 * Part 1
 */

function isSymbol(input: string): boolean {
  return !isDigit(input) && input !== ".";
}

function hasSymbolAround(lines: string[], x: number, y: number): boolean {
  return (
    'undefined' !== typeof lines[x - 1] && (
      'undefined' !== typeof lines[x - 1][y - 1] && isSymbol(lines[x - 1][y - 1])
      || 'undefined' !== typeof lines[x - 1][y] && isSymbol(lines[x - 1][y])
      || 'undefined' !== typeof lines[x - 1][y + 1] && isSymbol(lines[x - 1][y + 1])
    )
    || 'undefined' !== typeof lines[x][y - 1] && isSymbol(lines[x][y - 1])
    || 'undefined' !== typeof lines[x][y + 1] && isSymbol(lines[x][y + 1])
    || 'undefined' !== typeof lines[x + 1] && (
      'undefined' !== typeof lines[x + 1][y - 1] && isSymbol(lines[x + 1][y - 1])
      || 'undefined' !== typeof lines[x + 1][y] && isSymbol(lines[x + 1][y])
      || 'undefined' !== typeof lines[x + 1][y + 1] && isSymbol(lines[x + 1][y + 1])
    )
  );
}

export function algo(input: string): number {
  const lines = input.split('\n');
  const partNumbers: number[] = [];

  for (let i = 0; i < lines.length; i++) {
    const chars = lines[i].split('');

    let nr = '';
    let nrHasSymbolAround = false;

    for (let j = 0; j < chars.length; j++) {
      if (isDigit(chars[j])) {
        nr += chars[j];

        if (hasSymbolAround(lines, i, j)) {
          nrHasSymbolAround = true;
        }

        if (j === chars.length - 1 && nrHasSymbolAround && '' !== nr) {
          partNumbers.push(Number(nr));
        }

        continue;
      }

      if (nrHasSymbolAround && '' !== nr) {
        partNumbers.push(Number(nr));
      }

      nr = '';
      nrHasSymbolAround = false;
    }
  }

  return partNumbers.reduce((acc, i) => acc += i, 0);
}

/**
 * Part 2
 */

function getFullNumber(lines: string[], x: number, y: number) {
  let nr = lines[x][y];

  let i = y - 1;

  while (isDigit(lines[x][i]) && i >= 0) {
    nr = lines[x][i] + nr;
    i--;
  }

  i = y + 1;

  while (isDigit(lines[x][i]) && i <= lines[x].length - 1) {
    nr += lines[x][i];
    i++;
  }

  return nr;
}

export function algo2(input: string): number {
  const lines = input.split('\n');
  const gearsRatios: number[] = [];

  for (let i = 0; i < lines.length; i++) {
    const chars = lines[i].split('');

    for (let j = 0; j < chars.length; j++) {
      if ('*' === chars[j]) {
        const gearNumbers: number[] = [];

        if ('undefined' !== typeof lines[i - 1] && isDigit(lines[i - 1][j - 1])) {
          const nr = Number(getFullNumber(lines, i - 1, j - 1));

          if (!gearNumbers.includes(nr)) {
            gearNumbers.push(nr);
          }
        }

        if ('undefined' !== typeof lines[i - 1] && isDigit(lines[i - 1][j])) {
          const nr = Number(getFullNumber(lines, i - 1, j));

          if (!gearNumbers.includes(nr)) {
            gearNumbers.push(nr);
          }
        }

        if ('undefined' !== typeof lines[i - 1] && isDigit(lines[i - 1][j + 1])) {
          const nr = Number(getFullNumber(lines, i - 1, j + 1));

          if (!gearNumbers.includes(nr)) {
            gearNumbers.push(nr);
          }
        }

        if (isDigit(lines[i][j - 1])) {
          const nr = Number(getFullNumber(lines, i, j - 1));

          if (!gearNumbers.includes(nr)) {
            gearNumbers.push(nr);
          }
        }

        if (isDigit(lines[i][j + 1])) {
          const nr = Number(getFullNumber(lines, i, j + 1));

          if (!gearNumbers.includes(nr)) {
            gearNumbers.push(nr);
          }
        }

        if ('undefined' !== typeof lines[i + 1] && isDigit(lines[i + 1][j - 1])) {
          const nr = Number(getFullNumber(lines, i + 1, j - 1));

          if (!gearNumbers.includes(nr)) {
            gearNumbers.push(nr);
          }
        }

        if ('undefined' !== typeof lines[i + 1] && isDigit(lines[i + 1][j])) {
          const nr = Number(getFullNumber(lines, i + 1, j));

          if (!gearNumbers.includes(nr)) {
            gearNumbers.push(nr);
          }
        }

        if ('undefined' !== typeof lines[i + 1] && isDigit(lines[i + 1][j + 1])) {
          const nr = Number(getFullNumber(lines, i + 1, j + 1));

          if (!gearNumbers.includes(nr)) {
            gearNumbers.push(nr);
          }
        }

        if (2 === gearNumbers.length) {
          gearsRatios.push(gearNumbers[0] * gearNumbers[1]);
        }
      }
    }
  }

  return gearsRatios.reduce((acc, i) => acc += i, 0);
}
