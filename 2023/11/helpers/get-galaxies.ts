export type Galaxy = {
  x: number;
  y: number;
};

export function getGalaxies(rows: string[]): Galaxy[] {
  const galaxies: Galaxy[] = [];

  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < rows[i].length; j++) {
      if ('#' === rows[i][j]) {
        galaxies.push({
          x: j,
          y: i,
        });
      }
    }
  }

  return galaxies;
}
