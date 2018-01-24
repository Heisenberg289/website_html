<template>
  <div>
    <myModal ref="childMethod">
      <div slot="modal-content">
        <div class="recharge-modal">
          <div class="modal-head">
            <img src="../../assets/image/personCenter/cashGold.png">
            <span>收益提现</span>
          </div>
          <div class="modal-body" v-if="!modalRuleShow">
            <span @click="modalRuleShow = !modalRuleShow" class="body-sp">查看规则</span>
            <div class="modal-bodyCont">
              <div class="modal-myMsg" style="margin-bottom: 16px;">
                <p>我的现金券：</p>
                <p>
                  <span class="myMoney">{{baseInfo.diamond}}</span>
                  <img style="vertical-align: text-top" src="../../assets/image/personCenter/cash.png">
                </p>
              </div>
              <!--<div class="modal-myMsg" style="margin-bottom: 16px;">-->
              <!--<p>当月剩余提现次数：</p>-->
              <!--<p>-->
              <!--<span>3次</span>-->
              <!--(<span style="color: #ffd100">升级会员</span><span>提升提现次数</span>)-->
              <!--</p>-->
              <!--</div>-->
              <div class="modal-myMsg">
                <p class="myMsg-label">提现数额：</p>
                <p style="position: relative;">
                  <input v-model="getMoneyNumber" type="number" placeholder="请输入提现数额">
                  <span class="icon">元</span>
                </p>
              </div>
              <div class="modal-myMsg">
                <p class="myMsg-label">支付宝帐号：</p>
                <p>
                  <input v-model="myAilPay" type="text" placeholder="请输入支付宝帐号">
                </p>
              </div>
              <div class="modal-myMsg">
                <p class="myMsg-label">手机验证码：</p>
                <p>
                  <input v-model="myCode" style="width: 162px;" type="text" placeholder="请输入验证码">
                  <button v-if="getCodeState" @click="getCode()">
                    <span>获取验证码</span>
                  </button>
                  <button v-if="!getCodeState">
                    <span>{{getCodeTime}} 秒</span>
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div class="modal-rule" v-if="modalRuleShow">
            <span @click="modalRuleShow = !modalRuleShow" class="rule-sp">
             <img src="../../assets/image/personCenter/back.png"> 返回
            </span>
            <p class="rule-title">
              <span>赛狗电竞提现规则</span>
            </p>
            <div class="rule-msg">
              <p class="msg-title msg-cont">1,提现额度：</p>
              <div class="msg-cont">
                <p>每次提现不超过钱包剩余总额度的50%，最低100元;</p>
                <p>VIP用户为剩余总额度的70%，没有最低限额；</p>
              </div>
            </div>
            <div class="rule-msg">
              <p class="msg-title msg-cont">2,提现频次：</p>
              <div class="msg-cont">
                <p>每月提现机会为2次，每个月1日0点重置；</p>
                <p>VIP用户提现机会为每月5次，每个月1日0点重置；</p>
              </div>
            </div>
            <div class="rule-msg">
              <p class="msg-title msg-cont">3,提现扣税：</p>
              <div class="msg-cont">
                <p>因比赛奖金及平台补贴均属于奖金性质，按照国家规定将代扣除20%个人所得税；</p>
                <p>如提现100元。将扣除20元个人所得税，实际到帐为80元；</p>
              </div>
            </div>
            <div class="rule-msg">
              <p class="msg-title msg-cont">4,打款时间：</p>
              <div class="msg-cont">
                <p>截止到每周五18:00前的提现申请，将由平台运营统一审核，并在周五20:00前统一打款；</p>
                <p>每周五10:00后至周六周日的提现申请，将在下一周进行审核；</p>
              </div>
            </div>
            <div class="rule-msg">
              <p class="msg-title msg-cont">5,提现账户：</p>
              <div class="msg-cont">
                <p>提现时可以填入非该提现赛狗账号绑定的支付宝帐号，但验证码会始终发送到该提现赛狗帐号绑定的手机号码；</p>
                <p>如无法获取验证码或遭遇提现异常情况，请联系客服QQ：627162069,并提供本人凭证；</p>
              </div>
            </div>
          </div>
          <div class="modal-foot">
            <button @click="getMoney()" class="commit">
              <img src="../../assets/image/personCenter/Submit.png">
              <span>确认提交</span>
            </button>
            <button @click="modalClose()" class="modal-close">取消</button>
          </div>
        </div>
      </div>
    </myModal>
    <commonPart :linkActive="1">
      <div slot="pageRight">
        <div id="myWallet">
          <p class="title">我的钱包</p>
          <p class="line"></p>
          <div id="myWallet-top">
            <p class="dogFood1">狗粮：<span class="dognumber">{{baseInfo.goldBalance}}</span><img
              src="../../assets/image/personCenter/bone.png" alt="" class="bone"><a
              :href='this.GLOBAL.urlConfig+"/personcenter/index/recharge"'>充值</a></p>
            <!--<span class="warning">(什么是狗粮？)</span>-->
            <p class="dogFood1">彩蛋：<span class="dognumber">{{baseInfo.egg}}</span><img
              src="../../assets/image/personCenter/egg.png" alt="" class="bone"><a
              :href='this.GLOBAL.urlConfig+"guess"'>兑换</a></p>
            <!--<span class="warning">(什么是彩蛋？)</span>-->
            <p class="dogFood">现金券：<span class="dognumber">{{baseInfo.diamond}}</span><img
              src="../../assets/image/personCenter/cash.png" alt="" class="bone"><a
              @click="modalOpen()">提现</a></p>
            <!--<span class="warning">(什么是现金券？)</span>-->
          </div>
          <el-tabs v-model="activeName" @tab-click="handleClick" class="walletTab">
            <el-tab-pane label="资产动态" name="first">
              <div class="asset">
                <div class="table-title">
                  <div class="f1">时间</div>
                  <div class="f2">类别</div>
                  <div class="f3" style="color:#b8babc ">获益</div>
                </div>
                <div class="table-title" v-for="item in matchList">
                  <div class="f1">{{item.createTime | formatTime}}</div>
                  <div class="f2" v-if="item.changeDesc">{{item.changeDesc}}</div>
                  <div class="f2" v-if="!item.changeDesc">----</div>
                  <div class="f3" v-if="item.journalType==0">-{{item.amount}}
                    <span v-if="item.amountType==1">现金券</span>
                    <span v-if="item.amountType==2">狗粮</span>
                    <span v-if="item.amountType==3">彩蛋</span>
                  </div>
                  <div class="f4" v-if="item.journalType==1">+{{item.amount}}
                    <span v-if="item.amountType==1">现金券</span>
                    <span v-if="item.amountType==2">狗粮</span>
                    <span v-if="item.amountType==3">彩蛋</span>
                  </div>
                </div>
              </div>
              <div class="block">
                <el-pagination
                  layout="prev, pager, next"
                  :current-page="matchCurrentPage"
                  :page-size="matchPageSize"
                  @current-change="handleCurrentChange"
                  :total="total">
                </el-pagination>
              </div>
            </el-tab-pane>
            <el-tab-pane label="提现记录" name="second">
              <div class="asset">
                <div class="table-title1">
                  <div class="f1">申请时间</div>
                  <div class="f2">提现额度（元）</div>
                  <div class="f3">状态</div>
                  <div class="f4">处理时间</div>
                </div>
                <div class="table-title1" v-for="item in matchlist2">
                  <div class="f1">{{item.applyTime | formatTime}}</div>
                  <div class="f2">{{item.moneyAmount}}</div>
                  <div class="f3" v-if="item.state==0">未处理</div>
                  <div class="f3" v-if="item.state==1" style="color:#3fdc45">已支付</div>
                  <div class="f3" v-if="item.state==2" style="color:#ff5722">已拒绝</div>
                  <div class="f4" v-if="item.state==1||item.state==2">{{item.agreeTime | formatTime}}</div>
                  <div class="f4" v-if="item.state==0">无</div>
                </div>
              </div>
              <div class="block">
                <el-pagination
                  layout="prev, pager, next"
                  :current-page="matchCurrentPage2"
                  :page-size="matchPageSize"
                  @current-change="handleCurrentChange2"
                  :total="total2">
                </el-pagination>
              </div>
            </el-tab-pane>

          </el-tabs>


        </div>
      </div>
    </commonPart>
  </div>
