import FieldElement from '../FieldElement';

interface ArrayDictionary {
  [index: number]: number[];
}

class Chapter1 {
  public run(): void {
    console.log('## CHAPTER 1 ##');
    this.exercise2();
    this.exercise4();
    this.exercise5();
    this.exercise7();
    this.exercise8();
  }

  public exercise2(): void {
    console.log('\nEXERCISE 2\n');
    const prime = 57;

    const e2Q1 = FieldElement.from(44, prime).add(FieldElement.from(33, prime));
    console.log(`44+33 = ${e2Q1}`);

    const e2Q2 = FieldElement.from(9, prime).subtract(FieldElement.from(29, prime));
    console.log(`9-29 = ${e2Q2}`);

    const e2Q3 = FieldElement.from(17, prime)
      .add(FieldElement.from(42, prime))
      .add(FieldElement.from(49, prime));
    console.log(`17+42+49 = ${e2Q3}`);

    const e2Q4 = FieldElement.from(52, prime)
      .subtract(FieldElement.from(30, prime))
      .subtract(FieldElement.from(38, prime));
    console.log(`52-30-38 = ${e2Q4}`);
  }

  public exercise4(): void {
    console.log('\nEXERCISE 4\n');
    const prime = 97;

    const e4Q1 = FieldElement.from(95, prime)
      .multiply(FieldElement.from(45, prime))
      .multiply(FieldElement.from(31, prime));
    console.log(`95*45*31 = ${e4Q1}`);

    const e4Q2 = FieldElement.from(17, prime)
      .multiply(FieldElement.from(13, prime))
      .multiply(FieldElement.from(19, prime))
      .multiply(FieldElement.from(44, prime));
    console.log(`17*13*19*44 = ${e4Q2}`);

    const twelveToTheSeventh = FieldElement.from(12, prime).pow(7);
    const seventySevenToTheFortyNinth = FieldElement.from(77, prime).pow(49);
    const e4Q3 = twelveToTheSeventh.multiply(seventySevenToTheFortyNinth);
    console.log(`12^7 * 77^49 = ${e4Q3}`);
  }

  public exercise5(): void {
    console.log('\nEXERCISE 5\n');
    const prime = 23;

    const kValues = [1, 3, 4, 5, 6, 7, 13, 18];
    const kValueMap: ArrayDictionary = {};
    kValues.forEach(
      (k): void => {
        kValueMap[k] = [];
        console.log(`calculating for k = ${k} and prime = ${prime}`);
        for (let i = 0; i < prime; i++) {
          let value = (k * i) % prime;
          kValueMap[k].push(value);
        }
        console.log(
          kValueMap[k].sort(
            (a, b): number => {
              return a - b;
            },
          ),
        );
      },
    );
  }
  public exercise7(): void {
    console.log('\nEXERCISE 7\n');
    const primes = [7, 11, 17, 31];
    let results: ArrayDictionary = {};
    primes.forEach(
      (prime): void => {
        results[prime] = [];
        for (let i = 1; i < prime; i++) {
          let fieldElement = FieldElement.from(i, prime).pow(prime - 1);
          results[prime].push(fieldElement.number.toNumber());
        }
        console.log(results[prime]);
      },
    );
  }
  public exercise8(): void {
    console.log('\nEXERCISE 8\n');

    const prime = 31;
    const three = FieldElement.from(3, prime);
    const twentyFour = FieldElement.from(24, prime);
    const e8Q1 = three.divide(twentyFour);
    console.log(`3/24 = ${e8Q1}`);

    const seventeen = FieldElement.from(17, prime);
    // 17^-3 = 17^-3 * 17^(p-1) = 17^p-4
    const e8Q2 = seventeen.pow(-3);
    console.log(`17^-3 = ${e8Q2}`);

    const four = FieldElement.from(4, prime);
    const eleven = FieldElement.from(11, prime);
    // 4^-4 = 4^-4 * 4^(p-1) = 4^p-5
    const e8Q3 = four.pow(-4).multiply(eleven);
    console.log(`4^-4 * 11 = ${e8Q3}`);
  }
}

export default Chapter1;
