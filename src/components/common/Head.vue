<template>
  <div>
    <div class="newHeadTop_01">
      <div class="newHeadTop_02">
        <a class="hoverFloat" :href='this.GLOBAL.urlConfig+"match"'></a>
        <img src="./../../assets/image/head/LOGO.png"/>
      </div>
      <ul class="clearfix newHeadTop_03">
        <li class="newHeadTop_06c header_li " :class="{newHeadTop_07:locationUrl === 'match'}">
          <a class="hoverFloat" :href='this.GLOBAL.urlConfig+"match"'></a>
          <div class="newHeadTop_06">
            <div class="newHeadTop_04">
              赛事
            </div>
            <div class="newHeadTop_05">
              Match
            </div>
          </div>
        </li>
        <li class="newHeadTop_06c  header_li" :class="{newHeadTop_07:locationUrl === 'team'}">
          <a class="hoverFloat" :href='this.GLOBAL.urlConfig+"team"'></a>
          <div class="newHeadTop_06">
            <div class="newHeadTop_04">
              战队
            </div>
            <div class="newHeadTop_05">
              Team
            </div>
          </div>
        </li>
        <li class="newHeadTop_06c  header_li" :class="{newHeadTop_07:locationUrl === 'eggs'}">
          <a class="hoverFloat" :href='this.GLOBAL.urlConfig+"guess"'></a>
          <div class="newHeadTop_06">
            <div class="newHeadTop_04">
              彩蛋
            </div>
            <div class="newHeadTop_05">
              Eggs
            </div>
          </div>
        </li>
        <li class="newHeadTop_06c  header_li">
          <a class="hoverFloat" href=""></a>
          <div class="newHeadTop_06">
            <div class="newHeadTop_04">
              通天塔
            </div>
            <div class="newHeadTop_05">
              Tower
            </div>
          </div>
        </li>
        <li class="newHeadTop_06c  header_li" :class="{newHeadTop_07:locationUrl === 'shopping'}">
          <a class="hoverFloat" :href='this.GLOBAL.urlConfig+"shopCommdity/index"'></a>
          <div class="newHeadTop_06">
            <div class="newHeadTop_04">
              购物街
            </div>
            <div class="newHeadTop_05">
              Shopping
            </div>
          </div>
        </li>
        <li class="newHeadTop_06c  header_li">
          <a class="hoverFloat" :href='this.GLOBAL.urlConfig+"/match/showApp"'></a>
          <div class="newHeadTop_06">
            <div class="newHeadTop_04">
              应用
            </div>
            <div class="newHeadTop_05">
              APP
            </div>
          </div>
        </li>
      </ul>
      <ul class="clearfix newHeadTop_08" v-if="!signState">
        <li class="newHeadTop_15 linkActive" style="margin-right: 20px;">
          <a :href='this.GLOBAL.urlConfig+"/login"'  class="hoverFloat"></a>
          <span class="glyphicon glyphicon-log-in"></span> 登录
        </li>
        <li class="newHeadTop_15 linkActive">
          <a :href='this.GLOBAL.urlConfig+"/guest/signUp"'  class="hoverFloat"></a> <span class="glyphicon glyphicon-user"></span> 注册
        </li>
      </ul>
      <ul class="clearfix newHeadTop_08" v-if="signState">
        <li class="newHeadTop_13" style="margin-right: 15px;width: 78px;" @mouseover="changeShow(true)" @mouseleave="changeShow(false)">
          <a id="navinfo_04_sign" class="hoverFloat" title="每日签到">
            <img src="./../../assets/image/head/Sign-in.png" class="newHeadTop_16" v-if="!todaySigned">
            <img src="./../../assets/image/head/Signed-in.png" class="newHeadTop_16" v-if="todaySigned">
            <span class="newHeadTop_161" v-if="!todaySigned">签到</span>
            <span class="newHeadTop_161" v-if="todaySigned">已签到</span>
          </a>
          <div class="sign-info_01 animated fadeInDown" v-if="signTip">
            <div class="sign-info_02" v-if="buqianDay">
              <p>您当前漏签{{buqianDay}}天，补签共消耗{{buqianDay*15}}狗粮</p>
              <div class="sign-info_03" @click="buqianAll">一键补签</div>
            </div>
          <div style="margin-top: 30px;position: relative">
            <div class="sign-info_14">
              <div class="sign-info_15" :style="{ height: weekLoginMap.today*14.3+'%' }"></div>
            </div>
            <ul class="clearfix sign-info_04">
              <li class="sign-info-middle">
                <div class="sign-info_09">星期一</div>
              </li>
              <li>
                <div class="sign-info_041">
                  <div class="sign-info_10 animated fadeIn" v-if="rewordTip == 1">
                    <div>
                      <img src="./../../assets/image/head/Sign_Success_Dog_s.png"/>
                      <p class="sign-info_11">10</p>
                    </div>
                    <div>
                      <img src="./../../assets/image/head/Sign_Success_Egg_s.png"/>
                      <p class="sign-info_11">2</p>
                    </div>
                  </div>
                  <img src="./../../assets/image/head/Sign_Box_Blue.png" @mouseover="rewordTipsShow(1)" @mouseleave="rewordTipsShow()"/>
                </div>
              </li>
              <li class="sign-info-middle float-right">
                <template v-if="weekLoginMap.day1State == 1">
                  <div class="sign-info_05 sign-info_06">已签</div>
                </template>
                <template v-if="weekLoginMap.today==1">
                  <template v-if="weekLoginMap.day1State == 0">
                    <div class="sign-info_05 sign-info_08" @click="sign">签到</div>
                  </template>
                </template>
                <template v-if="weekLoginMap.today>1&&weekLoginMap.day1State == 0">
                  <div class="sign-info_05 sign-info_07" @click="retroactive(1)">补签</div>
                  <p class="sign-info_12">需要15狗粮</p>
                </template>
                <template v-if="weekLoginMap.today<1">
                  <div class="sign-info_05 sign-info_13">签到</div>
                </template>
              </li>
            </ul>
            <ul class="clearfix sign-info_04">
              <li class="sign-info-middle">
                <div class="sign-info_09">星期二</div>
              </li>
              <li>
                <div class="sign-info_041">
                  <div class="sign-info_10 animated fadeIn" v-if="rewordTip == 2">
                    <div>
                      <img src="./../../assets/image/head/Sign_Success_Dog_s.png"/>
                      <p class="sign-info_11">10</p>
                    </div>
                    <div>
                      <img src="./../../assets/image/head/Sign_Success_Egg_s.png"/>
                      <p class="sign-info_11">2</p>
                    </div>
                  </div>
                  <img src="./../../assets/image/head/Sign_Box_Blue.png" @mouseover="rewordTipsShow(2)" @mouseleave="rewordTipsShow()"/>
                </div>
              </li>
              <li class="sign-info-middle float-right">
                <template v-if="weekLoginMap.day2State == 1">
                  <div class="sign-info_05 sign-info_06">已签</div>
                </template>
                <template v-if="weekLoginMap.today==2">
                  <template v-if="weekLoginMap.day2State == 0">
                    <div class="sign-info_05 sign-info_08" @click="sign">签到</div>
                  </template>
                </template>
                <template v-if="weekLoginMap.today>2&&weekLoginMap.day2State == 0">
                  <div class="sign-info_05 sign-info_07" @click="retroactive(2)">补签</div>
                  <p class="sign-info_12">需要15狗粮</p>
                </template>
                <template v-if="weekLoginMap.today<2">
                  <div class="sign-info_05 sign-info_13">签到</div>
                </template>
              </li>
            </ul>
            <ul class="clearfix sign-info_04">
              <li class="sign-info-middle">
                <div class="sign-info_09">星期三</div>
              </li>
              <li>
                <div class="sign-info_041">
                  <div class="sign-info_10 animated fadeIn" v-if="rewordTip == 3">
                    <div>
                      <img src="./../../assets/image/head/Sign_Success_Dog_s.png"/>
                      <p class="sign-info_11">10</p>
                    </div>
                    <div>
                      <img src="./../../assets/image/head/Sign_Success_Egg_s.png"/>
                      <p class="sign-info_11">2</p>
                    </div>
                  </div>
                  <img src="./../../assets/image/head/Sign_Box_Blue.png" @mouseover="rewordTipsShow(3)" @mouseleave="rewordTipsShow()"/>
                </div>
              </li>
              <li class="sign-info-middle float-right">
                <template v-if="weekLoginMap.day3State == 1">
                  <div class="sign-info_05 sign-info_06">已签</div>
                </template>
                <template v-if="weekLoginMap.today==3">
                  <template v-if="weekLoginMap.day3State == 0">
                    <div class="sign-info_05 sign-info_08" @click="sign">签到</div>
                  </template>
                </template>
                <template v-if="weekLoginMap.today>3&&weekLoginMap.day3State == 0">
                  <div class="sign-info_05 sign-info_07" @click="retroactive(3)">补签</div>
                  <p class="sign-info_12">需要15狗粮</p>
                </template>
                <template v-if="weekLoginMap.today<3">
                  <div class="sign-info_05 sign-info_13">签到</div>
                </template>
              </li>
            </ul>
            <ul class="clearfix sign-info_04">
              <li class="sign-info-middle">
                <div class="sign-info_09">星期四</div>
              </li>
              <li>
                <div class="sign-info_041">
                  <div class="sign-info_10 animated fadeIn" v-if="rewordTip == 4">
                    <div>
                      <img src="./../../assets/image/head/Sign_Success_Dog_s.png"/>
                      <p class="sign-info_11">10</p>
                    </div>
                    <div>
                      <img src="./../../assets/image/head/Sign_Success_Egg_s.png"/>
                      <p class="sign-info_11">2</p>
                    </div>
                  </div>
                  <img src="./../../assets/image/head/Sign_Box_Blue.png" @mouseover="rewordTipsShow(4)" @mouseleave="rewordTipsShow()"/>
                </div>
              </li>
              <li class="sign-info-middle float-right">
                <template v-if="weekLoginMap.day4State == 1">
                  <div class="sign-info_05 sign-info_06">已签</div>
                </template>
                <template v-if="weekLoginMap.today==4">
                  <template v-if="weekLoginMap.day4State == 0">
                    <div class="sign-info_05 sign-info_08" @click="sign">签到</div>
                  </template>
                </template>
                <template v-if="weekLoginMap.today>4&&weekLoginMap.day4State == 0">
                  <div class="sign-info_05 sign-info_07" @click="retroactive(4)">补签</div>
                  <p class="sign-info_12">需要15狗粮</p>
                </template>
                <template v-if="weekLoginMap.today<4">
                  <div class="sign-info_05 sign-info_13">签到</div>
                </template>
              </li>
            </ul>
            <ul class="clearfix sign-info_04">
              <li class="sign-info-middle">
                <div class="sign-info_09">星期五</div>
              </li>
              <li>
                <div class="sign-info_041">
                  <div class="sign-info_10 animated fadeIn" v-if="rewordTip == 5">
                    <div>
                      <img src="./../../assets/image/head/Sign_Success_Dog_s.png"/>
                      <p class="sign-info_11">10</p>
                    </div>
                    <div>
                      <img src="./../../assets/image/head/Sign_Success_Egg_s.png"/>
                      <p class="sign-info_11">2</p>
                    </div>
                  </div>
                  <img src="./../../assets/image/head/Sign_Box_Blue.png" @mouseover="rewordTipsShow(5)" @mouseleave="rewordTipsShow()"/>
                </div>
              </li>
              <li class="sign-info-middle float-right">
                <template v-if="weekLoginMap.day5State == 1">
                  <div class="sign-info_05 sign-info_06">已签</div>
                </template>
                <template v-if="weekLoginMap.today==5">
                  <template v-if="weekLoginMap.day5State == 0">
                    <div class="sign-info_05 sign-info_08" @click="sign">签到</div>
                  </template>
                </template>
                <template v-if="weekLoginMap.today>5&&weekLoginMap.day5State == 0">
                  <div class="sign-info_05 sign-info_07" @click="retroactive(5)">补签</div>
                  <p class="sign-info_12">需要15狗粮</p>
                </template>
                <template v-if="weekLoginMap.today<5">
                  <div class="sign-info_05 sign-info_13">签到</div>
                </template>
              </li>
            </ul>
            <ul class="clearfix sign-info_04">
              <li class="sign-info-middle">
                <div class="sign-info_09">星期六</div>
              </li>
              <li>
                <div class="sign-info_041">
                  <div class="sign-info_10 animated fadeIn" v-if="rewordTip == 6">
                    <div>
                      <img src="./../../assets/image/head/Sign_Success_Dog_s.png"/>
                      <p class="sign-info_11">10</p>
                    </div>
                    <div>
                      <img src="./../../assets/image/head/Sign_Success_Egg_s.png"/>
                      <p class="sign-info_11">2</p>
                    </div>
                  </div>
                  <img src="./../../assets/image/head/Sign_Box_Blue.png" @mouseover="rewordTipsShow(6)" @mouseleave="rewordTipsShow()"/>
                </div>
              </li>
              <li class="sign-info-middle float-right">
                <template v-if="weekLoginMap.day6State == 1">
                  <div class="sign-info_05 sign-info_06">已签</div>
                </template>
                <template v-if="weekLoginMap.today==6">
                  <template v-if="weekLoginMap.day6State == 0">
                    <div class="sign-info_05 sign-info_08" @click="sign">签到</div>
                  </template>
                </template>
                <template v-if="weekLoginMap.today>6&&weekLoginMap.day6State == 0">
                  <div class="sign-info_05 sign-info_07" @click="retroactive(6)">补签</div>
                  <p class="sign-info_12">需要15狗粮</p>
                </template>
                <template v-if="weekLoginMap.today<6">
                  <div class="sign-info_05 sign-info_13">签到</div>
                </template>
              </li>
            </ul>
            <ul class="clearfix sign-info_04">
              <li class="sign-info-middle">
                <div class="sign-info_09">星期日</div>
              </li>
              <li>
                <div class="sign-info_041">
                  <div class="sign-info_10 animated fadeIn" v-if="rewordTip == 7">
                    <div>
                      <img src="./../../assets/image/head/Sign_Success_Dog_s.png"/>
                      <p class="sign-info_11">10</p>
                    </div>
                    <div>
                      <img src="./../../assets/image/head/Sign_Success_Egg_s.png"/>
                      <p class="sign-info_11">22</p>
                    </div>
                  </div>
                  <img src="./../../assets/image/head/Sign_Box_Red.png" @mouseover="rewordTipsShow(7)" @mouseleave="rewordTipsShow()"/>
                </div>
              </li>
              <li class="sign-info-middle float-right">
                <template v-if="weekLoginMap.day7State == 1">
                  <div class="sign-info_05 sign-info_06">已签</div>
                </template>
                <template v-if="weekLoginMap.today==7">
                  <template v-if="weekLoginMap.day7State == 0">
                    <div class="sign-info_05 sign-info_08" @click="sign">签到</div>
                  </template>
                </template>
                <template v-if="weekLoginMap.today>7&&weekLoginMap.day7State == 0">
                  <div class="sign-info_05 sign-info_07" @click="retroactive(7)">补签</div>
                  <p class="sign-info_12">需要15狗粮</p>
                </template>
                <template v-if="weekLoginMap.today<7">
                  <div class="sign-info_05 sign-info_13">签到</div>
                </template>
              </li>
            </ul>
          </div>
          </div>
        </li>
        <li class="newHeadTop_13">
          <div class="newHeadTop_11">
            <div class="newHeadTop_14 ellipsis" v-if="unreadedInfo">{{unreadedInfo}}</div>
            <router-link to="/mymessage" class="hoverFloat" title="消息通知"></router-link>
            <img src="./../../assets/image/head/Notice.png" v-if="unreadedInfo" >
            <img src="./../../assets/image/head/Noticed.png" v-if="!unreadedInfo" >
          </div>
        </li>
        <li class="newHeadTop_12" v-on:mouseover="enter" @mouseleave="leave">
          <router-link to="/mydoggo">
            <img :src="userInfo.headPortrait" class="newHeadTop_09"/>
          </router-link>
          <!--<a @click="signOut">-->
            <!--<span class="newHeadTop_10 linkActive">退出登录</span>-->
          <!--</a>-->
          <div class="newHeadTop_17 animated fadeIn" v-if="signDetailShow">
            <div class="newHeadTop_19">{{userInfo.nickname}}
              <img src="./../../assets/image/head/Copper-mini.png" v-if="baseInfo.levelCode === 0"/>
              <img src="./../../assets/image/head/Gold-mini.png" v-if="baseInfo.levelCode === 3"/>
              <img src="./../../assets/image/head/Silver-mini.png" v-if="baseInfo.levelCode === 1"/>
            </div>
            <div class="newHeadTop_18" v-on:mouseover="enterAgain(1)" @mouseleave="leaveAgain">
              <router-link to="/mydoggo" class="hoverFloat"></router-link>
              <img src="./../../assets/image/head/Mine-active.png" v-if="listShow === 1"/>
              <img src="./../../assets/image/head/Mine.png" v-if="listShow !== 1"/>
              个人中心
            </div>
            <div class="newHeadTop_18" @click="signOut" v-on:mouseover="enterAgain(2)" @mouseleave="leaveAgain">
              <img src="./../../assets/image/head/Quit-active.png" v-if="listShow == 2"/>
              <img src="./../../assets/image/head/Quit.png" v-if="listShow !== 2"/>
              退出
            </div>
          </div>
        </li>
      </ul>
    </div>


  </div>
