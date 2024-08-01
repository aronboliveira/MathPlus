import { defineComponent } from "vue";
import { htmlElementNotFound } from "../../../lib/handlers/handlersErrors";
import { voidishEl } from "../../../lib/declarations/types";
export const StackedAccordion = (() =>
  defineComponent({
    name: "StackedAccordion",
    props: {
      value: {
        type: Boolean,
        required: true,
        default: false,
      },
      baseId: {
        type: String,
        required: true,
        default: "",
      },
    },
    methods: {
      toggleAccordion(ev: MouseEvent) {
        this.$emit("input", !this.value);
        console.log(this.value);
        try {
          if (!(ev.currentTarget instanceof HTMLElement))
            throw new Error(`Invalid instance for ev.currentTarget`);
          let targParent: voidishEl;
          if (ev.currentTarget.dataset.src)
            targParent = ev.currentTarget.closest(
              `[data-parent="parent-${ev.currentTarget.dataset.src}"]`,
            );
          targParent ??= ev.currentTarget.parentElement;
          if (!(targParent instanceof HTMLElement))
            throw htmlElementNotFound(
              targParent,
              `Validation of accordion parent instance`,
            );
          let targ: voidishEl;
          if (ev.currentTarget.dataset.src)
            targParent.querySelector(
              `[data-target=${ev.currentTarget.dataset.src}]`,
            );
          targ ??=
            targParent.querySelector(".accordion-nav") ??
            targParent.querySelector(".accordion-div");
          if (!(targ instanceof HTMLElement))
            throw htmlElementNotFound(targ, `Validation of accordion instance`);
          console.log("toggling shown...");
          targ.classList.toggle("shown");
        } catch (e) {
          console.error(
            `Error executing ${ev.type} callback for ${
              ev.currentTarget instanceof Element
                ? ev.currentTarget.id ||
                  ev.currentTarget.className ||
                  ev.currentTarget.tagName
                : "Undefined Element"
            }:\n${(e as Error).message}`,
          );
        }
      },
    },
    mounted() {
      console.log("Accordion component mounted");
    },
  }))();
export default StackedAccordion;
