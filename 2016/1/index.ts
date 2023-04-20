import { readFileSync } from 'fs';

type CardialPoint = 'N' | 'E' | 'S' | 'W';

type Coordinates = {
  x: number,
  y: number,
};

function turn(facing: CardialPoint, rotation: string): CardialPoint {
  switch (facing) {
    case 'N':
      return 'R' === rotation ? 'E' : 'W';

    case 'E':
      return 'R' === rotation ? 'S' : 'N';
      
    case 'S':
      return 'R' === rotation ? 'W' : 'E';
     
    case 'W':
      return 'R' === rotation ? 'N' : 'S';
  }
}

function move(coords: Coordinates, facing: CardialPoint, steps: number): Coordinates {
  switch (facing) {
    case 'N':
      return {
        x: coords.x,
        y: coords.y + steps,
      };

    case 'E':
      return {
        x: coords.x + steps,
        y: coords.y,
      };
      
    case 'S':
      return {
        x: coords.x,
        y: coords.y - steps,
      };
     
    case 'W':
      return {
        x: coords.x - steps,
        y: coords.y,
      };
  }
}

function getBlockDistance(directions: string[]): number {
  let coords = {
    x: 0,
    y: 0,
  };

  let facing: CardialPoint = 'N';

  for (let i = 0; i < directions.length; i++) {
    facing = turn(facing, directions[i][0]);
    coords = move(coords, facing, Number(directions[i].substring(1)));
  }

  return Math.abs(coords.x) + Math.abs(coords.y);
}

console.log(getBlockDistance(readFileSync('./input').toString().split(', ')));
console.log(getBlockDistance(readFileSync('./input-t1').toString().split(', ')));
console.log(getBlockDistance(readFileSync('./input-t2').toString().split(', ')));
console.log(getBlockDistance(readFileSync('./input-t3').toString().split(', ')));
