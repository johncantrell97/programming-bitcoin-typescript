import { mod } from '../../src/helpers/mod';

describe('mod', (): void => {
  it('should work for positive numbers', (): void => {
    expect(mod(10, 4)).toBe(2);
  });

  it('should work for negative numbers', (): void => {
    expect(mod(-3, 2)).toBe(1);
  });
});
