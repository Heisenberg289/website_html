<template>
  <div>
    <commonPart :linkActive="5">
      <div slot="pageRight">
        <div id="myMission">
          <p class="title">我的任务</p>
          <p class="line"></p>
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="每日任务" name="first">
              <div class="dailyTasks">
                <p class="all">
                  <button @click="dayallDone()"></button>
                </p>
                <div class="dailyTable">
                  <ul class="tableTitle clear">
                    <li>任务名称</li>
                    <li>任务奖励</li>
                    <li>状态</li>
                    <li></li>
                  </ul>
                  <ul class="clear">
                    <li>每日签到</li>
                    <li class="myPrize">
                      <span>10</span>
                      <img src="../../assets/image/personCenter/bone.png">
                      <span>2</span>
                      <img src="../../assets/image/personCenter/egg.png">
                    </li>
                    <li>
                      <span class="hasAlready" v-if="dayLogin.dayLogin === '1'">已完成</span>
                      <span v-if="dayLogin.dayLogin === '0'">未完成
                        <!--<span class="noAlready">（1/5）</span>-->
                      </span>
                    </li>
                    <li>
                      <span style="margin-left: 20px;" v-if="dayLogin.dayLoginState === '1' && dayLogin.dayLogin === '1'">已领取奖励
                      </span>
                      <button class="hasDone" v-if="dayLogin.dayLogin === '1' && dayLogin.dayLoginState === '0'"
                              @click="signPrize()">领取奖励
                      </button>
                      <button class="goDone" v-if="dayLogin.dayLogin === '0'" @click="daySign()">签到</button>
                    </li>
                  </ul>
                  <p class="line"></p>
                  <ul class="clear">
                    <li>每日首胜</li>
                    <li class="myPrize">
                      <span>30</span>
                      <img src="../../assets/image/personCenter/bone.png">
                      <span>5</span>
                      <img src="../../assets/image/personCenter/egg.png">
                    </li>
                    <li>
                      <span v-if="matchWin.matchWinState === '1' " class="hasAlready">已完成</span>
                      <span v-if="matchWin.matchWinState === '0' ">未完成</span>
                    </li>
                    <li>
                      <!--<button class="hasDone">领取奖励</button>-->
                      <a class="goDone" :href='this.GLOBAL.urlConfig+"/match"'>去完成</a>
                      <!--<span>已领取奖励</span>-->
                    </li>
                  </ul>
                  <p class="line"></p>
                  <ul class="clear">
                    <li>每日邀请好友三次</li>
                    <li class="myPrize">
                      <span>0</span>
                      <img src="../../assets/image/personCenter/bone.png">
                      <span>15</span>
                      <img src="../../assets/image/personCenter/egg.png">
                    </li>
                    <li>
                      <span class="hasAlready" v-if="code.code ==='1' ">已完成</span>
                      <span>未完成 <span class="noAlready">（{{code.hasNum}}/{{code.totalNum}}）</span></span>
                    </li>
                    <li>
                      <button class="hasDone" v-if="code.codeState === '0' &&code.code ==='1' "
                              @click="hasDone('code')">领取奖励
                      </button>
                      <a class="goDone" v-if="code.code === '0' " href="mydoggo">去完成</a>
                      <span style="margin-left: 20px;" v-if="code.codeState === '1' && code.code ==='1' ">已领取奖励</span>
                    </li>
                  </ul>
                  <p class="line"></p>
                  <ul class="clear">
                    <li>每日参加比赛三次</li>
                    <li class="myPrize">
                      <span>10</span>
                      <img src="../../assets/image/personCenter/bone.png">
                      <span>5</span>
                      <img src="../../assets/image/personCenter/egg.png">
                    </li>
                    <li>
                      <span class="hasAlready" v-if="matchplay.matchplay === '1' ">已完成</span>
                      <span v-if="matchplay.matchplay === '0' ">未完成 <span
                        class="noAlready">（{{matchplay.hasNum}}/{{matchplay.totalNum}}）</span></span>
                    </li>
                    <li>
                      <button class="hasDone" v-if="matchplay.matchplay === '1' && matchplay.matchplayState ==='0' "
                              @click="hasDone('matchplay')">
                        领取奖励
                      </button>
                      <a class="goDone" v-if="matchplay.matchplay === '0' "
                         :href='this.GLOBAL.urlConfig+"/match"'>去完成</a>
                      <span style="margin-left: 20px;" v-if="matchplay.matchplay === '1' && matchplay.matchplayState ==='1' ">已领取奖励</span>
                    </li>
                  </ul>
                  <p class="line"></p>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="成长任务" name="second">
              <div class="allTasks">
                <p class="all">
                  <button @click="allDone()"></button>
                </p>
                <div class="dailyTable">
                  <ul class="tableTitle clear">
                    <li>任务名称</li>
                    <li>任务奖励</li>
                    <li>状态</li>
                    <li></li>
                  </ul>
                  <ul class="clear">
                    <li>上传头像</li>
                    <li class="myPrize" >
                      <span>10</span>
                      <img src="../../assets/image/personCenter/bone.png">
                      <span>10</span>
                      <img src="../../assets/image/personCenter/egg.png">
                    </li>
                    <li>
                      <!--<span class="hasAlready">已完成</span>-->
                      <span v-if="uploadHeadportrait.uploadHeadportrait === '0' ">未完成</span>
                      <span v-if="uploadHeadportrait.uploadHeadportrait === '1' ">已完成</span>
                    </li>
                    <li>
                      <button class="hasDone"
                              v-if="uploadHeadportrait.uploadHeadportrait === '1' && uploadHeadportrait.uploadHeadportraitState === '0' "
                              @click="hasDone('uploadHeadportrait')">领取奖励
                      </button>
                      <a v-if="uploadHeadportrait.uploadHeadportrait === '0' " href="mysetting" class="goDone">去完成</a>
                      <span style="margin-left: 20px;"
                        v-if="uploadHeadportrait.uploadHeadportrait === '1' && uploadHeadportrait.uploadHeadportraitState === '1' ">已领取奖励</span>
                    </li>
                  </ul>
                  <p class="line"></p>
                  <ul class="clear">
                    <li>创建/加入战队</li>
                    <li class="myPrize">
                      <span>10</span>
                      <img src="../../assets/image/personCenter/bone.png">
                      <span>10</span>
                      <img src="../../assets/image/personCenter/egg.png">
                    </li>
                    <li>
                      <span class="hasAlready" v-if="teamJoinorcreate.teamJoinorcreate === '1' ">已完成</span>
                      <span v-if="teamJoinorcreate.teamJoinorcreate === '0' ">未完成</span>
                    </li>
                    <li>
                      <button
                        v-if="teamJoinorcreate.teamJoinorcreate === '1' && teamJoinorcreate.teamJoinorcreateState === '0' "
                        @click="hasDone('teamJoinorcreate')" class="hasDone">领取奖励
                      </button>
                      <a v-if="teamJoinorcreate.teamJoinorcreate === '0' " :href='this.GLOBAL.urlConfig+"/team"'
                         class="goDone">去完成</a>
                      <span style="margin-left: 20px;"
                        v-if="teamJoinorcreate.teamJoinorcreate === '1' && teamJoinorcreate.teamJoinorcreateState === '1' ">已领取奖励</span>
                    </li>
                  </ul>
                  <p class="line"></p>
                  <ul class="clear">
                    <li>参加10场比赛</li>
                    <li class="myPrize">
                      <span>10</span>
                      <img src="../../assets/image/personCenter/bone.png">
                      <span>10</span>
                      <img src="../../assets/image/personCenter/egg.png">
                    </li>
                    <li>
                      <span v-if="tenMatch.tenMatch === '1'" class="hasAlready">已完成</span>
                      <span v-if="tenMatch.tenMatch === '0'  ">未完成 <span
                        class="noAlready">（{{tenMatch.hasNum}}/{{tenMatch.totalNum}}）</span></span>
                    </li>
                    <li>
                      <button v-if="tenMatch.tenMatch === '1' && tenMatch.tenMatchState === '0' " class="hasDone"
                              @click="hasDone('tenMatch')">领取奖励
                      </button>
                      <a v-if="tenMatch.tenMatch === '0'" :href='this.GLOBAL.urlConfig+"/match"' class="goDone">去完成</a>
                      <span style="margin-left: 20px;" v-if="tenMatch.tenMatch === '1' && tenMatch.tenMatchState === '1' ">已领取奖励</span>
                    </li>
                  </ul>
                  <p class="line"></p>
                  <ul class="clear">
                    <li>参加100场比赛</li>
                    <li class="myPrize">
                      <span>10</span>
                      <img src="../../assets/image/personCenter/bone.png">
                      <span>10</span>
                      <img src="../../assets/image/personCenter/egg.png">
                    </li>
                    <li>
                      <span v-if="hundredMatch.hundredMatch === '1'" class="hasAlready">已完成</span>
                      <span v-if="hundredMatch.hundredMatch === '0'">未完成 <span class="noAlready">（{{hundredMatch.hasNum}}/{{hundredMatch.totalNum}}）</span></span>
                    </li>
                    <li>
                      <button @click="hasDone('hundredMatch')"
                              v-if="hundredMatch.hundredMatch === '1' && hundredMatch.hundredMatchState === '0' "
                              class="hasDone">领取奖励
                      </button>
                      <a v-if="hundredMatch.hundredMatch === '0' && hundredMatch.hundredMatchState === '0'"
                         class="goDone" :href='this.GLOBAL.urlConfig+"/match"'>去完成
                      </a>
                      <span style="margin-left: 20px;"
                        v-if="hundredMatch.hundredMatch === '1' && hundredMatch.hundredMatchState === '1' ">已领取奖励</span>
                    </li>
                  </ul>
                  <p class="line"></p>
                  <ul class="clear">
                    <li>微信绑定</li>
                    <li class="myPrize">
                      <span>10</span>
                      <img src="../../assets/image/personCenter/bone.png">
                      <span>10</span>
                      <img src="../../assets/image/personCenter/egg.png">
                    </li>
                    <li>
                      <span v-if="wechatBind.wechatBind === '1' " class="hasAlready">已完成</span>
                      <span v-if="wechatBind.wechatBind === '0' ">未完成 <span class="noAlready">（1/5）</span></span>
                    </li>
                    <li>
                      <button v-if="wechatBind.wechatBind === '1' && wechatBind.wechatBindState === '0'" class="hasDone"
                              @click="hasDone('wechatBind')">领取奖励
                      </button>
                      <a v-if="wechatBind.wechatBind === '0' && wechatBind.wechatBindState === '0'" href="mysetting"
                         class="goDone">
                        去完成
                      </a>
                      <span style="margin-left: 20px;" v-if="wechatBind.wechatBind === '1' && wechatBind.wechatBindState === '1'">已领取奖励</span>
                    </li>
                  </ul>
                  <p class="line"></p>
                  <ul class="clear">
                    <li>战队人数至五人</li>
                    <li class="myPrize">
                      <span>10</span>
                      <img src="../../assets/image/personCenter/bone.png">
                      <span>10</span>
                      <img src="../../assets/image/personCenter/egg.png">
                    </li>
                    <li>
                      <span v-if="teamPerson.teamPerson === '1' " class="hasAlready">已完成</span>
                      <span v-if="teamPerson.teamPerson === '0' ">未完成 <span
                        class="noAlready">（{{teamPerson.hasNum}}/{{teamPerson.totalNum}}）</span></span>
                    </li>
                    <li>
                      <button v-if="teamPerson.teamPerson === '1' && teamPerson.teamPersonState === '0' "
                              class="hasDone" @click="hasDone('teamPerson')">领取奖励
                      </button>
                      <a :href='this.GLOBAL.urlConfig+"/match"' v-if="teamPerson.teamPerson === '0' "
                         class="goDone">去完成</a>
                      <span style="margin-left: 20px;" v-if="teamPerson.teamPerson === '1' && teamPerson.teamPersonState === '1' ">已领取奖励</span>
                    </li>
                  </ul>
                  <p class="line"></p>
                  <ul class="clear">
                    <li>首次充值</li>
                    <li class="myPrize">
                      <span>10</span>
                      <img src="../../assets/image/personCenter/bone.png">
                      <span>10</span>
                      <img src="../../assets/image/personCenter/egg.png">
                    </li>
                    <li>
                      <span v-if="firstParment.firstParment === '1' " class="hasAlready">已完成</span>
                      <span v-if="firstParment.firstParment === '0' ">未完成</span>
                    </li>
                    <li>
                      <button v-if="firstParment.firstParment === '1' && firstParment.firstParmentState === '0'"
                              @click="hasDone('firstParment')" class="hasDone">领取奖励
                      </button>
                      <a v-if="firstParment.firstParment === '0'" class="goDone"
                         :href='this.GLOBAL.urlConfig+"/personcenter/index/recharge"'>去完成</a>
                      <span style="margin-left: 20px;"
                        v-if="firstParment.firstParment === '1' && firstParment.firstParmentState === '1'">已领取奖励</span>
                    </li>
                  </ul>
                  <p class="line"></p>
                  <ul class="clear">
                    <li>首次参加比赛</li>
                    <li class="myPrize">
                      <span>10</span>
                      <img src="../../assets/image/personCenter/bone.png">
                      <span>10</span>
                      <img src="../../assets/image/personCenter/egg.png">
                    </li>
                    <li>
                      <span v-if="matchFirstplay.matchFirstplay === '1'" class="hasAlready">已完成</span>
                      <span v-if="matchFirstplay.matchFirstplay === '0'">未完成</span>
                    </li>
                    <li>
                      <button v-if="matchFirstplay.matchFirstplay === '1' &&matchFirstplay.matchFirstplayState ==='0' "
                              @click="hasDone('matchFirstplay')" class="hasDone">领取奖励
                      </button>
                      <a v-if="matchFirstplay.matchFirstplay === '0'"
                         :href='this.GLOBAL.urlConfig+"/match"' class="goDone">去完成</a>
                      <span style="margin-left: 20px;" v-if="matchFirstplay.matchFirstplay === '1' &&matchFirstplay.matchFirstplayState ==='1' ">已领取奖励</span>
                    </li>
                  </ul>
                  <p class="line"></p>
                  <ul class="clear">
                    <li>首次开通VIP</li>
                    <li class="myPrize">
                      <span>10</span>
                      <img src="../../assets/image/personCenter/bone.png">
                      <span>10</span>
                      <img src="../../assets/image/personCenter/egg.png">
                    </li>
                    <li>
                      <span v-if="firstVip.firstVip === '1' " class="hasAlready">已完成</span>
                      <span v-if="firstVip.firstVip === '0' ">未完成</span>
                    </li>
                    <li>
                      <button v-if="firstVip.firstVip === '1'&&firstVip.firstVipState ==='0' "
                              @click="hasDone('firstVip')" class="hasDone">领取奖励
                      </button>
                      <a v-if="firstVip.firstVip === '0' " class="goDone"
                         :href='this.GLOBAL.urlConfig+"/personcenter/vip/renew"'>去完成</a>
                      <span style="margin-left: 20px;" v-if="firstVip.firstVip === '1'&&firstVip.firstVipState ==='1' ">已领取奖励</span>
                    </li>
                  </ul>
                  <p class="line"></p>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </commonPart>
  </div>
