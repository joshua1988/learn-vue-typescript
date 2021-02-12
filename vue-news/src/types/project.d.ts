import Vue from "vue";
import { MyStore } from "@/store/types";

// NOTE: `node_module/vuex/types/vue.d.ts` 파일을 삭제해줘야 아래 타입이 정상 추론됨
declare module "vue/types/vue" {
  interface Vue {
    $store: MyStore;
  }
}

declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    store?: MyStore;
  }
}
