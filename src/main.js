// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import App from './App'
import router from './router'
import appStore from './vuex/store'
import axios from 'axios';

Vue.prototype.$axios = axios;
Vue.use(ElementUI,{ size: 'small', zIndex: 3000 });
Vue.use(MintUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store:appStore,
  components: { App },
  template: '<App/>'
})
