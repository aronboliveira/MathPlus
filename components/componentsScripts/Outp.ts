import {OutpDef, OutpProps} from "~/lib/declarations/interfacesComponents";
import {validateAsInp} from "~/lib/handlers/handlersModel";

export default class Outp implements OutpDef {
  constructor(public name: string, public props: OutpProps) {
    this.name = name || "Output";
    [
      props.labTxt,
      props.labCls,
      props.outpId,
      props.outpId,
      props.outpCls,
    ].forEach(prop => {
      prop.type = validateAsInp(prop);
    });
  }
}
