import { applyAsDiffMean } from "./Algebra";

export function arithmeticMean(...ns: number[]): number {
  if (ns.length === 0) return 0;
  const res = ns.reduce((sumt, cur) => (sumt += cur), 0) / ns.length;
  return Number.isFinite(res) ? res : 0;
}

export function harmonicMean(...ns: number[]): number {
  if (ns.length === 0) return 0;
  const res = ns.length / ns.reduce((sumt, cur) => (sumt += 1 / cur), 0);
  return Number.isFinite(res) ? res : 0;
}

export function geometricMean(...ns: number[]): number {
  if (ns.length === 0) return 0;
  const res = ns.reduce((sumt, cur) => (sumt *= cur), 1) ** (1 / ns.length);
  return Number.isFinite(res) ? res : 0;
}

export function median(...ns: number[]): number {
  if (ns.length === 0) return 0;
  ns = ns.sort((a, b) => a - b);
  const middleIndex = Math.floor(ns.length / 2);
  const res =
    ns.length % 2 === 1
      ? ns[middleIndex]
      : (ns[middleIndex - 1] + ns[middleIndex]) / 2;
  return Number.isFinite(res) ? res : 0;
}

export function arithmeticVariance(...ns: number[]): number {
  if (ns.length === 0) return 0;
  const mean = arithmeticMean(...ns);
  const res = applyAsDiffMean(
    ns.reduce((sumt, cur) => (sumt += (cur - mean) ** 2)),
    ns.length,
  );
  return Number.isFinite(res) ? res : 0;
}

export function arithmeticStandardDeviation(...ns: number[]): number {
  if (ns.length === 0) return 0;
  const res = Math.sqrt(arithmeticVariance(...ns));
  return Number.isFinite(res) ? res : 0;
}

export function geometricStandardDeviation(...ns: number[]): number {
  if (ns.length === 0) return 0;
  const GA = geometricMean(...ns);
  const res = Math.sqrt(
    ns.reduce((sumt, cur) => (sumt += (Math.log(cur) - Math.log(GA)) ** 2), 0) /
      ns.length,
  );
  return !Number.isFinite(res) ? res : 0;
}

export function geometricVariance(...ns: number[]): number {
  if (ns.length === 0) return 0;
  const res = geometricStandardDeviation(...ns) ** 2;
  return Number.isFinite(res) ? res : 0;
}

export function covariance(ns1: number[], ns2: number[]): number {
  if (ns1.length === 0 || ns2.length === 0) return 0;
  if (ns1.length !== ns2.length) {
    ns1.length > ns2.length
      ? (ns1 = ns1.slice(0, ns2.length))
      : (ns2 = ns2.slice(0, ns1.length));
  }
  const ns1Mean = arithmeticMean(...ns1);
  const ns2Mean = arithmeticMean(...ns2);
  const res = applyAsDiffMean(
    ns1.reduce(
      (sumt, _, i) => (sumt += (ns1[i] - ns1Mean) * (ns2[i] - ns2Mean)),
      0,
    ),
    ns1.length,
  );
  return Number.isFinite(res) ? res : 0;
}

export function coefficientOfVariation(...ns: number[]): number {
  if (ns.length === 0) return 0;
  const res = arithmeticStandardDeviation(...ns) / arithmeticMean(...ns);
  return Number.isFinite(res) ? res : 0;
}

