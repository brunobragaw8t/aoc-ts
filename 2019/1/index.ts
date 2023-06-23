function getRequiredFuel(mass: number): number {
  return Math.floor(mass / 3) - 2;
}

function getTotalRequiredFuel(mass: number): number {
  const fuel = Math.floor(mass / 3) - 2;

  if (fuel <= 0) {
    return 0;
  }

  return fuel + getTotalRequiredFuel(fuel);
}

export function algo(input: string, part: 1 | 2 = 1, log = false): number {
  const callback = 1 === part ? getRequiredFuel : getTotalRequiredFuel;

  return input
    .split("\n")
    .filter(Boolean)
    .reduce((carry, item) => {
      return carry + callback(Number(item));
    }, 0);
}

