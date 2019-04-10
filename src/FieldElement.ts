import BN from 'bn.js';

class FieldElement {
  public number: BN;
  public prime: BN;

  public constructor(number: BN, prime: BN) {
    this.number = number;
    this.prime = prime;

    if (this.number.gte(this.prime) || this.number.ltn(0)) {
      throw `Number ${this.number} not in field range 0 to ${this.prime.subn(1)}`;
    }
  }

  public static from(number: number, prime: number): FieldElement {
    return new FieldElement(new BN(number), new BN(prime));
  }

  public equal(fieldElement: FieldElement): boolean {
    return this.number.eq(fieldElement.number) && this.prime.eq(fieldElement.prime);
  }

  public notEqual(fieldElement: FieldElement): boolean {
    return !this.equal(fieldElement);
  }

  public add(fieldElement: FieldElement): FieldElement {
    if (!this.sameFiniteField(fieldElement)) {
      throw 'FieldElements must be from the same finite field';
    }
    const result = this.number.add(fieldElement.number).umod(this.prime);
    return new FieldElement(result, this.prime.clone());
  }

  public subtract(fieldElement: FieldElement): FieldElement {
    if (!this.sameFiniteField(fieldElement)) {
      throw 'FieldElements must be from the same finite field';
    }

    const result = this.number.sub(fieldElement.number).umod(this.prime);
    return new FieldElement(result, this.prime.clone());
  }

  public multiply(fieldElement: FieldElement): FieldElement {
    if (!this.sameFiniteField(fieldElement)) {
      throw 'FieldElements must be from the same finite field';
    }

    const result = this.number.mul(fieldElement.number).umod(this.prime);
    return new FieldElement(result, this.prime);
  }

  public pow(exponent: number): FieldElement {
    const primeMinusOne = this.prime.sub(new BN(1));
    const n = new BN(exponent).umod(primeMinusOne);
    const result = this.number.pow(n).umod(this.prime);
    return new FieldElement(result, this.prime.clone());
  }

  public divide(fieldElement: FieldElement): FieldElement {
    if (!this.sameFiniteField(fieldElement)) {
      throw 'FieldElements must be from the same finite field';
    }
    const primeMinusTwo = this.prime.sub(new BN(2));
    const result = this.number.mul(fieldElement.number.pow(primeMinusTwo)).umod(this.prime);
    return new FieldElement(result, this.prime.clone());
  }

  public toString(): string {
    return `${this.number}`;
  }

  public sameFiniteField(fieldElement: FieldElement): boolean {
    return this.prime.eq(fieldElement.prime);
  }
}

export default FieldElement;
