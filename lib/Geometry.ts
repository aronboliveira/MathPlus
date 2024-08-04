export function triangleArea(b: number = 0, h: number = 0): number {
  return (b * h) / 2;
}

export function trianglePerimeter(
  a: number = 0,
  b: number = 0,
  c: number = 0,
): number {
  return a + b + c;
}

export function rectangleArea(b: number = 0, h: number = 0): number {
  return b * h;
}

export function rectanglePerimeter(a: number = 0, b: number = 0): number {
  return 2 * a + 2 * b;
}

export function trapezoidArea(
  a: number = 0,
  b: number = 0,
  h: number = 0,
): number {
  return ((a + b) / 2) * h;
}

export function trapezoidPerimeter(
  a: number,
  b: number,
  c: number,
  d: number,
): number {
  return a + b + c + d;
}

export function parallelogramArea(b: number = 0, h: number = 0): number {
  return b * h;
}

export function parallelogramPerimeter(a: number = 0, b: number = 0): number {
  return 2 * (a + b);
}

export function ellipsisArea(a: number = 0, b: number = 0): number {
  return Math.PI * a * b;
}

export function ellipsisPerimeter(a: number = 0, b: number = 0): number {
  const h = (a - b) ** 2 / (a + b) ** 2;
  return Math.PI * (a + b) * (1 + (3 * h) / (10 + Math.sqrt(4 - 3 * h)));
}

export function circleArea(r: number = 0): number {
  return Math.PI * r ** 2;
}

export function circlePerimeter(r: number = 0): number {
  return 2 * Math.PI * r;
}

export function circleRing(R: number = 0, r: number = 0): number {
  return Math.PI * (R ** 2 - r ** 2);
}

export function circleSectorArea(r: number = 0, ang: number = 0): number {
  return Math.PI * r ** 2 * (ang / 360);
}

export function circleSectorLength(r: number = 0, ang: number = 0): number {
  return Math.PI * r * (ang / 180);
}

export function triangularPyramidArea(s: number = 0): number {
  return Math.sqrt(3) * s ** 2;
}

export function triangularPyramidVolume(s: number = 0): number {
  return (Math.sqrt(2) / 12) * s ** 3;
}

export function squarePyramidArea(s: number = 0, h: number = 0): number {
  return s * (s + Math.sqrt(s ** 2 + 4 * h ** 2));
}

export function squarePyramidVolume(s: number = 0, h: number = 0): number {
  return 0.333 * s ** 2 * h;
}

export function coneArea(r: number = 0, h: number = 0): number {
  return Math.PI * r * Math.sqrt(r ** 2 + h ** 2) + Math.PI * r ** 2;
}

export function coneVolume(r: number = 0, h: number = 0): number {
  return 0.333 * Math.PI * r ** 2 * h;
}

export function coneOfFrustumArea(
  r: number = 0,
  R: number = 0,
  s: number = 0,
): number {
  return Math.PI * s * (R + r) + Math.PI * r ** 2 + Math.PI * R ** 2;
}

export function coneOfFrustumVolume(
  r: number = 0,
  R: number = 0,
  h: number = 0,
): number {
  return (Math.PI / 3) * (r ** 2 + r * R + R ** 2) * h;
}

export function cuboidArea(
  w: number = 0,
  h: number = 0,
  l: number = 0,
): number {
  return 2 * l * w + 2 * l * h + 2 * w * h;
}

export function cuboidVolume(
  w: number = 0,
  h: number = 0,
  l: number = 0,
): number {
  return l * w * h;
}

export function cubeArea(s: number = 0): number {
  return 6 * s ** 2;
}

export function cubeVolume(s: number = 0): number {
  return s ** 3;
}

export function prismArea(s: number = 0, p: number = 0, h: number = 0): number {
  return 2 * s + h * p;
}

export function prismVolume(a: number = 0, h: number = 0): number {
  return a * h;
}

export function sphereArea(r: number = 0): number {
  return 4 ** (Math.PI ** (r ** 2));
}

export function sphereVolume(r: number = 0): number {
  return 1.33333 * Math.PI * r ** 2;
}

export function torusArea(r: number = 0, R: number = 0): number {
  return 4 * Math.PI ** 2 * r * R;
}

export function torusVolume(r: number = 0, R: number = 0): number {
  return 2 * Math.PI ** 2 * r ** 2 * R;
}

