<template>
  <div>
    <myModal ref="childMethod">
      <div slot="modal-content">
        <div class="modal fade model-pay" id="myModal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
             aria-hidden="true">

          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title" id="myModalLabel1">
                <img src="../../assets/image/personCenter/RMB.png">
                <span>奖金支付</span>
                <p class="fr">
                  资产余额:
                  <span>{{diamond}} <img v-if="diamond!==null" src="../../assets/image/personCenter/Cash1.png"></span>
                  <span>{{goldBalance}} <img v-if="goldBalance!==null"
                                             src="../../assets/image/personCenter/bone.png"></span>
                </p>
              </h4>
            </div>
            <p class="line" style="margin: 0"></p>
            <div class="modal-body">
              <div class="payMoney">
                <p class="body-title">奖金总额：
                  <span>{{matchCash}}</span><img v-if="matchCash!==null"
                                                 src="../../assets/image/personCenter/Cash1.png">
                  <span>{{matchBouns}}</span><img v-if="matchBouns!==null"
                                                  src="../../assets/image/personCenter/bone.png">
                  <span class="rule" style="cursor: pointer" @click="ruleMsg = !ruleMsg">退款规则</span>
                </p>
                <div class="body-p" v-if="!ruleMsg">
                  <p>请选择您的支付方式，可以组合支付类型进行支付</p>
                  <p>
                    <span>支付金额：</span>
                    <span class="input"><img src="../../assets/image/personCenter/bone.png">
                        <input type="text" id="payaligoldBalance" v-model="payaligoldBalance"
                               :disabled="matchBouns === 0" @input="checkgoldBalance(payaligoldBalance)"></span>
                    <span>狗粮</span>
                  </p>
                  <p>
                    <span style="margin-left: 74px;" class="input">
                      <img src="../../assets/image/personCenter/Cash1.png">
                      <input type="number" id="payalidiamond" v-model="payalidiamond" :disabled="matchCash ===0"
                             @input="checkdiamond(payalidiamond)">
                    </span>
                    <span>现金券</span>
                  </p>
                  <p>
                    您还需支付：<span>{{matchCash - payalidiamond + (matchBouns - payaligoldBalance) / 100}}现金（{{matchCash - payalidiamond}}现金+{{matchBouns - payaligoldBalance}}狗粮充值）</span>
                  </p>
                </div>
              </div>
              <div v-if="ruleMsg" class="ruleMsg">
                <p class="ruleMsg-title">
                  <span>赛狗电竞奖金退回规则</span>
                  <span class="rule" @click="ruleMsg = !ruleMsg">< 返回</span>
                </p>
                <div class="clearfix">
                  <p>1、比赛未正常开始：（如报名人数不足）</p>
                  <p>全额退款，原路返回；</p>
                </div>
                <div class="clearfix">
                  <p>2、比赛正常开始,但有选手弃权：</p>
                  <p>
                    <span>弃权的参赛选手不予发放奖金，同时不继承上一轮名次，弃权即丧失本场比赛的所有名次及奖励资格;</span><br/>
                    <span>退还奖金时，退还的是未发放的奖金，正常参加比赛的选手奖金正常发放；</span>
                  </p>
                </div>
                <div class="clearfix">
                  <p>3、奖金实发扣款：</p>
                  <p>
                    <span>赛狗钱包 - 支付宝付款；</span><br/>
                    <span>例如：创建了1000元的比赛，其中支付宝付款500 赛狗钱包现金券500，实发了600奖励，优先消耗钱包的500现金券和支付宝的100现金；</span><br/>
                    <span>退回奖金的时候，会退回400现金到支付宝;</span>
                  </p>
                </div>
              </div>
            </div>
            <p class="line" style="margin: 0"></p>
            <div class="modal-footer">
              <button class="btn-pay" type="button" @click="payAli()">
                <img src="../../assets/image/personCenter/Alipay.png">
                <span>支付宝支付</span>
              </button>
              <button class="btn-close close-model" @click="modalClose()">取消</button>
            </div>
          </div>
        </div>
      </div>
    </myModal>
    <myModal ref="childMethod2">
      <div slot="modal-content">
        <div class="modal fade model-pay" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
             aria-hidden="true">
          <div class="modal-dialog" style="width: 800px">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title" id="myModalLabel2">
                  <img src="../../assets/image/personCenter/RMB.png">
                  <span>奖金支付</span>
                  <p class="fr">
                    资产余额:
                    <span>{{diamond}} <img v-if="diamond!=null" src="../../assets/image/personCenter/Cash1.png"></span>
                    <span>{{goldBalance}} <img v-if="goldBalance!=null" src="../../assets/image/personCenter/bone.png"></span>
                  </p>
                </h4>
              </div>
              <p class="line" style="margin: 0"></p>
              <div class="modal-body" style="height: 240px;">
                <div class="payMoney">
                  <p class="body-title" v-if="!ruleMsg2">奖金总额：
                    <span>{{matchCash}}</span><img v-if="matchCash!=null"
                                                   src="../../assets/image/personCenter/Cash1.png">
                    <span>{{matchBouns}}</span><img v-if="matchBouns!=null"
                                                    src="../../assets/image/personCenter/bone.png">
                    <span class="rule" style="cursor: pointer" @click="ruleMsg2 = !ruleMsg2">退款规则</span>
                  </p>
                  <div class="body-p" v-if="!ruleMsg2">
                    <p>请选择您的支付方式，可以组合支付类型进行支付</p>
                    <p>
                      <span>支付金额：</span>
                      <span class="input"><img src="../../assets/image/personCenter/bone.png"><input type="number"
                                                                                                     id="paynoaligoldBalance"
                                                                                                     v-model="paynoaligoldBalance"
                                                                                                     disabled></span>
                      <span>狗粮</span>
                    </p>
                    <p style="margin-bottom: 42px;">
                            <span style="margin-left: 74px;" class="input"><img
                              src="../../assets/image/personCenter/Cash1.png"><input type="number" id="paynoalidiamond"
                                                                                     v-model="paynoalidiamond" disabled></span>
                      <span>现金券</span>
                    </p>
                  </div>
                </div>
                <div v-if="ruleMsg2" class="ruleMsg">
                  <p class="ruleMsg-title">
                    <span>赛狗电竞奖金退回规则</span>
                    <span class="rule" @click="ruleMsg2 = !ruleMsg2">< 返回</span>
                  </p>
                  <div class="clearfix">
                    <p>1、比赛未正常开始：（如报名人数不足）</p>
                    <p>全额退款，原路返回；</p>
                  </div>
                  <div class="clearfix">
                    <p>2、比赛正常开始,但有选手弃权：</p>
                    <p>
                      <span>弃权的参赛选手不予发放奖金，同时不继承上一轮名次，弃权即丧失本场比赛的所有名次及奖励资格;</span><br/>
                      <span>退还奖金时，退还的是未发放的奖金，正常参加比赛的选手奖金正常发放；</span>
                    </p>
                  </div>
                  <div class="clearfix">
                    <p>3、奖金实发扣款：</p>
                    <p>
                      <span>赛狗钱包 - 支付宝付款；</span><br/>
                      <span>例如：创建了1000元的比赛，其中支付宝付款500 赛狗钱包现金券500，实发了600奖励，优先消耗钱包的500现金券和支付宝的100现金；</span><br/>
                      <span>退回奖金的时候，会退回400现金到支付宝;</span>
                    </p>
                  </div>

                </div>
              </div>
              <p class="line" style="margin: 0"></p>
              <div class="modal-footer">
                <button class="btn-pay" type="button" @click="paynoAli()">
                  <span>支付</span>
                </button>
                <button class="btn-close close-model" @click="modalClose2()">取消</button>
              </div>
            </div><!-- /.modal-content -->
          </div><!-- /.modal -->
        </div>
      </div>
    </myModal>

    <commonPart :linkActive="3">
      <div slot="pageRight">
        <div class="hrefDiv" v-html="hrefDiv"></div>
        <div id="mymatch">
          <p class="title">我的赛事 <span>个人的参赛记录，可以至我的记录中查看</span></p>
          <p class="line"></p>
          <div class="btn">
            <a :href='this.GLOBAL.urlConfig+"/html/match/createMatch.html"' class="hoverFloat"></a>
            创建比赛
          </div>
          <div style="overflow: hidden">
            <div class="matchlist">
              <div class="table-title2">
                <div class="f1">赛事名称</div>
                <div class="f2">开始时间</div>
                <div class="f3">参赛人数</div>
                <div class="f5">审核状态</div>
                <div class="f4">赛事状态</div>
              </div>
              <div style="height: 720px">
                <template v-for="(item, index) in matchList">
                  <div class="table-title3">
                    <div class="f1">
                      <div class="circle">
                        <img src="./../../assets/image/personCenter/glory.png" alt="王者荣耀" width="100%"
                             v-if="item.gameCode === 3">
                        <img src="./../../assets/image/personCenter/LeagueofLegends.png" alt="英雄联盟" width="100%"
                             v-if="item.gameCode === 1">
                        <img src="./../../assets/image/personCenter/SWXF.png" alt="守望先锋" width="100%"
                             v-if="item.gameCode === 2">
                        <img src="./../../assets/image/personCenter/HearthStone.png" alt="炉石传说" width="100%"
                             v-if="item.gameCode === 4">
                        <img src="./../../assets/image/personCenter/dota2.png" alt="dota2" width="100%"
                             v-if="item.gameCode === 5">
                      </div>
                      <div class="match-name1 ellipsis"><span :title="item.matchTitle">{{item.matchTitle}}</span></div>
                      <div class="match-name2 ellipsis">赛事奖金：
                        <template v-if="item.bonus">
                          <span :title="item.bonus+'狗粮'">{{item.bonus}}狗粮</span>
                        </template>&nbsp;
                        <template v-if="item.customBonus">
                          <span :title="item.customBonus">{{item.customBonus}}</span>
                        </template>&nbsp;
                        <template v-if="item.cash">
                          <span :title="item.cash +'现金券'">{{item.cash}}现金券</span>
                        </template>&nbsp;
                      </div>
                    </div>
                    <div class="f2">{{item.startTime}}</div>
                    <div class="f3">
                      <div class="match-number1"><img src="./../../assets/image/personCenter/people.png" alt=""
                                                      width="15"
                                                      height="auto"> {{item.enrollNum}}/{{item.personMax}}
                      </div>
                      <div></div>
                    </div>
                    <div class="f5">
                      <span v-if="item.auditState === 0 && item.payState !== 0">审核中</span>
                      <span v-if="item.auditState === 2">审核被驳回</span>
                      <span style="color: #ffd100" v-if="item.auditState === 1">审核通过</span>
                      <template v-if="item.payState === 0">
                        <span style="cursor: pointer; color:# FFD100" @click="pay(item.id)">待支付</span>
                      </template>
                    </div>
                    <div class="f4"><span>
                      <template  v-if="item.auditState !== 1">
                        <span style="color: #b8babc">--</span>
                      </template>
                <template v-if="item.payState === 1 && item.auditState === 1">
                  <span v-if="item.state === 0 ">未开始</span>
                  <span v-if="item.state === 1 ">报名中</span>
                  <span v-if="item.state === 2">报名结束</span>
                  <span v-if="item.state === 3">开始签到</span>
                  <span v-if="item.state === 4 ">签到结束</span>
                  <span v-if="item.state === 5 || item.state === 7">比赛结束</span>
                  <span v-if="item.state === 6">比赛开始</span>
                </template>
              </span>
                      <a v-if="(item.state === 0 || item.state === 1 || item.state === 2) && item.payState ===1 && item.auditState ===1"
                         @click="tabOpen(index, item.id)"><img
                        src="./../../assets/image/personCenter/Edit-active.png"></a>
                      <a v-else><img
                        src="./../../assets/image/personCenter/Edit2.png"></a>
                      <a @click="matchShare(index)"><img src="./../../assets/image/personCenter/Share.png" alt=""></a>
                      <div v-show="index === matchI" class="exchangeShare">
                        <div class="code">
                          <qrcode :value="shareMatch" :options="{ size: 90}"></qrcode>
                        </div>
                        <div class="text">
                          <p>打开微信“扫一扫”</p>
                          <p>打开网页后点击屏幕</p>
                          <p>右上角“分享”按钮</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <transition name="el-zoom-in-top">
                    <div v-show="index === tabI" class="transition-box">
                      <div class="tab-control">
                        <div style="display: none" class="tab-control-cont control-title">
                          <span class="cont-icon"></span>
                          <span class="cont-title">报名开关 </span>
                          <el-switch
                            v-model="isOpen"
                            active-color="#ffd100"
                            inactive-color="#ff4949">
                          </el-switch>
                        </div>
                        <div class="tab-control-cont">
                          <span class="cont-icon"></span>
                          <span class="cont-title">报名预留</span>
                          <span>(请输入需要预留的手机号码，团队赛输入队长号码，多个号码用逗号“，”分隔)</span>
                        </div>
                        <div class="tab-text">
                          <el-input
                            type="textarea"
                            :autosize="{ minRows: 4 }"
                            placeholder="例如：11023145692，18550497929"
                            v-model="textarea">
                          </el-input>
                        </div>
                        <div class="tab-control-cont">
                          <span class="cont-icon"></span>
                          <span class="cont-title">轮次时间</span>
                          <span>(仅可修改未开始比赛的游戏时间，已经开始或者结束的游戏不可修改时间)</span>
                        </div>
                        <div class="tab-time" v-for="(item, index) in roundList">
                          <span>第{{item.roundNum}}轮：</span>
                          <el-date-picker
                            v-model="item.startTime"
                            :clearable=false
                            type="datetime"
                            @change="checkTime"
                            placeholder="选择日期时间">
                          </el-date-picker>
                        </div>
                        <button @click="commitChange(item.id,item.matchModelModel)" class="tab-commit"></button>
                      </div>
                    </div>
                  </transition>
                </template>
              </div>
            </div>
          </div>
          <div class="block">
            <el-pagination
              @current-change="handleCurrentChange"
              :page-size="pageSize"
              layout="prev, pager, next"
              :total="toatl">
            </el-pagination>
          </div>
        </div>
      </div>
    </commonPart>
  </div>
