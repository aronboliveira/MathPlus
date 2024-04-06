export class Statistic {
    values;
    constructor(values) {
        this.values = values;
    }
    average() {
        return (this.values.reduce((sumt, cur) => sumt + cur, 0) / this.values.length);
    }
    averageHarm() {
        return (this.values.length /
            this.values.reduce((sumt, cur) => (sumt += 1 / cur), 0));
    }
    averageGeo() {
        return (this.values.reduce((acc, cur) => (acc *= cur), 1) **
            (1 / this.values.length));
    }
    variance() {
        const average = this.average();
        return (this.values.reduce((sumt, cur) => {
            return sumt + (cur - average) ** 2;
        }, 0) /
            (this.values.length - 1));
    }
    varianceGeo() {
        return this.stdDevGeo() ** 2;
    }
    stdDev() {
        return Math.sqrt(this.variance());
    }
    stdDevGeo() {
        const AG = this.averageGeo();
        let result = Math.sqrt(this.values.reduce((sumt, cur) => (sumt += (Math.log(cur) - Math.log(AG)) ** 2), 0) / this.values.length);
        if (!Number.isFinite(result))
            result = 0;
        return result;
    }
    median() {
        this.values = this.values.sort((a, b) => a - b);
        const middleIndex = Math.floor(this.values.length / 2);
        return this.values.length % 2 === 1
            ? this.values[middleIndex]
            : (this.values[middleIndex - 1] + this.values[middleIndex]) / 2;
    }
    mode() {
        const ocurrences = new Map();
        for (const value of this.values)
            ocurrences.set(value, (ocurrences.get(value) || 0) + 1);
        const numOcurrences = Array.from(ocurrences.entries()).map((entry) => entry[1]);
        const filteredOcurrences = Array.from(ocurrences.entries()).filter((entry) => {
            console.log(entry[1]);
            return numOcurrences.some((numOcurrence) => numOcurrence !== entry[1]);
        });
        console.log(numOcurrences);
        console.log(filteredOcurrences);
        let maxOcurrence = [0, 0];
        for (const [value, count] of filteredOcurrences)
            count > maxOcurrence[1] && (maxOcurrence = [value, count]);
        return !(maxOcurrence[1] === 0) ? maxOcurrence : "Não há moda definida";
    }
    cVar() {
        return this.stdDev() / this.average();
    }
    quartis() {
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
            [lowWhisk, this.values.filter((value) => value < lowWhisk)],
            [upWhisk, this.values.filter((value) => value > upWhisk)],
            iqr,
        ];
    }
    pearsonAssymetryIndex() {
        return (3 * (this.average() - this.median())) / this.stdDev();
    }
    testPearsonIndex(index) {
        if (index > 0)
            return "Assimétrica para a direita";
        else if (index === 0)
            return "Simétrica";
        else
            return "Assimétrica para a esquerda";
    }
    pearsonCorrelationIndex(x, y) {
        if (x.length === y.length) {
            x = x.sort((a, b) => a - b);
            y = y.sort((a, b) => a - b);
            const sumtX = x.reduce((sumt, cur) => (sumt += cur), 0);
            const sumtY = y.reduce((sumt, cur) => (sumt += cur), 0);
            return ((x.reduce((sumt, currentValue, i) => sumt + currentValue * y[i], 0) -
                (sumtX * sumtY) / x.length) /
                Math.sqrt((x.reduce((sumt, cur) => (sumt += cur ** 2), 0) -
                    sumtX ** 2 / x.length) *
                    (y.reduce((sumt, cur) => (sumt += cur ** 2), 0) -
                        sumtY ** 2 / x.length)));
        }
        else {
            console.error(`Erro no comprimento de conjuntos calculando o Índice de correlação de Pearson`);
            return `Conjuntos devem ter o mesmo comprimento!`;
        }
    }
    pearsonContg(x, n) {
        return Math.sqrt(x ** 2 / (x ** 2 + n));
    }
    curtosis() {
        this.values = this.values.sort((a, b) => a - b);
        const average = this.average();
        const stdDev4 = this.stdDev() ** 4;
        return (this.values.reduce((acc, cur) => acc + (cur - average) ** 4, 0) /
            this.values.length /
            stdDev4 -
            3);
    }
    intersect(A, B) {
        return A.filter((x) => B.includes(x));
    }
    union(A, B) {
        const union = [...A, ...B];
        const intersect = this.intersect(A, B);
        if (union.some((num) => intersect.includes(num))) {
            const indexIntersecNum = union.findIndex((num) => intersect.includes(num));
            union.splice(indexIntersecNum, 1);
        }
        return union;
    }
    probSimpleStr(e, t) {
        const eRep = t.reduce((acc, value) => {
            if (value === e)
                acc++;
            return acc;
        }, 0);
        return eRep / t.length;
    }
    probSimple(A, t) {
        return A / t;
    }
    probIntersect(A, B, t, dep = false, probCond) {
        if (dep) {
            return typeof probCond === "number"
                ? this.probSimpleStr(A, t) * this.probSimpleStr(B, t)
                : -1;
        }
        else
            return this.probSimpleStr(A, t) * this.probSimpleStr(B, t);
    }
    probCond(A, B, t) {
        return this.probIntersect(A, B, t) / this.probSimpleStr(B, t);
    }
    degreeQuiFrq(k) {
        return k - 1;
    }
    quiFreq(values) {
        return values.reduce((sumt, cur) => (sumt += (cur.ob - cur.exp) ** 2 / cur.exp), 0);
    }
    degreeQuiIndep(r, c) {
        return (r - 1) * (c - 1);
    }
    quiIndep(values) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdGlzdGljcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TdGF0aXN0aWNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sT0FBTyxTQUFTO0lBQ3BCLE1BQU0sQ0FBVztJQUNqQixZQUFZLE1BQWdCO1FBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxPQUFPO1FBQ0wsT0FBTyxDQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FDdEUsQ0FBQztJQUNKLENBQUM7SUFDRCxXQUFXO1FBQ1QsT0FBTyxDQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTtZQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDeEQsQ0FBQztJQUNKLENBQUM7SUFDRCxVQUFVO1FBQ1IsT0FBTyxDQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2pELENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQ3pCLENBQUM7SUFDSixDQUFDO0lBQ0QsUUFBUTtRQUNOLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMvQixPQUFPLENBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxF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QUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBQ0QsUUFBUSxDQUNOLE1BQTRFO1FBRTVFLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNiLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDdkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDeEMsSUFBSTtvQkFDRixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7d0JBQ2pELE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekIsQ0FBQztRQUNILENBQUM7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Q0FDRiJ9