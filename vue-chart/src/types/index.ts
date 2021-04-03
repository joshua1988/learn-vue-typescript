import { VueConstructor } from "vue/types/umd";

type MyVue<T> = VueConstructor<Vue & T>;
export type MyVueRefs<T> = VueConstructor<Vue & { $refs: T }>;