</template>
<script>
  import './../../assets/css/myMission.css'
  import './../../assets/css/element.css'
  export default {
    data: function () {
      return {
        activeName: 'first',
        dayLogin: '',
        matchWin: '',
        matchplay: '',
        code: '',
        uploadHeadportrait: '',
        teamJoinorcreate: '',
        hundredMatch: '',
        tenMatch: '',
        wechatBind: '',
        teamPerson: '',
        firstParment: '',
        matchFirstplay: '',
        firstVip: ''
      }
    },
    methods: {
      handleClick (tab, event) {
//        console.log(tab, event);
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
//            this.weekLoginMap = response.data.weekLoginMap
            this.$store.commit('getweekLoginMap', response.data.weekLoginMap)
          })
          .catch(function (error) {
            console.log(error)
          })
      },
//      每日签到
      daySign () {
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.webConfig + 'myTask/dayLogin',
          headers: this.GLOBAL.hearder,
          params: {
            dayLoginState: 1
          }
        })
          .then((res) => {
//            console.log(res.data)
            if (res.data.errCode === 0) {
              this.$message.success(res.data.errDesc)
              this.initWeekState()
              this.$ajax({
                method: 'POST',
                url: this.GLOBAL.commomUrl + '/stargo/myTask/getMyTaskDayLogin',
                headers: this.GLOBAL.hearder,
                params: {
                  dayLoginState: 1,
                  weekLoginState: 1
                }
              })
                .then((res) => {
//                  console.log(res)
                  this.dayLogin = res.data
                })
            } else {
              this.$message.error(res.data.errDesc)
            }
          })
      },
      dayallDone () {
        if (this.dayLogin.dayLogin === '1' && this.dayLogin.dayLoginState === '0') {
          this.$ajax({
            method: 'POST',
            url: this.GLOBAL.webConfig + 'myTask/receiveReward',
            headers: this.GLOBAL.hearder,
            params: {
              tasknum: 'dayLogin'
            }
          })
            .then((res) => {
//              console.log(res)
              if (res.data.errCode === 0) {
                this.$message.success('领取成功！')
              } else {
                this.$message.error(res.data.errDesc)
              }
            })
        }
        if (this.matchWin.matchWin === '1' && this.matchWin.matchWinState === '0') {
          this.$ajax({
            method: 'POST',
            url: this.GLOBAL.webConfig + 'myTask/receiveReward',
            headers: this.GLOBAL.hearder,
            params: {
              tasknum: 'matchWin'
            }
          })
            .then((res) => {
//              console.log(res)
              if (res.data.errCode === 0) {
                this.$message.success('领取成功！')
              } else {
                this.$message.error(res.data.errDesc)
              }
            })
        }
        if (this.code.code === '1' && this.code.codeState === '0') {
          this.$ajax({
            method: 'POST',
            url: this.GLOBAL.webConfig + 'myTask/receiveReward',
            headers: this.GLOBAL.hearder,
            params: {
              tasknum: 'code'
            }
          })
            .then((res) => {
//              console.log(res)
              if (res.data.errCode === 0) {
                this.$message.success('领取成功！')
              } else {
                this.$message.error(res.data.errDesc)
              }
            })
        }
        if (this.matchplay.matchplay === '1' && this.matchplay.matchplayState === '0') {
          this.$ajax({
            method: 'POST',
            url: this.GLOBAL.webConfig + 'myTask/receiveReward',
            headers: this.GLOBAL.hearder,
            params: {
              tasknum: 'matchplay'
            }
          })
            .then((res) => {
//              console.log(res)
              if (res.data.errCode === 0) {
                this.$message.success('领取成功！')
              } else {
                this.$message.error(res.data.errDesc)
              }
            })
        }
        if (this.matchplay.matchplay === '1' && this.matchplay.matchPlayState === '0') {
          this.$ajax({
            method: 'POST',
            url: this.GLOBAL.webConfig + 'myTask/receiveReward',
            headers: this.GLOBAL.hearder,
            params: {
              tasknum: 'matchplay'
            }
          })
            .then((res) => {
//              console.log(res)
              if (res.data.errCode === 0) {
                this.$message.success('领取成功！')
              } else {
                this.$message.error(res.data.errDesc)
              }
            })
        }
        this.myMission()
      },
      allDone () {
        if (this.uploadHeadportrait.uploadHeadportrait === '1' && this.uploadHeadportrait.uploadHeadportraitState === '0') {
          this.$ajax({
            method: 'POST',
            url: 'http://192.168.10.154:8080/stargo/myTask/receiveReward',
            headers: this.GLOBAL.hearder,
            params: {
              tasknum: 'uploadHeadportrait'
            }
          })
            .then((res) => {
//              console.log(res)
              if (res.data.errCode === 0) {
                this.$message.success('领取成功！')
              } else {
                this.$message.error('领取失败！')
              }
            })
        }
        if (this.teamJoinorcreate.teamJoinorcreate === '1' && this.teamJoinorcreate.teamJoinorcreateState === '0') {
          this.$ajax({
            method: 'POST',
            url: 'http://192.168.10.154:8080/stargo/myTask/receiveReward',
            headers: this.GLOBAL.hearder,
            params: {
              tasknum: 'teamJoinorcreate'
            }
          })
            .then((res) => {
//              console.log(res)
              if (res.data.errCode === 0) {
                this.$message.success('领取成功！')
              } else {
                this.$message.error('领取失败！')
              }
            })
        }
        if (this.hundredMatch.hundredMatch === '1' && this.hundredMatch.hundredMatchState === '0') {
          this.$ajax({
            method: 'POST',
            url: 'http://192.168.10.154:8080/stargo/myTask/receiveReward',
            headers: this.GLOBAL.hearder,
            params: {
              tasknum: 'hundredMatch'
            }
          })
            .then((res) => {
//              console.log(res)
              if (res.data.errCode === 0) {
                this.$message.success('领取成功！')
              } else {
                this.$message.error('领取失败！')
              }
            })
        }
        if (this.tenMatch.tenMatch === '1' && this.tenMatch.tenMatchState === '0') {
          this.$ajax({
            method: 'POST',
            url: 'http://192.168.10.154:8080/stargo/myTask/receiveReward',
            headers: this.GLOBAL.hearder,
            params: {
              tasknum: 'tenMatch'
            }
          })
            .then((res) => {
//              console.log(res)
              if (res.data.errCode === 0) {
                this.$message.success('领取成功！')
              } else {
                this.$message.error('领取失败！')
              }
            })
        }
        if (this.wechatBind.wechatBind === '1' && this.wechatBind.wechatBindState === '0') {
          this.$ajax({
            method: 'POST',
            url: 'http://192.168.10.154:8080/stargo/myTask/receiveReward',
            headers: this.GLOBAL.hearder,
            params: {
              tasknum: 'wechatBind'
            }
          })
            .then((res) => {
//              console.log(res)
              if (res.data.errCode === 0) {
                this.$message.success('领取成功！')
              } else {
                this.$message.error('领取失败！')
              }
            })
        }
        if (this.teamPerson.teamPerson === '1' && this.teamPerson.teamPersonState === '0') {
          this.$ajax({
            method: 'POST',
            url: 'http://192.168.10.154:8080/stargo/myTask/receiveReward',
            headers: this.GLOBAL.hearder,
            params: {
              tasknum: 'teamPerson'
            }
          })
            .then((res) => {
//              console.log(res)
              if (res.data.errCode === 0) {
                this.$message.success('领取成功！')
              } else {
                this.$message.error('领取失败！')
              }
            })
        }
        if (this.firstParment.firstParment === '1' && this.firstParment.firstParmentState === '0') {
          this.$ajax({
            method: 'POST',
            url: 'http://192.168.10.154:8080/stargo/myTask/receiveReward',
            headers: this.GLOBAL.hearder,
            params: {
              tasknum: 'firstParment'
            }
          })
            .then((res) => {
//              console.log(res)
              if (res.data.errCode === 0) {
                this.$message.success('领取成功！')
              } else {
                this.$message.error('领取失败！')
              }
            })
        }
        if (this.matchFirstplay.matchFirstplay === '1' && this.matchFirstplay.matchFirstplayState === '0') {
          this.$ajax({
            method: 'POST',
            url: 'http://192.168.10.154:8080/stargo/myTask/receiveReward',
            headers: this.GLOBAL.hearder,
            params: {
              tasknum: 'matchFirstplay'
            }
          })
            .then((res) => {
//              console.log(res)
              if (res.data.errCode === 0) {
                this.$message.success('领取成功！')
              } else {
                this.$message.error('领取失败！')
              }
            })
        }
        if (this.firstVip.firstVip === '1' && this.firstVip.firstVipState === '0') {
          this.$ajax({
            method: 'POST',
            url: 'http://192.168.10.154:8080/stargo/myTask/receiveReward',
            headers: this.GLOBAL.hearder,
            params: {
              tasknum: 'firstVip'
            }
          })
            .then((res) => {
//              console.log(res)
              if (res.data.errCode === 0) {
                this.$message.success('领取成功！')
              } else {
                this.$message.error('领取失败！')
              }
            })
        }
        this.myMission()
      },
      hasDone (code) {
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.webConfig + 'myTask/receiveReward',
          headers: this.GLOBAL.hearder,
          params: {
            tasknum: code
          }
        })
          .then((res) => {
//            console.log(res)
            if (res.data.errCode === 0) {
              this.$message.success('领取成功！')
              this.myMission()
            } else {
              this.$message.error('领取失败！')
            }
          })
      },
      myMission () {
        //        每日签到
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.commomUrl + '/stargo/myTask/getMyTaskDayLogin',
          headers: this.GLOBAL.hearder,
          params: {
            dayLoginState: 1,
            weekLoginState: 1
          }
        })
          .then((res) => {
            console.log(res)
            this.dayLogin = res.data
          })
