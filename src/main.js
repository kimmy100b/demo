'use strict';

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './assets/translations/index.js'

Vue.config.productionTip = false
new Vue({
  el: '#app',
  i18n,
  router,
  store,
  render: h => h(App),
  mounted() {
    window.addEventListener('load', this.onWindowLoad);
  },
  methods: {
    onWindowLoad() {
      // this.$router.history.current.name
      return '#app';
    }
  }
});