</template>
<script>
  import './../../assets/css/myMatch.css'
  import './../../assets/css/myMission.css'
  import './../../assets/css/element.css'
  //  token
  export default {
    data: function () {
      return {
        matchList: '',
        toatl: null,
        pageSize: 10,
        matchI: -1,
        shareMatch: '',
        diamond: 0,
        goldBalance: 0,
        payalidiamond: 0,
        payaligoldBalance: 0,
        matchBouns: 0,
        matchCash: 0,
        paynoaligoldBalance: '',
        paynoalidiamond: '',
        ruleMsg: false,
        ruleMsg2: false,
        hrefDiv: '',
        isOpen: true,
        textarea: '',
        tabI: -1,
        roundList: [],
        changeRound: [],
        roundTimeStr: [],
        checkNum: false,
        roundFirst: '',
        matchModelModel: ''
      }
    },
    methods: {
//        校验轮次时间
      checkTime () {
        for (let i = 0; i < this.roundList.length; i++) {
          if (i !== 0) {
            if (new Date(this.roundList[i].startTime) < new Date(this.roundList[i - 1].startTime)) {
              this.$message.error('轮次时间不能小于上一轮次时间')
              this.roundList[i].startTime = ''
            }
          } else {
            if (new Date(this.roundList[0].startTime) < this.roundFirst) {
              this.$message.error('开始时间不能小于比赛开始时间')
              this.roundList[0].startTime = this.roundFirst
            }
          }
        }
      },
      tabOpen (index, matchId) {
        if (this.tabI === index) {
          this.tabI = -1
        } else {
          this.tabI = index
          this.roundTimeStr = []
          this.textarea = ''
          this.getRoundTime(matchId)
          this.checkEnroll(matchId)
        }
      },
//      获取报名开关
      checkEnroll (matchId) {
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.commomUrl + '/sys/matchmanage/getMatchEnrollState',
          headers: this.GLOBAL.hearder,
          params: {
            matchId: matchId
          }
        })
          .then((res) => {
            console.log(res.data)
            this.isOpen = res.data
          })
      },
