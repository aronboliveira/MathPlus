export class Algebra {
  static factorial(n: number = 0): number {
    return n === 0 || n === 1 ? 1 : n * this.factorial(n - 1);
  }
  static linearEquation(a: number = 0, b: number = 0): number {
    return -(b / a);
  }
  static quadraticEquation(
    a: number = 0,
    b: number = 0,
    c: number = 0,
  ): number {
    return (
      (-b +
        Math.sign(b ** 2 - 4 * a * c) *
          Math.sqrt(Math.abs(b ** 2 - 4 * a * c))) /
      (2 * a)
    );
  }
  static cubicEquation(
    a: number = 0,
    b: number = 0,
    c: number = 0,
    d: number = 0,
    x: number = 0,
  ): number {
    return a * x ** 3 + b * x ** 2 + c * x ** 1 + d;
  }
  static diffSquares(a: number = 0, b: number = 0): number {
    return Math.sqrt((a + b) * (a - b) + b ** 2);
  }
  static binm(
    a: number = 0,
    b: number = 0,
    n: number = 0,
    subtr: boolean = false,
  ): number {
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

export function factorial(n: number = 0): number {
  return n === 0 || n === 1 ? 1 : n * factorial(n - 1);
}

export function linearFormula(a: number = 0, b: number = 0): number {
  return -(b / a);
}

export function quadraticFormula(
  a: number = 0,
  b: number = 0,
  c: number = 0,
): number {
  return (
    (-b +
      Math.sign(b ** 2 - 4 * a * c) * Math.sqrt(Math.abs(b ** 2 - 4 * a * c))) /
    (2 * a)
  );
}

export function cubicFormula(
  a: number = 0,
  b: number = 0,
  c: number = 0,
  d: number = 0,
  x: number = 0,
): number {
  return a * x ** 3 + b * x ** 2 + c * x ** 1 + d;
}

export function differenceOfSquares(a: number = 0, b: number = 0): number {
  return Math.sqrt((a + b) * (a - b) + b ** 2);
}

export function binomialTheorem(
  a: number = 0,
  b: number = 0,
  n: number = 0,
  subtr: boolean = false,
): number {
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
          ((n * (n - pow_2)) / factorial(pow_2 + 1)) *
          a ** pow_1 *
          b ** pow_2)
      : (result +=
          ((n * (n - pow_2) * (n - (pow_2 + 1))) / factorial(pow_2 + 1)) *
          a ** pow_1 *
          b ** pow_2);
    if (pow_1 > 0) --pow_1;
    ++pow_2;
  }
  return result;
}
