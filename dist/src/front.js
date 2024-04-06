import { Statistic } from "./Statistics.js";
import { Combinator } from "./Combinator.js";
const statistics = new Statistic([1, 2, 3, 4, 4, 5, 6, 10]);
const btnCalc = document.getElementById("btnCalcValues");
const fixFactor = (returned, decimals = 4) => {
    return returned;
};
if (btnCalc instanceof HTMLButtonElement) {
    btnCalc.addEventListener("click", () => {
        const gValues = document.getElementById("gValuesInp")?.value;
        const sValues = document.getElementById("sValuesInp")?.value;
        const pValues = document.getElementById("pValuesInp")?.value;
        const tValues = document.getElementById("tValuesInp")?.value;
        if (gValues) {
            const values = gValues
                .trim()
                .split(" ")
                .map((value) => {
                let parsedValue = parseFloat(value.replaceAll(",", ".").replaceAll(/[^0-9]/g, ""));
                if (!Number.isFinite(parsedValue))
                    parsedValue = 0;
                return parsedValue;
            });
            console.log(values);
            const statistics = new Statistic(values);
            const average = document.getElementById("average") ??
                document.querySelector('label[for*="average"]')?.nextElementSibling;
            average instanceof HTMLElement
                ? (average.innerText = fixFactor(statistics.average()).toString())
                : console.error(`Erro encontrando elemento para average`);
            const averageHarm = document.getElementById("averageHarm") ??
                document.querySelector('label[for*="averageHarm"]')?.nextElementSibling;
            averageHarm instanceof HTMLElement
                ? (averageHarm.innerText = fixFactor(statistics.averageHarm()).toString())
                : console.error(`Erro encontrando elemento para harmonic average`);
            const averageGeo = document.getElementById("averageGeo") ??
                document.querySelector('label[for*="averageGeo"]')?.nextElementSibling;
            averageGeo instanceof HTMLElement
                ? (averageGeo.innerText = fixFactor(statistics.averageGeo()).toString())
                : console.error(`Erro encontrando element para geometric average`);
            const median = document.getElementById("median") ??
                document.querySelector('label[for*="median"]')?.nextElementSibling;
            median instanceof HTMLElement
                ? (median.innerText = fixFactor(statistics.median()).toString())
                : console.error(`Erro encontrando element para mediana`);
            const mode = document.getElementById("mode") ??
                document.querySelector('label[for*="mode"]')?.nextElementSibling;
            mode instanceof HTMLElement
                ? (mode.innerText = statistics
                    .mode()
                    .toString()
                    .replace(",", " ocorrências: "))
                : console.error(`Erro encontrando elemento para mode`);
            const variance = document.getElementById("variance") ??
                document.querySelector('label[for*="variance"]')?.nextElementSibling;
            variance instanceof HTMLElement
                ? (variance.innerText = fixFactor(statistics.variance()).toString())
                : console.error(`Erro encontrando element para variance`);
            const varianceGeo = document.getElementById("varianceGeo") ??
                document.querySelector('label[for*="varianceGeo"]')?.nextElementSibling;
            varianceGeo instanceof HTMLElement
                ? (varianceGeo.innerText = fixFactor(statistics.varianceGeo()).toString())
                : console.error(`Erro encontrando element para geometric variance`);
            const stdDev = document.getElementById("stdDev") ??
                document.querySelector('label[for="stdDev"]')?.nextElementSibling;
            stdDev instanceof HTMLElement
                ? (stdDev.innerText = fixFactor(statistics.stdDev()).toString())
                : console.error(`Erro encontrando element para arithmetic standard deviation`);
            const stdDevGeo = document.getElementById("stdDevGeo") ??
                document.querySelector('label[for*="stdDevGeo"]')?.nextElementSibling;
            stdDevGeo instanceof HTMLElement
                ? (stdDevGeo.innerText = fixFactor(statistics.stdDevGeo()).toString())
                : console.error(`Erro encontrando element para geometric standard deviation`);
            const cVar = document.getElementById("cVar") ??
                document.querySelector('label[for*="cVar"]')?.nextElementSibling;
            cVar instanceof HTMLElement
                ? (cVar.innerText = fixFactor(statistics.cVar()).toString())
                : console.error(`Erro encontrando element para variation coeficient`);
            const quartis = statistics.quartis();
            const q1i = document.getElementById("q1i") ??
                document.querySelector('label[for="q1i"]')?.nextElementSibling;
            q1i instanceof HTMLElement
                ? (q1i.innerText = fixFactor(quartis[0][0]).toString())
                : console.error(`Erro encontrando element para q1i`);
            const q1 = document.getElementById("q1") ??
                document.querySelector('label[for="q1"]')?.nextElementSibling;
            q1 instanceof HTMLElement
                ? (q1.innerText = fixFactor(quartis[0][1]).toString())
                : console.error(`Erro encontrando element para q1`);
            const q2i = document.getElementById("q2i") ??
                document.querySelector('label[for="q2i"]')?.nextElementSibling;
            q2i instanceof HTMLElement
                ? (q2i.innerText = fixFactor(quartis[1][0]).toString())
                : console.error(`Erro encontrando element para q2i`);
            const q2 = document.getElementById("q2") ??
                document.querySelector('label[for="q2"]')?.nextElementSibling;
            q2 instanceof HTMLElement
                ? (q2.innerText = fixFactor(quartis[1][1]).toString())
                : console.error(`Erro encontrando element para q2`);
            const q3i = document.getElementById("q3i") ??
                document.querySelector('label[for="q3i"]')?.nextElementSibling;
            q3i instanceof HTMLElement
                ? (q3i.innerText = fixFactor(quartis[2][0]).toString())
                : console.error(`Erro encontrando element para q3i`);
            const q3 = document.getElementById("q3") ??
                document.querySelector('label[for="q3"]')?.nextElementSibling;
            q3 instanceof HTMLElement
                ? (q3.innerText = fixFactor(quartis[2][1]).toString())
                : console.error(`Erro encontrando element para q3`);
            const iqr = document.getElementById("iqr") ??
                document.querySelector('label[for*="iqr"]')?.nextElementSibling;
            iqr instanceof HTMLElement
                ? (iqr.innerText = fixFactor(quartis[5]).toString())
                : console.error(`Erro encontrado element para iqr`);
            const lowWhisk = document.getElementById("lowWhisk") ??
                document.querySelector('label[for*="lowWhisk"]')?.nextElementSibling;
            lowWhisk instanceof HTMLElement
                ? (lowWhisk.innerText = fixFactor(quartis[3][0]).toString())
                : console.error(`Erro encontrando element para lowWhisk`);
            const lowOl = document.getElementById("lowOl") ??
                document.querySelector('label[for*="lowOl"]')?.nextElementSibling;
            lowOl instanceof HTMLElement
                ? (lowOl.innerText =
                    quartis[3][1]
                        .map((number) => fixFactor(number))
                        .toString()
                        .replace(/\[/g, "")
                        .replace(/\]/g, "") || "Nenhum")
                : console.error(`Erro encontrando element para`);
            const upWhisk = document.getElementById("upWhisk") ??
                document.querySelector('label[for*="upWhisk"]')?.nextElementSibling;
            upWhisk instanceof HTMLElement
                ? (upWhisk.innerText = fixFactor(quartis[4][0]).toString())
                : console.error(`Erro encontrando element para upWhisk`);
            const upOl = document.getElementById("upOl") ??
                document.querySelector('label[for*="upOl"]')?.nextElementSibling;
            upOl instanceof HTMLElement
                ? (upOl.innerText =
                    quartis[4][1]
                        .map((number) => fixFactor(number))
                        .toString()
                        .replace(/\[/g, "")
                        .replace(/\]/g, "") || "Nenhum")
                : console.error(`Erro encontrando element para lowOl`);
            const pearsonAssymetryIndex = document.getElementById("pearsonAssymetryIndex") ??
                document.querySelector('label[for*="pearsonAssymetryIndex"]')
                    ?.nextElementSibling;
            const indexPearsonAssymetry = fixFactor(statistics.pearsonAssymetryIndex());
            pearsonAssymetryIndex instanceof HTMLElement
                ? (pearsonAssymetryIndex.innerText = indexPearsonAssymetry.toString())
                : console.error(`Erro encontrando element para Pearson Assymetry index`);
            const testPearsonIndex = document.getElementById("testPearsonIndex") ??
                document.querySelector('label[for*="testPearsonIndex"]')
                    ?.nextElementSibling;
            testPearsonIndex instanceof HTMLElement
                ? (testPearsonIndex.innerText = statistics.testPearsonIndex(indexPearsonAssymetry))
                : console.error(`Erro encontrando element para testPearsonIndex`);
            const curtosis = document.getElementById("curtosis") ??
                document.querySelector('label[for*="curtosis"]')?.nextElementSibling;
            curtosis instanceof HTMLElement
                ? (curtosis.innerText = fixFactor(statistics.curtosis()).toString())
                : console.error(`Erro encontrando element para curtosis`);
            if (sValues) {
                const yValues = sValues
                    .trim()
                    .split(" ")
                    .map((value) => {
                    let parsedValue = parseFloat(value.replaceAll(",", ".").replaceAll(/[^0-9]/g, ""));
                    if (!Number.isFinite(parsedValue))
                        parsedValue = 0;
                    return parsedValue;
                });
                console.log(yValues);
                const pearsonCorrelationIndex = document.getElementById("pearsonCorrelationIndex") ??
                    document.querySelector('label[for*="pearsonCorrelationIndex"]')
                        ?.nextElementSibling;
                pearsonCorrelationIndex instanceof HTMLElement
                    ? (pearsonCorrelationIndex.innerText = statistics
                        .pearsonCorrelationIndex(values, yValues)
                        .toString())
                    : console.error(`Erro localizando element para índice de correlação de Pearson`);
            }
        }
        else
            console.error(`Erro capturando valores gerais`);
        if (pValues && tValues) {
            const total = tValues.trim().split(" ");
            const events = pValues.trim().split(" ");
            const eventsChances = events.map((event) => {
                let prob = fixFactor(statistics.probSimpleStr(event, total));
                if (!Number.isFinite(prob))
                    prob = 0;
                return prob;
            });
            const probSimple = document.getElementById("probSimple") ??
                document.querySelector('label[for="probSimple"]')?.nextElementSibling;
            probSimple instanceof HTMLElement
                ? (probSimple.innerText = eventsChances
                    .map((num) => {
                    return Number.isFinite(num) ? num : 0;
                })
                    .map((num, i) => !(i % 2 === 0)
                    ? `${fixFactor(num) * 100}% \n`
                    : `${fixFactor(num) * 100}% `)
                    .toString()
                    .replaceAll(",", ""))
                : console.error(`Erro encontrando element para probabilidade simples`);
            const probCond = document.getElementById("probCond") ??
                document.querySelector('label[for="probCond"]')?.nextElementSibling;
            probCond instanceof HTMLElement
                ? (() => {
                    const numEventsCombations = Combinator.permute(total.length);
                    const shuffleArray = [];
                    let safeAcc = 0;
                    while (shuffleArray.length < numEventsCombations) {
                        let shuffled = Combinator.shuffle(total);
                        if (shuffled instanceof Set)
                            shuffled = Array.from(shuffled);
                        if (!shuffleArray.includes(shuffled))
                            shuffleArray.push(shuffled);
                        if (safeAcc > 999)
                            break;
                        safeAcc++;
                    }
                    const condEventsChance = shuffleArray.map((events, c) => {
                        return events.map((_, i) => {
                            return statistics.probCond(shuffleArray[c][i], shuffleArray[c][i + 1], total);
                        });
                    });
                    probCond.innerText = condEventsChance
                        .flat(1)
                        .map((num) => {
                        return Number.isFinite(num) ? num : 0;
                    })
                        .map((num, i) => !(i % 2 === 0)
                        ? `${fixFactor(num) * 100}% \n`
                        : `${fixFactor(num) * 100}% `)
                        .toString()
                        .replaceAll(",", "");
                })()
                : console.error(`Erro encontrando element para probabilidade condicional`);
        }
        else
            console.error(`Erro capturando valores para probabilidade`);
    });
}
else
    console.error(`Erro capturando botão!`);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZnJvbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUU3QyxNQUFNLFVBQVUsR0FBRyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzVELE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDekQsTUFBTSxTQUFTLEdBQUcsQ0FBQyxRQUFnQixFQUFFLFdBQW1CLENBQUMsRUFBVSxFQUFFO0lBR25FLE9BQU8sUUFBUSxDQUFDO0FBQ2xCLENBQUMsQ0FBQztBQUVGLElBQUksT0FBTyxZQUFZLGlCQUFpQixFQUFFLENBQUM7SUFDekMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7UUFDckMsTUFBTSxPQUFPLEdBQ1gsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQ3JDLEVBQUUsS0FBSyxDQUFDO1FBQ1QsTUFBTSxPQUFPLEdBQ1gsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQ3JDLEVBQUUsS0FBSyxDQUFDO1FBQ1QsTUFBTSxPQUFPLEdBQ1gsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQ3JDLEVBQUUsS0FBSyxDQUFDO1FBQ1QsTUFBTSxPQUFPLEdBQ1gsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQ3JDLEVBQUUsS0FBSyxDQUFDO1FBQ1QsSUFBSSxPQUFPLEVBQUUsQ0FBQztZQUNaLE1BQU0sTUFBTSxHQUFHLE9BQU87aUJBQ25CLElBQUksRUFBRTtpQkFDTixLQUFLLENB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