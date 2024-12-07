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
    console.log('Update: ', update);

    const relevantRules = getRelevantRules(update, rules);

    for (const rule of relevantRules) {
      console.log('Rule: ', rule);

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
