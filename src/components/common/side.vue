<template>
  <div id="side">
    <myModal ref="childMethod">
      <div slot="modal-content" id="tag_bind">
        <ul class="clearfix">
          <li class="bindTag_04">
            <div class="bindTag_05">
              绑定GO牌
            </div>
            <div>
              <el-input v-model="tabVal" placeholder="输入GO牌号码"></el-input>
            </div>
            <div class="bindTag_07">
              GO牌相当于邀请码，您不仅仅可以绑定别人的GO牌，获得丰厚的邀请礼，成为粉丝也可以将自己的GO牌
              发给朋友，获取邀请收益
            </div>
            <a  class="bindTag_08" @click="bindTag">确定</a>
          </li>
          <li class="bindTag_09">
            <ul class="clearfix bindTag_10">
              <li>本周热门GO牌</li>
              <li class="fr ">
                <a class="bindTag_11">换一换</a>
              </li>
            </ul>
            <ul>
              <li class="bindTag_12" style="margin-right: 12px;" @mouseenter="introShowSet(1)" @mouseleave="introShowSet()">
                <div class="bindTag_13">
                  <div class="bindTag_14 ellipsis">
                    江南小卢
                  </div>
                  <img src="./../../assets/image/side_bar/BrandGo_Activation_GOName.png" class="bindTag_15">
                </div>
                <div class="bindTag_16">
                  <img src="./../../assets/image/side_bar/BrandGo_Activation_GOTop.png">
                </div>
                <div class="bindTag_17">
                  <img src="./../../assets/image/side_bar/BrandGo_Activation_GODown.png">
                </div>
                <div class="bindTag_22">
                  536549
                </div>
                <div class="bindTag_18 animated fadeIn" v-if="introShow === 1">
                  <div class="bindTag_19">
                    绑定该GO牌有机会获得如下奖品
                  </div>
                  <ul class="clearfix bindTag_20">
                    <li>
                      <div>
                        <img src="./../../assets/image/side_bar/BrandGo_Dog.png">
                      </div>
                      <div>
                        狗粮
                      </div>
                    </li>
                    <li>
                      <div>
                        <img src="./../../assets/image/side_bar/BrandGo_Egg.png">
                      </div>
                      <div>
                        彩蛋
                      </div>
                    </li>
                    <li>
                      <div>
                        <img src="./../../assets/image/side_bar/BrandGo_Keyboard.png">
                      </div>
                      <div>
                        键盘
                      </div>
                    </li>
                    <li>
                      <div>
                        <img src="./../../assets/image/side_bar/BrandGo_Mouse.png">
                      </div>
                      <div>
                        鼠标
                      </div>
                    </li>
                    <li>
                      <div>
                        <img src="./../../assets/image/side_bar/BrandGo_KM.png">
                      </div>
                      <div>
                        键鼠
                      </div>
                    </li>
                    <li>
                      <div>
                        <img src="./../../assets/image/side_bar/BrandGo_Team.png">
                      </div>
                      <div>
                        队服
                      </div>
                    </li>
                  </ul>
                  <a  class="bindTag_21" @click="inputTag('536549')">确定</a>
                </div>
              </li>
              <li class="bindTag_12" @mouseenter="introShowSet(2)" @mouseleave="introShowSet()">
                <div class="bindTag_13">
                  <div class="bindTag_14 ellipsis">
                    漩涡刘能
                  </div>
                  <img src="./../../assets/image/side_bar/BrandGo_Activation_GOName.png" class="bindTag_15">
                </div>
                <div class="bindTag_16">
                  <img src="./../../assets/image/side_bar/BrandGo_Activation_GOTop.png">
                </div>
                <div class="bindTag_17">
                  <img src="./../../assets/image/side_bar/BrandGo_Activation_GODown.png">
                </div>
                <div class="bindTag_22">
                  468525
                </div>
                <div class="bindTag_18 animated fadeIn" v-if="introShow === 2">
                  <div class="bindTag_19">
                    绑定该GO牌有机会获得如下奖品
                  </div>
                  <ul class="clearfix bindTag_20">
                    <li>
                      <div>
                        <img src="./../../assets/image/side_bar/BrandGo_Dog.png">
                      </div>
                      <div>
                        狗粮
                      </div>
                    </li>
                    <li>
                      <div>
                        <img src="./../../assets/image/side_bar/BrandGo_Egg.png">
                      </div>
                      <div>
                        彩蛋
                      </div>
                    </li>
                    <li>
                      <div>
                        <img src="./../../assets/image/side_bar/BrandGo_Keyboard.png">
                      </div>
                      <div>
                        键盘
                      </div>
                    </li>
                    <li>
                      <div>
                        <img src="./../../assets/image/side_bar/BrandGo_Mouse.png">
                      </div>
                      <div>
                        鼠标
                      </div>
                    </li>
                    <li>
                      <div>
                        <img src="./../../assets/image/side_bar/BrandGo_KM.png">
                      </div>
                      <div>
                        键鼠
                      </div>
                    </li>
                    <li>
                      <div>
                        <img src="./../../assets/image/side_bar/BrandGo_Team.png">
                      </div>
                      <div>
                        队服
                      </div>
                    </li>
                  </ul>
                  <a  class="bindTag_21" @click="inputTag('468525')">确定</a>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </myModal>

    <div class="sideFix_08" :class="{'sdie-bar-right':isShow }" >
      <ul class="clearfix">
        <li class="sideFix_09" @click="changeTabbarShow(false)" v-if="isShow">
          <img src="./../../assets/image/side_bar/Match_Home_RightNav_Close.png">
        </li>
        <li class="sideFix_10">
          <div class="sideFix_11">
            GO牌绑定
          </div>
          <ul class="clearfix sideFix_12">
            <li class="sideFix_13">
              <div class="sideFix_01" id="btn1"  @click="changeTabbarShow(true)" :class="isShow?'sdie-bar-follow':'sdie-bar-right'">
                <div class="sideFix_02">
                  任务 <span class="sideFix_transform"> \ </span>赛程 <img
                  src="./../../assets/image/side_bar/Match_Home_RightNav_Open.png">
                </div>
              </div>
              <img src="./../../assets/image/side_bar/RightNav_GoCard.png">
            </li>
            <li>
              <div class="sideFix_14">
                绑定狗牌赢大礼
              </div>
              <div class="sideFix_15">
                <a @click="openBindTagModal" class="sideFix_16">去绑定</a>
              </div>
            </li>
          </ul>
          <div class="sideFix_11">
            我的赛程
          </div>
          <ul class="clearfix sideFix_12" id="myNearest">
            <li v-if="matchInfo">
              <div class="sideFix_17">
                {{matchInfo.name}}
              </div>
              <div class=" sideFix_18">
                比赛正在进行中
              </div>
              <div class="sideFix_20">
                <a :href='this.GLOBAL.urlConfig+"match/matchDetail?matchId=" + matchInfo.id' class="sideFix_16">进入比赛</a>
              </div>
            </li>
            <li v-if="!matchInfo">
              <div class=" sideFix_18">
                您暂无参加的比赛
              </div>
            </li>
          </ul>
          <div class="sideFix_11">
            每日任务
          </div>
          <div id="bindTagMyTask"><span id="userId" style="display: none;">e1699dcde67247a086b253382bd32f71</span>
            <ul id="nearestTask" class="clearfix sideFix_12">
              <li>
                <div class="sideFix_17">参加三场赛事<span class="sideFix_22"></span></div>
                <div class=" sideFix_18">奖励<span class="sideFix_21">10</span><img src="./../../assets/image/side_bar/DOG.png"><span
                  class="sideFix_21">5</span><img src="./../../assets/image/side_bar/Guess_Egg.png"></div>
                <div class="sideFix_20"><a :href='this.GLOBAL.urlConfig+"stargo/mymission"' class="sideFix_16">前往</a></div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>

    <div class="sideFix_03">
      <div class="">
        <a href="http://wpa.qq.com/msgrd?v=3&amp;uin=627162069&amp;site=www.cactussoft.cn&amp;menu=yes"
           target="_blank"><img src="./../../assets/image/side_bar/RightNav_Service.png" class="sideFix_031"/></a>
      </div>
      <div class="">
        <a href="http://weibo.com/u/6280932112" target="_blank"><img
          src="./../../assets/image/side_bar/RightNav_Sina.png" class="sideFix_031"/></a>
      </div>
      <div class="sideFix_07" v-on:mouseover="enter(0)" @mouseleave="leave">
        <img src="./../../assets/image/side_bar/RightNav_Wechat.png" class="sideFix_031"/>
      </div>
      <div class="sideFix_041 animated fadeIn" v-if="showFlat">
        <div class="sideFix_05">
          赛狗电竞微信公众号
        </div>
        <div class="">
          <img src="./../../assets/image/side_bar/RightNav_Code.jpg"/>
        </div>
        <div class="sideFix_06">
        </div>
      </div>
      <div class="sideFix_071" v-on:mouseover="enter(1)" @mouseleave="leave">
        <img src="./../../assets/image/side_bar/appicon.png" class="sideFix_031"/>
      </div>
      <div class="sideFix_04 animated fadeIn" v-if="showApp">
        <div class="sideFix_05">
          赛狗APP二维码
        </div>
        <div class="">
          <img src="./../../assets/image/match/erwmRank_bd.png" width="140" height="140"/>
        </div>
        <div class="sideFix_06">
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import './../../assets/css/side.css'
  const header = {'Authorization': 'Bearer f183e9aa-577b-4a3f-9bed-27002dfe505d'}
  export default {
    data: function () {
      return {
        showFlat: false,
        showApp: false,
        isShow: false,
        introShow: '',
        tabVal: '',
        matchInfo: ''
      }
    },
    methods: {
      bindTag: function () {
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.webConfig + '/tag/follow',
          params: {
            goNum: this.tabVal
          },
          headers: this.GLOBAL.hearder
        })
          .then((response) => {
//            console.log(response)
            if (response.data.errCode === 0) {
              this.$message({
                message: '恭喜你，绑定狗牌成功',
                type: 'success'
              })
              this.$refs.childMethod.modalClose()
            } else {
              this.$message({
                showClose: true,
                message: '对不起，' + response.data.errDesc,
                type: 'error'
              })
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      inputTag: function (val) {
        this.tabVal = val
      },
      introShowSet: function (val) {
        this.introShow = val
      },
      openBindTagModal: function () {
        this.$refs.childMethod.modalShow()
      },
      changeTabbarShow: function (val) {
        this.isShow = val
      },
      enter: function () {
        if (arguments[0] === 0) {
          this.showFlat = true
        } else {
          this.showApp = true
        }
      },
      leave: function () {
        this.showFlat = false
        this.showApp = false
      },
      myMission: function () {
        //        每日签到
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.commomUrl + '/stargo/myTask/getMyTaskDayLogin',
          headers: header,
          params: {
            dayLoginState: 1,
            weekLoginState: 1
          }
        })
          .then((res) => {
//            console.log(res)
            this.dayLogin = res.data
          })
//      每日首胜
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.commomUrl + '/stargo/myTask/getMyTaskMatchWinState',
          headers: header,
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
          headers: header,
          params: {
            codeState: 1
          }
        })
          .then((res) => {
//            console.log(res.data)
            this.codeState = res.data
          })
//      每日参加比赛三次
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.commomUrl + '/stargo/myTask/getMyTaskmatchplay',
          headers: header,
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
          headers: header,
          params: {
            firstVipState: 1
          }
        })
          .then((res) => {
//            console.log(res)
            this.uploadImg = res.data
          })
        //      创建/加入战队
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.webConfig + 'myTask/getMyTaskTeamJoinorCreate',
          headers: header,
          params: {
            teamJoinorcreateState: 1
          }
        })
          .then((res) => {
//            console.log(res)
            this.createTeam = res.data
          })
        //      参加100场比赛
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.webConfig + 'stargo/myTask/getMyTaskhundredMatch',
          headers: header,
          params: {
            hundredMatchState: 1
          }
        })
          .then((res) => {
//            console.log(res)
            this.joinMatchB = res.data
          })
        //     参加10场比赛
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.webConfig + 'myTask/getMyTasktenMatch',
          headers: header,
          params: {
            tenMatchState: 1
          }
        })
          .then((res) => {
//            console.log(res)
            this.joinMatch = res.data
          })
        //     微信绑定
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.webConfig + 'myTask/getMyTaskwechatBind',
          headers: header,
          params: {
            wechatBindState: 1
          }
        })
          .then((res) => {
//            console.log(res)
            this.WX = res.data
          })
        //     战队人数至五人
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.webConfig + 'myTask/getMyTaskTeamPerson',
          headers: header,
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
          headers: header,
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
          headers: header,
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
          headers: header,
          params: {
            uploadHeadportraitState: 1
          }
        })
          .then((res) => {
//            console.log(res)
            this.firstVip = res.data
          })
      }
    },
    created: function () {
      this.$ajax({
        method: 'POST',
        url: this.GLOBAL.webConfig + '/personcenter/nearestMatch',
        headers: this.GLOBAL.hearder
      })
        .then((response) => {
//          console.log(response)
          this.matchInfo = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
</script>
