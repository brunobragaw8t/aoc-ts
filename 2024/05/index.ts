type Rule = { x: number, y: number };

function getRelevantRules(update: number[], rules: Rule[]): Rule[] {
  return rules.filter((r) => {
    const xExists = update.find((p) => p === r.x);
    const yExists = update.find((p) => p === r.y);
    return xExists && yExists;
  });
}

export function algo(input: string): number {
  let sum = 0;

  const [rulesInput, updatesInput] = input.split('\n\n');

  const rules: Rule[] = rulesInput
    .split('\n')
    .map((r) => {
      const [x, y] = r.split('|');
      return { x: Number(x), y: Number(y) };
    });

  const updates = updatesInput
    .split('\n')
    .slice(0, -1)
    .map((u) => {
      return u
        .split(',')
        .map((p) => Number(p));
    });

  updatesLoop: for (const update of updates) {
    const relevantRules = getRelevantRules(update, rules);

    for (const rule of relevantRules) {
      let foundFirst = false;

      for (const page of update) {
        // If second was found but we haven't found the first yet
        if (page === rule.y && !foundFirst) {
          // rule broken
          continue updatesLoop;
        }

        if (page === rule.x) foundFirst = true;
      }
    }

    sum += update[Math.floor(update.length / 2)];
  }

  return sum;
}

/**
 * Part 2
 */

function isCorrectlyOrdered(update: number[], rules: Rule[]): boolean {
  for (const rule of rules) {
    let foundFirst = false;

    for (const page of update) {
      // If second was found but we haven't found the first yet
      if (page === rule.y && !foundFirst) {
        return false
      }

      if (page === rule.x) foundFirst = true;
    }
  }

  return true;
}

function obeysRules(page: number, update: number[], rules: Rule[]): boolean {
  const pageIndex = update.indexOf(page);

  const rulesRelevantToPage = rules.filter((r) => r.x === page);

  for (const rule of rulesRelevantToPage) {
    const compareIndex = update.indexOf(rule.y);

    if (pageIndex > compareIndex) {
      return false;
    }
  }

  return true;
}

export function algo2(input: string): number {
  let sum = 0;

  const [rulesInput, updatesInput] = input.split('\n\n');

  const rules: Rule[] = rulesInput
    .split('\n')
    .map((r) => {
      const [x, y] = r.split('|');
      return { x: Number(x), y: Number(y) };
    });

  const updates = updatesInput
    .split('\n')
    .slice(0, -1)
    .map((u) => {
      return u
        .split(',')
        .map((p) => Number(p));
    });

  for (const update of updates) {
    const rulesRelevantToUpdate = getRelevantRules(update, rules);

    if (isCorrectlyOrdered(update, rulesRelevantToUpdate)) {
      continue;
    }

    while (!isCorrectlyOrdered(update, rulesRelevantToUpdate)) {
      for (let i = 0; i < update.length; i++) {
        if (!obeysRules(update[i], update, rulesRelevantToUpdate)) {
          const tmp = update[i - 1];
          update[i - 1] = update[i];
          update[i] = tmp;
        }
      }
    }

    sum += update[Math.floor(update.length / 2)];
  }

  return sum;
}
