import {voidishHtmlEl} from "../declarations/types";
import {
  htmlElementNotFound,
  markWithCommentary,
  typeError,
} from "./handlersErrors";
import {
  capitalizeFirstLetter,
  checkScope,
  linkLabelToEntry,
  normalizeReadText,
} from "./handlersModel";

export function formatForBst(
  scope: voidishHtmlEl | Document = document,
  labPattern?: RegExp | string,
  Component?: Function,
) {
  try {
    let identifier = "";
    scope = checkScope(
      scope,
      `validation of scope for formatForBst for ${
        Component?.prototype.constructor.name || "undefined component"
      }`,
    );
    if (scope instanceof HTMLElement) identifier = scope.id;
    if (identifier === "" && scope instanceof HTMLFormElement)
      identifier = scope.name;
    if (scope instanceof Document) {
      console.warn(
        `formatForBst() defaulted scope to Document. Be sure that this is intended.`,
      );
      identifier = "documentElement";
    }
    scope.querySelectorAll("input").forEach((inp, i) => {
      try {
        if (!(inp instanceof HTMLInputElement))
          throw htmlElementNotFound(
            inp,
            `Input cicle ${i} for ${identifier || "Unidentified scope"}`,
            ["HTMLInputElement"],
          );
        inp.classList.add("form-control");
      } catch (eI) {
        console.error(`Error classifying inputs :${(eI as Error).message}`);
      }
    });
    scope.querySelectorAll("select").forEach((sel, i) => {
      try {
        if (!(sel instanceof HTMLSelectElement))
          throw htmlElementNotFound(
            sel,
            `Select cicle ${i} for ${identifier || "Unidentified scope"}`,
            ["HTMLSelectElement"],
          );
        sel.classList.add("form-control");
      } catch (eS) {
        console.error(`Error classifying inputs :${(eS as Error).message}`);
      }
    });
    scope.querySelectorAll("button").forEach((btn, i) => {
      try {
        if (!(btn instanceof HTMLButtonElement))
          throw htmlElementNotFound(btn, `Btn cicle ${i} for ${identifier}`, [
            "HTMLButtonElement",
          ]);
        btn.classList.add("btn");
      } catch (eB) {
        console.error(`Erro classifying buttons:\n${(eB as Error).message}`);
      }
    });
    scope.querySelectorAll(".carousel").forEach((carousel, i) => {
      try {
        if (!(carousel instanceof HTMLElement))
          throw htmlElementNotFound(
            carousel,
            `validation of Carousel iteration ${i} in ${
              scope?.nodeName || "unidentified scope"
            }`,
            ["HTMLElement"],
          );
        if (!carousel.parentElement!.classList.contains("container"))
          carousel.parentElement!.classList.add(`container`);
        if (!carousel.classList.contains("slide"))
          carousel.classList.add("slide");
        carousel.setAttribute("data-bs-ride", "true");
        Array.from(carousel.children)
          .filter(child => child instanceof HTMLButtonElement)
          .forEach((btnChild, i) => {
            if (i === 0 || i % 2 === 0) {
              btnChild.classList.add("carousel-control-prev");
              if (btnChild.firstElementChild)
                btnChild.firstElementChild.classList.add(
                  `carousel-control-prev-icon`,
                );
            } else {
              btnChild.classList.add("carousel-control-next");
              if (btnChild.firstElementChild)
                btnChild.firstElementChild.classList.add(
                  `carousel-control-next-icon`,
                );
            }
          });
        Array.from(carousel.children)
          .filter(child => !(child instanceof HTMLButtonElement))
          .forEach((nonBtnChild, j) => {
            if (nonBtnChild.id === "")
              nonBtnChild.id = `nonBtnChild${j}Nest${
                capitalizeFirstLetter(carousel.id) || `Carousel${i}`
              }`;
            if (
              !nonBtnChild.classList.contains("carousel-indicators") &&
              !nonBtnChild.querySelector("dots")
            )
              nonBtnChild.classList.add("carousel-inner");
            if (nonBtnChild.children.length > 0) {
              nonBtnChild.firstElementChild!.classList.add("active");
              Array.from(nonBtnChild.firstElementChild!.querySelectorAll("*"))
                .filter(el => el instanceof HTMLElement)
                .forEach((el, k) => {
                  if (
                    el.querySelector("p") ||
                    el.querySelector("h1") ||
                    el.querySelector("h2") ||
                    el.querySelector("h3") ||
                    el.querySelector("h4") ||
                    el.querySelector("h5") ||
                    el.querySelector("h6")
                  ) {
                    if (el.id === "")
                      el.id = `carouselCaption${k}Nest${
                        capitalizeFirstLetter(nonBtnChild.id) || "Unidentified"
                      }`;
                    el.classList.add("carousel-caption");
                  }
                  [
                    ...Array.from(el.querySelectorAll("p")),
                    ...Array.from(el.querySelectorAll("h1")),
                    ...Array.from(el.querySelectorAll("h2")),
                    ...Array.from(el.querySelectorAll("h3")),
                    ...Array.from(el.querySelectorAll("h4")),
                    ...Array.from(el.querySelectorAll("h5")),
                    ...Array.from(el.querySelectorAll("h6")),
                  ].forEach((hd, l) => {
                    if (hd.id === "")
                      hd.id = `carouselHeading${l}Nest${
                        capitalizeFirstLetter(el.id) || "Unidentified"
                      }`;
                    hd.classList.add(
                      "carousel-heading",
                      `carousel-heading-${el.id || "unidentified"}`,
                    );
                  });
                });
              for (let cc = 0; cc < nonBtnChild.children.length; cc++) {
                if (nonBtnChild.children[cc].id === "")
                  nonBtnChild.children[cc].id = `nonBtnChild${cc}Nest${
                    capitalizeFirstLetter(nonBtnChild.id) || `NonBtnChild${j}`
                  }`;
                nonBtnChild.children[cc].classList.add("carousel-item");
                nonBtnChild.children[cc].setAttribute(
                  "data-bs-interval",
                  "10000",
                );
              }
            } else
              console.warn(
                `No child found for Non Button child id ${
                  nonBtnChild.id || "unidentified"
                }`,
              );
          });
        carousel.querySelectorAll("button").forEach((btn, j) => {
          btn.setAttribute(
            `data-bs-target`,
            `#${carousel.id || `unidentified${j}`}`,
          );
          if (
            btn.dataset[`bs-target`] &&
            /unidentified/gi.test(btn.dataset[`bs-target`])
          )
            console.warn(
              `Error constructing bs-target for btn ${
                btn.id || `unidentified, iteration ${j}`
              }`,
            );
        });
      } catch (eC) {
        markWithCommentary(carousel, `validation of carousel instance`);
        console.error(
          `Error executing routine for carousel:\n${(eC as Error).message}`,
        );
      }
    });
    if (labPattern && Component) {
      if (!(labPattern instanceof RegExp) && !(typeof labPattern === "string"))
        throw typeError(
          labPattern,
          `checking label pattern for ${identifier}`,
          ["string", "RegExp"],
        );
      scope.querySelectorAll("label").forEach((label, i) => {
        linkLabelToEntry(
          label,
          i.toString(),
          Component.prototype.constructor.name,
        );
        if (
          label.nextElementSibling instanceof HTMLInputElement ||
          label.nextElementSibling instanceof HTMLSelectElement ||
          label.nextElementSibling instanceof HTMLTextAreaElement ||
          label.previousElementSibling instanceof HTMLInputElement ||
          label.previousElementSibling instanceof HTMLSelectElement ||
          label.previousElementSibling instanceof HTMLTextAreaElement ||
          label.querySelector("input") ||
          label.querySelector("select") ||
          label.querySelector("textarea")
        ) {
          label.innerText = normalizeReadText(
            label.htmlFor.replace(/inpnewuser/gi, ""),
            i.toString(),
            `innertext of label idf ${label.htmlFor}`,
          );
        } else if (
          label.nextElementSibling instanceof HTMLOutputElement ||
          label.previousElementSibling instanceof HTMLOutputElement ||
          label.querySelector("output")
        ) {
          console.log("CASE OUTPUT");
          label.innerText = normalizeReadText(
            label.htmlFor.replace(/outpuser/gi, ""),
            i.toString(),
            `innertext of label idf ${label.htmlFor}`,
          );
        }
      });
    }
  } catch (e) {
    console.error(`Error executing formatForBst:${(e as Error).message}`);
  }
}
