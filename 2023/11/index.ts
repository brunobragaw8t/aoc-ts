import { getExpandedUniverse } from "./helpers/get-expanded-universe";
import { getGalaxies } from "./helpers/get-galaxies";

export function algo(input: string): number {
  const rows = input.split('\n');
  const expandedUniverse = getExpandedUniverse(rows);
  const galaxies = getGalaxies(expandedUniverse);

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
