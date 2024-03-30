export class Combinator {
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
