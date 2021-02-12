// import { RootState} from './state'

import { NewsItem } from "@/api";
import store from ".";
import { RootState } from "./state";

enum MutationTypes {
  SET_NEWS = "SET_NEWS"
}

// store.commit("setNews");

const mutations = {
  [MutationTypes.SET_NEWS](state: RootState, news: NewsItem[]) {
    state.news = news;
  }
};

type Mutations = typeof mutations;

export { MutationTypes, mutations, Mutations };

// export default {
//   SET_NEWS(state, news) {
//     state.news = news;
//   },
//   SET_ASK(state, ask) {
//     state.ask = ask;
//   },
//   SET_JOBS(state, jobs) {
//     state.jobs = jobs;
//   },
//   SET_USER(state, user) {
//     state.user = user;
//   },
//   SET_ITEM(state, item) {
//     state.item = item;
//   },
//   SET_LIST(state, list) {
//     state.list = list;
//   }
// };