//      每日首胜
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.commomUrl + '/stargo/myTask/getMyTaskMatchWinState',
          headers: this.GLOBAL.hearder,
          params: {
            matchWinState: 1
          }
        })
          .then((res) => {
//            console.log(res.data)
            this.matchWin = res.data
          })
//      每日邀请好友三次
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.commomUrl + '/stargo/myTask/getMyTaskcodeState',
          headers: this.GLOBAL.hearder,
          params: {
            codeState: 1
          }
        })
          .then((res) => {
//            console.log(res.data)
            this.code = res.data
          })
//      每日参加比赛三次
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.commomUrl + '/stargo/myTask/getMyTaskmatchplay',
          headers: this.GLOBAL.hearder,
          params: {
            matchPlayState: 1
          }
        })
          .then((res) => {
//            console.log(res.data)
            this.matchplay = res.data
          })
//      上传头像
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.webConfig + 'myTask/getMyTaskUploadHeadportrait',
          headers: this.GLOBAL.hearder,
          params: {
            uploadHeadportraitState: 1
          }
        })
          .then((res) => {
//            console.log(res)
            this.uploadHeadportrait = res.data
          })
        //      创建/加入战队
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.webConfig + 'myTask/getMyTaskTeamJoinorCreate',
          headers: this.GLOBAL.hearder,
          params: {
            teamJoinorcreateState: 1
          }
        })
          .then((res) => {
//            console.log(res)
            this.teamJoinorcreate = res.data
          })
        //      参加100场比赛
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.webConfig + 'myTask/getMyTaskhundredMatch',
          headers: this.GLOBAL.hearder,
          params: {
            hundredMatchState: 1
          }
        })
          .then((res) => {
//            console.log(res)
            this.hundredMatch = res.data
          })
        //     参加10场比赛
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.webConfig + 'myTask/getMyTasktenMatch',
          headers: this.GLOBAL.hearder,
          params: {
            tenMatchState: 1
          }
        })
          .then((res) => {
//            console.log(res)
            this.tenMatch = res.data
          })
        //     微信绑定
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.webConfig + 'myTask/getMyTaskwechatBind',
          headers: this.GLOBAL.hearder,
          params: {
            wechatBindState: 1
          }
        })
          .then((res) => {
//            console.log(res)
            this.wechatBind = res.data
          })
        //     战队人数至五人
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.webConfig + 'myTask/getMyTaskTeamPerson',
          headers: this.GLOBAL.hearder,
          params: {
            teamPersonState: 1
          }
        })
          .then((res) => {
//            console.log(res)
            this.teamPerson = res.data
          })
        //     首次充值
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.webConfig + 'myTask/getMyTaskfirstParment',
          headers: this.GLOBAL.hearder,
          params: {
            firstParmentState: 1
          }
        })
          .then((res) => {
//            console.log(res)
            this.firstParment = res.data
          })
        //     首次参加比赛
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.webConfig + 'myTask/getMyTaskmatchFirstplay',
          headers: this.GLOBAL.hearder,
          params: {
            matchFirstplayState: 1
          }
        })
          .then((res) => {
//            console.log(res)
            this.matchFirstplay = res.data
          })
        //     首次开通VIP
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.webConfig + 'myTask/getMyTaskfirstVip',
          headers: this.GLOBAL.hearder,
          params: {
            firstVipState: 1
          }
        })
          .then((res) => {
//            console.log(res)
            this.firstVip = res.data
          })
      },
//      签到领取奖励
      signPrize () {
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.webConfig + 'myTask/dayLogin',
          headers: this.GLOBAL.hearder
        })
          .then((res) => {
            if (res.data.errCode === 0) {
              this.$message.success('领取成功！')
              this.dayLogin.dayLoginState = '1'
              this.dayLogin.dayLogin = '1'
            } else {
              this.$message.error('领取失败！')
            }
          })
      }
    },
    created: function () {
      this.myMission()
    }
  }
</script>
<style scoped="">

</style>
