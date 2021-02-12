import Vue from "vue";
import VueRouter, { NavigationGuardNext, Route } from "vue-router";
import { ItemView, UserView } from "../views/index";
import createListView from "../views/CreateListView";
import bus from "../utils/bus";
import store from "../store/index";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/news"
    },
    {
      path: "/news",
      name: "news",
      component: createListView("NewsView"),
      async beforeEnter(
        routeTo: Route,
        routeFrom: Route,
        next: NavigationGuardNext<Vue>
      ) {
        // routeTo.name === 1;
        bus.$emit("on:progress");
        // try {
        //   await store.dispatch("FETCH_LIST", routeTo.name);
        //   next();
        // } catch (error) {
        //   new Error("failed to fetch news items");
        //   // next('/error');
        // }
        next();
        // store
        //   .dispatch("FETCH_LIST", routeTo.name)
        //   .then(() => next())
        //   .catch(() => new Error("failed to fetch news items"));
      }
    },
    {
      path: "/ask",
      name: "ask",
      component: createListView("AskView"),
      beforeEnter(routeTo, routeFrom, next) {
        bus.$emit("on:progress");
        store
          .dispatch("FETCH_LIST", routeTo.name)
          .then(() => next())
          .catch(() => new Error("failed to fetch news items"));
      }
    },
    {
      path: "/jobs",
      name: "jobs",
      component: createListView("JobsView"),
      beforeEnter(routeTo, routeFrom, next) {
        bus.$emit("on:progress");
        store
          .dispatch("FETCH_LIST", routeTo.name)
          .then(() => next())
          .catch(() => new Error("failed to fetch news items"));
      }
    },
    {
      path: "/item/:id",
      component: ItemView,
      beforeEnter(routeTo, routeFrom, next) {
        bus.$emit("on:progress");
        const itemId = routeTo.params.id;
        store
          .dispatch("FETCH_ITEM", itemId)
          .then(() => next())
          .catch(err => new Error("failed to fetch item details"));
      }
    },
    {
      path: "/user/:id",
      component: UserView,
      beforeEnter(routeTo, routeFrom, next) {
        bus.$emit("on:progress");
        const itemId = routeTo.params.id;
        store
          .dispatch("FETCH_USER", itemId)
          .then(() => next())
          .catch(err => new Error("failed to fetch user profile"));
      }
    }
  ]
});
