import {stringError, typeError} from "./handlersErrors";

export function roundToTenth(
  num: number,
  multiplier: number = 1,
  fixeds: number = 2,
  up: boolean = false,
): string {
  try {
    if (typeof num !== "number")
      throw typeError(num, `validation of num argument for roundToTenth`, [
        "number",
      ]);
    if (typeof multiplier !== "number")
      throw typeError(
        multiplier,
        `validation of multipler argument for roundToTenth`,
        ["number"],
      );
    if (typeof fixeds !== "number")
      throw typeError(
        fixeds,
        `validation of fixeds argument for roundToTenth`,
        ["number"],
      );
    if (typeof up !== "boolean")
      throw typeError(up, `validation of up argument for roundToTenth`, [
        "boolean",
      ]);
    const tenth = 10 ** multiplier;
    return up
      ? (Math.ceil(num * tenth) / tenth).toFixed(fixeds)
      : (Math.floor(num * tenth) / tenth).toFixed(fixeds);
  } catch (e) {
    console.error(`Error executing roundToTenth:\n${(e as Error).message}`);
    return num.toFixed(2);
  }
}

export function parseFinite(
  value: string,
  context: string = "float",
  def: number = 0,
): number {
  try {
    if (typeof value !== "string")
      throw typeError(value, `reading first argument of parseFinite`, [
        "string",
      ]);
    if (typeof context !== "string")
      throw typeError(context, `reading second argument of parseFinite`, [
        "string",
      ]);
    if (context !== "int" && context !== "float")
      throw stringError(context, '"int" or "float"');
    if (typeof def !== "number")
      throw typeError(def, `reading third argument of parseFinite`, ["number"]);
    // @ts-ignore
    if (Number.isFinite) {
      if (context === "float") {
        if (!Number.isFinite(parseFloat(value))) {
          console.warn(`Error processing parseFloat. Value defaulted`);
          return def;
        } else return parseFloat(value);
      } else {
        if (!Number.isFinite(parseInt(value))) {
          console.warn(`Error processing parseInt. Value defaulted`);
          return def;
        } else return parseInt(value);
      }
    } else {
      console.warn(
        `The current browser does not support ES6. Please update your current active browser. That might result in misleading numbers.`,
      );
      if (context === "float") {
        if (isNaN(parseFloat(value)) || parseFloat(value) === Infinity) {
          console.warn(`Error processing parseFloat. Value defaulted`);
          return def;
        } else return parseFloat(value);
      } else {
        if (isNaN(parseInt(value)) || parseInt(value) === Infinity) {
          console.warn(`Error processing parseInt. Value defaulted`);
          return def;
        } else return parseInt(value);
      }
    }
  } catch (err) {
    console.error(`Error executing parseFinite():
    ${(err as Error).message}`);
    return -1;
  }
}

export function convertPercToDec(value: string): string {
  try {
    if (typeof value !== "string")
      throw typeError(
        value,
        `validation of value argument in converPercToDec`,
        ["string"],
      );
    if (/%/g.test(value))
      value = `${parseFinite(value.replace("%", "")) * 0.01}`;
    return value;
  } catch (e) {
    console.error(`Error executing convertPercToDec:\n${(e as Error).message}`);
    return value;
  }
}
