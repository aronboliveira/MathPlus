import { defineComponent } from "vue";
import {
  evTargNotFound,
  htmlElementNotFound,
  stringError,
  typeError,
} from "../../../lib/handlers/handlersErrors";
import * as Formulas from "../../../lib/formulaTitles";
import * as Algebra from "../../../lib/Algebra";
import * as Combinatorics from "../../../lib/Combinator";
import { regularToCamel } from "../../../lib/handlers/handlersModel";
import {
  algebraFormulaNames,
  combinatoricsFormulaNames,
} from "../../../lib/declarations/types";

export const BtnCalc = (() =>
  defineComponent({
    name: "BtnCalc",
    methods: {
      calculate(ev: MouseEvent): void {
        try {
          if (
            !(
              ev.currentTarget instanceof HTMLButtonElement ||
              (ev.currentTarget instanceof HTMLInputElement &&
                ev.currentTarget.type === "button")
            )
          )
            throw evTargNotFound(ev.currentTarget, ev, ["HTMLButtonElement"]);
          if (
            !ev.currentTarget.dataset.operations ||
            ev.currentTarget.dataset.operations === ""
          )
            throw new Error(
              `Failed to fetch Operations List in Button dataset`,
            );
          let urlCase = "";
          if (/algebra/gi.test(location.search)) urlCase = "Algebra";
          else if (/statistic/gi.test(location.search)) urlCase = "Statistics";
          else if (/probabil/gi.test(location.search)) urlCase = "Probability";
          else if (/combinator/gi.test(location.search))
            urlCase = "Combinatorics";
          else if (/trigonometr/gi.test(location.search))
            urlCase = "Trigonometry";
          else if (/geometr/gi.test(location.search)) urlCase = "Geometry";
          else
            throw stringError(
              location.search,
              "/algebra|statistic|probabl|combinator|trigonometr|geometr/gi",
            );
          const inpEntries = document.getElementsByClassName("inp-entry");
          if (inpEntries.length === 0)
            throw new Error(
              `Failed to populate List of Inputs for Calculating Entries`,
            );
          for (let i = 0; i < inpEntries.length; i++) {
            try {
              if (
                !(
                  (inpEntries[i] instanceof HTMLInputElement &&
                    ((inpEntries[i] as HTMLInputElement).type === "text" ||
                      (inpEntries[i] as HTMLInputElement).type === "number")) ||
                  inpEntries[i] instanceof HTMLTextAreaElement
                )
              )
                throw htmlElementNotFound(
                  inpEntries[i],
                  `Validation of Input for Entry instance`,
                  [
                    '<input type="text">',
                    '<input type="number">',
                    "<textarea>",
                  ],
                );
              if ((inpEntries[i] as HTMLInputElement).value.length === 0) {
                // [should have a list of placeholders]
                const prevPh = (inpEntries[i] as HTMLInputElement).placeholder;
                (
                  inpEntries[i] as HTMLInputElement
                ).placeholder = `This input needs to be filled`;
                (inpEntries[i] as HTMLInputElement).style.color = "#af091cca";
                (inpEntries[i] as HTMLInputElement).classList.add("red-ph");
                setTimeout(() => {
                  (inpEntries[i] as HTMLInputElement).placeholder = prevPh;
                  (inpEntries[i] as HTMLInputElement).style.color =
                    "var(--primar-wh)";
                  (inpEntries[i] as HTMLInputElement).classList.remove(
                    "red-ph",
                  );
                }, 2000);
              }
            } catch (e) {
              console.error(
                `Error executing iteration ${i} for reading entries:\n${
                  (e as Error).message
                }`,
              );
            }
          }
          const oprtsTBD = ev.currentTarget.dataset.operations.split("__");
          if (oprtsTBD.length === 0)
            throw new Error(`Failed to populate List of Operations to be done`);
          for (let i = 0; i < oprtsTBD.length; i++) {
            try {
              const oprtTarg = document.querySelector(
                `[data-operation="${oprtsTBD[i]}"]`,
              );
              if (!(oprtTarg instanceof HTMLElement))
                throw htmlElementNotFound(
                  oprtTarg,
                  `Validation of Operation Target Element`,
                );
              oprtTarg.innerText = `Operating!`;
              const sectFormulas = (Formulas as any)[`titles${urlCase}`];
              if (!Array.isArray(sectFormulas))
                throw typeError(
                  sectFormulas,
                  `Validation of Formula group type fetched`,
                  ["Array"],
                );
              let formula = sectFormulas.find(
                f =>
                  f.toLowerCase().replaceAll(/[\s\+\-\*~>\.#]/g, "_") ===
                  oprtTarg.dataset.operation,
              );
              if (typeof formula !== "string")
                throw typeError(
                  formula,
                  `Validation of fetched formula type or search`,
                  ["string"],
                );
              oprtTarg.innerText = `Operating for ${formula}...`;
              setTimeout(() => {
                try {
                  if (urlCase === "Algebra") {
                    const formulaToOperate: algebraFormulaNames =
                      Algebra[`${regularToCamel(formula)}`].name;
                    if (typeof formulaToOperate !== "function")
                      throw typeError(
                        formulaToOperate,
                        `Validation of Formula to Operate`,
                        ["function"],
                      );
                    if (formulaToOperate === "linearFormula")
                      oprtTarg.innerText = `${Algebra.linearFormula()}`;
                    else if (formulaToOperate === "quadraticFormula")
                      oprtTarg.innerText = `${Algebra.quadraticFormula()}`;
                    else if (formulaToOperate === "cubicFormula")
                      oprtTarg.innerText = `${Algebra.cubicFormula()}`;
                    else if (formulaToOperate === "differenceOfSquares")
                      oprtTarg.innerText = `${Algebra.differenceOfSquares()}`;
                    else if (formulaToOperate === "leastCommonMultiple")
                      oprtTarg.innerText = `${Algebra.leastCommonMultiple()}`;
                    else if (formulaToOperate === "greatestCommonDivisor")
                      oprtTarg.innerText = `${Algebra.greatestCommonDivisor()}`;
                    else if (formulaToOperate === "binominalTheorem")
                      oprtTarg.innerText = `${Algebra.binomialTheorem()}`;
                    else if (
                      formulaToOperate === "commonDifferenceOfArithmeticSeries"
                    )
                      oprtTarg.innerText = `${Algebra.commonDifferenceOfArithmeticSeries()}`;
                    else if (formulaToOperate === "sumOfArithmeticSeries")
                      oprtTarg.innerText = `${Algebra.sumOfArithmeticSeries()}`;
                    else if (
                      formulaToOperate === "commonDifferenceOfGeometricSeries"
                    )
                      oprtTarg.innerText = `${Algebra.commonDifferenceOfGeometricSeries()}`;
                    else if (formulaToOperate === "sumOfGeometricSeries") {
                      oprtTarg.innerText = `${Algebra.sumOfGeometricSeries()}`;
                    }
                  } else if (urlCase === "Combinatorics") {
                    let circular = false,
                      ignoreOrder = false,
                      allowRepetition = false;
                    if (/permutation|combination/gi.test(formula)) {
                      formula = /multiset/gi.test(formula)
                        ? "multisetPermutation"
                        : "permutation";
                      if (/circular/gi.test(formula)) circular = true;
                      if (/combination/gi.test(formula)) allowRepetition = true;
                      if (/repetition/gi.test(formula)) allowRepetition = true;
                    }
                    const formulaToOperate: combinatoricsFormulaNames =
                      Combinatorics[`${regularToCamel(formula)}`].name;
                    if (formulaToOperate === "permutation") {
                      if (formula === "permutationWithoutRepetition")
                        oprtTarg.innerText = `${Combinatorics.permutation()}`;
                      if (formula === "circularPermutation")
                        oprtTarg.innerText = `${Combinatorics.permutation(
                          0,
                          0,
                          true,
                        )}`;
                      if (formula === "distinctPermutationWithoutRepetition")
                        oprtTarg.innerText = `${Combinatorics.permutation(
                          0,
                          1,
                        )}`;
                      if (formula === "distinctPermutationWithRepetition")
                        oprtTarg.innerText = `${Combinatorics.permutation(
                          0,
                          0,
                          false,
                          false,
                          true,
                        )}`;
                      if (formula === "multisetPermutation")
                        oprtTarg.innerText = `${Combinatorics.multisetPermutation()}`;
                      if (formula === "combinationWithoutRepetition")
                        oprtTarg.innerText = `${Combinatorics.permutation(
                          0,
                          0,
                          false,
                          true,
                        )}`;
                      if (formula === "combinationWithRepetition")
                        oprtTarg.innerText = `${Combinatorics.permutation(
                          0,
                          0,
                          false,
                          true,
                          true,
                        )}`;
                    }
                  }
                } catch (e) {
                  console.error(
                    `Error executing procedure for finding formula function:\n${
                      (e as Error).message
                    }`,
                  );
                }
              }, 1000);
            } catch (e) {
              console.error(
                `Error executing iteration ${i} for loop of operations:\n${
                  (e as Error).message
                }`,
              );
            }
          }
        } catch (e) {
          console.error(
            `Error executing callback for ${
              ev instanceof Event ? ev.type : "Undefined Event type"
            }:\n${(e as Error).message}`,
          );
        }
      },
    },
  }))();
export default BtnCalc;
