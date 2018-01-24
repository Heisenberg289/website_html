import Vue from 'vue'
import Router from 'vue-router'
import commonPart from '@/components/common/common'
import myModal from '@/components/common/modal'
import imgCut from '@/components/common/imgCut'
import ElementUI from 'element-ui'
import myFooter from '@/components/common/bottom.vue'
import myHead from '@/components/common/Head'
import mySide from '@/components/common/side'
// import VueCropper from 'vue-cropper'
import VueQrcode from '@xkeshi/vue-qrcode'
Vue.component('myFooter', myFooter)
Vue.component('myHead', myHead)
Vue.component('mySide', mySide)
Vue.component('qrcode', VueQrcode)
Vue.component('commonPart', commonPart)
Vue.component('imgCut', imgCut)
Vue.component('qrcode', VueQrcode)
// Vue.component('VueCropper', VueCropper)
Vue.component('myModal', myModal)

Vue.use(Router)
Vue.use(ElementUI)
export default new Router({
  mode: 'history',
  history: true,
  base: '/stargo/',
  routes: [
    {
      path: '/',
      component: resolve => require(['@/components/match/index'], resolve)
    },
    {
      path: '/table',
      component: resolve => require(['@/components/common/againstTable'], resolve)
    },
    {
      path: '/index',
      component: resolve => require(['@/components/match/index'], resolve)
    },
    {
      path: '/mysetting',
      component: resolve => require(['@/components/personCenter/mySetting'], resolve)
    },
    {
      path: '/test',
      component: resolve => require(['@/components/common/test'], resolve)
    },
    {
      path: '/myDogGo',
      component: resolve => require(['@/components/personCenter/myDogGo'], resolve)
    },
    {
      path: '/mywallet',
      component: resolve => require(['@/components/personCenter/myWallet'], resolve)
    },
    {
      path: '/mybag',
      component: resolve => require(['@/components/personCenter/myBag'], resolve)
    },
    {
      path: '/myMatch',
      component: resolve => require(['@/components/personCenter/myMatch'], resolve)
    },
    {
      path: '/mySubsidy',
      component: resolve => require(['@/components/personCenter/mySubsidy'], resolve)
    },
    {
      path: '/myExchange',
      component: resolve => require(['@/components/personCenter/myExchange'], resolve)
    },
    {
      path: '/myMission',
      component: resolve => require(['@/components/personCenter/myMission'], resolve)
    },
    {
      path: '/myRecords',
      component: resolve => require(['@/components/personCenter/myRecords'], resolve)
    },
    {
      path: '/myMessage',
      component: resolve => require(['@/components/personCenter/myMessage'], resolve)
    },
    {
      path: '/myVip',
      component: resolve => require(['@/components/personCenter/myVip'], resolve)
    },
    {
      path: '/playbattlegrounds/index',
      component: resolve => require(['@/components/playbattlegrounds/index'], resolve)
    },
    {
      path: '/playbattlegrounds/news',
      component: resolve => require(['@/components/playbattlegrounds/news'], resolve)
    },
    {
      path: '/match/matchDetail',
      component: resolve => require(['@/components/match/matchDetail'], resolve)
    }
  ]
})