</template>
<script>
  import './../../assets/css/head.css'

  export default {
    data: function () {
      return {
//        sign: '',
        signTip: false,
        weekLoginMap: '',
        rewordTip: 0,
        signDetailShow: false,
        listShow: 0
      }
    },
    methods: {
      enterAgain: function (val) {
        this.listShow = val
      },
      leaveAgain: function () {
        this.listShow = ''
      },
      enter: function () {
        this.signDetailShow = true
      },
      leave: function () {
        this.signDetailShow = false
      },
      initInfo: function () {
        if (!this.GLOBAL.hearder.Authorization) {
          return
        }
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.webConfig + 'personcenter/getUserinfo',
          data: {},
          headers: this.GLOBAL.hearder
        })
          .then((response) => {
            // console.log(response)
            this.$store.commit('changeBaseInfo', response.data)
            this.$store.commit('changeUserInfo', response.data.tUser)
          })
          .catch(function (error) {
            console.log(error)
          })
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.webConfig + '/personcenter/getunread',
          data: {},
          headers: this.GLOBAL.hearder
        })
          .then((response) => {
            this.$store.commit('changeUnreadedInfo', response.data.number)
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      setCookie: function (cname, cvalue, exdays) {
        var d = new Date()
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
        var expires = 'expires=' + d.toUTCString()
        document.cookie = cname + '=' + cvalue + ';' + expires
      },
      signOut: function () {
        localStorage.clear('access_token')
//        this.setCookie('token', '', -1)
        window.location.replace(this.GLOBAL.urlConfig + 'logout')
      },
      buqianAll: function (val) {
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.webConfig + '/myTask/getMyTaskAllRepairDayLogin',
          headers: this.GLOBAL.hearder,
          params: {
          }
        })
          .then((response) => {
            console.log(response)
            if (response.data.errCode === 0) {
              this.$message({
                showClose: true,
                message: '恭喜你，补签成功',
                type: 'success'
              })
              this.initWeekState()
            } else {
              this.$message({
                showClose: true,
                message: response.data.errDesc,
                type: 'error'
              })
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      retroactive: function (val) {
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.webConfig + '/myTask/getMyTaskRepairDayLogin',
          headers: this.GLOBAL.hearder,
          params: {
            repairNumber: val
          }
        })
          .then((response) => {
            console.log(response)
            if (response.data.errCode === 0) {
              this.$message({
                showClose: true,
                message: '恭喜你，补签成功',
                type: 'success'
              })
              this.initWeekState()
            } else {
              this.$message({
                showClose: true,
                message: response.data.errDesc,
                type: 'error'
              })
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      sign: function () {
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.webConfig + '/myTask/dayLogin',
          headers: this.GLOBAL.hearder,
          params: {
            isSeven: this.isseven,
            TUserTaskDayLogin: this.weekLoginMap.today
          }
        })
          .then((response) => {
            console.log(response)
            if (response.data.errCode === 0) {
              this.$message({
                showClose: true,
                message: '恭喜你' + response.data.errDesc,
                type: 'success'
              })
              this.initWeekState()
            } else {
              this.$message({
                showClose: true,
                message: response.data.errDesc,
                type: 'error'
              })
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      changeShow: function (val) {
        this.signTip = val
      },
      rewordTipsShow: function (val) {
        this.rewordTip = val
      },
      initWeekState: function () {
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.webConfig + '/myTask/getMyTaskWeekContinuityLogin',
          headers: this.GLOBAL.hearder,
          params: {
          }
        })
          .then((response) => {
            this.weekLoginMap = response.data.weekLoginMap
            this.$store.commit('getweekLoginMap', response.data.weekLoginMap)
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    },
    created: function () {
      this.initWeekState()
      this.initInfo()
    },
    computed: {
      signState () {
        if (this.GLOBAL.hearder.Authorization !== null && this.GLOBAL.hearder.Authorization !== '' && this.GLOBAL.hearder.Authorization.indexOf('Bearer') === -1) {
          return false
        }
        return this.GLOBAL.hearder.Authorization
      },
      userInfo () {
        return this.$store.state.userInfo
      },
      baseInfo () {
        return this.$store.state.baseInfo
      },
      unreadedInfo () {
        return this.$store.state.unreadedInfo
      },
      buqianDay () {
        let temp = 0
        if (this.weekLoginMap.today > 1 && this.weekLoginMap.day1State === '0') {
          temp++
        }
        if (this.weekLoginMap.today > 2 && this.weekLoginMap.day2State === '0') {
          temp++
        }
        if (this.weekLoginMap.today > 3 && this.weekLoginMap.day3State === '0') {
          temp++
        }
        if (this.weekLoginMap.today > 4 && this.weekLoginMap.day4State === '0') {
          temp++
        }
        if (this.weekLoginMap.today > 5 && this.weekLoginMap.day5State === '0') {
          temp++
        }
        if (this.weekLoginMap.today > 6 && this.weekLoginMap.day6State === '0') {
          temp++
        }
        if (this.weekLoginMap.today > 7 && this.weekLoginMap.day7State === '0') {
          temp++
        }
        return temp
      },
      todaySigned () {
        return this.$store.getters.todaySigned
      },
      isseven () {
        if (this.weekLoginMap.day1State === '1' && this.weekLoginMap.day2State === '1' && this.weekLoginMap.day3State === '1' && this.weekLoginMap.day4State === '1' && this.weekLoginMap.day5State === '1' && this.weekLoginMap.day6State === '1' && this.weekLoginMap.day7State === '1') {
          return '1'
        } else {
          return '0'
        }
      }
    },
    props: {
      locationUrl: {
        type: String
      }
    }
  }
</script>
<style>

</style>
