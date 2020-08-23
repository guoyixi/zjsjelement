import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import Print from 'vue-print-nb'


Vue.use(Print);


Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
