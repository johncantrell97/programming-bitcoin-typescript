import FieldElement from '../src/FieldElement';
import { mod } from '../src/helpers/mod';

describe('FieldElement', (): void => {
  describe('constructor', (): void => {
    it('should not throw an exception if number is within the range {0..prime-1}', (): void => {
      const prime = 3;
      const number = 2;
      const fieldElement = FieldElement.from(number, prime);
      expect(fieldElement).toBeDefined();
    });
    it('should throw an exception if number is greater than or equal to prime', (): void => {
      const prime = 3;
      const number = 4;
      expect(
        (): void => {
          FieldElement.from(number, prime);
        },
      ).toThrow();
    });
    it('should throw an exception if number is less than 0', (): void => {
      const prime = 3;
      const number = -1;
      expect(
        (): void => {
          FieldElement.from(number, prime);
        },
      ).toThrow();
    });
  });

  describe('equal', (): void => {
    it('should return true if both number and prime are equal', (): void => {
      const fieldElement1 = FieldElement.from(1, 3);
      const fieldElement2 = FieldElement.from(1, 3);
      expect(fieldElement1.equal(fieldElement2)).toBe(true);
    });

    it('should return false if number are different and prime are equal', (): void => {
      const fieldElement1 = FieldElement.from(1, 3);
      const fieldElement2 = FieldElement.from(2, 3);
      expect(fieldElement1.equal(fieldElement2)).toBe(false);
    });

    it('should return false if number are equal and prime are different', (): void => {
      const fieldElement1 = FieldElement.from(1, 3);
      const fieldElement2 = FieldElement.from(1, 5);
      expect(fieldElement1.equal(fieldElement2)).toBe(false);
    });

    it('should return false if number and prime are both different', (): void => {
      const fieldElement1 = FieldElement.from(1, 3);
      const fieldElement2 = FieldElement.from(2, 5);
      expect(fieldElement1.equal(fieldElement2)).toBe(false);
    });
  });

  describe('notEqual', (): void => {
    it('should return false if both number and prime are equal', (): void => {
      const fieldElement1 = FieldElement.from(1, 3);
      const fieldElement2 = FieldElement.from(1, 3);
      expect(fieldElement1.notEqual(fieldElement2)).toBe(false);
    });

    it('should return true if number are different and prime are equal', (): void => {
      const fieldElement1 = FieldElement.from(1, 3);
      const fieldElement2 = FieldElement.from(2, 3);
      expect(fieldElement1.notEqual(fieldElement2)).toBe(true);
    });

    it('should return true if number are equal and prime are different', (): void => {
      const fieldElement1 = FieldElement.from(1, 3);
      const fieldElement2 = FieldElement.from(1, 5);
      expect(fieldElement1.notEqual(fieldElement2)).toBe(true);
    });

    it('should return true if number and prime are both different', (): void => {
      const fieldElement1 = FieldElement.from(1, 3);
      const fieldElement2 = FieldElement.from(2, 5);
      expect(fieldElement1.notEqual(fieldElement2)).toBe(true);
    });
  });

  describe('add', (): void => {
    it('number should equal (a+b)%p', (): void => {
      const a = 1;
      const b = 2;
      const p = 3;
      const fieldElement1 = FieldElement.from(a, p);
      const fieldElement2 = FieldElement.from(b, p);
      const fieldElement3 = fieldElement1.add(fieldElement2);
      expect(fieldElement3.number.toNumber()).toBe(mod(a + b, p));
    });

    it('prime should be unchanged', (): void => {
      const a = 1;
      const b = 2;
      const p = 3;
      const fieldElement1 = FieldElement.from(a, p);
      const fieldElement2 = FieldElement.from(b, p);
      const fieldElement3 = fieldElement1.add(fieldElement2);
      expect(fieldElement3.prime.toNumber()).toBe(p);
    });

    it('should throw an exception if elements are not in the same field', (): void => {
      const fieldElement1 = FieldElement.from(1, 3);
      const fieldElement2 = FieldElement.from(2, 5);
      expect(
        (): void => {
          fieldElement1.add(fieldElement2);
        },
      ).toThrow();
    });
  });

  describe('subtract', (): void => {
    it('number should equal (a-b)%p', (): void => {
      const a = 1;
      const b = 2;
      const p = 3;
      const fieldElement1 = FieldElement.from(a, p);
      const fieldElement2 = FieldElement.from(b, p);
      const fieldElement3 = fieldElement1.subtract(fieldElement2);
      expect(fieldElement3.number.toNumber()).toBe(mod(a - b, p));
    });

    it('prime should be unchanged', (): void => {
      const a = 1;
      const b = 2;
      const p = 3;
      const fieldElement1 = FieldElement.from(a, p);
      const fieldElement2 = FieldElement.from(b, p);
      const fieldElement3 = fieldElement1.subtract(fieldElement2);
      expect(fieldElement3.prime.toNumber()).toBe(p);
    });

    it('should throw an exception if elements are not in the same field', (): void => {
      const fieldElement1 = FieldElement.from(1, 3);
      const fieldElement2 = FieldElement.from(2, 5);
      expect(
        (): void => {
          fieldElement1.subtract(fieldElement2);
        },
      ).toThrow();
    });
  });

  describe('multiply', (): void => {
    it('number should equal (a*b)%p', (): void => {
      const a = 95;
      const b = 45;
      const p = 97;
      const fieldElement1 = FieldElement.from(a, p);
      const fieldElement2 = FieldElement.from(b, p);
      const fieldElement3 = fieldElement1.multiply(fieldElement2);
      expect(fieldElement3.number.toNumber()).toBe(mod(a * b, p));
    });

    it('prime should be unchanged', (): void => {
      const a = 95;
      const b = 45;
      const p = 97;
      const fieldElement1 = FieldElement.from(a, p);
      const fieldElement2 = FieldElement.from(b, p);
      const fieldElement3 = fieldElement1.multiply(fieldElement2);
      expect(fieldElement3.prime.toNumber()).toBe(p);
    });

    it('should throw an exception if elements are not in the same field', (): void => {
      const fieldElement1 = FieldElement.from(1, 3);
      const fieldElement2 = FieldElement.from(2, 5);
      expect(
        (): void => {
          fieldElement1.multiply(fieldElement2);
        },
      ).toThrow();
    });
  });

  describe('pow', (): void => {
    it('number should equal (a^n)%p', (): void => {
      const a = 12;
      const n = 7;
      const p = 97;
      const fieldElement1 = FieldElement.from(a, p);
      const fieldElement2 = fieldElement1.pow(n);
      expect(fieldElement2.number.toNumber()).toBe(mod(a ** n, p));
    });

    it('prime should be unchanged', (): void => {
      const a = 12;
      const n = 7;
      const p = 97;
      const fieldElement1 = FieldElement.from(a, p);
      const fieldElement2 = fieldElement1.pow(n);
      expect(fieldElement2.prime.toNumber()).toBe(p);
    });
  });

  describe('divide', (): void => {
    it('number should equal (a/b)%p', (): void => {
      const a = 3;
      const b = 24;
      const p = 31;
      const fieldElement1 = FieldElement.from(a, p);
      const fieldElement2 = FieldElement.from(b, p);
      const fieldElement3 = fieldElement1.divide(fieldElement2);
      expect(fieldElement3.number.toNumber()).toBe(4);
    });

    it('prime should be unchanged', (): void => {
      const a = 95;
      const b = 45;
      const p = 97;
      const fieldElement1 = FieldElement.from(a, p);
      const fieldElement2 = FieldElement.from(b, p);
      const fieldElement3 = fieldElement1.divide(fieldElement2);
      expect(fieldElement3.prime.toNumber()).toBe(p);
    });

    it('should throw an exception if elements are not in the same field', (): void => {
      const fieldElement1 = FieldElement.from(1, 3);
      const fieldElement2 = FieldElement.from(2, 5);
      expect(
        (): void => {
          fieldElement1.divide(fieldElement2);
        },
      ).toThrow();
    });
  });
});
