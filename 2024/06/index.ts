class GuardGallivant {
  private map: string[][];
  private guardPosition: [number, number];
  private guardIsFacing: 'top' | 'right' | 'bottom' | 'left' = 'top';
  public patroledPositions: string[] = [];

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

    if (!this.map[y + 1]) return '';

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
  }

  turn() {
    switch (this.guardIsFacing) {
      case 'top': this.guardIsFacing = 'right'; break;
      case 'right': this.guardIsFacing = 'bottom'; break;
      case 'bottom': this.guardIsFacing = 'left'; break;
      default: this.guardIsFacing = 'top';
    }
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
  return sum;
}
