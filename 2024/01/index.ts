export function algo(input: string): number {
  const lists: Record<string, number[]> = {
    left: [],
    right: [],
  };

  for (const row of input.split('\n').slice(0, -1)) {
    const [left, right] = row.split('   ');
    lists.left.push(Number(left));
    lists.right.push(Number(right));
  }

  lists.left.sort();
  lists.right.sort();

  let sum = 0;

  for (let i = 0; i < lists.left.length; i++) {
    sum += Math.abs(lists.left[i] - lists.right[i]);
  }

  return sum;
}

export function algo2(input: string): number {
  const lists: Record<string, number[]> = {
    left: [],
    right: [],
  };

  for (const row of input.split('\n').slice(0, -1)) {
    const [left, right] = row.split('   ');
    lists.left.push(Number(left));
    lists.right.push(Number(right));
  }

  let score = 0;

  for (const l of lists.left) {
    const numberOfTimesInRight = lists.right.filter((r) => l === r).length;
    score += l * numberOfTimesInRight;
  }

  return score;
}
