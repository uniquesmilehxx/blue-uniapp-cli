import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

// js、css通用工具
import '@/util/use'

const app = new Vue({
  ...App
})
app.$mount()