</template>
<script>
  import './../../assets/css/myWallet.css'
  import './../../assets/css/element.css'

  export default {
    data: function () {
      return {
        modalshow: false,
        modalRuleShow: false,
        activeName: 'first',
        matchList: [],
        matchlist2: [],
        total: null,
        total2: null,
        matchCurrentPage: 1,
        matchCurrentPage2: 1,
        matchPageSize: 13,
        getMoneyNumber: '',
        myAilPay: '',
        myCode: '',
        getCodeState: true,
        getCodeTime: 60,
        auditState: false
      }
    },
    methods: {
      handleClick (tab, event) {
//        console.log(tab, event);
      },
      handleSizeChange: function (size) {
        this.matchPageSize = size
      },
      modalClose () {
        this.$refs.childMethod.modalClose()
      },
      modalOpen () {
        this.getMoneyNumber = ''
        this.myAilPay = ''
        this.myCode = ''
        if (this.auditState) {
          this.$refs.childMethod.modalShow()
        } else {
          this.$message.error('根据相关法律法规，申请提现需先进行实名认证，请进行个人实名信息完善！')
          var _this = this
          setTimeout(function () {
            _this.$router.push({path: '/mySetting', query: {table: 2}})
          }, 3000)
        }
      },
      handleCurrentChange: function (currentPage) {
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.webConfig + 'personcenter/listWalletJournal',
          params: {
            pageSize: this.matchPageSize,
            pageNum: currentPage
          },
          headers: this.GLOBAL.hearder
        })
          .then((res) => {
            this.total = res.data.total
            this.matchList = res.data.list
          })
      },
      handleCurrentChange2: function (currentPage) {
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.webConfig + 'personcenter/queryWithdraw',
          params: {
            pageSize: this.matchPageSize,
            pageNum: currentPage
          },
          headers: this.GLOBAL.hearder
        })
          .then((res) => {
            this.total2 = res.data.total
            this.matchList2 = res.data.list
          })
      },
