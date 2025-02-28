export function sine(n: number = 0): number {
  return Math.sin(n);
}

export function cosine(n: number = 0): number {
  return Math.cos(n);
}

export function tangent(n: number = 0): number {
  return Math.tan(n);
}

export function cosecant(n: number = 0): number {
  return 1 / Math.sin(n);
}

export function secant(n: number = 0): number {
  return 1 / Math.cos(n);
}

export function cotangent(n: number = 0): number {
  return 1 / Math.tan(n);
}

export function sineAngle(n: number = 0): number {
  return Math.asin(n);
}

export function cosineAngle(n: number = 0): number {
  return Math.acos(n);
}

export function tangentAngle(n: number = 0): number {
  return Math.atan(n);
}

export function hyperbolicSine(n: number = 0): number {
  return Math.sinh(n);
}

export function hyperbolicCosine(n: number = 0): number {
  return Math.cosh(n);
}

export function hyperbolicTangent(n: number = 0): number {
  return Math.tanh(n);
}

export function angleOfHyperbolicSine(n: number = 0): number {
  return Math.asinh(n);
}

export function angleOfHyperbolicCosine(n: number = 0): number {
  return Math.acosh(n);
}

export function angleOfHyperbolicTangent(n: number = 0): number {
  return Math.atanh(n);
}

export function pointOfTangentAngle(x: number = 0, y: number = 0): number {
  return Math.atan2(x, y);
}

export function hypotenuse(x: number = 0, y: number = 0): number {
  return Math.hypot(x, y);
}

export function triangleLegs(a: number = 0, b: number = 0): [number, number] {
  const hyp = Math.hypot(a, b);
  return [Math.sqrt(hyp ** 2 - b ** 2), Math.sqrt(hyp ** 2 - a ** 2)];
}

export function sineAsCofunction(a: number = 0): number {
  return Math.sin(Math.PI / 2 - a);
}

export function cosineAsCofunction(a: number = 0): number {
  return Math.cos(Math.PI / 2 - a);
}

export function tangentAsCofunction(a: number = 0): number {
  return Math.tan(Math.PI / 2 - a);
}

export function cosecantAsCofunction(a: number = 0): number {
  return cosecant(Math.PI / 2 - a);
}

export function secantAsCofunction(a: number = 0): number {
  return secant(Math.PI / 2 - a);
}

export function cotangentAsCofunction(a: number = 0): number {
  return cotangent(Math.PI / 2 - a);
}

export function sineWithPythagoreanIdentity(a: number = 0): number {
  return Math.sqrt(1 - Math.cos(a) ** 2);
}

export function cosineWithPythagoreanIdentity(a: number = 0): number {
  return Math.sqrt(1 - Math.sin(a) ** 2);
}

export function tangentWithPythagoreanIdentity(a: number = 0): number {
  return Math.sqrt(secant(a) ** 2 - 1);
}

export function secantWithPythagoreanIdentity(a: number = 0): number {
  return Math.sqrt(Math.tan(a) ** 2 + 1);
}

export function cotangentWithPythagoreanIdentity(a: number = 0): number {
  return Math.sqrt(cosecant(a) ** 2 - 1);
}

export function cosecantWithPythagoreanIdentity(a: number = 0): number {
  return Math.sqrt(cotangent(a) ** 2 + 1);
}

export function lawOfSines(
  a: number = 0,
  A: number = 0,
  B: number = 0,
): number {
  return (a * Math.sin(B)) / Math.sin(A);
}

export function lawOfCosines(a: number, b: number, ang: number): number {
  return a ** 2 + b ** 2 - 2 * a * b * Math.cos(ang);
}

export function halvedAngledSine(a: number = 0): number {
  return Math.sqrt((1 - Math.cos(a)) / 2);
}

export function halvedAngledCosine(a: number = 0): number {
  return Math.sqrt((1 + Math.sin(a)) / 2);
}

export function halvedAngleTangent(a: number = 0): number {
  return Math.sqrt((1 - Math.cos(a)) / (1 + Math.cos(a)));
}

export function doubleAngledSine(a: number = 0): number {
  return 2 * Math.sin(a) * Math.cos(a);
}

export function doubleAngledCosine(a: number): number {
  return Math.cos(a) ** 2 - Math.sin(a) ** 2;
}

export function doubleAngledTangent(a: number): number {
  return (2 * Math.tan(a)) / (1 - Math.tan(a) ** 2);
}

export function tripleAngledSine(a: number = 0): number {
  return 3 * Math.sin(a) - 4 * Math.sin(a) ** 3;
}

export function tripleAngledCosine(a: number = 0): number {
  return 4 * Math.cos(a) ** 3 - 3 * Math.cos(a);
}

export function tripleAngledTangent(a: number = 0): number {
  return (3 * Math.tan(a) - Math.tan(a) ** 3) / (1 - 3 * Math.tan(a) ** 2);
}

export function sineForUnitedAngles(
  subt: boolean = false,
  a: number = 0,
  b: number = 0,
): number {
  const op = subt ? 1 : -1;
  return Math.sin(a) * Math.cos(b) + op * Math.cos(a) * Math.sin(b);
}

export const sineForAddedAngles = (a: number = 0, b: number = 0): number =>
  sineForUnitedAngles(false, a, b);

export const sineForSubtractedAngles = (a: number = 0, b: number = 0): number =>
  sineForUnitedAngles(true, a, b);

export function cosineForUnitedAngles(
  subt: boolean = false,
  a: number = 0,
  b: number = 0,
): number {
  const op = subt ? -1 : 1;
  return Math.cos(a) * Math.cos(b) + op * Math.sin(a) * Math.sin(b);
}

