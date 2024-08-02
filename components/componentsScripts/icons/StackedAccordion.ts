import { defineComponent } from "vue";
import { htmlElementNotFound } from "../../../lib/handlers/handlersErrors";
import { nullishHTMLEl, voidishEl } from "../../../lib/declarations/types";
import { parseFinite } from "../../../lib/handlers/handlersMath";
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
      toggleAccordion(ev: MouseEvent): void {
        this.$emit("input", !this.value);
        try {
          if (!(ev.currentTarget instanceof HTMLElement))
            throw new Error(`Invalid instance for ev.currentTarget`);
          let targParent: voidishEl;
          if (ev.currentTarget.dataset.src)
            targParent = ev.currentTarget.closest(
              `[data-parent="parent-${ev.currentTarget.dataset.src}"]`,
            );
          if (!targParent) targParent = ev.currentTarget.parentElement;
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
          if (!targ)
            targ =
              targParent.querySelector(".accordion-nav") ??
              targParent.querySelector(".accordion-div");
          if (!(targ instanceof HTMLElement))
            throw htmlElementNotFound(targ, `Validation of accordion instance`);
          targ.classList.toggle("shown");
          let targSpan = this.$refs.icon as nullishHTMLEl;
          if (!(targSpan instanceof HTMLElement))
            console.warn(`Failed to fetch span based on refs`);
          if (!(targSpan instanceof HTMLElement))
            targSpan = ev.currentTarget.querySelector(
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
          if (targ.classList.contains("shown")) {
            ev.currentTarget.innerHTML = `<svg style="filter:invert(1);" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/></svg>`;
            const base = 16;
            targ.style.width = `0`;
            const widthInterv = setInterval((interv: any) => {
              try {
                if (!(targ instanceof HTMLElement))
                  throw new Error(
                    `Failed to fetch target accordion on timeout`,
                  );
                const parsedWidth = parseFinite(
                  getComputedStyle(targ).width.replace("px", "").trim(),
                );
                if (!Number.isFinite(parsedWidth))
                  throw new Error(`parsed width returned as NaN`);
                if (parsedWidth >= base * 10) {
                  clearInterval(interv);
                  return;
                }
                targ.style.width = `${parsedWidth + base}px`;
                console.log("ticking...");
              } catch (e) {
                console.error(
                  `Error executing interval:\n${(e as Error).message}`,
                );
              }
            }, 20);
            setTimeout(() => {
              try {
                if (!(targ instanceof HTMLElement))
                  throw new Error(
                    `Failed to fetch target accordion on timeout`,
                  );
                targ.style.display = `flex`;
              } catch (e) {
                console.error(
                  `Error executing timeout:\n${(e as Error).message}`,
                );
              }
            }, 40);
            setTimeout(() => {
              try {
                clearInterval(widthInterv);
                if (!(targ instanceof HTMLElement))
                  throw new Error(
                    `Failed to fetch target accordion on timeout`,
                  );
                // targ.style.width = `10rem`;
              } catch (e) {
                console.error(
                  `Error executing timeout:\n${(e as Error).message}`,
                );
              }
            }, 800);
          } else {
            ev.currentTarget.innerHTML = `<svg style="filter:invert(1);" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" /></svg>`;
            setTimeout(() => {
              try {
                if (!(targ instanceof HTMLElement))
                  throw new Error(
                    `Failed to fetch target accordion on timeout`,
                  );
                targ.style.display = `none`;
                console.log("Width to 0...");
                targ.style.width = `0`;
              } catch (e) {
                console.error(
                  `Error executing timeout:\n${(e as Error).message}`,
                );
              }
            }, 300);
          }
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
      try {
        if (!(`$el` in this))
          throw new Error(`$el is not defined for the component this`);
        if (!(this.$el instanceof HTMLElement))
          throw new Error(`Invalid instance for this.$el`);
        let targParent: voidishEl;
        if (this.$el.dataset.src)
          targParent = this.$el.closest(
            `[data-parent="parent-${this.$el.dataset.src}"]`,
          );
        if (!targParent) targParent = this.$el.parentElement;
        if (!(targParent instanceof HTMLElement))
          throw htmlElementNotFound(
            targParent,
            `Validation of accordion parent instance`,
          );
        let targ: voidishEl;
        if (this.$el.dataset.src)
          targParent.querySelector(`[data-target=${this.$el.dataset.src}]`);
        if (!targ)
          targ =
            targParent.querySelector(".accordion-nav") ??
            targParent.querySelector(".accordion-div");
        if (!(targ instanceof HTMLElement))
          throw htmlElementNotFound(targ, `Validation of accordion instance`);
        if (!targ.classList.contains("shown")) targ.style.display = "none";
      } catch (e) {
        console.error(`Error:${(e as Error).message}`);
      }
    },
  }))();
export default StackedAccordion;