//      提现
      getMoney () {
        if (this.modalRuleShow) {
          this.modalRuleShow = false
        } else {
          if (!this.getMoneyNumber) {
            this.$message.error('请输入提款数额！')
            return false
          } else if (this.getMoneyNumber === '0') {
            this.$message.error('提现金额不能为0！')
            return false
          } else if (!this.myAilPay) {
            this.$message.error('请输入支付宝帐号！')
            return false
          } else if (!this.myCode) {
            this.$message.error('请输入手机验证码！')
            return false
          } else {
            this.$ajax({
              method: 'POST',
              url: this.GLOBAL.webConfig + 'personcenter/withDraw',
              headers: this.GLOBAL.hearder,
              params: {
                account: this.myAilPay,
                moneyAmount: this.getMoneyNumber,
                verCode: this.myCode
              }
            })
              .then((res) => {
                console.log(res)
                if (res.data.errCode === 0) {
                  this.$message.success('提现成功！')
                  this.modalClose()
                } else {
                  this.$message.error(res.data.errDesc)
                  this.modalClose()
                }
              })
          }
        }
      },
//      获取验证码
      getCode () {
        this.getCodeState = false
        var _this = this
        if (_this.getCodeTime <= 0) {
          return
        } else {
          let second = setInterval(function () {
            if (_this.getCodeTime > 0) {
              _this.getCodeTime -= 1
            } else {
              _this.getCodeTime = 0
              _this.getCodeState = true
              clearInterval(second)
            }
            console.log(this.getCodeTime)
          }, 1000)
        }
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.webConfig + 'mobile/sendVerCodeToWithDraw',
          headers: this.GLOBAL.hearder,
          params: {
            mobile: this.$store.state.userInfo.mobileNo
          }
        })
          .then((res) => {
            console.log(res)
            if (res.data.errCode === 0) {
              this.$message.success('验证码发送成功！')
            } else {
              this.$message.error(res.data.errDesc)
            }
          })
      }
    },
    created: function () {
      //      查询认证信息
      this.$ajax({
        method: 'POST',
        url: this.GLOBAL.commomUrl + '/subsidy/subsidy/querySubsidyBaseInfo',
        headers: this.GLOBAL.hearder
      })
        .then((res) => {
          console.log(res)
          if (res.data.subsidyType === 0) {
            if (res.data.tSubsidyPerson.auditState === 1) {
              this.auditState = true
            }
          } else {
            if (res.data.tSubsidyCompany.auditState === 1) {
              this.auditState = true
            }
          }
        })
//      获取提现记录
      this.$ajax({
        method: 'POST',
        url: this.GLOBAL.webConfig + 'personcenter/queryWithdraw',
        params: {
          pageSize: this.matchPageSize,
          pageNum: this.matchCurrentPage2
        },
        headers: this.GLOBAL.hearder
      })
        .then((response) => {
          this.matchlist2 = response.data.list
          this.total2 = response.data.total
        })
        .catch(function (error) {
          console.log(error)
        })
      //  获取资产动态记录
      this.$ajax({
        method: 'POST',
        url: this.GLOBAL.webConfig + 'personcenter/listWalletJournal',
        params: {
          pageSize: this.matchPageSize,
          pageNum: this.matchCurrentPage
        },
        headers: this.GLOBAL.hearder
      })
        .then((response) => {
          this.matchList = response.data.list
          this.total = response.data.total
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    computed: {
      baseInfo () {
        return this.$store.state.baseInfo
      }
    },
    filters: {
      formatTime (value) {
//        return new Date(parseInt(('/Date(' + value + ')/').substr(6, 13))).toLocaleDateString()
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
        return year + '-' + month + '-' + date + ' ' + hour + ':' + minute
      }
    }
  }
</script>
<style scoped="">

</style>
