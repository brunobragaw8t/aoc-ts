type Rotation = {
  direction: "L" | "R";
  amount: number;
};

function fixRotation(value: number): number {
  while (value < 0 || value > 99) {
    if (value < 0) {
      value += 100;
    } else {
      value -= 100;
    }
  }

  return value;
}

export function algo(input: string): number {
  const rotations: Rotation[] = input
    .trim()
    .split("\n")
    .map((rotation) => {
      return {
        direction: rotation.slice(0, 1) as Rotation["direction"],
        amount: parseInt(rotation.slice(1)),
      };
    });

  let timesPointingAtZero = 0;
  let pos = 50;

  for (const rotation of rotations) {
    if (rotation.direction === "L") {
      pos -= rotation.amount;
    } else {
      pos += rotation.amount;
    }

    pos = fixRotation(pos);

    if (pos === 0) {
      timesPointingAtZero++;
    }
  }

  return timesPointingAtZero;
}
