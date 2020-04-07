import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Fragment from 'vue-fragment'
import buildDependencyContainer from "@/dependencyContainer";

Vue.config.productionTip = false;
Vue.use(Fragment.Plugin);
buildDependencyContainer();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

