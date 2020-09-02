import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const state = {
  fromX:{
    formIdX:0,
    formStatusX:"WAIT"
  }
}


const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
})

// 3.导出store独享
export default store




