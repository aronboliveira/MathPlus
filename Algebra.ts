export class Algebra {
  static factorial(n: number): number {
    return n === 0 || n === 1 ? 1 : n * this.factorial(n - 1);
  }
  static linearEquation(a: number, b: number): number {
    return -(b / a);
  }
  static quadraticEquation(a: number, b: number, c: number): number {
    return (
      (-b +
        Math.sign(b ** 2 - 4 * a * c) *
          Math.sqrt(Math.abs(b ** 2 - 4 * a * c))) /
      (2 * a)
    );
  }
  static cubicEquation(
    a: number,
    b: number,
    c: number,
    d: number,
    x: number
  ): number {
    return a * x ** 3 + b * x ** 2 + c * x ** 1 + d;
  }
  static diffSquares(a: number, b: number): number {
    return Math.sqrt((a + b) * (a - b) + b ** 2);
  }
  static binm(a: number, b: number, n: number, subtr: boolean = false): number {
    const nInt = n - 1;
    let op = 1,
      result = a ** n + b ** n,
      pow_1 = n - 1,
      pow_2 = 1;
    if (subtr === true) op = -1;
    for (let i = 0; i <= nInt; i++) {
      i === 0 || i % 2 === 0
        ? (result +=
            op *
            ((n * (n - pow_2)) / this.factorial(pow_2 + 1)) *
            a ** pow_1 *
            b ** pow_2)
        : (result +=
            ((n * (n - pow_2) * (n - (pow_2 + 1))) /
              this.factorial(pow_2 + 1)) *
            a ** pow_1 *
            b ** pow_2);
      if (pow_1 > 0) --pow_1;
      ++pow_2;
    }
    return result;
  }
}
