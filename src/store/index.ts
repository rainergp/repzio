import Vue from 'vue'
import Vuex from 'vuex'
import {MutationType} from "@/store/mutation-types";
import JSONDataVuexModule from "@/store/modules/JSONDataVuexModule";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  mutations: {
    [MutationType.INCREMENT](state, n) {
      state.count += n;
    },
    [MutationType.DECREMENT](state, n) {
      state.count -= n;
    }
  },
  actions: {
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter((todo: any) => todo.done)
    }
  },
  modules: {
    JSONDataVuexModule
  }
})
