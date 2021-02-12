import { NewsItem } from "@/api";

const state = {
  news: [] as NewsItem[]
};

// node_modules/vuex/types/vue.d.ts

type RootState = typeof state;

export { state, RootState };
