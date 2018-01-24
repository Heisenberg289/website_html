// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import global_ from './components/common/global.vue'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import {store} from './store/store'
import './assets/css/alert.css'
import drag from './assets/js/drag'
import imgLoad from './assets/js/imgLoad'

Vue.directive('drag', drag)
Vue.directive('imgLoad', imgLoad)

Vue.use(ElementUI)
Vue.config.productionTip = false

Vue.prototype.$ajax = axios
Vue.prototype.GLOBAL = global_

axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      return Promise.reject(error.response.data)   // 返回接口返回的错误信息
    }
  })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
  created: function () {
    if ((window.localStorage.getItem('tokenTime')) && (new Date().getTime() - window.localStorage.getItem('tokenTime') > 60 * 60 * 1000)) {
      window.localStorage.clear()
      window.location.reload()
    }
    window.localStorage.setItem('tokenTime', new Date().getTime())
  }
})

router.beforeEach((to, from, next) => {
  if (~['playbattlegrounds/index', 'playbattlegrounds/news'].indexOf(to.name)) {
    next()
  } else {
    if (global_.hearder.Authorization) {
      next()
    } else {
      next(window.location.href = global_.urlConfig + 'login')
    }
  }
})
