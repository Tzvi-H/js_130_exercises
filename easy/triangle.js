class Triangle {
  constructor(...sides) {
    this.sides = sides;
  }

  validateTriangle(side1, side2, side3) {
    if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
      throw new Error('each side needs to be greater than 0');
    } else if (
      side1 + side2 < side3 ||
      side1 + side3 < side2 ||
      side2 + side3 < side1
    ) throw new Error('violation of triangle inequality')
  }

  kind() {
    this.validateTriangle(...this.sides);

    let [ side1, side2, side3 ] = this.sides;

    if (side1 === side2 && side1 === side3) {
      return 'equilateral';
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
      return 'isosceles';
    } else {
      return 'scalene';
    }
  }
}

module.exports = Triangle;
