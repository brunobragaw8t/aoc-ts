/**
 * Common
 */

function extractCubes(str: string): Record<string, number> {
  const result: Record<string, number> = {};

  const colorSets = str.split(', ');

  for (const colorSet of colorSets) {
    const [nr, color] = colorSet.split(' ');
    result[color] = Number(nr);
  }

  return result;
}

/**
 * Part 1
 */

const load = {
  red: 12,
  green: 13,
  blue: 14,
};

function extractGameId(str: string): number {
  const game = str.split(': ')[0];
  return Number(game.split(' ')[1]);
}

export function algo(input: string): number {
  const games = input.split('\n');
  const possibleGames: number[] = [];

  for (const game of games) {
    const gameId = extractGameId(game);
    const sets = game.split(': ')[1].split('; ');

    let possible = true;
    
    for (const set of sets) {
      const cubes = extractCubes(set);
      
      if (
        cubes.red > load.red
        || cubes.green > load.green
        || cubes.blue > load.blue
      ) {
        possible = false;
      }
    }

    if (possible) {
      possibleGames.push(gameId);
    }
  }

  return possibleGames.reduce((acc, i) => acc + i, 0);
}

/**
 * Part 2
 */

type Color = 'red' | 'green' | 'blue';

export function algo2(input: string): number {
  const games = input.split('\n');
  const powers: number[] = [];

  for (const game of games) {
    const sets = game.split(': ')[1].split('; ');

    const mins: Record<Color, number> = {
      red: 0,
      green: 0,
      blue: 0,
    };

    for (const set of sets) {
      const cubes = extractCubes(set);

      for (const color of ['red', 'green', 'blue'] satisfies Color[]) {
        if ('number' === typeof cubes[color] && cubes[color] > mins[color]) {
          mins[color] = cubes[color];
        }
      }
    }

    powers.push(mins.red * mins.green * mins.blue);
  }

  return powers.reduce((acc, i) => acc + i, 0);
}