//      报名开关
      enrollBtn (matchId) {
        this.$ajax({
          method: 'POST',
//          url: this.GLOBAL.commomUrl + '/sys/matchmanage/modifyMatchEnrollState',
          url: this.GLOBAL.commomUrl + '/sys/matchmanage/modifyMatchEnrollState',
          headers: this.GLOBAL.hearder,
          params: {
            enrollState: this.isOpen,
            matchId: matchId
          }
        })
          .then((res) => {
            if (res.data.errCode !== 0) {
              this.$message.error('报名开关修改失败！')
            }
          })
      },
//      个人报名位置预留
      saveEnrollPerson (matchId) {
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.commomUrl + '/sys/matchenroll/saveenrollPerson',
          headers: this.GLOBAL.hearder,
          params: {
            matchId: matchId,
            mobileNoStr: this.textarea
          }
        })
          .then((res) => {
            console.log(res)
          })
      },
//      战队报名预留
      saveEnrollTeam (matchId) {
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.commomUrl + '/sys/matchenroll/saveenrollTeam',
          headers: this.GLOBAL.hearder,
          params: {
            matchId: matchId,
            mobileNoStr: this.textarea
          }
        })
          .then((res) => {
            console.log(res)
          })
      },
//    校验用户手机号是否存在
      chickNum (arr, matchId) {
        let arrNum = arr
        arrNum = arrNum.split(',')
        console.log(arrNum)
        if (arrNum.length === 0) {
          arrNum = arrNum.split('，')
        }
        if (arrNum.length === 0) {
          arrNum = arrNum.split(',')
        }
        for (let i = 0; i < arrNum.length; i++) {
          let pattern = /(^(([0]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$)|(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/
          console.log(pattern.test(arrNum[i]))
          if (pattern.test(arrNum[i])) {
            this.$ajax({
              method: 'POST',
              url: this.GLOBAL.commomUrl + '/sys/matchenroll/chenkenrollTeam',
              params: {
                mobileNo: arrNum[i],
                matchId: matchId
              }
            })
              .then((res) => {
                console.log(res)
                if (res.data.errCode !== 0) {
                  this.$message.error(arrNum[i] + res.data.errDesc)
                  this.checkNum = false
                } else {
                  this.checkNum = true
                  this.changeRoundTime(matchId)
                  if (this.matchModelModel !== 1) {
                    this.saveEnrollTeam(matchId)
                  } else {
                    this.saveEnrollPerson(matchId)
                  }
                }
              })
          } else {
            this.$message.error('手机号' + arrNum[i] + '格式错误!')
            this.checkNum = false
          }
        }
      },
//      date类型转换
      formatDateTime (date) {
        let y = date.getFullYear()
        let m = date.getMonth() + 1
        m = m < 10 ? ('0' + m) : m
        let d = date.getDate()
        d = d < 10 ? ('0' + d) : d
        let h = date.getHours()
        let minute = date.getMinutes()
        minute = minute < 10 ? ('0' + minute) : minute
        return y + '-' + m + '-' + d + ' ' + h + ':' + minute
      },
      //      修改轮次时间
      changeRoundTime (matchId) {
        console.log(this.formatDateTime(this.changeRound[0].startTime))
        for (let i = 0; i < this.changeRound.length; i++) {
          if (this.changeRound[i].startTime === '') {
            let roundTime = {
              roundNum: i + 1,
              startTime: ''
            }
            this.roundTimeStr.push(roundTime)
          } else {
            let roundTime = {
              roundNum: i + 1,
              startTime: this.formatDateTime(this.changeRound[i].startTime)
            }
            this.roundTimeStr.push(roundTime)
          }
          console.log(this.roundTimeStr)
        }
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.commomUrl + '/sys/matchmanage/modifyMatchRoundTime',
          headers: this.GLOBAL.hearder,
          params: {
            matchId: matchId,
            roundTimeStr: JSON.stringify(this.roundTimeStr)
          }
        })
          .then((res) => {
            console.log(res)
            if (res.data.errCode === 0) {
              this.tabI = -1
              this.$message.success('修改成功！')
            }
          })
      },
//      提交更改
      commitChange (matchId, matchModelModel) {
        this.enrollBtn(matchId)
        this.matchModelModel = matchModelModel
        console.log(this.roundTimeStr)
        if (this.textarea !== '') {
          this.chickNum(this.textarea, matchId)
          console.log(this.checkNum)
        } else {
          this.changeRoundTime(matchId)
        }
      },
//      获取轮次时间
      getRoundTime (matchId) {
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.commomUrl + '/sys/matchmanage/getMatchRoundTime',
          headers: this.GLOBAL.hearder,
          params: {
            matchId: matchId
          }
        })
          .then((res) => {
            console.log(res)
            this.roundList = res.data
            this.changeRound = res.data
            this.roundFirst = new Date(this.roundList[0].startTime)
            for (let i = 0; i < this.roundList.length; i++) {
              if (!this.roundList[i].startTime) {
                this.roundList[i].startTime = ''
              } else {
                this.roundList[i].startTime = new Date(this.roundList[i].startTime)
              }
//              this.roundTimeStr.push(this.roundList[i].startTime)
            }
          })
      },
      modalClose () {
        this.$refs.childMethod.modalClose()
      },
      modalOpen () {
        this.$refs.childMethod.modalShow()
      },
      modalClose2 () {
        this.$refs.childMethod2.modalClose()
      },
      modalOpen2 () {
        this.$refs.childMethod2.modalShow()
      },
