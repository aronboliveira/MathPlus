import {ComponentOptionsMixin, DefineComponent, ExtractPropTypes} from "vue";
import {PropField} from "./interfaces";
import {cyclePhase} from "./types";

export interface CommonComponentScript {
  phase: cyclePhase;
}
export interface NamedDef {
  name: string;
}
export interface ComponentDef extends NamedDef {
  define: (
    name?: string,
  ) => DefineComponent<
    {},
    any,
    {},
    {},
    {},
    ComponentOptionsMixin,
    ComponentOptionsMixin,
    {},
    string,
    Readonly<ExtractPropTypes<{}>>,
    {}
  >;
}
export interface InpDef extends ComponentDef {
  props: InpProps;
}
export interface OutpDef extends NamedDef {
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
