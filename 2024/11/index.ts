export function algo(input: string, blinks: number): number {
  const stones = input.replace('\n', '').split(' ');

  for (let i = 0; i < blinks; i++) {
    for (let j = 0; j < stones.length; j++) {
      if (stones[j] === '0') {
        stones[j] = '1';
        continue;
      }

      if (stones[j].length % 2 === 0) {
        let left = stones[j].slice(0, stones[j].length / 2);
        let right = stones[j].slice(stones[j].length / 2, stones[j].length);

        // Trick to remove left-side zeros
        left = String(parseInt(left));
        right = String(parseInt(right));

        stones.splice(j, 1, left, right);

        j++;

        continue;
      }

      stones[j] = String(Number(stones[j]) * 2024);
    }
  }

  return stones.length;
}
