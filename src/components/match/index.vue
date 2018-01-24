<template>
  <div id="app-content">
    <div class="lunbo-container">
      <ul class="lunbo clearfix" :style="{left: leftWidth + 'px'}" id="div1">
        <template v-for="(item, index) in lunboList">
          <li v-on:mouseover="lunboStop" @mouseleave="lunboGo" :style="{backgroundImage: 'url('+item.bannerImage+')'}" @click="urlGo(item.link)">
          </li>
        </template>
      </ul>
      <ul class="clearfix select-point">
        <template v-for="(item, index) in lunboList">
          <li @click="selectPosition(index)" :class="{active: lunbo_index === index}"></li>
        </template>
      </ul>
      <ul class="clearfix newHome_top8">
        <li>
          <a :href='this.GLOBAL.urlConfig+"html/match/createMatch.html"'>
            <img src="./../../assets/image/match/Creation.png"/>
          </a>
        </li>
        <li class="fr">
          <a :href='this.GLOBAL.urlConfig+"html/subsidy/index.html"'>
            <img src="./../../assets/image/match/Application.png"/>
          </a>
        </li>
      </ul>
    </div>
    <ul class="clearfix newHome_01 ">
      <li class="newHome_02">
        <div class="newHome_04 contentStyle" v-if="!signState">
            <div class="newHome_47">
              登录
            </div>
            <div style="position: relative;display: inline-block;margin-left: 17.5px;">
              <img src="./../../assets/image/match/Phone.png" class="newHome_49">
              <input type="text" class="form-control newHome_48" placeholder="请输入手机号码" name="username" id="username" autocomplete="off" v-model="phoneNum">
            </div>
            <div style="position: relative;margin: 15px auto 21px auto;display: inline-block;margin-left: 17.5px;">
              <img src="./../../assets/image/match/Password.png" class="newHome_49" style="padding: 10.5px 8px">
              <input type="password" class="form-control newHome_48" placeholder="请输入登录密码" name="password" id="password" v-model="pwd"
                     autocomplete="off">
            </div>
            <ul class="clearfix newHome_50">
              <a class="top_bg11" @click="login">
                <li  class="linkActive login-button-style" onselectstart="return false;">
                  <span>登录</span>
                </li>
              </a>
              <!--<a href="https://open.weixin.qq.com/connect/qrconnect?appid=wxde3f0af5a50439d5&amp;redirect_uri=http%3a%2f%2fwww.cccgaming.com%2foauth2-login&amp;response_type=code&amp;scope=snsapi_login&amp;state=STATE#wechat_redirect">-->
                <!--<li class="fr linkActive">-->
                  <!--<img src="./../../assets/image/match/Chat.png">-->
                  <!--<span>使用微信登录</span>-->
                <!--</li>-->
              <!--</a>-->
            </ul>
            <ul class="clearfix newHome_51">
              <li>
                <label>
                </label>
              </li>
              <li class="fr">
                <a :href='this.GLOBAL.urlConfig+"findPassword"'>忘记密码</a>
                <span style="margin: 0 2px;color: #FFD100;">|</span>
                <a :href='this.GLOBAL.urlConfig+"guest/signUp"'>注册账号</a>
              </li>
            </ul>
          </div>
        <div id="myInfo" class="newHome_04 contentStyle" v-if="signState">
          <img src="./../../assets/image/match/Copper.png" class="newHome_09 " v-if="baseInfo.levelCode === 0">
          <img src="./../../assets/image/match/Golden.png" class="newHome_09 " v-if="baseInfo.levelCode === 2">
          <img src="./../../assets/image/match/Silver.png" class="newHome_09 " v-if="baseInfo.levelCode === 1">
          <a :href='this.GLOBAL.urlConfig+"stargo/mydoggo"'>
            <img :src="userInfo.headPortrait" class="newHome_10">
          </a>
          <img src="./../../assets/image/match/Copper (1).png" style="display: block; margin: 7px auto;" v-if="baseInfo.levelCode === 0">
          <img src="./../../assets/image/match/Copper (2).png" style="display: block; margin: 7px auto;" v-if="baseInfo.levelCode === 1">
          <img src="./../../assets/image/match/Copper (3).png" style="display: block; margin: 7px auto;" v-if="baseInfo.levelCode === 2">
          <div class="newHome_11 ellipsis">
          {{userInfo.nickname}}
        </div>
          <ul class="clearfix newHome_12">
            <li class="login-button-style">
              <a :href='this.GLOBAL.urlConfig+"team/info/"+ baseInfo.teamId' class="hoverFloat"></a>
              <img src="./../../assets/image/match/Team.png">
              <span>我的战队</span>
            </li>
            <li class="fr">
              <a :href='this.GLOBAL.urlConfig+"stargo/mymission"' class="hoverFloat"></a>
              <img src="./../../assets/image/match/Mission.png">
              <span>我的任务</span>
            </li>
          </ul>
        </div>
          <div class="newHome_06">
            <match-rank setStyle="width:100%;height:100%" :matchRankList="matchRankList"></match-rank>
          </div>
      </li>
      <li class="newHome_03 fr">
        <div class="newHome_07 clearfix contentStyle">
          <ul class="clearfix newHome_23">
            <template v-for="(item, index) in hot_match">
              <li class="newHome_24" style="cursor: pointer;" :class="{fr:index%2}">
                <a @click="hotMatchGo(item.id)">
                  <img :src="item.officialBg">
                <div :title="item.matchTitle" class="title_info " v-on:mouseover="enter(index)" @mouseleave="leave"
                     :class="{title_info_show:introShow === index}">{{item.matchTitle}}
                </div>
                </a>
              </li>
            </template>
          </ul>
          <div class="clearfix fr newHome_25">
            <ul class="clearfix newHome_26">
              <li style="color: rgb(255, 255, 255);">新闻公告</li>
              <li class="fr"><a :href='this.GLOBAL.urlConfig+"news"' style="font-size: 12px; color: rgb(184, 186, 188);">查看全部</a></li>
            </ul>
            <template v-for="item in newsList">
              <div class="clearfix newHome_27">
                <a  :title="item.newsTitle" class="newHome_27a" @click="newsGo(item.id)">
                <span class="newHome_28 ellipsis">
									{{item.newsTitle}}
                </span>
                  <span class="fr" style="display: inline-block; width: 20%; text-align: left;">
                    {{item.createTime|formatTime}}
                </span>
                </a>
              </div>
            </template>
          </div>
        </div>
        <div class="newHome_08 contentStyle">
          <div class="newHome_top">
            <template v-if="newMatchInfo">
            <div class="newHome_top1 newHome_bg1" :class="{newHome_bg4: newMatchInfo.gameCode === 1,newHome_bg3: newMatchInfo.gameCode === 3,newHome_bg2: newMatchInfo.gameCode === 6,newHome_bg1: newMatchInfo.gameCode === 5}" @click="urlPush(newMatchInfo.gameCode, 3, newMatchInfo.id)">
              <ul class="clearfix newHome_top2">
                <li>
                  <img src="./../../assets/image/match/LogoDOTA2.png" v-if="newMatchInfo.gameCode === 5"/>
                  <img src="./../../assets/image/match/LogoChicken.png" v-if="newMatchInfo.gameCode === 6"/>
                  <img src="./../../assets/image/match/LogoHonor.png" v-if="newMatchInfo.gameCode === 3"/>
                  <img src="./../../assets/image/match/LogoLOL.png" v-if="newMatchInfo.gameCode === 1"/>
                </li>
                <li class="ellipsis">
                  <div class="newHome_top3">{{newMatchInfo.matchTitle}}</div>
                  <div class="newHome_top4">奖励:
                  <template v-if="newMatchInfo.bonus">
                    {{newMatchInfo.bonus}}狗粮
                  </template>
                  <template v-if="newMatchInfo.cash">
                    {{newMatchInfo.cash}}现金券
                  </template>
                  <template v-if="newMatchInfo.customBonus">
                    {{newMatchInfo.customBonus}}
                  </template>
                    <template v-if="!newMatchInfo.customBonus&&!newMatchInfo.cash&&!newMatchInfo.bonus">
                      无
                    </template>
                  </div>
                </li>
                <li class="fr">
                  <ul class="clearfix">
                    <li class="newHome_top6">
                      <p class="match-going" v-if="newMatchInfo.state === 3||newMatchInfo.state === 4||newMatchInfo.state === 6">赛季进行中</p>
                      <p class="not_begin" v-if="newMatchInfo.state === 0||newMatchInfo.state === 1||newMatchInfo.state === 2">未开始</p>
                      <p class="match-over" v-if="newMatchInfo.state === 5||newMatchInfo.state === 7">已结束</p>
                      <p class="newHome_top7" v-if="newMatchInfo.state!== 5&&newMatchInfo.state!== 7">
                        <img src="./../../assets/image/match/Timer.png"/>
                        <template v-if="newMatchInfo.state === 0||newMatchInfo.state === 1||newMatchInfo.state === 2">
                          <span>{{newMatchInfo.matchStartTime|getTimeLeft2}}</span>
                        </template>
                        <template v-if="newMatchInfo.state === 3||newMatchInfo.state === 4||newMatchInfo.state === 6">
                          <span>{{newMatchInfo.matchEndTime|getTimeLeft2}}</span>
                        </template>
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
              <button class="sg-button fr" v-if="newMatchInfo.state!== 5&&newMatchInfo.state!== 7" @click="urlPush(newMatchInfo.gameCode, 3, newMatchInfo.id)">快速匹配</button>
            </div>
            </template>
          </div>
          <ul class="clearfix newHome_29">
            <li style="margin-right: 22px;">
              <template>
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in option"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </template>
            </li>
            <li>
              <template>
                <el-select v-model="value2" placeholder="请选择">
                  <el-option
                    v-for="item in option2"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </template>
            </li>
            <li class="fr">
              <div class="input-bag">
                <el-input v-model="input" placeholder="赛事名称搜索" ></el-input>
                <img src="./../../assets/image/match/Search.png" class="search-icon" @click="searchInfo"/>
              </div>
            </li>
          </ul>
          <div>
            <template v-for="item in matchList">
              <ul class="clearfix newHome_34" style="cursor: pointer;" @click="urlPush(item.gameCode, item.gameType, item.id)">
                <li style="line-height: 83px; margin-right: 22px;">
                  <img src="./../../assets/image/match/Match_ListLol.png" class="newHome_35" v-if="item.gameCode === 1">
                  <img src="./../../assets/image/match/Match_ListShouWang.png" class="newHome_35"
                       v-if="item.gameCode === 2">
                  <img src="./../../assets/image/match/Match_ListWangZhe.png" class="newHome_35"
                       v-if="item.gameCode === 3">
                  <img src="./../../assets/image/match/Match_ListLuShi.png" class="newHome_35"
                       v-if="item.gameCode === 4">
                  <img src="./../../assets/image/match/Match_ListDota.png" class="newHome_35"
                       v-if="item.gameCode === 5">
                  <img src="./../../assets/image/match/JDQS.png" class="newHome_35" v-if="item.gameCode === 6">
                </li>
                <li class="newHome_36 ellipsis" style="width: 525px;" :class="{newHome_361:item.gameType == 6}">
                  <div :title="item.matchTitle" >
                    <span style="margin-right: 5px; color: #fff;">{{item.matchTitle}}</span>
                    <img src="./../../assets/image/match/New.png" v-if="item.new"/>
                    <span class="match-zhandui" v-if="item.gameType == 2">战队赛</span>
                    <span class="match-solo" v-if="item.gameType == 1">SOLO赛</span>
                    <span class="match-zhandui" v-if="item.gameType == 3">匹配赛</span>
                    <span class="match-fabu" v-if="item.gameType == 6">发布</span>
                  </div>
                  <template v-if="item.gameType !== 6">
                    <div class="ellipsis newHome_39" style="font-weight: normal; padding-top: 6px;color: #b8babc;">奖励:
                      <template v-if="item.bonus">
                        {{item.bonus}}狗粮
                      </template>
                      <template v-if="item.cash">
                        {{item.cash}}现金券
                      </template>
                      <template v-if="item.customBonus">
                        {{item.customBonus}}
                      </template>
                      <template v-if="!item.customBonus&&!item.cash&&!item.bonus">
                        无
                      </template>
                    </div>
                  </template>
                </li>
                <li class="newHome_43" v-if="item.gameType !== 6">
                  <div class="newHome_46 ellipsis">
                    <div><img src="./../../assets/image/match/People.png"> <span style="vertical-align: middle;">
                      <template v-if="item.gameType === 3">
                        {{item.personNum}}
                      </template>
                      <template v-else>
                        {{item.personNum}}/{{item.personMax}}
                      </template>

                  </span></div>
                    <div class="newHome_44 " v-if="item.gameType !== 3">
                      <div class="newHome_45" :style="{width: item.personNum / item.personMax*100 + '%'}"></div>
                    </div>
                  </div>
                </li>
                <li class="fr newHome_53">
                  <div class="newHome_54">
                    <p class="newHome_40 match-over" v-if="item.state === 5||item.state === 7">
                      已结束
                    </p>
                    <p class="newHome_40 match-going" v-if="item.state === 3||item.state === 4||item.state === 6">
                      进行中
                    </p>
                    <p class="newHome_40 not_begin" v-if="item.state === 0">
                      未开始
                    </p>
                    <p class="newHome_40 enroll-going" v-if="item.state === 1">
                      报名中
                    </p>
                    <p class="newHome_40 enroll-over" v-if="item.state === 2">
                      报名结束
                    </p>
                    <template v-if="item.gameType !== 6">
                      <p class="newHome_top7" v-if="item.state === 0">
                        <img src="./../../assets/image/match/Timer.png"/>
                        <span>{{timeCountDown2(item.remainingEnrollStartTime)|getTimeLeft}}</span>
                      </p>
                      <p class="newHome_top7" v-if="item.state === 1">
                        <img src="./../../assets/image/match/Timer.png"/>
                        <span>{{timeCountDown2(item.remainingEnrollTime)|getTimeLeft}}</span>
                      </p>
                      <p class="newHome_top7" v-if="item.state === 2">
                        <img src="./../../assets/image/match/Timer.png"/>
                        <span>{{timeCountDown2(item.remainingStartTime)|getTimeLeft}}</span>
                      </p>
                    </template>
                  </div>
                </li>
              </ul>
            </template>
            <div class="page-position">
              <el-pagination
                layout="prev, pager, next"
                :current-page.sync="CurrentPage"
                :page-size="pageSize"
                @current-change="handleCurrentChange"
                :total="total">
              </el-pagination>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <my-footer></my-footer>
    <my-head locationUrl="match"></my-head>
    <my-side></my-side>
  </div>
