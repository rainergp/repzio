import 'reflect-metadata';
import Vue from 'vue'
import * as Sentry from '@sentry/browser';
import { Vue as VueIntegration } from '@sentry/integrations';
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Fragment from 'vue-fragment'
import buildDependencyContainer from "@/dependencyContainer";

Vue.config.productionTip = false;
Vue.use(Fragment.Plugin);
Sentry.init({
  dsn: 'https://79dc4abcfe74457dbec2656afe255456@o391187.ingest.sentry.io/5236898',
  integrations: [new VueIntegration({
    Vue,
    attachProps: true,
    logErrors: true,
  })],
});

buildDependencyContainer();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

