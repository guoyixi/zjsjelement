// Vue组件（component）用来构成你的App的业务模块，它的目标是App.vue。
import 'plugins/element.js' //导入element组件
// Vue插件(plugin) 用来增强你的技术栈的功能模块， 它的目标是Vue本身。（插件是对Vue的功能的增强和补充）
import store from './store' //导入Vuex插件


import Vue from 'vue'
import App from './App.vue'
import Print from 'vue-print-nb'
import moment from 'moment'

Vue.use(Print);

Vue.config.productionTip = false
Vue.prototype.$moment = moment

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
