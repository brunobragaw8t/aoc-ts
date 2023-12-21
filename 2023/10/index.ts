type Position = {
  pipe: string;
  x: number;
  y: number;
};

function getStartPos(rows: string[]): Position | false {
  for (let i = 0; i < rows.length; i++) {
    const chars = rows[i].split('');

    for (let j = 0; j < chars.length; j++) {
      if ('S' === chars[j]) {
        return {
          pipe: 'S',
          x: j,
          y: i,
        };
      }
    }
  }

  return false;
}

function getPossibleConns(rows: string[], pos: Position): Position[] {
  return [
    {
      pipe: 'undefined' !== typeof rows[pos.y - 1] ? rows[pos.y - 1][pos.x] : '',
      x: pos.x,
      y: pos.y - 1,
    },
    {
      pipe: 'undefined' !== typeof rows[pos.y] ? rows[pos.y][pos.x + 1] : '',
      x: pos.x + 1,
      y: pos.y,
    },
    {
      pipe: 'undefined' !== typeof rows[pos.y + 1] ? rows[pos.y + 1][pos.x] : '',
      x: pos.x,
      y: pos.y + 1,
    },
    {
      pipe: 'undefined' !== typeof rows[pos.y] ? rows[pos.y][pos.x - 1] : '',
      x: pos.x - 1,
      y: pos.y,
    },
  ];
}

function isValidTop(pos: Position): boolean {
  return 'S' === pos.pipe || 'undefined' !== typeof pos.pipe && ['F', '|', '7'].includes(pos.pipe);
}

function isValidRight(pos: Position): boolean {
  return 'S' === pos.pipe || 'undefined' !== typeof pos.pipe && ['-', 'J', '7'].includes(pos.pipe);
}

function isValidBottom(pos: Position): boolean {
  return 'S' === pos.pipe || 'undefined' !== typeof pos.pipe && ['|', 'L', 'J'].includes(pos.pipe);
}

function isValidLeft(pos: Position): boolean {
  return 'S' === pos.pipe || 'undefined' !== typeof pos.pipe && ['-', 'L', 'F'].includes(pos.pipe);
}

function getFirstStep(rows: string[], pos: Position): Position {
  const [top, right, bottom, left] = getPossibleConns(rows, pos);

  if (isValidTop(top)) {
    return top;
  }

  if (isValidRight(right)) {
    return right;
  }

  if (isValidBottom(bottom)) {
    return bottom;
  }

  if (isValidLeft(left)) {
    return left;
  }

  return {
    pipe: '',
    x: -1,
    y: -1,
  }
}

function isDiffPos(pos1: Position, pos2: Position) {
  return pos1.x !== pos2.x || pos1.y !== pos2.y;
}

function getNextPos(rows: string[], pos: Position, prev: Position): Position {
  const [top, right, bottom, left] = getPossibleConns(rows, pos);

  if ('|' === pos.pipe) {
    if (isValidTop(top) && isDiffPos(top, prev)) {
      return top;
    }

    if (isValidBottom(bottom) && isDiffPos(bottom, prev)) {
      return bottom;
    }
  }

  if ('-' === pos.pipe) {
    if (isValidRight(right) && isDiffPos(right, prev)) {
      return right;
    }

    if (isValidLeft(left) && isDiffPos(left, prev)) {
      return left;
    }
  }

  if ('L' === pos.pipe) {
    if (isValidTop(top) && isDiffPos(top, prev)) {
      return top;
    }

    if (isValidRight(right) && isDiffPos(right, prev)) {
      return right;
    }
  }

  if ('J' === pos.pipe) {
    if (isValidTop(top) && isDiffPos(top, prev)) {
      return top;
    }

    if (isValidLeft(left) && isDiffPos(left, prev)) {
      return left;
    }
  }

  if ('7' === pos.pipe) {
    if (isValidBottom(bottom) && isDiffPos(bottom, prev)) {
      return bottom;
    }

    if (isValidLeft(left) && isDiffPos(left, prev)) {
      return left;
    }
  }

  if ('F' === pos.pipe) {
    if (isValidRight(right) && isDiffPos(right, prev)) {
      return right;
    }

    if (isValidBottom(bottom) && isDiffPos(bottom, prev)) {
      return bottom;
    }
  }

  return {
    pipe: '',
    x: -1,
    y: -1,
  };
}

export function algo(input: string): number {
  const rows = input.split('\n');

  const startPos = getStartPos(rows);

  if (false === startPos) {
    return 0;
  }

  const path: Position[] = [];

  const firstStep = getFirstStep(rows, startPos);

  path.push(firstStep);

  let currentPos = firstStep;
  let prevPos = startPos;

  while ('S' !== currentPos.pipe) {
    const nextPos = getNextPos(rows, currentPos, prevPos);
    path.push(nextPos);
    prevPos = currentPos;
    currentPos = nextPos;
  }

  return Math.floor(path.length / 2);
}
