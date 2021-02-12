import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/styles/index.scss';
import '@/plugins/element';

import IconSvg from './components/SvgIcon/index.vue';
Vue.component('icon-svg', IconSvg);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
