import { defineComponent } from "vue";
import { ComponentDef } from "../../lib/declarations/interfacesComponents";

export default abstract class Component implements ComponentDef {
  constructor(public name: string, public children: {}) {
    //@ts-ignore
    this.name = name.replaceAll(/\s\n\t\r/g, "__");
    this.children = children;
  }
  define(name: string = "Component") {
    return defineComponent({
      name: this.name,
      ...this.children,
      mounted() {
        console.log(`${name} mounted`);
      },
    });
  }
}
