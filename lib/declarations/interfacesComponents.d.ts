import {PropField} from "./interfaces";
import {cyclePhase} from "./types";

export interface CommonComponentScript {
  phase: cyclePhase;
}
export interface namedDef {
  name: string;
}
export interface InpDef extends namedDef {
  props: InpProps;
}
export interface OutpDef extends namedDef {
  props: OutpProps;
}
export interface labeledProps {
  labTxt: PropField<String>;
  labCls: PropField<String>;
}
export interface InpProps extends labeledProps {
  inpId: PropField<String>;
  inpT: PropField<String>;
  inpCls: PropField<String>;
  inpPh: PropField<String>;
}
export interface OutpProps extends labeledProps {
  outpId: PropField<String>;
  outpT: PropField<String>;
  outpCls: PropField<String>;
}
