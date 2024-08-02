import { voidishHtmlEl } from "../declarations/types";
import { htmlElementNotFound, stringError, typeError } from "./handlersErrors";
import * as Formulas from "../formulaTitles";
import { textTransformPascal } from "./handlersModel";
import Vue, { DefineComponent } from "vue";
import { addOprtTarg } from "./handlersEvents";
//@ts-ignore;
import CalcRes from "../../components/CalcRes.vue";

export function handleRouteToOprtGrp(
  thisEl: DefineComponent | any,
  btn: voidishHtmlEl,
  toggleOpacity: boolean = false,
): void {
  try {
    if (
      !(
        btn instanceof HTMLButtonElement ||
        (btn instanceof HTMLInputElement && btn.type === "button")
      )
    )
      throw htmlElementNotFound(btn, `Validation of Btn instance`, [
        'HTMLButtonElement, <input type="button">',
      ]);
    if (btn.innerText === "") throw stringError("Empty text", "/./+");
    let name = /\s/g.test(btn.innerText)
      ? btn.innerText
          .slice(0, btn.innerText.indexOf(" "))
          .toLowerCase()
          .replaceAll(/\s\t\r\n/g, "")
      : btn.innerText
          .trim()
          .toLowerCase()
          .replaceAll(/\s\t\r\n/g, "");
    name = /[a-z]/g.test(name)
      ? name
      : btn.innerText.replaceAll(/[\s\r\t\n]/g, "").toLowerCase();
    history.pushState(
      {},
      "",
      `${location.origin}${location.pathname}?oprt-grp=${name}`,
    );
    try {
      const matchedFormulaArr = (Formulas as any)[
        `titles${textTransformPascal(name)}`
      ];
      if (!Array.isArray(matchedFormulaArr))
        throw typeError(matchedFormulaArr, `Validation of Formula Array type`, [
          "Array",
        ]);
      if (matchedFormulaArr.length === 0)
        throw new Error(`List for formula group is empty.`);
      const divEntry = document.getElementById("divEntry");
      if (!(divEntry instanceof HTMLElement))
        throw htmlElementNotFound(
          divEntry,
          `Validation of Div for Calculating Entries`,
        );
      const resultsGrid = document.getElementById("resultsGrid");
      if (!(resultsGrid instanceof HTMLElement))
        throw htmlElementNotFound(
          resultsGrid,
          `Validation of Grid for displaying Calculated Results`,
        );
      const btnCalc = document.getElementById("btnCalcValues");
      if (!(btnCalc instanceof HTMLElement))
        throw htmlElementNotFound(
          btnCalc,
          `Validation of Button for Calculation instance`,
        );

      if (!("$createElement" in thisEl))
        throw new Error(`$createElement is not a function for 'this'`);
      if (!(typeof CalcRes === "object") || typeof CalcRes === "function")
        throw new Error(`CalcRes is not defined as an object.`);
      resultsGrid.innerHTML = ``;
      if (toggleOpacity) {
        resultsGrid.style.transition = resultsGrid.style.transition.replace(
          "opacity 1s ease-in-out",
          "",
        );
        resultsGrid.style.opacity = "0";
        setTimeout(() => {
          resultsGrid.style.transition += "opacity 1s ease-in-out";
          resultsGrid.style.opacity = "1";
        }, 200);
      }
      if (btnCalc.dataset.operations) delete btnCalc.dataset.operations;
      for (const title of matchedFormulaArr) {
        try {
          const element = thisEl.$createElement(CalcRes, {
            props: {
              labTxt: title,
              outpId: title.toLowerCase().replaceAll(/[\s\+\-\*~>\.#]/g, "_"),
            },
          });
          if (!("$el" in element)) {
            const instance = new (Vue.extend(CalcRes))({
              propsData: {
                labTxt: title,
                outpId: title.toLowerCase().replaceAll(" ", "_"),
              },
            });
            if (!("$mount" in instance))
              throw new Error(
                `$mount is not a function for the created instance`,
              );
            const domElement = instance.$mount().$el;
            resultsGrid.appendChild(domElement);
            addOprtTarg(title, domElement as HTMLElement);
            continue;
          }
          const domElement = element.$el;
          resultsGrid.appendChild(domElement);
          addOprtTarg(title, domElement as HTMLElement);
        } catch (e) {
          console.error(
            `Error executing iteration for titles:\n${(e as Error).message}`,
          );
        }
      }
    } catch (e) {
      console.error(
        `Error executing procedure for updating resultsGrid:\n${
          (e as Error).message
        }`,
      );
    }
  } catch (e) {
    console.error(`Error executing routeToOptGrp:\n${(e as Error).message}`);
  }
}
