import { getGalaxies } from "./helpers/get-galaxies";

export function algo(input: string, expansionRate: number = 1): number {
  const rows = input.split('\n');
  const galaxies = getGalaxies(rows, expansionRate);

  const steps: number[] = [];
  const comparisonsMade: string[] = [];

  for (let i = 0; i < galaxies.length; i++) {
    for (let j = 0; j < galaxies.length; j++) {
      if (i === j) {
        continue;
      }

      if (!comparisonsMade.includes(`${i}-${j}`)) {
        steps.push(
          Math.abs(galaxies[i].x - galaxies[j].x) +
          Math.abs(galaxies[i].y - galaxies[j].y)
        );

        comparisonsMade.push(`${i}-${j}`, `${j}-${i}`);
      }
    }
  }

  console.log(comparisonsMade.length);

  return steps.reduce((acc, i) => acc += i, 0);
}
