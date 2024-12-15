const order = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

export function getMap(input: string): string[][] {
  return input
    .split('\n')
    .slice(0, -1)
    .map((r) => r.split(''));
}

export function getHeads(map: string[][]): { x: number, y: number }[] {
  const heads = [];

  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      if (map[y][x] === '0') {
        heads.push({ x, y });
      }
    }
  }

  return heads;
}

function getExits(map: string[][], pos: { x: number, y: number }, next: string): string[] {
  let exits = [];

  if (pos.y - 1 >= 0 && map[pos.y - 1][pos.x] === next) {
    if (next === '9') {
      exits.push(`${pos.x}|${pos.y - 1}`);
    } else {
      exits.push(...getExits(map, { x: pos.x, y: pos.y - 1 }, order[order.indexOf(next) + 1]));
    }
  }

  if (pos.x + 1 < map[pos.y].length && map[pos.y][pos.x + 1] === next) {
    if (next === '9') {
      exits.push(`${pos.x + 1}|${pos.y}`);
    } else {
      exits.push(...getExits(map, { x: pos.x + 1, y: pos.y }, order[order.indexOf(next) + 1]));
    }
  }

  if (pos.y + 1 < map.length && map[pos.y + 1][pos.x] === next) {
    if (next === '9') {
      exits.push(`${pos.x}|${pos.y + 1}`);
    } else {
      exits.push(...getExits(map, { x: pos.x, y: pos.y + 1 }, order[order.indexOf(next) + 1]));
    }
  }

  if (pos.x - 1 >= 0 && map[pos.y][pos.x - 1] === next) {
    if (next === '9') {
      exits.push(`${pos.x - 1}|${pos.y}`);
    } else {
      exits.push(...getExits(map, { x: pos.x - 1, y: pos.y }, order[order.indexOf(next) + 1]));
    }
  }

  return exits;
}

export function algo(input: string): number {
  const map = getMap(input);
  const heads = getHeads(map);

  const exits = [];

  for (const head of heads) {
    exits.push(...new Set(getExits(map, head, '1')));
  }

  return exits.length;
}

export function algo2(input: string): number {
  const map = getMap(input);
  const heads = getHeads(map);

  let sum = 0;

  for (const head of heads) {
    sum += getExits(map, head, '1').length;
  }

  return sum;
}
