import 'reflect-metadata';
import Vue from 'vue'
import * as Sentry from '@sentry/browser';
import LogRocket from 'logrocket';
import { Vue as VueIntegration } from '@sentry/integrations';
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Fragment from 'vue-fragment'
import buildDependencyContainer from "@/dependencyContainer";

if (process.env.VUE_APP_DEVTOOLS_ENABLED) {
  console.log(process.env)
  Vue.config.devtools = true;
}
Vue.config.productionTip = false;
Vue.use(Fragment.Plugin);

Sentry.init({
  dsn: 'https://79dc4abcfe74457dbec2656afe255456@o391187.ingest.sentry.io/5236898',
  integrations: [new VueIntegration({
    Vue,
    attachProps: true,
    logErrors: true,
  })],
  // release: 'repzio-test@1.0.0'
});

LogRocket.init('ica1xz/repzio-test',{
  console: {
    isEnabled: true,
    shouldAggregateConsoleErrors: true
  },
  network: {
    isEnabled: true,
  },
  dom: {
    isEnabled: true,
  },
});

LogRocket.identify('80092015249', {
  name: 'Rainer Gonzalez',
  email: 'rgonzalez@imcdi.com',
  subscriptionType: 'pro'
});

LogRocket.getSessionURL(sessionURL => {
  console.log(sessionURL);
  Sentry.configureScope(scope => {
    console.log(scope);
    scope.setExtra("sessionURL", sessionURL);
    console.log(Sentry);
    console.log(scope);
  });
});

buildDependencyContainer();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

