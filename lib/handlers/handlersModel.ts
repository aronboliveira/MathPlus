import { PropField } from "../declarations/interfaces";
import {
  inpTypes,
  langSizeableNode,
  looseNum,
  nullishHTMLEl,
  numSets,
  scopeNode,
  voidishEl,
  voidishHtmlEl,
} from "../declarations/types";
import {
  htmlElementNotFound,
  markWithCommentary,
  nodeNotFound,
  stringError,
  typeError,
} from "./handlersErrors";
import { parseFinite } from "./handlersMath";
import { formatForBst } from "./handlersStyles";

export function validateAsInp(
  inp: HTMLInputElement | PropField<string | String>,
  def: inpTypes = "text",
) {
  if (
    !inp.type ||
    inp.type === "" ||
    !(
      inp.type === "button" ||
      inp.type === "checkbox" ||
      inp.type === "color" ||
      inp.type === "date" ||
      inp.type === "datetime-local" ||
      inp.type === "email" ||
      inp.type === "file" ||
      inp.type === "hidden" ||
      inp.type === "image" ||
      inp.type === "month" ||
      inp.type === "number" ||
      inp.type === "password" ||
      inp.type === "radio" ||
      inp.type === "range" ||
      inp.type === "reset" ||
      inp.type === "search" ||
      inp.type === "submit" ||
      inp.type === "tel" ||
      inp.type === "text" ||
      inp.type === "time" ||
      inp.type === "url" ||
      inp.type === "week"
    )
  )
    return def;
  else return inp.type;
}

export function capitalizeFirstLetter(text: string): string {
  try {
    if (!(typeof text === "string"))
      throw typeError(text, `type of argument for capitalizeFirstLetter`, [
        "string",
      ]);
    text = `${text.slice(0, 1).toUpperCase()}${text.slice(1)}`;
    return text;
  } catch (e) {
    console.error(
      `Error executing capitalizeFirstLetter:\n${(e as Error).message}`,
    );
    return text.toString();
  }
}

export function textTransformPascal(text: string): string {
  try {
    if (!(typeof text === "string"))
      throw typeError(text, `type of argument for capitalizeFirstLetter`, [
        "string",
      ]);
    text = `${text.slice(0, 1).toUpperCase()}${text.slice(1).toLowerCase()}`;
    return text;
  } catch (e) {
    console.error(
      `Error executing capitalizeFirstLetter:\n${(e as Error).message}`,
    );
    return text.toString();
  }
}

export function normalizeReadText(
  text: string,
  cicle: string = "No cicle",
  context: string = "No context",
): string {
  let formatText = text;
  try {
    if (!(typeof text === "string"))
      throw typeError(text, `checking argument for normalizeReadText`, [
        "string",
      ]);
    formatText = `${text.slice(0, 1).toUpperCase()}${text.slice(1)}`;
    const separatorMatches = formatText.matchAll(/-(?=[a-z])(?!bin)/g);
    //@ts-ignore
    for (const separator of separatorMatches) {
      const execMatch = /-(?=[a-z])(?!bin)/g.exec(formatText);
      if (execMatch) {
        const indx = execMatch.index;
        formatText = `${formatText.slice(0, indx + 1)}${formatText[
          indx + 1
        ].toUpperCase()}${formatText.slice(indx + 2)}`;
      }
    }
    formatText = formatText.replaceAll("_", " ").replaceAll(/-(?!bin)/gi, ", ");
    let safeAcc = 0;
    while (/[a-z]/gi.test(formatText)) {
      safeAcc++;
      let idx = /[a-z]/gi.exec(formatText)?.index ?? 0;
      if (idx) {
        idx = ++idx;
        formatText = `${formatText.slice(0, idx)} ${formatText.slice(idx)}`;
      }
      if (safeAcc > 100) break;
    }
    if (/familyname/gi.test(formatText.replaceAll(" ", "")))
      formatText += `(s)`;
    return formatText;
  } catch (e) {
    console.error(
      `Error executing normalizeReadText for cicle ${
        cicle || "undefined"
      } and context ${context || "undefined"}:${(e as Error).message}`,
    );
  }
  return formatText;
}

