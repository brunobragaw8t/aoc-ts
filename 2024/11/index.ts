export function algo(input: string, blinks: number): number {
  let stones = input
    .replace('\n', '')
    .split(' ')
    .reduce<Record<string, number>>((acc, cur) => {
      acc[cur] = 1;
      return acc;
    }, {});

  for (let i = 0; i < blinks; i++) {
    console.log('Blinking', i);

    const newStones = stones;

    for (const [stone, count] of Object.entries(stones)) {
      if (stone === '0') {
        newStones['0'] = newStones['0'] && newStones['0'] > 0 ? newStones['0'] - count : 0;
        newStones['1'] = (newStones['1'] || 0) + count;

        continue;
      }

      if (stone.length % 2 === 0) {
        let left = stone.slice(0, stone.length / 2);
        let right = stone.slice(stone.length / 2, stone.length);

        // Trick to remove left-side zeros
        left = String(parseInt(left));
        right = String(parseInt(right));

        newStones[stone] = newStones[stone] && newStones[stone] > 0 ? newStones[stone] - count : 0;
        newStones[left] = (newStones[left] || 0) + count;
        newStones[right] = (newStones[right] || 0) + count;

        continue;
      }

      const res = String(Number(stone) * 2024);

      newStones[stone] = newStones[stone] && newStones[stone] > 0 ? newStones[stone] - count : 0;
      newStones[res] = (newStones[res] || 0) + count;
    }

    stones = Object.entries(newStones).reduce((acc, [i, v]) => {
      if (v > 0) {
        acc[i] = v;
      }

      return acc;
    }, {});
  }

  return Object.values(stones).reduce((acc, cur) => acc += cur, 0);
}