</template>
<script>
  import './../../assets/css/inputStyle.css'
  import './../../assets/css/match/index.css'
  import './../../assets/css/element.css'
  import MatchRank from '../common/matchRank'
  import $ from 'jquery'

  export default {
    components: {MatchRank},
    data: function () {
      return {
        phoneNum: '',
        pwd: '',
        introShow: '',
        input: '',
        option: [{
          value: '',
          label: '全部赛事'
        }, {
          value: '1',
          label: '英雄联盟'
        }, {
          value: '2',
          label: '守望先锋'
        }, {
          value: '3',
          label: '王者荣耀'
        }, {
          value: '4',
          label: '炉石传说'
        }, {
          value: '5',
          label: 'DOTA2'
        }, {
          value: '6',
          label: '绝地求生'
        }],
        option2: [{
          value: '',
          label: '全部类型'
        }, {
          value: '4',
          label: '个人赛'
        }, {
          value: '1',
          label: 'solo赛'
        }, {
          value: '2',
          label: '战队赛'
        }, {
          value: '3',
          label: '匹配赛'
        }, {
          value: '6',
          label: '发布赛'
        }],
        value: '',
        value2: '',
        lunbo_index: 0,
        interval: null,
        lunbo_width: '',
        hot_match: '',
        pageSize: 10,
        total: null,
        CurrentPage: 1,
        matchList: [],
        newsList: [],
        lunboList: [],
        matchRankList: [],
        timeCount: null,
        temp: null,
        newMatchInfo: '',
        letTimeCount: null
      }
    },
    methods: {
      hotMatchGo: function (id) {
        window.location.href = this.GLOBAL.urlConfig + 'match/matchDetail?matchId=' + id
      },
      urlGo: function (url) {
        window.location.href = url
      },
      newsGo: function (id) {
        window.location.href = this.GLOBAL.urlConfig + 'news/newsdetail?id=' + id
      },
      urlPush: function (code, type, id) {
        // console.log(code, type, id)
        if (type === 6) {
          window.location.href = this.GLOBAL.urlConfig + 'stargo/match/matchDetail?id=' + id
          return
        }
        if (code === 6) {
          window.location.href = this.GLOBAL.urlConfig + 'stargo/playbattlegrounds/index?matchId=' + id
          return
        }
        if (type === 3) {
          window.location.href = this.GLOBAL.urlConfig + 'matching/detail/' + id
        } else {
          window.location.href = this.GLOBAL.urlConfig + 'match/matchDetail?matchId=' + id
        }
      },
      login: function () {
        let reg = /^1[3|4|5|7|8][0-9]{9}$/
        if (!reg.test(this.phoneNum)) {
          this.$message({
            message: '请输入正确格式的手机号',
            type: 'error'
          })
          return false
        } else {
          let that = this
          this.$ajax({
            method: 'POST',
            url: this.GLOBAL.commomUrl + '/uaa/oauth/token',
            params: {
              grant_type: 'password',
              username: this.phoneNum,
              password: this.pwd
            },
            auth: {
              username: 'acme',
              password: 'acmesecret'
            }
          })
            .then((response) => {
              localStorage.setItem('access_token', 'Bearer ' + response.data.access_token)
              that.$ajax({
                method: 'POST',
                url: this.GLOBAL.urlConfig + 'login',
                params: {
                  username: that.phoneNum,
                  password: that.pwd
                }
              })
                .then((res) => {
                  console.log(res)
                  window.location.reload()
                })
              // window.location.reload()
            })
            .catch(() => {
              this.$message({
                message: '登录失败，请确认您的手机号或密码是否正确',
                type: 'error'
              })
            })
        }
      },
      searchInfo: function () {
        this.CurrentPage = 1
        this.getMatchList(this.value, this.value2, this.input, 1, true)
      },
      handleCurrentChange: function (val) {
        this.getMatchList(this.value, this.value2, this.input, val, true)
      },
      getMatchList: function (gameCode, gameType, gameName, pageNum, toTop) {
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.commomUrl + 'match/queryAllTypeMatchList',
          params: {
            gameCode: gameCode,
            gameType: gameType,
            gameName: gameName,
            pageNum: pageNum,
            pageSize: this.pageSize
          }
        })
          .then((res) => {
            // console.log(res, '赛事信息')
            this.matchList = res.data.list
            this.matchList.forEach((item) => {
              clearInterval(this.letTimeCount)
              this.letTimeCount = setInterval(function () {
                item.remainingEnrollStartTime--
                item.remainingEnrollTime--
                item.remainingStartTime--
                item.remainingTime--
              }, 60000)
            })
            this.total = res.data.total
            if (toTop) {
              window.scrollTo(0, 850)
            }
          })
      },
      getHotMatchInfo: function () {
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.commomUrl + 'match/queryAllHotMatchList'
        })
          .then((res) => {
            this.hot_match = res.data.list
            // console.log(res.data.list, 888)
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      lunboStop: function () {
        clearInterval(this.interval)
      },
      lunboGo: function () {
        this.lunboControl()
      },
      enter: function (val) {
        this.introShow = val
      },
      leave: function () {
        this.introShow = ''
      },
      selectPosition: function (val) {
        clearInterval(this.interval)
        this.lunbo_index = val
        this.lunboControl()
      },
      lunboControl: function () {
        this.interval = setInterval(() => {
          if (this.lunbo_index < this.lunboList.length - 1) {
            this.lunbo_index++
          } else {
            this.lunbo_index = 0
          }
        }, 5000)
      },
      getWindowWidth: function () {
        let that = this
        that.lunbo_width = $('.lunbo li').width()
        $(window).resize(function () {
          that.lunbo_width = $('.lunbo li').width()
        })
      },
      getNewsList: function () {
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.commomUrl + 'stargo/news/listNewsCommon',
          params: {
            pageSize: 6
          }
        })
          .then((res) => {
            this.newsList = res.data.list
            // console.log(res.data.list, 666)
          })
      },
      getLunboList: function () {
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.commomUrl + 'stargo/news/queryNewsSpecial'
        })
          .then((res) => {
            this.lunboList = res.data.list
            // console.log(this.lunboList, '轮播信息')
            this.$nextTick(function () {
              this.getWindowWidth()
            })
          })
      },
      getRankList: function () {
        this.$ajax({
          method: 'GET',
          url: this.GLOBAL.commomUrl + '/stargo/matching/queryMatchingRank?pageSize=' + 15
        })
          .then((res) => {
            this.matchRankList = res.data.list
            // console.log(res.data.list, 333)
          })
      },
      timeCountDown2: function (val) {
        return val
      },
      getNewMatch: function () {
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.commomUrl + 'stargo/matching/queryTopMatching'
        })
          .then((res) => {
            if (res.data.errCode === 0) {
              this.newMatchInfo = res.data.matchingInfo
            }
            // console.log(res.data, '最新信息')
          })
      }
    },
    created: function () {
      this.getLunboList()
      this.getNewsList()
      this.getMatchList(this.value, this.value2, this.input, 1, false)
      this.getHotMatchInfo()
      this.getRankList()
      this.getNewMatch()
    },
    mounted: function () {
      this.lunboControl()
    },
    computed: {
      baseInfo () {
        return this.$store.state.baseInfo
      },
      userInfo () {
        return this.$store.state.userInfo
      },
      leftWidth: function () {
        return -(this.lunbo_width * this.lunbo_index)
      },
      signState () {
        if (this.GLOBAL.hearder.Authorization !== null && this.GLOBAL.hearder.Authorization !== '') {
          return false
        }
        return this.GLOBAL.hearder.Authorization
      }
    },
    watch: {
      value (curVal, oldVal) {
        this.CurrentPage = 1
        this.getMatchList(this.value, this.value2, this.input, 1, true)
      },
      value2 (curVal, oldVal) {
        this.CurrentPage = 1
        this.getMatchList(this.value, this.value2, this.input, 1, true)
      },
      input (curVal, oldVal) {
        this.searchInfo()
      }
    },
    filters: {
      formatTime (value) {
        let now = new Date(value)
        let year = now.getFullYear()
        let month = now.getMonth() + 1
        let date = now.getDate()
        let hour = now.getHours()
        if (month < 10) {
          month = '0' + month
        }
        if (date < 10) {
          date = '0' + date
        }
        if (hour < 10) {
          hour = '0' + hour
        }
        let minute = now.getMinutes()
        if (minute < 10) {
          minute = '0' + minute
        }
        let second = now.getSeconds()
        if (second < 10) {
          second = '0' + second
        }
        return year + '-' + month + '-' + date
      },
      timeCountDown (val) {
        return val
      },
      getTimeLeft (val) {
        let temp = Math.abs(val)
        return Math.floor(temp / 60) + '小时' + Math.floor(temp % 60) + '分钟'
      },
      getTimeLeft2 (val) {
        let timestamp = (new Date()).valueOf()
        let count = Math.abs((timestamp - val) / 1000)
        return Math.floor(count / 3600) + '小时' + Math.floor(count % 3600 / 60) + '分钟'
      }
    }
  }
</script>
