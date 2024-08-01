import { nextTick } from "process";
import { voidishEl, voidishHtmlEl } from "../declarations/types";
import { htmlElementNotFound, typeError } from "./handlersErrors";

export function isClickOutside(
  event: MouseEvent,
  dlgInBtn: Element,
): boolean[] {
  const rect = dlgInBtn.getBoundingClientRect();
  const { clientX, clientY } = event;
  return [
    clientX < rect.left,
    clientX > rect.right,
    clientY < rect.top,
    clientY > rect.bottom,
  ];
}

export function addOprtTarg(title: string, targEl: voidishEl): void {
  try {
    if (typeof title !== "string")
      throw typeError(title, `Validation of title arg for addOprtTarg`, [
        "string",
      ]);
    if (!(targEl instanceof HTMLElement))
      throw htmlElementNotFound(
        targEl,
        `Validation of targEl arg for addOprtTarg`,
      );
    const btnCalc = document.getElementById("btnCalcValues");
    if (!(btnCalc instanceof HTMLElement))
      throw htmlElementNotFound(
        btnCalc,
        `Validation of Button for Calculation instance`,
      );
    if (!btnCalc.dataset.operations) btnCalc.dataset.operations = "";
    btnCalc.dataset.operations += title;
    nextTick(() => {
      try {
        console.log("adding targ operation data...");
        let oprtOutp: voidishHtmlEl = targEl;
        if (!targEl.classList.contains("result-output"))
          oprtOutp = targEl.querySelector("output");
        if (!(oprtOutp instanceof HTMLElement))
          throw htmlElementNotFound(
            oprtOutp,
            `Validation of inner output instance`,
          );
        if (!oprtOutp.dataset.operation) oprtOutp.dataset.operation = "";
        oprtOutp.dataset.operation = oprtOutp.id;
        setTimeout(() => {
          let oprtOutp: voidishHtmlEl = targEl;
          if (!targEl.classList.contains("result-output"))
            oprtOutp = targEl.querySelector("output");
          if (!(oprtOutp instanceof HTMLElement))
            throw htmlElementNotFound(
              oprtOutp,
              `Validation of inner output instance`,
            );
          if (!oprtOutp.dataset.operation || oprtOutp.dataset.operation === "")
            oprtOutp.dataset.operation = title
              .toLowerCase()
              .replaceAll(/[\s\+\-\*~>\.#]/g, "__");
        }, 300);
      } catch (e) {
        console.error(`Error:${(e as Error).message}`);
      }
    });
  } catch (e) {
    console.error(`Error executing addOprtTarg:${(e as Error).message}`);
  }
}