//      分享赛事
      matchShare (index) {
        if (this.matchI === index) {
          this.matchI = -1
        } else {
          this.matchI = index
        }
        this.shareMatch = 'http://h5.cccgaming.com/matchDetail?id=' + this.matchList[index].id
//        this.shareMatch = 'http://h5.cccgaming.com/matchDetail?id=0001cafeac394f0a828711e8b15283e8'
      },
      handleCurrentChange: function (currentPage) {
        this.getMatchInfo(currentPage)
      },
      getMatchInfo: function (val) {
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.webConfig + '/personcenter/queryMyCreateMatch',
          headers: this.GLOBAL.hearder,
          params: {
            pageSize: this.pageSize,
            pageNum: val
          }
        })
          .then((response) => {
            console.log(response)
            this.toatl = response.data.total
            this.matchList = response.data.list
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      checkgoldBalance (payaligoldBalance) {
        this.payaligoldBalance = payaligoldBalance > this.goldBalance ? this.goldBalance : (this.payaligoldBalance < 0 ? 0 : this.payaligoldBalance)
      },
      checkdiamond (payalidiamond) {
        this.payalidiamond = payalidiamond > this.diamond ? this.diamond : (payalidiamond < 0 ? 0 : payalidiamond)
      },
      // 查询赛事奖金和个人账户金额
      pay: function (matchId) {
        this.matchId = matchId
        console.log(this.matchId)
        console.log(this.GLOBAL.hearder)
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.commomUrl + '/sys/matchcreate/matchEasyCreateBouns',
//          async: true,
          headers: this.GLOBAL.hearder,
          params: {
            matchId: matchId
          }
        })
          .then((res) => {
            console.log(res)
            this.matchId = matchId
            this.matchBouns = res.data.matchBouns === null ? 0 : res.data.matchBouns
            this.matchCash = res.data.matchCash === null ? 0 : res.data.matchCash
            this.diamond = res.data.diamond === null ? 0 : res.data.diamond
            this.goldBalance = res.data.goldBalance === null ? 0 : res.data.goldBalance
            //  如果账户余额够支付，则不需要支付宝
            if ((this.matchBouns === null || this.matchBouns <= this.goldBalance) && (this.matchCash === null || this.matchCash <= this.diamond)) {
              this.paynoaligoldBalance = this.matchBouns
              this.paynoalidiamond = this.matchCash
              this.modalOpen2()
            } else {
              this.modalOpen()
            }
          })
      },
      paynoAli: function () {
        if (this.matchBouns !== null && this.paynoaligoldBalance < this.matchBouns) {
          this.$message.error('狗粮不足以支付奖金！')
          return
        }
        if (this.matchCash !== null && this.paynoalidiamond < this.matchCash) {
          this.$message.error('金券不足以支付奖金！')
          return
        }
        console.log(this.matchId)
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.commomUrl + '/sys/matchcreate/matchPaynoalipay',
          headers: this.GLOBAL.hearder,
          params: {
            matchId: this.matchId,
            diamond: this.paynoalidiamond,
            goldBalance: this.paynoaligoldBalance
          }
        })
          .then((res) => {
//            window.location.href = locationUrl + "/html/match/createSuccess.html?matchId=" + this.matchId
            if (res.data.errCode === 0) {
              this.$message.success('支付成功！')
              this.modalClose2()
            }
          })
      },

      payAli: function () {
        console.log(this.matchId)
        let matchReward = this.matchCash - this.payalidiamond + (this.matchBouns - this.payaligoldBalance) / 100
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.commomUrl + '/sys/payment/aliPay',
//          async: true,
          headers: this.GLOBAL.hearder,
          params: {
            matchId: this.matchId,
            diamond: this.payalidiamond,
            goldBalance: this.payaligoldBalance,
            matchReward: matchReward
          }
        })
          .then((res) => {
            console.log(res)
//            $('#hrefDiv').html(res.data)
            this.hrefDiv = res.data
            this.$nextTick(function () {
              document.forms['alipaysubmit'].submit()
            })
          })
      }
    },
    created: function () {
      this.getMatchInfo()
    }
  }
</script>
