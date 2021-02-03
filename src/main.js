import Vue from 'vue'
import router from './router'
import App from './App.vue'

import './assets/css/base.css'
import './assets/css/layout.css'
import './assets/css/module.css'
import './assets/css/state.css'
import './assets/css/theme.css'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
