class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  static validTriangle(triangle) {
    return (
      triangle.side1 > 0 &&
      triangle.side2 > 0 &&
      triangle.side3 > 0
    ) && (
      triangle.side1 <= triangle.side2 + triangle.side3 &&
      triangle.side2 <= triangle.side1 + triangle.side3 &&
      triangle.side3 <= triangle.side1 + triangle.side2
    );
  }

  static equilateral(triangle) {
    return (
      triangle.side1 === triangle.side2 &&
      triangle.side1 === triangle.side3
    );
  }

  static isosceles(triangle) {
    return (
      triangle.side1 === triangle.side2 ||
      triangle.side1 === triangle.side3 ||
      triangle.side2 === triangle.side3
    );
  }

  static scalene(triangle) {
    return (
      triangle.side1 !== triangle.side2 &&
      triangle.side1 !== triangle.side3 &&
      triangle.side2 !== triangle.side3
    );
  }

  kind() {
    if (!Triangle.validTriangle(this)) {
      throw new TypeError('not a valid triangle');
    } else if (Triangle.equilateral(this)) {
      return 'equilateral';
    } else if (Triangle.isosceles(this)) {
      return 'isosceles';
    } else if (Triangle.scalene(this)) {
      return 'scalene';
    } else {
      return null;
    }
  }
}

module.exports = Triangle;
