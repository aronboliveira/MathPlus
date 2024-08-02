import { cyclePhase } from "../../lib/declarations/types";
import defHydrateFront from "../../lib/front";
import { initFillAttrs, watchLabels } from "../../lib/handlers/handlersModel";
export function IndexScript(phase: cyclePhase) {
  switch (phase) {
    case "mounted":
      defHydrateFront();
      watchLabels();
      initFillAttrs();
      return;
    default:
      console.error(
        `No valid phase given to ${IndexScript.prototype.constructor.name}`,
      );
  }
}