export class Statistic {
  values: number[];
  constructor(values: number[]) {
    this.values = values;
  }
  average(): number {
    return (
      this.values.reduce((sumt, cur) => sumt + cur, 0) / this.values.length
    );
  }
  averageHarm(): number {
    return (
      this.values.length /
      this.values.reduce((sumt, cur) => (sumt += 1 / cur), 0)
    );
  }
  averageGeo(): number {
    return (
      this.values.reduce((acc, cur) => (acc *= cur), 1) **
      (1 / this.values.length)
    );
  }
  variance(): number {
    const average = this.average();
    return (
      this.values.reduce((sumt, cur) => {
        return sumt + (cur - average) ** 2;
      }, 0) /
      (this.values.length - 1)
    );
  }
  varianceGeo(): number {
    return this.stdDevGeo() ** 2;
  }
  stdDev(): number {
    return Math.sqrt(this.variance());
  }
  stdDevGeo(): number {
    const AG = this.averageGeo();
    let result = Math.sqrt(
      this.values.reduce(
        (sumt, cur) => (sumt += (Math.log(cur) - Math.log(AG)) ** 2),
        0,
      ) / this.values.length,
    );
    if (!Number.isFinite(result)) result = 0;
    return result;
  }
  median(): number {
    this.values = this.values.sort((a, b) => a - b);
    const middleIndex = Math.floor(this.values.length / 2);
    return this.values.length % 2 === 1
      ? this.values[middleIndex]
      : (this.values[middleIndex - 1] + this.values[middleIndex]) / 2;
  }
  mode(): [number, number] | string {
    const ocurrences: Map<number, number> = new Map();
    for (const value of this.values)
      ocurrences.set(value, (ocurrences.get(value) || 0) + 1);
    const numOcurrences: number[] = Array.from(
      ocurrences.entries(),
    ).map<number>(entry => entry[1]);
    const filteredOcurrences: Array<[number, number]> = Array.from<
      [number, number]
    >(ocurrences.entries()).filter(entry => {
      console.log(entry[1]);
      return numOcurrences.some(numOcurrence => numOcurrence !== entry[1]);
    });
    console.log(numOcurrences);
    console.log(filteredOcurrences);
    let maxOcurrence: [number, number] = [0, 0];
    for (const [value, count] of filteredOcurrences)
      count > maxOcurrence[1] && (maxOcurrence = [value, count]);
    return !(maxOcurrence[1] === 0) ? maxOcurrence : "Não há moda definida";
  }
  cVar(): number {
    return this.stdDev() / this.average();
  }
  quartis(): [
    [number, number],
    [number, number],
    [number, number],
    [number, number[]],
    [number, number[]],
    number,
  ] {
    this.values = this.values.sort((a, b) => a - b);
    const q1i = (this.values.length + 1) * 0.25;
    const q2i = this.median();
    const q3i = (this.values.length + 1) * 0.75;
    const q1 = this.values[Math.floor(q1i) - 1];
    const q2 = this.values[Math.floor(q2i) - 1];
    const q3 = this.values[Math.ceil(q3i) - 1];
    const iqr = q3 - q1;
    const lowWhisk = q1 - 1.5 * iqr;
    const upWhisk = q3 + 1.5 * iqr;
    return [
      [q1i, q1],
      [q2i, q2],
      [q3i, q3],
      [lowWhisk, this.values.filter(value => value < lowWhisk)],
      [upWhisk, this.values.filter(value => value > upWhisk)],
      iqr,
    ];
  }
  pearsonAssymetryIndex(): number {
    return (3 * (this.average() - this.median())) / this.stdDev();
  }
  testPearsonIndex(index: number): string {
    if (index > 0) return "Assimétrica para a direita";
    else if (index === 0) return "Simétrica";
    else return "Assimétrica para a esquerda";
  }
  pearsonCorrelationIndex(x: number[], y: number[]): number | string {
    if (x.length === y.length) {
      x = x.sort((a, b) => a - b);
      y = y.sort((a, b) => a - b);
      const sumtX = x.reduce((sumt, cur) => (sumt += cur), 0);
      const sumtY = y.reduce((sumt, cur) => (sumt += cur), 0);
      return (
        (x.reduce((sumt, currentValue, i) => sumt + currentValue * y[i], 0) -
          (sumtX * sumtY) / x.length) /
        Math.sqrt(
          (x.reduce((sumt, cur) => (sumt += cur ** 2), 0) -
            sumtX ** 2 / x.length) *
            (y.reduce((sumt, cur) => (sumt += cur ** 2), 0) -
              sumtY ** 2 / x.length),
        )
      );
    } else {
      console.error(
        `Erro no comprimento de conjuntos calculando o Índice de correlação de Pearson`,
      );
      return `Conjuntos devem ter o mesmo comprimento!`;
    }
  }
  pearsonContg(x: number, n: number): number {
    return Math.sqrt(x ** 2 / (x ** 2 + n));
  }
  curtosis(): number {
    this.values = this.values.sort((a, b) => a - b);
    const average = this.average();
    const stdDev4 = this.stdDev() ** 4;
    return (
      this.values.reduce((acc, cur) => acc + (cur - average) ** 4, 0) /
        this.values.length /
        stdDev4 -
      3
    );
  }
  intersect(A: number[], B: number[]): number[] {
    return A.filter(x => B.includes(x));
  }
  union(A: number[], B: number[]): number[] {
    const union = [...A, ...B];
    const intersect = this.intersect(A, B);
    if (union.some(num => intersect.includes(num))) {
      const indexIntersecNum = union.findIndex(num => intersect.includes(num));
      union.splice(indexIntersecNum, 1);
    }
    return union;
  }
  probSimpleStr(e: any, t: any[]): number {
    const eRep = t.reduce((acc, value) => {
      if (value === e) acc++;
      return acc;
    }, 0);
    return eRep / t.length;
  }
  probSimple(A: number, t: number): number {
    return A / t;
  }
  probIntersect(
    A: any,
    B: any,
    t: any[],
    dep: boolean = false,
    probCond?: number,
  ): number {
    if (dep) {
      return typeof probCond === "number"
        ? this.probSimpleStr(A, t) * this.probSimpleStr(B, t)
        : -1;
    } else return this.probSimpleStr(A, t) * this.probSimpleStr(B, t);
  }
  probCond(A: any, B: any, t: any[]): number {
    return this.probIntersect(A, B, t) / this.probSimpleStr(B, t);
  }
  degreeQuiFrq(k: number): number {
    return k - 1;
  }
  quiFreq(values: Array<{ ob: number; exp: number }>): number {
    return values.reduce(
      (sumt, cur) => (sumt += (cur.ob - cur.exp) ** 2 / cur.exp),
      0,
    );
  }
  degreeQuiIndep(r: number, c: number): number {
    return (r - 1) * (c - 1);
  }
  quiIndep(
    values: Array<{
      obs: Array<number[]>;
      exps: Array<number[]>;
      cols: number;
    }>,
  ): number {
    let sumt = 0;
    for (let r = 0; r < values.length; r++) {
      for (let c = 0; c < values[r].cols; c++) {
        sumt +=
          (values[r].obs[r][c] - values[r].exps[r][c]) ** 2 /
          values[r].exps[r][c];
      }
    }
    return sumt;
  }
}
