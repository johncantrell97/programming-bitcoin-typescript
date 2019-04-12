class Point {
  public x: number;
  public y: number;
  public a: number;
  public b: number;

  public constructor(x: number, y: number, a: number, b: number) {
    this.x = x;
    this.y = y;
    this.a = a;
    this.b = b;
    if (this.isAtInfinity()) {
      return;
    }
    if (y ** 2 != this.x ** 3 + this.a * this.x + this.b) {
      throw `(${this.x},${this.y}) is not on this curve`;
    }
  }

  public equal(other: Point): boolean {
    return this.a == other.a && this.b == other.b && this.x == other.x && this.y == other.y;
  }

  public notEqual(other: Point): boolean {
    return !this.equal(other);
  }

  public isAtInfinity(): boolean {
    return this.x == null && this.y == null;
  }

  public add(other: Point): Point {
    if (!this.isSameCurveAs(other)) {
      throw `cannot add points on different curves`;
    }

    if (this.isAtInfinity()) {
      return other;
    }

    if (other.isAtInfinity()) {
      return this;
    }

    if (this.isAdditiveInverseOf(other)) {
      return this.pointAtInfinity();
    }

    if (this.equal(other) && this.y == 0) {
      return this.pointAtInfinity();
    }

    const slope = this.slopeOfLineTo(other);
    const x3 = slope * slope - this.x - other.x;
    const y3 = slope * (this.x - x3) - this.y;

    return new Point(x3, y3, this.a, this.b);
  }

  public slopeOfLineTo(other: Point): number {
    if (this.equal(other)) {
      return this.slopeOfLineTangentToCurve();
    } else {
      return (other.y - this.y) / (other.x - this.x);
    }
  }

  public slopeOfLineTangentToCurve(): number {
    return (3 * (this.x * this.x) + this.a) / (2 * this.y);
  }

  public isSameCurveAs(other: Point): boolean {
    return this.a == other.a && this.b == other.b;
  }

  public isAdditiveInverseOf(other: Point): boolean {
    return this.x == other.x && this.y != other.y;
  }

  public pointAtInfinity(): Point {
    return new Point(null, null, this.a, this.b);
  }

  public toString(): string {
    return `(${this.x},${this.y})`;
  }
}

export default Point;