export function normalizeNumber(
  num: looseNum,
  numCase: numSets = "natural",
): looseNum {
  try {
    if (!(typeof num === "number" || typeof num === "string"))
      throw typeError(num, "number argument for normalizeNumber", [
        "number",
        "string",
      ]);
    if (num !== "") {
      if (typeof num === "string") num = parseFinite(num, "int");
      if (!(typeof numCase === "string"))
        throw typeError(numCase, `numCase argument for normalizeNumber`, [
          "string",
        ]);
      if (
        !(
          numCase === "whole" ||
          numCase === "natural" ||
          numCase === "integer" ||
          numCase === "rational" ||
          numCase === "real"
        )
      )
        throw stringError(numCase, "any name for a set of numbers");
      switch (numCase) {
        case "whole":
          if (num < 1) num = 1;
          return num;
        case "natural":
          if (num < 0) num = 0;
          return num;
        case "integer":
          const initialNum = num;
          num = parseFinite(
            typeof num === "number" ? num.toFixed(1) : num,
            "int",
            initialNum,
          );
          return num;
        case "rational":
          return num;
        case "real":
          return num;
        default:
          throw stringError(numCase, "any name for a set of numbers");
      }
    } else return num;
  } catch (e) {
    console.error(`Error executing normalizeNumber:\n${(e as Error).message}`);
    return "1";
  }
}

export function normalizeSpacing(value: string): string {
  try {
    if (typeof value !== "string")
      throw typeError(
        normalizeSpacing,
        `validation of value argument for normalizeSpacing`,
        ["string"],
      );
    return value.replaceAll(",", "_").replaceAll(" ", "_");
  } catch (e) {
    console.error(`Error executing normalizeSpacing:\n${(e as Error).message}`);
    return value;
  }
}

export function camelToKebab(str: string): string {
  const iniStr = str;
  try {
    return str
      .split(/(?=[A-Z])/g)
      .join("-")
      .toLowerCase();
  } catch (e) {
    console.error(`Error executing camelToKebab:\n${(e as Error).message}`);
    return iniStr;
  }
}

export function kebabToCamel(str: string): string {
  const iniStr = str;
  try {
    return str
      .split("-")
      .map((fragment, i) =>
        i === 0 ? fragment : textTransformPascal(fragment),
      )
      .join("");
  } catch (e) {
    console.error(`Error executing camelToKebab:\n${(e as Error).message}`);
    return iniStr;
  }
}

export function normalizeAccents(
  str: string,
  insensitive: boolean = true,
): string {
  try {
    if (typeof str !== "string")
      throw typeError(str, `Validation of str argument for normalizeAccents`, [
        "string",
      ]);
    if (typeof insensitive !== "boolean")
      throw typeError(
        insensitive,
        `Validation of insensitive argument for normalizeAccents`,
        ["boolean"],
      );
    return insensitive
      ? str
          .replaceAll(/[àáäâã]/gi, "a")
          .replaceAll(/[èéêë]/gi, "e")
          .replaceAll(/[ìíïî]/gi, "i")
          .replaceAll(/[òóôöõ]/gi, "o")
          .replaceAll(/[ùúüû]/gi, "u")
      : str
          .replaceAll(/[àáäâã]/g, "a")
          .replaceAll(/[ÀÁÄÂÃ]/g, "A")
          .replaceAll(/[èéêë]/g, "e")
          .replaceAll(/[ÈÉÊË]/g, "E")
          .replaceAll(/[ìíïî]/g, "i")
          .replaceAll(/[ÌÍÏÎ]/g, "I")
          .replaceAll(/[òóôöõ]/g, "o")
          .replaceAll(/[ÒÓÔÖÕ]/, "O")
          .replaceAll(/[ùúüû]/g, "u")
          .replaceAll(/[ÙÚÜÛ]/g, "U");
  } catch (e) {
    console.error(`Error executing normalizeAccents:\n${(e as Error).message}`);
    return str;
  }
}

