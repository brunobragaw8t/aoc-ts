function checkTop(y: number, x: number, rows: string[]): boolean {
  // Check if out of bounds
  if (y - 3 < 0) return false;

  return (
    rows[y - 1][x] === 'M'
    && rows[y - 2][x] === 'A'
    && rows[y - 3][x] === 'S'
  );
}

function checkTopRight(y: number, x: number, rows: string[]): boolean {
  // Check if out of bounds
  if (y - 3 < 0 || !rows[y - 3][x + 3]) return false;

  return (
    rows[y - 1][x + 1] === 'M'
    && rows[y - 2][x + 2] === 'A'
    && rows[y - 3][x + 3] === 'S'
  );
}

function checkRight(y: number, x: number, rows: string[]): boolean {
  // Check if out of bounds
  if (!rows[y][x + 3]) return false;

  return (
    rows[y][x + 1] === 'M'
    && rows[y][x + 2] === 'A'
    && rows[y][x + 3] === 'S'
  );
}

function checkBottomRight(y: number, x: number, rows: string[]): boolean {
  // Check if out of bounds
  if (!rows[y + 3] || !rows[y + 3][x + 3]) return false;

  return (
    rows[y + 1][x + 1] === 'M'
    && rows[y + 2][x + 2] === 'A'
    && rows[y + 3][x + 3] === 'S'
  );
}

function checkBottom(y: number, x: number, rows: string[]): boolean {
  // Check if out of bounds
  if (!rows[y + 3]) return false;

  return (
    rows[y + 1][x] === 'M'
    && rows[y + 2][x] === 'A'
    && rows[y + 3][x] === 'S'
  );
}

function checkBottomLeft(y: number, x: number, rows: string[]): boolean {
  // Check if out of bounds
  if (!rows[y + 3] || x - 3 < 0) return false;

  return (
    rows[y + 1][x - 1] === 'M'
    && rows[y + 2][x - 2] === 'A'
    && rows[y + 3][x - 3] === 'S'
  );
}

function checkLeft(y: number, x: number, rows: string[]): boolean {
  // Check if out of bounds
  if (x - 3 < 0) return false;

  return (
    rows[y][x - 1] === 'M'
    && rows[y][x - 2] === 'A'
    && rows[y][x - 3] === 'S'
  );
}

function checkTopLeft(y: number, x: number, rows: string[]): boolean {
  // Check if out of bounds
  if (y - 3 < 0 || x - 3 < 0) return false;

  return (
    rows[y - 1][x - 1] === 'M'
    && rows[y - 2][x - 2] === 'A'
    && rows[y - 3][x - 3] === 'S'
  );
}

export function algo(input: string): number {
  let sum = 0;

  const rows = input.split('\n').slice(0, -1);

  for (let y = 0; y < rows.length; y++) {
    for (let x = 0; x < rows[y].length; x++) {
      if (rows[y][x] !== 'X') {
        continue;
      }

      if (checkTop(y, x, rows)) sum++;
      if (checkTopRight(y, x, rows)) sum++;
      if (checkRight(y, x, rows)) sum++;
      if (checkBottomRight(y, x, rows)) sum++;
      if (checkBottom(y, x, rows)) sum++;
      if (checkBottomLeft(y, x, rows)) sum++;
      if (checkLeft(y, x, rows)) sum++;
      if (checkTopLeft(y, x, rows)) sum++;
    }
  }

  return sum;
}

/**
 * Part 2
 */

function checkTopRight2(letter: string, y: number, x: number, rows: string[]): boolean {
  return (
    y - 1 >= 0
    && !!rows[y - 1][x + 1]
    && rows[y - 1][x + 1] === letter
  );
}

function checkBottomRight2(letter: string, y: number, x: number, rows: string[]): boolean {
  return (
    !!rows[y + 1]
    && !!rows[y + 1][x + 1]
    && rows[y + 1][x + 1] === letter
  );
}

function checkBottomLeft2(letter: string, y: number, x: number, rows: string[]): boolean {
  return (
    x - 1 >= 0
    && !!rows[y + 1]
    && rows[y + 1][x - 1] === letter
  );
}

function checkTopLeft2(letter: string, y: number, x: number, rows: string[]): boolean {
  return (
    x - 1 >= 0
    && y - 1 >= 0
    && rows[y - 1][x - 1] === letter
  );
}

export function algo2(input: string): number {
  let sum = 0;

  const rows = input.split('\n').slice(0, -1);

  for (let y = 0; y < rows.length; y++) {
    for (let x = 0; x < rows[y].length; x++) {
      if (rows[y][x] !== 'A') {
        continue;
      }

      if (
        checkTopRight2('S', y, x, rows)
        && checkBottomRight2('S', y, x, rows)
        && checkBottomLeft2('M', y, x, rows)
        && checkTopLeft2('M', y, x, rows)
      ) sum++;

      if (
        checkTopRight2('M', y, x, rows)
        && checkBottomRight2('S', y, x, rows)
        && checkBottomLeft2('S', y, x, rows)
        && checkTopLeft2('M', y, x, rows)
      ) sum++;

      if (
        checkTopRight2('M', y, x, rows)
        && checkBottomRight2('M', y, x, rows)
        && checkBottomLeft2('S', y, x, rows)
        && checkTopLeft2('S', y, x, rows)
      ) sum++;

      if (
        checkTopRight2('S', y, x, rows)
        && checkBottomRight2('M', y, x, rows)
        && checkBottomLeft2('M', y, x, rows)
        && checkTopLeft2('S', y, x, rows)
      ) sum++;
    }
  }

  return sum;
}
