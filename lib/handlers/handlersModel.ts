import {PropField} from "../declarations/interfaces";
import {inpTypes} from "../declarations/types";

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
