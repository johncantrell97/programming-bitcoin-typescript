import Point from '../src/Point';

describe('Point', (): void => {
  describe('constructor', (): void => {
    it('should not throw an exception if coordinates are on the curve', (): void => {
      const x = -1;
      const y = -1;
      const a = 5;
      const b = 7;
      const point = new Point(x, y, a, b);
      expect(point).toBeDefined();
    });

    it('should not throw an exception if coordinates represent the infinity point', (): void => {
      const x: number = null;
      const y: number = null;
      const a = 5;
      const b = 7;
      const point = new Point(x, y, a, b);
      expect(point).toBeDefined();
    });

    it('should throw an exception if coordinates are not on the curve', (): void => {
      const x = -1;
      const y = -2;
      const a = 5;
      const b = 7;

      expect(
        (): void => {
          new Point(x, y, a, b);
        },
      ).toThrow();
    });
  });

  describe('equal', (): void => {
    it('should return true if the coordinates and the curves are equal', (): void => {
      const x = -1;
      const y = -1;
      const a = 5;
      const b = 7;
      const point1 = new Point(x, y, a, b);
      const point2 = new Point(x, y, a, b);
      expect(point1.equal(point2)).toBe(true);
    });

    it('should return false if the coordinates are different', (): void => {
      const x = -1;
      const y = -1;
      const x2 = 2;
      const y2 = 5;
      const a = 5;
      const b = 7;

      const point1 = new Point(x, y, a, b);
      const point2 = new Point(x2, y2, a, b);
      expect(point1.equal(point2)).toBe(false);
    });

    it('should return false if the curves are different', (): void => {
      const x = -1;
      const y = -1;
      const a = 5;
      const b = 7;
      const a2 = 6;
      const b2 = 8;

      const point1 = new Point(x, y, a, b);
      const point2 = new Point(x, y, a2, b2);
      expect(point1.equal(point2)).toBe(false);
    });
  });

  describe('notEqual', (): void => {
    it('should return false if the coordinates and the curves are the same', (): void => {
      const x = -1;
      const y = -1;
      const a = 5;
      const b = 7;
      const point1 = new Point(x, y, a, b);
      const point2 = new Point(x, y, a, b);
      expect(point1.notEqual(point2)).toBe(false);
    });

    it('should return true if the coordinates are different', (): void => {
      const x = -1;
      const y = -1;
      const x2 = 2;
      const y2 = 5;
      const a = 5;
      const b = 7;

      const point1 = new Point(x, y, a, b);
      const point2 = new Point(x2, y2, a, b);
      expect(point1.notEqual(point2)).toBe(true);
    });

    it('should return true if the curves are different', (): void => {
      const x = -1;
      const y = -1;
      const a = 5;
      const b = 7;
      const a2 = 6;
      const b2 = 8;

      const point1 = new Point(x, y, a, b);
      const point2 = new Point(x, y, a2, b2);
      expect(point1.notEqual(point2)).toBe(true);
    });
  });

  describe('isAtInfinity', (): void => {
    it('should return true if the coordinates are both null', (): void => {
      const x: number = null;
      const y: number = null;
      const a = 5;
      const b = 7;
      const point = new Point(x, y, a, b);
      expect(point.isAtInfinity()).toBe(true);
    });
    it('should return false if the coordinates are not null', (): void => {
      const x = -1;
      const y = -1;
      const a = 5;
      const b = 7;
      const point = new Point(x, y, a, b);
      expect(point.isAtInfinity()).toBe(false);
    });
  });

  describe('isSameCurveAs', (): void => {
    it('should return true if the points are on the same curve', (): void => {
      const x1 = -1;
      const y1 = -1;
      const x2: number = null;
      const y2: number = null;
      const a = 5;
      const b = 7;
      const point1 = new Point(x1, y1, a, b);
      const point2 = new Point(x2, y2, a, b);
      expect(point1.isSameCurveAs(point2)).toBe(true);
    });

    it('should return false if the points are not on the same curve', (): void => {
      const x = -1;
      const y = -1;
      const a = 5;
      const b = 7;
      const a2 = 6;
      const b2 = 8;

      const point1 = new Point(x, y, a, b);
      const point2 = new Point(x, y, a2, b2);
      expect(point1.isSameCurveAs(point2)).toBe(false);
    });
  });

  describe('pointAtInfinity', (): void => {
    it('should return a point on the same curve with null coordinates', (): void => {
      const x = -1;
      const y = -1;
      const a = 5;
      const b = 7;
      const point = new Point(x, y, a, b);
      const pointAtInfinity = point.pointAtInfinity();
      expect(pointAtInfinity.x).toBe(null);
      expect(pointAtInfinity.y).toBe(null);
    });
  });

  describe('isAdditiveInverseOf', (): void => {
    it('should return true if the points are have the same x coordinate with different y coordinates', (): void => {
      const x1 = -1;
      const y1 = -1;
      const x2 = -1;
      const y2 = 1;
      const a = 5;
      const b = 7;
      const point1 = new Point(x1, y1, a, b);
      const point2 = new Point(x2, y2, a, b);
      expect(point1.isAdditiveInverseOf(point2)).toBe(true);
    });

    it('should return false if the points are not additive inverses of each other', (): void => {
      const x1 = -1;
      const y1 = -1;
      const x2 = 2;
      const y2 = 5;
      const a = 5;
      const b = 7;

      const point1 = new Point(x1, y1, a, b);
      const point2 = new Point(x2, y2, a, b);
      expect(point1.isAdditiveInverseOf(point2)).toBe(false);
    });
  });

  describe('slopeOfLineTo', (): void => {
    describe('when the points are equal', (): void => {
      it('should return the slope of the line tangent to the curve', (): void => {
        const x = -1;
        const y = -1;
        const a = 5;
        const b = 7;
        const point1 = new Point(x, y, a, b);
        const point2 = new Point(x, y, a, b);
        expect(point1.slopeOfLineTo(point2)).toBe(point1.slopeOfLineTangentToCurve());
      });
    });

    describe('when the points are not equal', (): void => {
      it('should return the slope of the line between the two points', (): void => {
        const x1 = -1;
        const y1 = -1;
        const x2 = 2;
        const y2 = 5;
        const a = 5;
        const b = 7;
        const point1 = new Point(x1, y1, a, b);
        const point2 = new Point(x2, y2, a, b);
        const slope = (y2 - y1) / (x2 - x1);
        expect(point1.slopeOfLineTo(point2)).toBe(slope);
      });
    });
  });

  describe('slopeOfLineTangentToCurve', (): void => {
    it('should return the slope of the line tangent to the curve', (): void => {
      const x = -1;
      const y = -1;
      const a = 5;
      const b = 7;
      const point1 = new Point(x, y, a, b);
      const slope = (3 * (x * x) + a) / (2 * y);
      expect(point1.slopeOfLineTangentToCurve()).toBe(slope);
    });
  });

  describe('add', (): void => {
    it('should return itself if trying to add a point at infinity', (): void => {
      const x1 = -1;
      const y1 = -1;
      const x2: number = null;
      const y2: number = null;
      const a = 5;
      const b = 7;
      const point1 = new Point(x1, y1, a, b);
      const point2 = new Point(x2, y2, a, b);
      expect(point1.add(point2)).toBe(point1);
    });

    it('should return the other point if trying to add something to a point at infinity', (): void => {
      const x1: number = null;
      const y1: number = null;
      const x2 = -1;
      const y2 = -1;
      const a = 5;
      const b = 7;
      const point1 = new Point(x1, y1, a, b);
      const point2 = new Point(x2, y2, a, b);
      expect(point1.add(point2)).toBe(point2);
    });

    it('should throw an exception if the two points are not on the same curve', (): void => {
      const x = -1;
      const y = -1;
      const a = 5;
      const b = 7;
      const a2 = 6;
      const b2 = 8;

      const point1 = new Point(x, y, a, b);
      const point2 = new Point(x, y, a2, b2);
      expect(
        (): void => {
          point1.add(point2);
        },
      ).toThrow();
    });

    it('should return a point at infinity if the two points are additive inverses of each other', (): void => {
      const x1 = -1;
      const y1 = -1;
      const x2 = -1;
      const y2 = 1;
      const a = 5;
      const b = 7;
      const point1 = new Point(x1, y1, a, b);
      const point2 = new Point(x2, y2, a, b);
      const pointAtInfinity = point1.pointAtInfinity();
      const point3 = point1.add(point2);
      expect(point3.equal(pointAtInfinity)).toBe(true);
    });

    it('should return a point at infinity if the two points are equal and the y coordinate is 0', (): void => {
      const x = 1;
      const y = 0;
      const a = -2;
      const b = 1;
      const point1 = new Point(x, y, a, b);
      const point2 = new Point(x, y, a, b);
      const pointAtInfinity = point1.pointAtInfinity();
      const point3 = point1.add(point2);
      expect(point3.equal(pointAtInfinity)).toBe(true);
    });

    it('should return the point at the third intersection of the two points reflected across the x axis', (): void => {
      const x1 = -1;
      const y1 = -1;
      const x2 = 2;
      const y2 = 5;
      const a = 5;
      const b = 7;
      const point1 = new Point(x1, y1, a, b);
      const point2 = new Point(x2, y2, a, b);

      const slope = point1.slopeOfLineTo(point2);
      const x3 = slope * slope - point1.x - point2.x;
      const y3 = slope * (point1.x - x3) - point1.y;
      const point3 = new Point(x3, y3, a, b);
      const sum = point1.add(point2);
      expect(point3.equal(sum)).toBe(true);
    });
  });
});
