function getRequiredFuel(mass: number): number {
  return Math.floor(mass / 3) - 2;
}

export function algo(input: string, part: 1 | 2 = 1, log = false): number {
  const requiredFuel = input
    .split("\n")
    .filter(Boolean)
    .reduce((carry, item) => {
      return carry + getRequiredFuel(Number(item));
    }, 0);

  if (1 === part) {
    return requiredFuel;
  }

  if (getRequiredFuel(requiredFuel) <= 0) {
    return requiredFuel;
  }

  return requiredFuel + algo(String(requiredFuel), 2, log);
}

