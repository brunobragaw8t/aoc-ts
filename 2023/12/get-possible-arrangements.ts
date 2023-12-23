export function getPossibleArrangements(length: number): string[] {
  const maxDecimalValue = Math.pow(2, length);
  const arrangements: string[] = [];

  for (let i = 0; i < maxDecimalValue; i++) {
    const binary = i.toString(2).padStart(length, '0');
    
    let replaced = '';

    for (let j = 0; j < binary.length; j++) {
      replaced += Number(binary[j]) ? '#' : '.';
    }

    arrangements.push(replaced);
  }

  return arrangements;
}
