import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import $ from 'jquery';
import vuetify from './plugins/vuetify';
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import router from './router'

Vue.config.productionTip = false
Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  router,
  vuetify,
  axios,
  $,
  BootstrapVue,
  template: '<App/>',
  render: h => h(App)
}).$mount('#app')
