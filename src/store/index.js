import Vuex from "vuex";
import Vue from "vue";
import drivers from "./modules/drivers";
Vue.use(Vuex);

export default new Vuex.store({
  modules: {
    drivers
  },
  state: {},
  getters: {},
  mutations: {}
});