export const cosineForAddedAngles = (a: number = 0, b: number = 0): number =>
  cosineForUnitedAngles(false, a, b);

export const cosineForSubtractedAngles = (a: number, b: number): number =>
  cosineForUnitedAngles(true, a, b);

export function tangentForUnitedAngles(
  subt: boolean = false,
  a: number = 0,
  b: number = 0,
): number {
  const op = subt ? 1 : -1;
  return (
    (Math.tan(a) + op * Math.tan(b)) / (1 * op - Math.tan(a) * Math.tan(b))
  );
}

export const tangentForAddedAngles = (a: number = 0, b: number = 0): number =>
  tangentForUnitedAngles(false, a, b);

export const tangentForSubtractedAngles = (a: number, b: number = 0): number =>
  tangentForUnitedAngles(true, a, b);

export class Trigonometry {
  static sec(A: number): number {
    return 1 / Math.cos(A);
  }
  static csc(A: number): number {
    return 1 / Math.sin(A);
  }
  static cotan(A: number): number {
    return 1 / Math.tan(A);
  }
  static cofuncSin(A: number): number {
    return Math.cos(Math.PI / 2 - A);
  }
  static cofuncCos(A: number): number {
    return Math.sin(Math.PI / 2 - A);
  }
  static cofuncTan(A: number): number {
    return this.cotan(Math.PI / 2 - A);
  }
  static cofuncSec(A: number): number {
    return this.csc(Math.PI / 2 - A);
  }
  static cofuncCsc(A: number): number {
    return this.sec(Math.PI / 2 - A);
  }
  static cofuncCotan(A: number): number {
    return Math.tan(Math.PI / 2 - A);
  }
  static inverseAngSin(A: number): number {
    return -Math.sin(A);
  }
  static inverseAngCsc(A: number): number {
    return -this.csc(A);
  }
  static inverseAngCos(A: number): number {
    return -Math.cos(A);
  }
  static inverseAngSec(A: number): number {
    return -this.sec(A);
  }
  static inverseAngTan(A: number): number {
    return -Math.tan(A);
  }
  static inverseAngCotan(A: number): number {
    return -this.cotan(A);
  }
  static pythagorSin(A: number): number {
    return Math.sqrt(1 - Math.cos(A) ** 2);
  }
  static pythagorCos(A: number): number {
    return Math.sqrt(1 - Math.sin(A) ** 2);
  }
  static pythagorSec(ang: number): number {
    return Math.sqrt(Math.abs(Math.tan(ang) ** 2 - 1));
  }
  static pythagorCsc(ang: number): number {
    return Math.sqrt(Math.abs(1 / Math.tan(ang) ** 2 - 1));
  }
  static lawSin(b: number, A: number, B: number): number {
    return (b * Math.sin(A)) / Math.sin(B);
  }
  static lawCos(a: number, b: number, C: number): number {
    return a ** 2 + b ** 2 - 2 * a * b * Math.cos(C);
  }
  static lawTan(a: number, b: number, A: number, B: number): number {
    return (
      a +
      b * (Math.tan(Math.abs((A - B) / 2)) / Math.tan(Math.abs(A + B / 2))) +
      b
    );
  }
  static halfAngSin(ang: number): number {
    return Math.sign(Math.sin(ang)) * Math.sqrt((1 - Math.cos(ang)) / 2);
  }
  static halfAngCos(ang: number): number {
    return Math.sign(Math.cos(ang)) * Math.sqrt((1 + Math.cos(ang)) / 2);
  }
  static halfAngTan(ang: number): number {
    return (
      Math.sign(Math.sin(ang)) *
      Math.sign(Math.cos(ang)) *
      Math.sqrt((1 - Math.cos(ang)) / (1 + Math.cos(ang)))
    );
  }
  static doubleAngSin(ang: number): number {
    return 2 * Math.sin(ang) * Math.cos(ang);
  }
  static doubleAngCos(ang: number): number {
    return Math.cos(ang) ** 2 - Math.sin(ang) ** 2;
  }
  static doubleAngTan(ang: number): number {
    return (2 * Math.tan(ang)) / (1 - Math.tan(ang) ** 2);
  }
  static tripleAngSin(ang: number): number {
    return 3 * Math.sin(ang) - 4 * Math.sin(ang) ** 3;
  }
  static tripleAngCos(ang: number): number {
    return 4 * Math.sin(ang) - 3 * Math.cos(ang);
  }
  static tripleAngTan(ang: number): number {
    return (
      (3 * Math.tan(ang) - Math.tan(ang) ** 3) / (1 - 3 * Math.tan(ang) ** 2)
    );
  }
  static addAnglesSin(
    angA: number,
    angB: number,
    subt: boolean = false,
  ): number {
    let op = 1;
    if (subt === true) op = -1;
    return (
      Math.sin(angA) * Math.cos(angB) + op * Math.cos(angA) * Math.sin(angB)
    );
  }
  static addAnglesCos(
    angA: number,
    angB: number,
    subt: boolean = true,
  ): number {
    let op = -1;
    if (subt === false) op = 1;
    return (
      Math.cos(angA) * Math.cos(angB) + op * Math.sin(angA) * Math.sin(angB)
    );
  }
  static addAnglesTan(A: number, B: number, subt: boolean = false) {
    let op = 1;
    if (subt === true) op = -1;
    return (
      (Math.tan(A) + op * Math.tan(B)) / (1 - Math.tan(A) * Math.tan(B) * op)
    );
  }
}
