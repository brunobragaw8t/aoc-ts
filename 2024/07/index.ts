export function getResults(value: number, operators: string[], remainingValues: number[]): number[] {
  if (remainingValues.length === 1) {
    return operators.map((o) => {
      if (o === '||') {
        return Number(`${remainingValues[0]}${value}`);
      }

      return eval(`${value}${o}${remainingValues[0]}`);
    });
  }

  const possibleResults = [];

  const childResults = getResults(remainingValues[0], operators, remainingValues.slice(1));

  for (const o of operators) {
    for (const r of childResults) {
      if (o === '||') {
        possibleResults.push(Number(`${r}${value}`));
      } else {
        possibleResults.push(eval(`${value}${o}${r}`));
      }
    }
  }

  return possibleResults;
}

export function algo(input: string, part: 1 | 2 = 1): number {
  let sum = 0;

  const equations = input
    .split('\n')
    .slice(0, -1)
    .map((e) => {
      const [result, values] = e.split(': ');

      return {
        result: Number(result),
        values: values.split(' ').map((n) => Number(n)),
      };
    });

  const operators = ['+', '*'];

  if (part === 2) {
    operators.push('||');
  }

  for (const equation of equations) {
    const values = equation.values;

    values.reverse();

    const possibleResults = getResults(values[0], operators, values.slice(1));

    if (possibleResults.includes(equation.result)) {
      sum += equation.result;
    }
  }

  return sum;
}
