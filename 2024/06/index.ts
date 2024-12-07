class GuardGallivant {
  private map: string[][];
  private guardPosition: [number, number];
  private guardIsFacing: 'top' | 'right' | 'bottom' | 'left' = 'top';
  public patroledPositions: string[] = [];
  public patroledPositionsNonUnique: string[] = [];

  constructor(input: string) {
    this.map = input
      .split('\n')
      .slice(0, -1)
      .map((r) => r.split(''));

    this.guardPosition = this.findGuardPosition();
    this.savePosition();
  }

  findGuardPosition(): [number, number] {
    for (let y = 0; y < this.map.length; y++) {
      for (let x = 0; x < this.map[y].length; x++) {
        if (this.map[y][x] === '^') {
          return [x, y];
        }
      }
    }

    return [0, 0];
  }

  getNextPositionChar(): string {
    const [x, y] = this.guardPosition;

    if (
      !this.map[y + 1]
      || !this.map[y][x + 1]
      || x - 1 < 0
      || y - 1 < 0
    ) return '';

    switch (this.guardIsFacing) {
      case 'top': return this.map[y - 1][x];
      case 'right': return this.map[y][x + 1];
      case 'bottom': return this.map[y + 1][x];
      default: return this.map[y][x - 1];
    }
  }

  savePosition() {
    const [x, y] = this.guardPosition;

    if (!this.patroledPositions.includes(`${x}|${y}`)) {
      this.patroledPositions.push(`${x}|${y}`);
    }

    this.patroledPositionsNonUnique.push(`${x}|${y}`);
  }

  turn() {
    switch (this.guardIsFacing) {
      case 'top': this.guardIsFacing = 'right'; break;
      case 'right': this.guardIsFacing = 'bottom'; break;
      case 'bottom': this.guardIsFacing = 'left'; break;
      default: this.guardIsFacing = 'top';
    }

    // console.log('Guard is now facing:', this.guardIsFacing);
  }

  move() {
    if (this.getNextPositionChar() === '#') {
      this.turn();
    }

    const [x, y] = this.guardPosition;

    switch (this.guardIsFacing) {
      case 'top': this.guardPosition = [x, y - 1]; break;
      case 'right': this.guardPosition = [x + 1, y]; break;
      case 'bottom': this.guardPosition = [x, y + 1]; break;
      default: this.guardPosition = [x - 1, y];
    }

    this.savePosition();

    // console.log('Guard is now on position:', this.guardPosition);
    // const [newX, newY] = this.guardPosition;
    // console.log('Guard position has value:', this.map[newY][newX]);
  }

  hasLooped(): boolean {
    if (this.patroledPositionsNonUnique.length < 8) {
      return false;
    }

    const lastPositions = this.patroledPositionsNonUnique.slice(
      this.patroledPositionsNonUnique.length - 4
    );

    for (let i = 0; i < this.patroledPositionsNonUnique.length - 4; i++) {
      if (
        lastPositions[0] === this.patroledPositionsNonUnique[i]
        && lastPositions[1] === this.patroledPositionsNonUnique[i + 1]
        && lastPositions[2] === this.patroledPositionsNonUnique[i + 2]
        && lastPositions[3] === this.patroledPositionsNonUnique[i + 3]
      ) {
        return true;
      }
    }

    return false;
  }
}

export function algo(input: string): number {
  const guardGallivant = new GuardGallivant(input);

  while (['.', '#', '^'].includes(guardGallivant.getNextPositionChar())) {
    guardGallivant.move();
  }

  return guardGallivant.patroledPositions.length;
}

/**
 * Part 2
 */

export function algo2(input: string): number {
  let sum = 0;

  // const guardGallivant = new GuardGallivant(input);
  //
  // while (['.', '#', '^'].includes(guardGallivant.getNextPositionChar())) {
  //   guardGallivant.move();
  // }
  //
  // const possibleObstaclePositions = guardGallivant.patroledPositions.map((p) => {
  //   const [x, y] = p.split('|');
  //   return [Number(x), Number(y)];
  // });
  //
  // inputsLoop: for (let i = 0; i < possibleObstaclePositions.length; i++) {
  //   const newMap = input
  //     .split('\n')
  //     .slice(0, -1)
  //     .map((r) => r.split(''));
  //
  //   const [x, y] = possibleObstaclePositions[i];
  //   newMap[y][x] = '#';
  //
  //   const newInput = newMap.map((i) => i.join('') + '\n').join('');
  //
  //   console.log('newInput', '\n' + newInput);
  //
  //   const guardGallivant = new GuardGallivant(newInput);
  //
  //   while (['.', '#', '^'].includes(guardGallivant.getNextPositionChar())) {
  //     guardGallivant.move();
  //
  //     if (guardGallivant.hasLooped()) {
  //       sum++;
  //       continue inputsLoop;
  //     }
  //   }
  // }

  console.log('Length:', input.length);

  inputsLoop: for (let i = 0; i < input.length; i++) {
    console.log(i);

    if (['^', '#'].includes(input[i])) {
      continue;
    }

    const newInput = input.split('');
    newInput[i] = '#';

    const guardGallivant = new GuardGallivant(newInput.join(''));

    while (['.', '#', '^'].includes(guardGallivant.getNextPositionChar())) {
      guardGallivant.move();

      if (guardGallivant.hasLooped()) {
        sum++;
        continue inputsLoop;
      }
    }
  }

  return sum;
}
