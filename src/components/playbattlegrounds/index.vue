<template>
  <div id="chiji">
    <my-head locationUrl="match"></my-head>
    <my-side></my-side>
    <myModal ref="childMethod" @modalClose="modalClose">
      <div slot="modal-content">
        <div class="chiji_08">
          <img src="./../../assets/image/playbattlegrounds/Teammate.png"/>
          <span>队员选择</span>
        </div>
        <div class="chiji_09">
          <ul class="clearfix chiji_12">
            <li @click="moveLeft" onselectstart="return false" style="cursor: pointer;">
              <img src="./../../assets/image/playbattlegrounds/arrowR.png" />
            </li>
            <li>
              <ul class="chiji_13 clearfix" :style=" {left: positionIndex*168 + 'px'} ">
                <li v-for="(item,index) in teamMemberList">
                  <div class="chiji_16">
                    <div class="chiji_18" @click="chooseMember(index, item.id)" :class="{chiji_19:chooseList.indexOf(index) != -1}">
                      <img :src="item.userLogo" class="chiji_17"/>
                      <img src="./../../assets/image/playbattlegrounds/Captain.png" class="chiji_23" v-if="index === 0"/>
                      <div class="chiji_22 ellipsis">{{item.name}}</div>
                    </div>
                    <div class="chiji_20 ellipsis">
                      <div>绝地求生昵称:
                      </div>
                      <div><input class="chiji_21" placeholder="请输入绝地求生昵称" v-model="item.pubgNickname" @blur="saveGameName(item.pubgNickname, item.id, item.roleId)"/></div>
                      <div>击杀记录：<span style="color: #fff;">{{item.killNum}}人</span></div>
                    </div>
                  </div>
                </li>
              </ul>
              <p class="chiji_14">请选择本次比赛参赛的队员，未绑定绝地求生大逃杀昵称的选手无法被选择，可在本页面直接补全昵称</p>
              <p class="chiji_15">请如实填写游戏昵称，如昵称有误，会无法获取比赛结果，后果由选手自负</p>
            </li>
            <li @click="moveRight" onselectstart="return false" style="cursor: pointer;">
              <img src="./../../assets/image/playbattlegrounds/arrowR.png"/>
            </li>
          </ul>
        </div>
        <div class="chiji_11 clearfix">
          <div class="chiji_10 fr" @click="ensureChooseBtn">确认选择</div>
        </div>
      </div>
    </myModal>
    <div class="chiji-banner_011" :style="{backgroundImage: 'url('+matchInfo.matchLogo+')'}">
      <div class="chiji_07" >
        <img src="./../../assets/image/playbattlegrounds/Button.png" @click="signUp" style="cursor: pointer" v-if="matchInfo.state === 1&&!hasSigned"/>
        <img src="./../../assets/image/playbattlegrounds/Buttonalready.png" v-if="matchInfo.state === 1&&hasSigned"/>
        <img src="./../../assets/image/playbattlegrounds/Buttoning.png" v-if="matchInfo.state === 2||matchInfo.state === 3||matchInfo.state === 4||matchInfo.state === 6"/>
        <img src="./../../assets/image/playbattlegrounds/Buttonnotbegin.png" v-if="matchInfo.state === 0"/>
        <img src="./../../assets/image/playbattlegrounds/Buttonover.png" v-if="matchInfo.state === 5||matchInfo.state === 7"/>
      </div>
    </div>
    <div class="chiji_01">
      <div class="chiji_27">
        <template v-if="matchInfo.state === 0|| matchInfo.state === 1">
          <ul class="clearfix chiji_24" onselectstart="return false">
            <li :class="{chiji_26:tabActive=='third'}" @click="tabClick('third')">赛事信息</li>
            <li :class="{chiji_26:tabActive=='first'}" @click="tabClick('first')">对阵情况</li>
            <li :class="{chiji_26:tabActive=='second'}" @click="tabClick('second')">排行榜</li>
          </ul>
        </template>
        <template v-else>
          <ul class="clearfix chiji_24" onselectstart="return false">
            <li :class="{chiji_26:tabActive=='first'}" @click="tabClick('first')">对阵情况</li>
            <li :class="{chiji_26:tabActive=='second'}" @click="tabClick('second')">排行榜</li>
            <li :class="{chiji_26:tabActive=='third'}" @click="tabClick('third')">赛事信息</li>
          </ul>
        </template>
      </div>
      <div class="chiji_03">
      <div class="chiji_02">
        <againstPlan v-show="tabActive=='first'" :matchId="matchId"></againstPlan>
        <match-intro v-show="tabActive=='third'" :matchInfo="matchInfo" :bonusInfo="bonusInfo"></match-intro>
        <ranking-list v-show="tabActive=='second'" :matchId="matchId"></ranking-list>
        <div class="chijiNews_07" style="margin-top: 70px;">
          <p>合作伙伴</p>
          <p class="chijiNews_08">THEY TRUST US</p>
        </div>
        <div class="chijiNews_09">
          <ul class="clearfix chijiNews_10">
            <li>
              <a href="https://weibo.com/estarwzry" class="hoverFloat"></a>
              <img src="./../../assets/image/playbattlegrounds/eSTAR.png">
            </li>
            <li>
              <a href="https://weibo.com/tbgclub" class="hoverFloat"></a>
              <img src="./../../assets/image/playbattlegrounds/SNG.png">
            </li>
            <li>
              <a href="https://weibo.com/igaming" class="hoverFloat"></a>
              <img src="./../../assets/image/playbattlegrounds/IG.png">
            </li>
            <li>
              <a href="http://www.wywk.cn/wywk " class="hoverFloat"></a>
              <img src="./../../assets/image/playbattlegrounds/WANGYU.png">
            </li>
            <li>
              <a href="http://www.youtaidu.com " class="hoverFloat"></a>
              <img src="./../../assets/image/playbattlegrounds/TAIDU.png">
            </li>
          </ul>
        </div>
        <div class="chijiNews_07">
          <p>合作媒体</p>
          <p class="chijiNews_08">MEDIA HEZUO</p>
        </div>
        <div class="chijiNews_09">
          <ul class="clearfix chijiNews_10">
            <li>
              <a href="https://www.douyu.com/ " class="hoverFloat"></a>
              <img src="./../../assets/image/playbattlegrounds/DOUYU.png"></li>
            <li>
              <a href="http://news.66esports.cn/ " class="hoverFloat"></a>
              <img src="./../../assets/image/playbattlegrounds/66.png">
            </li>
            <li>
              <a href="http://www.wysd.com/" class="hoverFloat"></a>
              <img src="./../../assets/image/playbattlegrounds/wanyou.png">
            </li>
            <li>
              <a href="http://www.wanplus.com/ " class="hoverFloat"></a>
              <img src="./../../assets/image/playbattlegrounds/wanplus.png">
            </li>
            <li>
              <a href="https://www.huomao.com/ " class="hoverFloat"></a>
              <img src="./../../assets/image/playbattlegrounds/HUOMAO.png">
            </li>
          </ul>
        </div>
      </div>
    </div>
      <my-footer :showControl="false"></my-footer>
      <!--<my-side></my-side>-->
    </div>
  </div>