export function watchLabels(): void {
  setInterval(() => {
    try {
      for (const label of Array.from(document.querySelectorAll("label"))) {
        label.dataset[`watched`] = "true";
        let relInp: voidishEl =
          label.querySelector("input") ?? label.querySelector("textarea");
        if (
          !(
            relInp instanceof HTMLInputElement ||
            relInp instanceof HTMLTextAreaElement
          )
        )
          relInp = label.nextElementSibling;
        if (
          !(
            relInp instanceof HTMLInputElement ||
            relInp instanceof HTMLTextAreaElement
          )
        )
          relInp = label.previousElementSibling;
        if (!label.parentElement) return;
        if (
          !(
            relInp instanceof HTMLInputElement ||
            relInp instanceof HTMLTextAreaElement
          )
        )
          relInp =
            label.parentElement.querySelector("input") ??
            label.parentElement.querySelector("textarea");
        if (!relInp) return;
        if (relInp.id === "" && label.htmlFor === "") {
          const labelNum = document.querySelectorAll("label").length;
          relInp.id = `filledInput${labelNum}`;
        }
        if (label.htmlFor !== relInp.id) label.htmlFor = relInp.id;
      }
    } catch (e) {
      console.error(
        `Error executing interval for watchLabels:\n${(e as Error).message}`,
      );
    }
  }, 3000);
}

