import { Statistic } from "./Statistics";
import { Combinator } from "./Combinator";

export default function defHydrateFront() {
  const statistics = new Statistic([1, 2, 3, 4, 4, 5, 6, 10]);
  const btnCalc = document.getElementById("btnCalcValues");
  const fixFactor = (returned: number, decimals: number = 4): number => {
    console.log(decimals);
    return returned;
  };
  if (btnCalc instanceof HTMLButtonElement) {
    btnCalc.addEventListener("click", () => {
      if (
        /algebra|combinatorics|probability|statistics|trigonometry|geometry/g.test(
          location.search,
        )
      )
        return;
      const gValues = (
        document.getElementById("gValuesInp") as HTMLInputElement | null
      )?.value;
      const sValues = (
        document.getElementById("sValuesInp") as HTMLInputElement | null
      )?.value;
      const pValues = (
        document.getElementById("pValuesInp") as HTMLInputElement | null
      )?.value;
      const tValues = (
        document.getElementById("tValuesInp") as HTMLTextAreaElement | null
      )?.value;
      if (gValues) {
        const values = gValues
          .trim()
          .split(" ")
          .map(value => {
            let parsedValue = parseFloat(
              value.replaceAll(",", ".").replaceAll(/[^0-9]/g, ""),
            );
            if (!Number.isFinite(parsedValue)) parsedValue = 0;
            return parsedValue;
          });
        console.log(values);
        const statistics = new Statistic(values);
        const average =
          document.getElementById("average") ??
          document.querySelector('label[for*="average"]')?.nextElementSibling;
        average instanceof HTMLElement
          ? (average.innerText = fixFactor(statistics.average()).toString())
          : console.error(`Erro encontrando elemento para average`);
        const averageHarm =
          document.getElementById("averageHarm") ??
          document.querySelector('label[for*="averageHarm"]')
            ?.nextElementSibling;
        averageHarm instanceof HTMLElement
          ? (averageHarm.innerText = fixFactor(
              statistics.averageHarm(),
            ).toString())
          : console.error(`Erro encontrando elemento para harmonic average`);
        const averageGeo =
          document.getElementById("averageGeo") ??
          document.querySelector('label[for*="averageGeo"]')
            ?.nextElementSibling;
        averageGeo instanceof HTMLElement
          ? (averageGeo.innerText = fixFactor(
              statistics.averageGeo(),
            ).toString())
          : console.error(`Erro encontrando element para geometric average`);
        const median =
          document.getElementById("median") ??
          document.querySelector('label[for*="median"]')?.nextElementSibling;
        median instanceof HTMLElement
          ? (median.innerText = fixFactor(statistics.median()).toString())
          : console.error(`Erro encontrando element para mediana`);
        const mode =
          document.getElementById("mode") ??
          document.querySelector('label[for*="mode"]')?.nextElementSibling;
        mode instanceof HTMLElement
          ? (mode.innerText = statistics
              .mode()
              .toString()
              .replace(",", " ocorrências: "))
          : console.error(`Erro encontrando elemento para mode`);
        const variance =
          document.getElementById("variance") ??
          document.querySelector('label[for*="variance"]')?.nextElementSibling;
        variance instanceof HTMLElement
          ? (variance.innerText = fixFactor(statistics.variance()).toString())
          : console.error(`Erro encontrando element para variance`);
        const varianceGeo =
          document.getElementById("varianceGeo") ??
          document.querySelector('label[for*="varianceGeo"]')
            ?.nextElementSibling;
        varianceGeo instanceof HTMLElement
          ? (varianceGeo.innerText = fixFactor(
              statistics.varianceGeo(),
            ).toString())
          : console.error(`Erro encontrando element para geometric variance`);
        const stdDev =
          document.getElementById("stdDev") ??
          document.querySelector('label[for="stdDev"]')?.nextElementSibling;
        stdDev instanceof HTMLElement
          ? (stdDev.innerText = fixFactor(statistics.stdDev()).toString())
          : console.error(
              `Erro encontrando element para arithmetic standard deviation`,
            );
        const stdDevGeo =
          document.getElementById("stdDevGeo") ??
          document.querySelector('label[for*="stdDevGeo"]')?.nextElementSibling;
        stdDevGeo instanceof HTMLElement
          ? (stdDevGeo.innerText = fixFactor(statistics.stdDevGeo()).toString())
          : console.error(
              `Erro encontrando element para geometric standard deviation`,
            );
        const cVar =
          document.getElementById("cVar") ??
          document.querySelector('label[for*="cVar"]')?.nextElementSibling;
        cVar instanceof HTMLElement
          ? (cVar.innerText = fixFactor(statistics.cVar()).toString())
          : console.error(`Erro encontrando element para variation coeficient`);
        const quartis = statistics.quartis();
        const q1i =
          document.getElementById("q1i") ??
          document.querySelector('label[for="q1i"]')?.nextElementSibling;
        q1i instanceof HTMLElement
          ? (q1i.innerText = fixFactor(quartis[0][0]).toString())
          : console.error(`Erro encontrando element para q1i`);
        const q1 =
          document.getElementById("q1") ??
          document.querySelector('label[for="q1"]')?.nextElementSibling;
        q1 instanceof HTMLElement
          ? (q1.innerText = fixFactor(quartis[0][1]).toString())
          : console.error(`Erro encontrando element para q1`);
        const q2i =
          document.getElementById("q2i") ??
          document.querySelector('label[for="q2i"]')?.nextElementSibling;
        q2i instanceof HTMLElement
          ? (q2i.innerText = fixFactor(quartis[1][0]).toString())
          : console.error(`Erro encontrando element para q2i`);
        const q2 =
          document.getElementById("q2") ??
          document.querySelector('label[for="q2"]')?.nextElementSibling;
        q2 instanceof HTMLElement
          ? (q2.innerText = fixFactor(quartis[1][1]).toString())
          : console.error(`Erro encontrando element para q2`);
        const q3i =
          document.getElementById("q3i") ??
          document.querySelector('label[for="q3i"]')?.nextElementSibling;
        q3i instanceof HTMLElement
          ? (q3i.innerText = fixFactor(quartis[2][0]).toString())
          : console.error(`Erro encontrando element para q3i`);
        const q3 =
          document.getElementById("q3") ??
          document.querySelector('label[for="q3"]')?.nextElementSibling;
        q3 instanceof HTMLElement
          ? (q3.innerText = fixFactor(quartis[2][1]).toString())
          : console.error(`Erro encontrando element para q3`);
        const iqr =
          document.getElementById("iqr") ??
          document.querySelector('label[for*="iqr"]')?.nextElementSibling;
        iqr instanceof HTMLElement
          ? (iqr.innerText = fixFactor(quartis[5]).toString())
          : console.error(`Erro encontrado element para iqr`);
        const lowWhisk =
          document.getElementById("lowWhisk") ??
          document.querySelector('label[for*="lowWhisk"]')?.nextElementSibling;
        lowWhisk instanceof HTMLElement
          ? (lowWhisk.innerText = fixFactor(quartis[3][0]).toString())
          : console.error(`Erro encontrando element para lowWhisk`);
        const lowOl =
          document.getElementById("lowOl") ??
          document.querySelector('label[for*="lowOl"]')?.nextElementSibling;
        lowOl instanceof HTMLElement
          ? (lowOl.innerText =
              quartis[3][1]
                .map(number => fixFactor(number))
                .toString()
                .replace(/\[/g, "")
                .replace(/\]/g, "") || "Nenhum")
          : console.error(`Erro encontrando element para`);
        const upWhisk =
          document.getElementById("upWhisk") ??
          document.querySelector('label[for*="upWhisk"]')?.nextElementSibling;
        upWhisk instanceof HTMLElement
          ? (upWhisk.innerText = fixFactor(quartis[4][0]).toString())
          : console.error(`Erro encontrando element para upWhisk`);
        const upOl =
          document.getElementById("upOl") ??
          document.querySelector('label[for*="upOl"]')?.nextElementSibling;
        upOl instanceof HTMLElement
          ? (upOl.innerText =
              quartis[4][1]
                .map(number => fixFactor(number))
                .toString()
                .replace(/\[/g, "")
                .replace(/\]/g, "") || "Nenhum")
          : console.error(`Erro encontrando element para lowOl`);
        const pearsonAssymetryIndex =
          document.getElementById("pearsonAssymetryIndex") ??
          document.querySelector('label[for*="pearsonAssymetryIndex"]')
            ?.nextElementSibling;
        const indexPearsonAssymetry = fixFactor(
          statistics.pearsonAssymetryIndex(),
        );
        pearsonAssymetryIndex instanceof HTMLElement
          ? (pearsonAssymetryIndex.innerText = indexPearsonAssymetry.toString())
          : console.error(
              `Erro encontrando element para Pearson Assymetry index`,
            );
        const testPearsonIndex =
          document.getElementById("testPearsonIndex") ??
          document.querySelector('label[for*="testPearsonIndex"]')
            ?.nextElementSibling;
        testPearsonIndex instanceof HTMLElement
          ? (testPearsonIndex.innerText = statistics.testPearsonIndex(
              indexPearsonAssymetry,
            ))
          : console.error(`Erro encontrando element para testPearsonIndex`);
        const curtosis =
          document.getElementById("curtosis") ??
          document.querySelector('label[for*="curtosis"]')?.nextElementSibling;
        curtosis instanceof HTMLElement
          ? (curtosis.innerText = fixFactor(statistics.curtosis()).toString())
          : console.error(`Erro encontrando element para curtosis`);
        if (sValues) {
          const yValues = sValues
            .trim()
            .split(" ")
            .map(value => {
              let parsedValue = parseFloat(
                value.replaceAll(",", ".").replaceAll(/[^0-9]/g, ""),
              );
              if (!Number.isFinite(parsedValue)) parsedValue = 0;
              return parsedValue;
            });
          console.log(yValues);
          const pearsonCorrelationIndex =
            document.getElementById("pearsonCorrelationIndex") ??
            document.querySelector('label[for*="pearsonCorrelationIndex"]')
              ?.nextElementSibling;
          pearsonCorrelationIndex instanceof HTMLElement
            ? (pearsonCorrelationIndex.innerText = statistics
                .pearsonCorrelationIndex(values, yValues)
                .toString())
            : console.error(
                `Erro localizando element para índice de correlação de Pearson`,
              );
        }
      } else console.error(`Erro capturando valores gerais`);
      if (pValues && tValues) {
        const total = tValues.trim().split(" ");
        const events = pValues.trim().split(" ");
        const eventsChances = events.map(event => {
          let prob = fixFactor(statistics.probSimpleStr(event, total));
          if (!Number.isFinite(prob)) prob = 0;
          return prob;
        });
        const probSimple =
          document.getElementById("probSimple") ??
          document.querySelector('label[for="probSimple"]')?.nextElementSibling;
        probSimple instanceof HTMLElement
          ? (probSimple.innerText = eventsChances
              .map(num => {
                return Number.isFinite(num) ? num : 0;
              })
              .map((num, i) =>
                !(i % 2 === 0)
                  ? `${fixFactor(num) * 100}% \n`
                  : `${fixFactor(num) * 100}% `,
              )
              .toString()
              .replaceAll(",", ""))
          : console.error(
              `Erro encontrando element para probabilidade simples`,
            );
        const probCond =
          document.getElementById("probCond") ??
          document.querySelector('label[for="probCond"]')?.nextElementSibling;
        probCond instanceof HTMLElement
          ? (() => {
              const numEventsCombations = Combinator.permute(total.length);
              const shuffleArray: Array<any[]> = [];
              let safeAcc = 0;
              while (shuffleArray.length < numEventsCombations) {
                let shuffled = Combinator.shuffle(total);
                if (shuffled instanceof Set) shuffled = Array.from(shuffled);
                if (!shuffleArray.includes(shuffled))
                  shuffleArray.push(shuffled);
                if (safeAcc > 999) break;
                safeAcc++;
              }
              const condEventsChance = shuffleArray.map((events, c) => {
                return events.map((_, i) => {
                  return statistics.probCond(
                    shuffleArray[c][i],
                    shuffleArray[c][i + 1],
                    total,
                  );
                });
              });
              probCond.innerText = condEventsChance
                .flat(1)
                .map(num => {
                  return Number.isFinite(num) ? num : 0;
                })
                .map((num, i) =>
                  !(i % 2 === 0)
                    ? `${fixFactor(num) * 100}% \n`
                    : `${fixFactor(num) * 100}% `,
                )
                .toString()
                .replaceAll(",", "");
            })()
          : console.error(
              `Erro encontrando element para probabilidade condicional`,
            );
      } else console.error(`Erro capturando valores para probabilidade`);
    });
  } else console.error(`Error fetching calc button for testing.`);
}
