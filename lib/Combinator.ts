import { factorial } from "./Algebra";

export function permutation(
  n: number = 0,
  k: number = n,
  circular: boolean = false,
  ignoreOrder: boolean = false,
  allowRepetition: boolean = false,
): number {
  if (n <= 0) return 0;
  if (k === 0) k = 1;
  k = Math.abs(Math.round(k));
  n = Math.abs(Math.round(k));
  return (() =>
    (factorial(n + (allowRepetition && ignoreOrder ? k - 1 : 0)) -
      (circular ? 1 : 0)) /
    (circular
      ? 1
      : (ignoreOrder ? factorial(k) : 1) *
        factorial(n - (allowRepetition && ignoreOrder ? 1 : k))))();
}

export function multisetPermutation(
  n: number = 0,
  freqs: number[] = [],
): number {
  if (n <= 0 || freqs.length === 0) return 0;
  n = Math.abs(Math.round(n));
  freqs = freqs.map(n => Math.abs(Math.round(n)));
  if (freqs.reduce((acc, n) => (acc += n), 0) > n) return 0;
  return factorial(n) / freqs.reduce((acc, n) => (acc *= factorial(n)), 0);
}

export class Combinator {
  static shuffle(ar: any[], rep: boolean = false): Array<any> | Set<any> {
    const copyAr = ar.slice();
    const shuffled = rep ? [] : new Set();
    while (copyAr.length > 0) {
      const re = copyAr.splice(Math.floor(Math.random() * copyAr.length), 1)[0];
      rep ? (shuffled as Array<any>).push(re) : (shuffled as Set<any>).add(re);
    }
    return shuffled;
  }
  static factorial(n: number): number {
    return n === 0 || n === 1 ? 1 : n * this.factorial(n - 1);
  }
  static permute(n: number): number {
    return this.factorial(n);
  }
  static orderedPosition(n: number, p: number): number {
    return this.permute(n - p);
  }
  static unorderedPosition(n: number, p: number): number {
    return this.permute(n) / this.permute(p);
  }
  static variateNoRep(n: number, p: number): number {
    return this.permute(n) / this.orderedPosition(n, p);
  }
  static combineNoRep(n: number, p: number): number {
    return this.unorderedPosition(n, p) * this.variateNoRep(n, p);
  }
  static permuteWithRep(n: number, b: number, ...elements: number[]): number {
    let result = this.permute(n) / this.permute(b);
    for (const element of elements)
      result *= this.permute(n) / this.permute(element);
    return result;
  }
  static variateWithRep(n: number, p: number): number {
    return n ** p;
  }
  static combineWithRep(n: number, p: number): number {
    return (
      (this.factorial(n + p - 1) / this.factorial(p)) *
      (this.factorial(n + p - 1) / this.factorial(n - 1))
    );
  }
  static permuteCircular(n: number): number {
    return this.permute(n - 1);
  }
}
