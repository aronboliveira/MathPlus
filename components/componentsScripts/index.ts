import Vue from "vue";
import { cyclePhase } from "../../lib/declarations/types";
import defHydrateFront from "../../lib/front";
import { initFillAttrs, watchLabels } from "../../lib/handlers/handlersModel";
export const Index = (function () {
  Vue.extend({
    name: "IndexPage",
    mounted() {
      IndexScript("mounted");
    },
  });
})();
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
export default Index;
