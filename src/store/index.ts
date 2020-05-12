import Vue from 'vue';
import Vuex from 'vuex';
import JSONDataVuexModule from "@/store/modules/JSONDataVuexModule";
import HttpStatusMockVuexModule from "@/store/modules/HttpStatusMockVuexModule";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    jsonDataVuexModule: JSONDataVuexModule,
    httpStatusMockVuexModule: HttpStatusMockVuexModule,
  }
});
