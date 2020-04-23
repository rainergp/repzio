import { createDecorator, VueDecorator } from 'vue-class-component';
import { ComponentOptions } from 'vue';
import "vuex/types/vue";

export default function Getter(getterName: string): VueDecorator {
  return createDecorator((options: ComponentOptions<Vue>, key: string, index: number): void => {
    if (options.computed === undefined) {
      options.computed = {};
    }
    options.computed[key] = function(this: Vue) {
      return this.$store.getters[getterName];
    };
  });
}
