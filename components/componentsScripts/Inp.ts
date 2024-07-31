import {InpDef, InpProps} from "~/lib/declarations/interfacesComponents";
import {validateAsInp} from "~/lib/handlers/handlersModel";

export default class Inp implements InpDef {
  constructor(public name: string, public props: InpProps) {
    this.name = name || "Input";
    [
      props.labTxt,
      props.labCls,
      props.inpId,
      props.inpT,
      props.inpCls,
      props.inpPh,
    ].forEach(prop => {
      prop.type = validateAsInp(prop);
    });
  }
}