</template>
<style>

</style>
<script>
import myFooter from './../common/bottom.vue'
import myHead from './../common/Head'
import mySide from './../common/side'
import againstPlan from './tab1.vue'
import rankingList from './tab2.vue'
import matchIntro from './tab3.vue'
import './../../assets/css/playbattlegrounds_index.css'
export default {
  data: function () {
    return {
      // matchId: 'd2d089e418114b008e50944b74bc8c4a',
      matchId: this.$route.query.matchId,
      bonusInfo: '',
      matchInfo: '',
      tabActive: '',
      positionIndex: 0,
      chooseList: [0],
      teamMemberList: [],
      teamMemberIDList: [],
      hasSigned: false
    }
  },
  methods: {
    saveGameName: function (name, id, userID) {
      if (!name) {
        return
      }
      this.$ajax({
        method: 'POST',
        url: this.GLOBAL.commomUrl + '/stargo/personcenter/saveOrUpdateGameRoleBindingByUserId',
        params: {
          gameCode: 6,
          gameArea: 1,
          id: userID,
          userId: id,
          gameNickname: name
        }
      })
        .then((res) => {
          // console.log(res.data)
          if (res.data.errCode === 0) {
            this.refreshMemberInfo()
          } else {
            this.$message.error(res.data.errDesc)
          }
        })
    },
    refreshMemberInfo: function () {
      this.$ajax({
        method: 'POST',
        url: this.GLOBAL.commomUrl + '/pubg/team/memberList',
        headers: this.GLOBAL.hearder
      })
        .then((res) => {
          this.teamMemberList = res.data.members
        })
    },
    modalClose: function () {
      this.teamMemberIDList = []
      this.chooseList = [0]
      this.positionIndex = 0
    },
    ensureChooseBtn: function () {
      if (this.checkGameNameIsNull()) {
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.commomUrl + '/pubg/pubg/pubgCheckAndEnroll',
          headers: this.GLOBAL.hearder,
          params: {
            matchId: this.matchId,
            memberIds: this.teamMemberIDList.join(),
            useMBM: false
          }
        })
          .then((res) => {
            // console.log(res)
            if (res.data.errCode === 0) {
              this.$message.success('报名成功')
              this.$refs.childMethod.modalClose()
              this.getHasSignedInfo()
            } else {
              this.$message.error(res.data.errDesc)
            }
          })
      }
    },
    moveLeft: function () {
      if (this.teamMemberList.length < 4) {
        return
      }
      if (this.positionIndex < 0) {
        this.positionIndex++
      } else {
        this.positionIndex = 4 - this.teamMemberList.length
      }
    },
    chooseMember: function (val, id) {
      if (val === 0) {
        return
      }
      if (this.chooseList.indexOf(val) === -1) {
        if (this.chooseList.length < 4) {
          this.chooseList.push(val)
          this.teamMemberIDList.push(id)
        } else {
          this.$message({
            message: '最多选择四名队员',
            type: 'warning'
          })
        }
      } else {
        this.chooseList.splice(this.chooseList.indexOf(val), 1)
        this.teamMemberIDList.splice(this.teamMemberIDList.indexOf(id), 1)
      }
    },
    moveRight: function () {
      if (this.teamMemberList.length < 4) {
        return
      }
      if (this.positionIndex === 4 - this.teamMemberList.length) {
        this.positionIndex = 0
      } else {
        this.positionIndex--
      }
    },
    tabClick: function (val) {
      this.tabActive = val
    },
    signUp: function () {
      if (!this.GLOBAL.hearder.Authorization) {
        this.$message.warning('请先登录')
        return
      }
      this.$ajax({
        method: 'POST',
        url: this.GLOBAL.commomUrl + '/pubg/team/memberList',
        headers: this.GLOBAL.hearder
      })
        .then((res) => {
          // console.log(res.data)
          if (res.data.errCode === 0) {
            this.teamMemberList = res.data.members
            this.teamMemberIDList.push(res.data.members[0].id)
            this.$refs.childMethod.modalShow()
          } else {
            this.$message.error(res.data.errDesc)
          }
        })
    },
    checkGameNameIsNull: function () {
      let flag = true
      this.chooseList.map((item) => {
        if (!this.teamMemberList[item].pubgNickname) {
          this.$message({
            message: '队员游戏名称不能为空值',
            type: 'warning'
          })
          flag = false
          return false
        }
      })
      return flag
    },
    getMatchIntro: function () {
      this.$ajax({
        method: 'POST',
        url: this.GLOBAL.commomUrl + '/match/matchDetail',
        params: {
          matchId: this.matchId
        }
      })
        .then((res) => {
          this.matchInfo = res.data
          if (this.matchInfo.state === 0 || this.matchInfo.state === 1) {
            this.tabActive = 'third'
          } else {
            this.tabActive = 'first'
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    getBonus: function () {
      this.$ajax({
        method: 'POST',
        url: this.GLOBAL.commomUrl + '/match/bonusSets',
        params: {
          id: this.matchId
        }
      })
        .then((res) => {
          this.bonusInfo = res.data
          // console.log(res, '奖金信息')
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    getHasSignedInfo: function () {
      if (!this.GLOBAL.hearder.Authorization) {
        return
      }
      this.$ajax({
        method: 'POST',
        url: this.GLOBAL.commomUrl + '/pubg/pubg/queryHasEnroll',
        headers: this.GLOBAL.hearder,
        params: {
          matchId: this.matchId
        }
      })
        .then((res) => {
          // console.log(res, '个人信息')
          if (res.data.errCode === 0) {
            this.hasSigned = res.data.hasEnroll
          }
        })
    }
  },
  components: {
    myFooter,
    myHead,
    mySide,
    againstPlan,
    matchIntro,
    rankingList
  },
  created: function () {
    this.getMatchIntro()
    this.getHasSignedInfo()
    this.getBonus()
  },
  computed: {
  }
}
</script>
