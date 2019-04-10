export const mod = (x: number, n: number): number => {
  return ((x % n) + n) % n;
};
