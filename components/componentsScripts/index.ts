import {cyclePhase} from "~/lib/declarations/types";
import defHydrateFront from "~/lib/front";
export default function IndexScript(phase: cyclePhase) {
  switch (phase) {
    case "mounted":
      defHydrateFront();
      return;
    default:
      console.error(
        `No valid phase given to ${IndexScript.prototype.constructor.name}`,
      );
  }
}
