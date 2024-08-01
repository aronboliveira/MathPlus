import Vue, { defineComponent } from "vue";
import {
  initFillAttrs,
  textTransformPascal,
} from "../../../lib/handlers/handlersModel";
import { HTMLNav, voidishHtmlEl } from "../../../lib/declarations/types";
import * as Formulas from "../../../lib/formulaTitles";
import {
  htmlElementNotFound,
  stringError,
  typeError,
} from "../../../lib/handlers/handlersErrors";
//@ts-ignore
import CalcRes from "../../CalcRes.vue";
import { addOprtTarg } from "../../../lib/handlers/handlersEvents";
export const AccordionList = (() =>
  defineComponent({
    name: "AccordionList",
    props: {
      baseId: {
        type: String,
        required: true,
      },
      n_i: {
        type: Array as () => string[],
        required: true,
        default: 1,
      },
      shouldShowAccordion: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
    methods: {
      routeToOprtGrp(btn: voidishHtmlEl) {
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
          try {
            let name = btn.innerText.trim();
            history.pushState(
              {},
              "",
              `${location.origin}${
                location.pathname
              }?oprt-grp=${name.toLowerCase()}`,
            );
          } catch (e) {
            console.error(
              `Error executing procedure for updating url:\n${
                (e as Error).message
              }`,
            );
          }
          try {
            const matchedFormulaArr =
              Formulas[
                `titles${
                  /\s/g.test(btn.innerText)
                    ? textTransformPascal(btn.innerText).slice(
                        0,
                        btn.innerText.indexOf(" "),
                      )
                    : textTransformPascal(btn.innerText)
                }`
              ];
            if (!Array.isArray(matchedFormulaArr))
              throw typeError(
                matchedFormulaArr,
                `Validation of Formula Array type`,
                ["Array"],
              );
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

            if (!("$createElement" in this))
              throw new Error(`$createElement is not a function for 'this'`);
            if (!(typeof CalcRes === "object") || typeof CalcRes === "function")
              throw new Error(`CalcRes is not defined as an object.`);
            resultsGrid.innerHTML = ``;
            if (btnCalc.dataset.operations) delete btnCalc.dataset.operations;
            for (const title of matchedFormulaArr) {
              try {
                const element = this.$createElement(CalcRes, {
                  props: {
                    labTxt: title,
                    outpId: title
                      .toLowerCase()
                      .replaceAll(/[\s\+\-\*~>\.#]/g, "__"),
                  },
                });
                if (!("$el" in element)) {
                  const instance = new (Vue.extend(CalcRes))({
                    propsData: {
                      labTxt: title,
                      outpId: title.toLowerCase().replaceAll(" ", "__"),
                    },
                  });
                  if (!("$mount" in instance))
                    throw new Error(
                      `$mount is not a function for the created instance`,
                    );
                  const domElement = instance.$mount().$el;
                  resultsGrid.appendChild(domElement);
                  addOprtTarg(title, domElement);
                  continue;
                }
                const domElement = element.$el;
                resultsGrid.appendChild(domElement);
                addOprtTarg(title, domElement);
              } catch (e) {
                console.error(
                  `Error executing iteration for titles:\n${
                    (e as Error).message
                  }`,
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
          console.error(
            `Error executing routeToOptGrp:\n${(e as Error).message}`,
          );
        }
      },
    },
    mounted() {
      console.log("Accordion List mounted");
      // console.log("Tag for Component:");
      // console.log(
      //   camelToKebab(
      //     this.$vnode.tag.slice(this.$vnode.tag.lastIndexOf("-") + 1),
      //   ),
      // );
      const navElement = this.$refs.nav as HTMLNav;
      initFillAttrs(navElement ?? document);
    },
  }))();
export default AccordionList;
