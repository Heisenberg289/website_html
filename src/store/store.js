import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export const store = new Vuex.Store({
  state: {
    baseInfo: '',
    userInfo: '',
    unreadedInfo: '',
    weekLoginMap: ''
  },
  getters: {
    todaySigned: state => {
      if (state.weekLoginMap.today === '1') {
        if (state.weekLoginMap.day1State === '1') {
          return true
        } else {
          return false
        }
      }
      if (state.weekLoginMap.today === '2') {
        if (state.weekLoginMap.day2State === '1') {
          return true
        } else {
          return false
        }
      }
      if (state.weekLoginMap.today === '3') {
        if (state.weekLoginMap.day3State === '1') {
          return true
        } else {
          return false
        }
      }
      if (state.weekLoginMap.today === '4') {
        if (state.weekLoginMap.day4State === '1') {
          return true
        } else {
          return false
        }
      }
      if (state.weekLoginMap.today === '5') {
        if (state.weekLoginMap.day5State === '1') {
          return true
        } else {
          return false
        }
      }
      if (state.weekLoginMap.today === '6') {
        if (state.weekLoginMap.day6State === '1') {
          return true
        } else {
          return false
        }
      }
      if (state.weekLoginMap.today === '7') {
        if (state.weekLoginMap.day7State === '1') {
          return true
        } else {
          return false
        }
      }
    }
  },
  mutations: {
    changeBaseInfo (state, val) {
      this.state.baseInfo = val
    },
    changeUserInfo (state, val) {
      this.state.userInfo = val
    },
    changeUnreadedInfo (state, val) {
      this.state.unreadedInfo = val
    },
    getweekLoginMap (state, val) {
      this.state.weekLoginMap = val
    }
  }
})
