const load = {
  red: 12,
  green: 13,
  blue: 14,
};

function extractGameId(str: string): number {
  const game = str.split(': ')[0];
  return Number(game.split(' ')[1]);
}

function extractCubes(str: string): Record<string, number> {
  const result: Record<string, number> = {};

  const colorSets = str.split(', ');

  for (const colorSet of colorSets) {
    const [nr, color] = colorSet.split(' ');
    result[color] = Number(nr);
  }

  return result;
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