export class Geometry2D {
  static triangleArea(b: number = 0, h: number = 0): number {
    return (b * h) / 2;
  }
  static trianglePr(a: number = 0, b: number = 0, c: number = 0): number {
    return a + b + c;
  }
  static rectArea(b: number = 0, h: number = 0): number {
    return b * h;
  }
  static rectPr(a: number = 0, b: number = 0): number {
    return 2 * a + 2 * b;
  }
  static trapezoidArea(a: number = 0, b: number = 0, h: number = 0): number {
    return ((a + b) / 2) * h;
  }
  static trapezoidPr(
    a: number = 0,
    b: number = 0,
    c: number = 0,
    d: number = 0,
  ): number {
    return a + b + c + d;
  }
  static parallelogramArea(b: number = 0, h: number = 0): number {
    return b * h;
  }
  static parallelogramPr(a: number = 0, b: number = 0): number {
    return 2 * (a + b);
  }
  static ellipsisArea(a: number = 0, b: number = 0): number {
    return Math.PI * a * b;
  }
  static ellipsisPr(a: number = 0, b: number = 0): number {
    const h = (a - b) ** 2 / (a + b) ** 2;
    return Math.PI * (a + b) * (1 + (3 * h) / (10 + Math.sqrt(4 - 3 * h)));
  }
  static circlePr(r: number = 0): number {
    return 2 * Math.PI * r;
  }
  static circleRing(R: number = 0, r: number = 0): number {
    return Math.PI * (R ** 2 - r ** 2);
  }
  static circleSectorArea(r: number = 0, ang: number = 0): number {
    return Math.PI * r ** 2 * (ang / 360);
  }
  static circleSectorLength(r: number = 0, ang: number = 0): number {
    return Math.PI * r * (ang / 180);
  }
}

export class Geometry3D {
  static sphereVolume(r: number = 0): number {
    return 1.33333 * Math.PI * r ** 2;
  }
  static sphereArea(r: number = 0): number {
    return 4 ** (Math.PI ** (r ** 2));
  }
  static cubeVolume(s: number = 0): number {
    return s ** 3;
  }
  static cubeArea(s: number = 0): number {
    return 6 * s ** 2;
  }
  static prismVolume(a: number = 0, h: number = 0): number {
    return a * h;
  }
  static prismArea(s: number = 0, p: number = 0, h: number = 0): number {
    return 2 * s + h * p;
  }
  static trPrismVolumeByArea(l: number = 0, a: number = 0): number {
    return a * l;
  }
  static trPrismVolumeByWidth(
    w: number,
    h: number,
    l: number,
    s: number,
  ): number {
    return w * h + 2 * l * s + l * w;
  }
  static rectVolume(w: number = 0, h: number = 0, l: number = 0): number {
    return l * w * h;
  }
  static rectArea(w: number = 0, h: number = 0, l: number = 0): number {
    return 2 * l * w + 2 * l * h + 2 * w * h;
  }
  static circCylVolume(r: number = 0, h: number = 0): number {
    return Math.PI * r ** 2 * h;
  }
  static circCylArea(r: number = 0, h: number = 0): number {
    return 2 * Math.PI * r * h + 2 * Math.PI * r ** 2;
  }
  static pyrVolume(s: number = 0, h: number = 0): number {
    return 0.333 * s * h;
  }
  static sqrPyrVolume(s: number = 0, h: number = 0): number {
    return 0.333 * s ** 2 * h;
  }
  static sqrPyrArea(s: number = 0, h: number = 0): number {
    return s * (s + Math.sqrt(s ** 2 + 4 * h ** 2));
  }
  static trPyrVolume(s: number = 0): number {
    return Math.sqrt(2) * (s ** 3 * (1 / 6));
  }
  static trPyrArea(s: number = 0): number {
    return Math.sqrt(3) * s ** 2;
  }
  static circConeVolume(r: number = 0, h: number = 0): number {
    return 0.333 * Math.PI * r ** 2 * h;
  }
  static circConeArea(r: number = 0, h: number = 0): number {
    return Math.PI * r * Math.sqrt(r ** 2 + h ** 2) + Math.PI * r ** 2;
  }
  static frustConeVolume(r: number = 0, R: number = 0, h: number = 0): number {
    return (Math.PI / 3) * (r ** 2 + r * R + R ** 2) * h;
  }
  static frustConeArea(r: number = 0, R: number = 0, s: number = 0): number {
    return Math.PI * s * (R + r) + Math.PI * r ** 2 + Math.PI * R ** 2;
  }
  static torusVolume(r: number = 0, R: number = 0): number {
    return 2 * Math.PI ** 2 * r ** 2 * R;
  }
  static torusArea(r: number = 0, R: number = 0): number {
    return 4 * Math.PI ** 2 * r * R;
  }
}
