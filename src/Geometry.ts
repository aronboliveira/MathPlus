export class Geometry2D {
  static triangleArea(b: number, h: number): number {
    return (b * h) / 2;
  }
  static trianglePr(a: number, b: number, c: number): number {
    return a + b + c;
  }
  static rectArea(b: number, h: number): number {
    return b * h;
  }
  static rectPr(a: number, b: number): number {
    return 2 * a + 2 * b;
  }
  static trapezoidArea(a: number, b: number, h: number): number {
    return ((a + b) / 2) * h;
  }
  static trapezoidPr(a: number, b: number, c: number, d: number): number {
    return a + b + c + d;
  }
  static parallelogramArea(b: number, h: number): number {
    return b * h;
  }
  static parallelogramPr(a: number, b: number): number {
    return 2 * (a + b);
  }
  static ellipsisArea(a: number, b: number): number {
    return Math.PI * a * b;
  }
  static ellipsisPr(a: number, b: number): number {
    const h = (a - b) ** 2 / (a + b) ** 2;
    return Math.PI * (a + b) * (1 + (3 * h) / (10 + Math.sqrt(4 - 3 * h)));
  }
  static circlePr(r: number): number {
    return 2 * Math.PI * r;
  }
  static circleRing(R: number, r: number): number {
    return Math.PI * (R ** 2 - r ** 2);
  }
  static circleSectorArea(r: number, ang: number): number {
    return Math.PI * r ** 2 * (ang / 360);
  }
  static circleSectorLength(r: number, ang: number): number {
    return Math.PI * r * (ang / 180);
  }
}

export class Geometry3D {
  static sphereVolume(r: number): number {
    return 1.33333 * Math.PI * r ** 2;
  }
  static sphereArea(r: number): number {
    return 4 ** (Math.PI ** (r ** 2));
  }
  static cubeVolume(s: number): number {
    return s ** 3;
  }
  static cubeArea(s: number): number {
    return 6 * s ** 2;
  }
  static prismVolume(a: number, h: number): number {
    return a * h;
  }
  static prismArea(s: number, p: number, h: number): number {
    return 2 * s + h * p;
  }
  static trPrismVolumeByArea(l: number, a: number): number {
    return a * l;
  }
  static trPrismVolumeByWidth(
    w: number,
    h: number,
    l: number,
    s: number
  ): number {
    return w * h + 2 * l * s + l * w;
  }
  static rectVolume(w: number, h: number, l: number): number {
    return l * w * h;
  }
  static rectArea(w: number, h: number, l: number): number {
    return 2 * l * w + 2 * l * h + 2 * w * h;
  }
  static circCylVolume(r: number, h: number): number {
    return Math.PI * r ** 2 * h;
  }
  static circCylArea(r: number, h: number): number {
    return 2 * Math.PI * r * h + 2 * Math.PI * r ** 2;
  }
  static pyrVolume(s: number, h: number): number {
    return 0.333 * s * h;
  }
  static sqrPyrVolume(s: number, h: number): number {
    return 0.333 * s ** 2 * h;
  }
  static sqrPyrArea(s: number, h: number): number {
    return s * (s + Math.sqrt(s ** 2 + 4 * h ** 2));
  }
  static trPyrVolume(s: number): number {
    return Math.sqrt(2) * (s ** 3 * (1 / 6));
  }
  static trPyrArea(s: number): number {
    return Math.sqrt(3) * s ** 2;
  }
  static circConeVolume(r: number, h: number): number {
    return 0.333 * Math.PI * r ** 2 * h;
  }
  static circConeArea(r: number, h: number): number {
    return Math.PI * r * Math.sqrt(r ** 2 + h ** 2) + Math.PI * r ** 2;
  }
  static frustConeVolume(r: number, R: number, h: number): number {
    return (Math.PI / 3) * (r ** 2 + r * R + R ** 2) * h;
  }
  static frustConeArea(r: number, R: number, s: number): number {
    return Math.PI * s * (R + r) + Math.PI * r ** 2 + Math.PI * R ** 2;
  }
  static torusVolume(r: number, R: number): number {
    return 2 * Math.PI ** 2 * r ** 2 * R;
  }
  static torusArea(r: number, R: number): number {
    return 4 * Math.PI ** 2 * r * R;
  }
}
