import { defineComponent } from "vue";
import { htmlElementNotFound } from "../../../lib/handlers/handlersErrors";
import { nullishHTMLEl, voidishEl } from "../../../lib/declarations/types";
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
      icon: {
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
          targ.classList.toggle("shown");
          let targSpan = this.$refs.icon as nullishHTMLEl;
          if (!(targSpan instanceof HTMLElement))
            console.warn(`Failed to fetch span based on refs`);
          targSpan ??= ev.currentTarget.querySelector(
            `${
              ev.currentTarget.dataset.src ||
              ev.currentTarget.id.slice(
                0,
                ev.currentTarget.id.indexOf("-btn-toggle"),
              )
            }`,
          );
          if (!(targSpan instanceof HTMLElement))
            throw htmlElementNotFound(
              targSpan,
              `Validation of Target Span instance`,
            );
          targ.classList.contains("shown")
            ? (ev.currentTarget.innerHTML = `<svg style="filter:invert(1);" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/></svg>`)
            : (ev.currentTarget.innerHTML = `<svg style="filter:invert(1);" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" /></svg>`);
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