export function linkLabelToEntry(
  label: voidishHtmlEl,
  cicle = "undefined",
  context = "No context",
): void {
  let elType = "Inp";
  try {
    if (!(label instanceof HTMLLabelElement))
      throw htmlElementNotFound(
        label,
        `Label for cicle ${cicle || `undefined`} of ${context || "No context"}`,
        ["HTMLLabelElement"],
      );
    const labelFor = label.htmlFor;
    let relEl: voidishEl = label.nextElementSibling;
    if (
      !(
        relEl instanceof HTMLInputElement ||
        relEl instanceof HTMLSelectElement ||
        relEl instanceof HTMLTextAreaElement ||
        relEl instanceof HTMLOutputElement
      )
    )
      relEl = label.previousElementSibling;
    if (
      !(
        relEl instanceof HTMLInputElement ||
        relEl instanceof HTMLSelectElement ||
        relEl instanceof HTMLTextAreaElement ||
        relEl instanceof HTMLOutputElement
      )
    )
      relEl =
        label.nextElementSibling?.querySelector("input") ||
        label.nextElementSibling?.querySelector("select") ||
        label.nextElementSibling?.querySelector("textarea") ||
        label.nextElementSibling?.querySelector("output");
    if (
      !(
        relEl instanceof HTMLInputElement ||
        relEl instanceof HTMLSelectElement ||
        relEl instanceof HTMLTextAreaElement ||
        relEl instanceof HTMLOutputElement
      )
    )
      relEl =
        label.previousElementSibling?.querySelector("input") ||
        label.previousElementSibling?.querySelector("select") ||
        label.previousElementSibling?.querySelector("textarea") ||
        label.previousElementSibling?.querySelector("output");
    if (
      !(
        relEl instanceof HTMLInputElement ||
        relEl instanceof HTMLSelectElement ||
        relEl instanceof HTMLTextAreaElement ||
        relEl instanceof HTMLOutputElement
      )
    )
      throw htmlElementNotFound(relEl, `HTMLElement related to ${label.id}`, [
        "HTMLInputElement",
        "HTMLSelectElement",
        "HTMLTextAreaElement",
      ]);
    if (relEl instanceof HTMLOutputElement) elType = "Outp";
    if (relEl.id === "") relEl.id = labelFor;
    if (relEl.id !== "" && relEl.id !== labelFor) label.htmlFor = relEl.id;
    if (
      relEl instanceof HTMLInputElement ||
      relEl instanceof HTMLTextAreaElement ||
      relEl instanceof HTMLSelectElement
    ) {
      if (/email/gi.test(label.htmlFor)) relEl.type === "email";
      try {
        if (
          relEl.classList.contains("form-select") ||
          relEl.classList.contains("form-control")
        )
          label.classList.add("form-label");
        if (
          label.classList.contains("form-label") &&
          !(
            relEl.classList.contains("form-control") ||
            relEl.classList.contains("form-select")
          )
        ) {
          relEl instanceof HTMLSelectElement
            ? relEl.classList.add("form-select")
            : relEl.classList.add("form-control");
        }
      } catch (eC) {
        markWithCommentary(label, `addition of BS classes`);
        console.error(
          `Error adding BS classes for ${label.htmlFor}:\n${
            (eC as Error).message
          }`,
        );
      }
    }
    try {
      let relDiv = label.parentElement;
      if (
        label.parentElement &&
        !(
          relDiv instanceof HTMLDivElement ||
          relDiv instanceof HTMLFieldSetElement
        )
      )
        relDiv = label.parentElement.parentElement;
      if (!(relDiv instanceof HTMLElement))
        throw htmlElementNotFound(
          relDiv,
          `Related ancestral for ${label.htmlFor}`,
          ["HTMLElement"],
        );
      const relGrp = relEl.parentElement?.parentElement;
      if (!(relGrp instanceof HTMLElement))
        throw htmlElementNotFound(
          relGrp,
          `Group element related to ${label.htmlFor}`,
          ["HTMLElement"],
        );
      if (
        relEl instanceof HTMLInputElement ||
        relEl instanceof HTMLTextAreaElement ||
        relEl instanceof HTMLSelectElement
      ) {
        const relFs = relDiv.closest("fieldset");
        if (!(relFs instanceof HTMLFieldSetElement) || relFs === relDiv)
          throw htmlElementNotFound(
            relFs,
            `Fieldset related to label ${label.htmlFor}`,
            ["HTMLElement"],
          );
        relFs.classList.add(
          `fs${label.htmlFor.slice(label.htmlFor.indexOf(elType))}`,
        );
        if (relGrp === relFs) {
          console.warn(
            `Related group and Related Fieldset similar for ${label.htmlFor}. Aborting classification for group`,
          );
          return;
        }
      }
      const grpClass = `grpDiv_${label.htmlFor.slice(
        label.htmlFor.indexOf(elType),
      )}`;
      relDiv.classList.add(
        `div${label.htmlFor.slice(label.htmlFor.indexOf(elType))}`,
      );
      if (!relGrp.classList.contains(grpClass)) relGrp.classList.add(grpClass);
    } catch (eP) {
      markWithCommentary(label, `addition of classes for ancestral`);
      console.error(
        `Error applying className for ancestral of ${label.htmlFor}:\n${
          (eP as Error).message
        }`,
      );
    }
    try {
      if (
        relEl instanceof HTMLInputElement ||
        relEl instanceof HTMLTextAreaElement
      ) {
        if (relEl.placeholder === "") {
          const checkText = () => {
            if (label.innerText !== "") {
              if (/confirm/gi.test(label.innerText)) {
                let iniPh = `Enter your ${label.innerText
                  .slice(0, 1)
                  .toLowerCase()}${label.innerText
                  .slice(1)
                  .toLowerCase()
                  .replace(/confirm\s?/gi, "")} again`;

                (relEl as HTMLInputElement).placeholder = iniPh.replace(
                  "confirm ",
                  "",
                );
              } else if (/bday/gi.test(label.innerText))
                label.innerText = label.innerText.replace(/Bday/gi, "Birthday");
              else
                (
                  relEl as HTMLInputElement
                ).placeholder = `Enter your ${label.innerText
                  .slice(0, 1)
                  .toLowerCase()}${label.innerText.slice(1).toLowerCase()}`;
            }
          };
          setTimeout(() => {
            checkText();
          }, 100);
          setTimeout(() => {
            checkText();
          }, 100);
        }
        if (/name/gi.test(relEl.id)) {
          relEl.autocapitalize = "on";
          relEl.classList.add("autocorrect");
          if (/first/gi.test(relEl.id) || /given/gi.test(relEl.id))
            relEl.autocomplete = "given-name";
          else if (/family/gi.test(relEl.id)) {
            relEl.autocomplete = "family-name";
            relEl.classList.add("autocorrect-full");
          }
        } else if (/password/gi.test(relEl.id))
          relEl.autocomplete = "new-password";
        else if (/email/gi.test(relEl.id)) relEl.autocomplete = "email";
        else if (/username/gi.test(relEl.id)) relEl.autocomplete = "username";
        else if (/gender/gi.test(relEl.id)) {
          if (relEl instanceof HTMLSelectElement)
            relEl.title = `Please select your gender here`;
        } else if (/countryname/gi.test(relEl.id)) {
          if (relEl instanceof HTMLInputElement)
            relEl.classList.add("autocorrect", "autocorrect-full");
          else if (relEl instanceof HTMLSelectElement)
            relEl.title = `Please select your current country here`;
        } else if (/age/gi.test(relEl.id)) {
          relEl.required = true;
        }
        const insertTitle = () => {
          if (
            (relEl instanceof HTMLInputElement ||
              relEl instanceof HTMLTextAreaElement) &&
            relEl.placeholder !== ""
          ) {
            relEl.title = `Please ${relEl.placeholder.toLowerCase()} here`;
            if (/password/gi.test(relEl.id))
              relEl.title += `.\nThe password must contain a symbol, a number, and, in the case of romanic languages, an upper case and a lower case character.`;
            if (/(?<!user\s*)name/gi.test(relEl.id)) {
              relEl.title += `.\nThe name cannot contain non-alphanumeric symbols or numbers`;
              if (/first/gi.test(relEl.id) || /given/gi.test(relEl.id))
                relEl.title += `.\nThe name cannot contain white-space characters.`;
              else if (/family/gi.test(relEl.id))
                relEl.title = relEl.title
                  .replaceAll(/names(?=\()/g, "name")
                  .replaceAll("name ", "name(s) ");
            }
          }
        };
        setTimeout(() => {
          insertTitle();
        }, 300);
        setTimeout(() => {
          insertTitle();
        }, 700);
      }
    } catch (ePh) {
      markWithCommentary(relEl, `addition of placeholders`);
      console.error(
        `Error placing Placeholders for ${relEl.id}:${(ePh as Error).message}`,
      );
    }
  } catch (eL) {
    markWithCommentary(label, `execution of linkLabelToEntry`);
    console.error(
      `Error executing cicle of linkLabelToEntry for Label:\n${
        (eL as Error).message
      }`,
    );
  }
}

export function formatForSelectors(
  scope: nullishHTMLEl | Document = document,
): void {
  try {
    scope = checkScope(scope, `validation of scope for formatForSelectors`);
    Array.from(scope.querySelectorAll("*"))
      .filter(element => element instanceof Element)
      .forEach(element => {
        const arrAttrs: Array<(Element | string)[]> = [];
        element instanceof HTMLElement
          ? arrAttrs.push([
              element,
              element.id,
              ...element.classList.toString().split(" "),
            ])
          : arrAttrs.push([element, element.id]);
        try {
          for (let g = 0; g < arrAttrs.length; g++) {
            const element = arrAttrs[g].find(
              conjEl => conjEl instanceof Element,
            ) as Element;
            const attrs = arrAttrs[g].filter(
              conjEl => typeof conjEl === "string",
            ) as string[];
            for (let attr of attrs) {
              if (
                attr.startsWith("-") ||
                attr.startsWith("#") ||
                attr.startsWith(".") ||
                /^[0-9]/g.test(attr)
              ) {
                const fixedAttr = `_${attr.slice(1)}`;
                if (attr === element.id) element.id = fixedAttr;
                else if (element instanceof HTMLElement) {
                  const matchedClass = Array.from(element.classList).find(
                    classN => classN === attr,
                  );
                  matchedClass
                    ? element.classList.remove(matchedClass)
                    : element.classList.remove(attr);
                  element.classList.add(fixedAttr);
                }
              }
            }
          }
        } catch (eA) {
          console.error(
            `Error executing iteration of Elements in formatForSelectors:${
              (eA as Error).message
            }`,
          );
        }
      });
  } catch (e) {
    console.error(`Error executing formatForSelectors:${(e as Error).message}`);
  }
}

export function adjustIdentifiers(scope: scopeNode = document): void {
  try {
    if (
      !(
        scope instanceof HTMLElement ||
        scope instanceof Document ||
        scope instanceof DocumentFragment
      )
    )
      throw new Error(`Invalid scope passed to adjustIdentifiers`);
    if (scope instanceof HTMLElement)
      [scope, ...Array.from(scope.querySelectorAll("*"))].forEach(el => {
        if (el.id !== "") {
          if (/\s/g.test(el.id)) el.id = normalizeSpacing(el.id);
          if (
            /^[0-9]/g.test(el.id) ||
            el.id.startsWith("+") ||
            el.id.startsWith("~") ||
            el.id.startsWith("-")
          )
            el.id = `_${el.id}`;
        }
        if (
          (el instanceof HTMLInputElement ||
            el instanceof HTMLButtonElement ||
            el instanceof HTMLFormElement) &&
          el.name !== ""
        ) {
          if (/\s/g.test(el.name)) el.name = normalizeSpacing(el.name);
          if (
            /^[0-9]/g.test(el.name) ||
            el.name.startsWith("+") ||
            el.name.startsWith("~") ||
            el.name.startsWith("-")
          )
            el.name = `_${el.name}`;
          el.classList.forEach(classListed => {
            if (/\s/g.test(classListed)) {
              const fixedClass = normalizeSpacing(classListed);
              el.classList.remove(fixedClass);
              el.classList.add(fixedClass);
            }
            if (
              /^[0-9]/g.test(classListed) ||
              classListed.startsWith("+") ||
              classListed.startsWith("~") ||
              classListed.startsWith("-")
            ) {
              const fixedClass = `_${classListed}`;
              el.classList.remove(classListed);
              el.classList.add(fixedClass);
            }
          });
        }
      });
    else
      scope.querySelectorAll("*").forEach(el => {
        if (el.id !== "") {
          if (/\s/g.test(el.id)) el.id = normalizeSpacing(el.id);
          if (
            /^[0-9]/g.test(el.id) ||
            el.id.startsWith("+") ||
            el.id.startsWith("~") ||
            el.id.startsWith("-")
          )
            el.id = `_${el.id}`;
        }
        if (
          (el instanceof HTMLInputElement ||
            el instanceof HTMLButtonElement ||
            el instanceof HTMLFormElement) &&
          el.name !== ""
        ) {
          if (/\s/g.test(el.name)) el.name = normalizeSpacing(el.name);
          if (
            /^[0-9]/g.test(el.name) ||
            el.name.startsWith("+") ||
            el.name.startsWith("~") ||
            el.name.startsWith("-")
          )
            el.name = `_${el.name}`;
          el.classList.forEach(classListed => {
            if (/\s/g.test(classListed)) {
              const fixedClass = normalizeSpacing(classListed);
              el.classList.remove(fixedClass);
              el.classList.add(fixedClass);
            }
            if (
              /^[0-9]/g.test(classListed) ||
              classListed.startsWith("+") ||
              classListed.startsWith("~") ||
              classListed.startsWith("-")
            ) {
              const fixedClass = `_${classListed}`;
              el.classList.remove(classListed);
              el.classList.add(fixedClass);
            }
          });
        }
      });
  } catch (e) {
    console.error(
      `Error executing adjustIdentifiers:\n${(e as Error).message}`,
    );
  }
}

export function checkScope(
  scope: scopeNode = document,
  context?: string,
): langSizeableNode {
  try {
    if (!(scope instanceof HTMLElement) && !(scope instanceof Document)) {
      console.warn(
        `Scope not validated as an HTMLElement for ${context}. Defaulted to documentElement. Be sure this is intended.`,
      );
      scope = document;
    }
    return scope;
  } catch (e) {
    console.error(
      `Error executing checkScope. Defaulting to documentElement: \n${
        (e as Error).message
      }`,
    );
    return document;
  }
}

export function syncAriaStates(
  scope: voidishHtmlEl | Document = document,
): void {
  try {
    scope = checkScope(scope, `validation of syncAriaStates arguments`);
    const els = scope.querySelectorAll("*");
    if (
      (Array.isArray(els) || els instanceof NodeList) &&
      els.length > 0 &&
      Array.from(els).every(el => el instanceof Element)
    ) {
      els.forEach(el => {
        if (el instanceof HTMLElement) {
          el.hidden && !el.focus
            ? (el.ariaHidden = "true")
            : (el.ariaHidden = "false");
          el.addEventListener("click", () => {
            el.hidden && !el.focus
              ? (el.ariaHidden = "true")
              : (el.ariaHidden = "false");
          });
          if (el.classList.contains("poCaller")) {
            el.ariaHasPopup = "menu";
          }
          if (
            el instanceof HTMLSelectElement ||
            el instanceof HTMLInputElement ||
            el instanceof HTMLTextAreaElement
          ) {
            if (el instanceof HTMLSelectElement) {
              if (el.querySelectorAll("option").length > 0) {
                el.querySelectorAll("option").forEach(option => {
                  option.selected
                    ? (option.ariaSelected = "true")
                    : (option.ariaSelected = "false");
                });
                el.addEventListener("change", () => {
                  el.querySelectorAll("option").forEach(option => {
                    option.selected
                      ? (option.ariaSelected = "true")
                      : (option.ariaSelected = "false");
                  });
                });
              }
              el.addEventListener("click", () => {
                if (el.ariaExpanded === "false") el.ariaExpanded = "true";
                if (el.ariaExpanded === "true") el.ariaExpanded = "false";
              });
            }
            if (
              el instanceof HTMLInputElement ||
              el instanceof HTMLTextAreaElement
            ) {
              if (el.placeholder && el.placeholder !== "")
                el.ariaPlaceholder = el.placeholder;
              el.required
                ? (el.ariaRequired = "true")
                : (el.ariaRequired = "false");
              !el.checkValidity()
                ? (el.ariaInvalid = "true")
                : (el.ariaInvalid = "false");
              el.closest("form")?.addEventListener("submit", () => {
                if (!el.checkValidity()) {
                  el.ariaInvalid = "true";
                } else {
                  el.ariaInvalid = "false";
                }
              });
              if (
                el instanceof HTMLTextAreaElement ||
                (el instanceof HTMLInputElement &&
                  (el.type === "text" ||
                    el.type === "tel" ||
                    el.type === "email" ||
                    el.type === "number" ||
                    el.type === "date" ||
                    el.type === "time" ||
                    el.type === "password" ||
                    el.type === "search" ||
                    el.type === "month" ||
                    el.type === "week"))
              ) {
                if (
                  el instanceof HTMLInputElement &&
                  el.list &&
                  el.list.id !== ""
                )
                  el.ariaAutoComplete = "list";
                if (
                  el instanceof HTMLInputElement &&
                  (el.type === "number" ||
                    el.type === "date" ||
                    el.type === "time")
                ) {
                  el.ariaValueMax = (el as HTMLInputElement).max;
                  el.ariaValueMin = (el as HTMLInputElement).min;
                }
                if (el instanceof HTMLInputElement && el.type === "range") {
                  el.addEventListener("change", () => {
                    el.ariaValueNow = el.value;
                    el.ariaValueText = el.value;
                  });
                }
              } else if (
                el instanceof HTMLInputElement &&
                (el.type === "radio" || el.type === "checkbox")
              ) {
                el.checked
                  ? (el.ariaChecked = "true")
                  : (el.ariaChecked = "false");
                el.disabled
                  ? (el.ariaDisabled = "true")
                  : (el.ariaDisabled = "false");
                el.addEventListener("change", () => {
                  el.checked
                    ? (el.ariaChecked = "true")
                    : (el.ariaChecked = "false");
                  el.disabled
                    ? (el.ariaDisabled = "true")
                    : (el.ariaDisabled = "false");
                });
              } else if (
                el instanceof HTMLInputElement &&
                (el.type === "button" ||
                  el.type === "submit" ||
                  el.type === "reset")
              ) {
                el.addEventListener("mousedown", click => {
                  if (click.button === 0) el.ariaPressed = "true";
                });
                el.addEventListener("mouseup", release => {
                  if (release.button === 0) el.ariaPressed = "false";
                });
              }
            }
          }
          if (el instanceof HTMLLabelElement) {
            if (el.hasChildNodes() && el.firstChild instanceof Text) {
              el.ariaLabel = el.firstChild.nodeValue;
            }
          }
          if (el instanceof HTMLButtonElement) {
            el.addEventListener("mousedown", click => {
              if (click.button === 0) el.ariaPressed = "true";
            });
            el.addEventListener("mouseup", release => {
              if (release.button === 0) el.ariaPressed = "false";
            });
            if (el.textContent?.match(/consultar/gi)) {
              el.ariaHasPopup = "dialog";
            }
          }
          if (el instanceof HTMLDialogElement) el.ariaModal = "true";
        }
      });
    } else console.warn(`Error executing syncAriaStates`);
  } catch (e) {
    console.error(`Error:${(e as Error).message}`);
  }
}

export function initFillAttrs(scope: scopeNode = document): void {
  try {
    scope = checkScope(scope);
    if (!(scope instanceof HTMLElement || scope instanceof Document))
      throw nodeNotFound(
        scope,
        `validation of scope argument in initFillAttrs`,
        ["HTMLElement", "Document"],
      );
    if (scope instanceof Document)
      console.warn(
        `initFillAttrs captured the documentElement as the scope. That will hinder the calling of some filling functions.`,
      );
    formatForBst(scope);
    formatForSelectors(scope);
    adjustIdentifiers(scope);
    syncAriaStates(scope);
  } catch (e) {
    console.error(`Error executing initFillAttrs:\n${(e as Error).message}`);
  }
}
