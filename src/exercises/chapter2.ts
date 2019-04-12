import Point from '../Point';

interface ArrayDictionary {
  [index: number]: number[];
}

class Chapter2 {
  public run(): void {
    console.log('\n\n\n## CHAPTER 2 ##');
    this.exercise1();
    this.exercise4();
    this.exercise6();
  }

  public exercise1(): void {
    console.log('\nEXERCISE 1\n');
    const a = 5;
    const b = 7;
    const xCoords = [2, -1, 18, 5];
    const yCoords = [4, -1, 77, 7];
    xCoords.forEach(
      (x, index): void => {
        try {
          new Point(x, yCoords[index], a, b);
          console.log(`(${x},${yCoords[index]}) is on the curve y^2 = x^3 + ${a}x + ${b}`);
        } catch (e) {
          console.log(`(${x},${yCoords[index]}) is NOT on the curve y^2 = x^3 + ${a}x + ${b}`);
        }
      },
    );
  }

  public exercise4(): void {
    console.log('\nEXERCISE 4\n');
    const a = 5;
    const b = 7;
    const point1 = new Point(2, 5, a, b);
    const point2 = new Point(-1, -1, a, b);
    console.log(`${point1} + ${point2} = ${point1.add(point2)}`);
  }

  public exercise6(): void {
    console.log('\nEXERCISE 6\n');
    const a = 5;
    const b = 7;
    const point1 = new Point(-1, -1, a, b);
    const point2 = new Point(-1, -1, a, b);
    console.log(`${point1} + ${point2} = ${point1.add(point2)}`);
  }
}

export default Chapter2;
