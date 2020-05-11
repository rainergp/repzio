import Vue from 'vue';
import Vuex from 'vuex';
import JSONDataVuexModule from "@/store/modules/JSONDataVuexModule";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    jsonDataVuexModule: JSONDataVuexModule
  }
});
