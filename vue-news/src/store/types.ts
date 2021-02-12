import { CommitOptions, DispatchOptions, Store } from "vuex";
import { Getters } from "./getters";
import { Actions } from "./actions";
import { Mutations, MutationTypes } from "./mutations";
import { RootState } from "./state";

type MyMutations = {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
};
// commit(MutationTypes.SET_NEWS, )
type MyActions = {
  dispatch<K extends keyof Actions>(
    key: K,
    payload?: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
};

// type A = keyof Getters;
type MyGetters = {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
};

export type MyStore = Omit<
  Store<RootState>,
  "commit" | "dispatch" | "getters"
> &
  MyMutations &
  MyActions &
  MyGetters;

// const person = {
//   name: "a",
//   age: 10,
//   skill: "js"
// };
// const josh = Omit<person, 'skill'>
// josh = {
//   name: 'a',
//   age: 10
// }

// 인터섹션(합집합)
// type A = {
//   name: string;
// };
// type B = {
//   age: number;
// };
// type C = A & B;
// const person: C = {
//   name: "a"
//   // age: 10
// };
