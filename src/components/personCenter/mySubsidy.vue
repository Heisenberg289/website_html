<template>
  <div>
    <myModal ref="childMethod">
      <div slot="modal-content">
        <div class="shareModal">
          <p>打开微信扫一扫</p>
          <p>点击右上角分享，分享到朋友圈</p>
          <div class="code">
            <qrcode :value="matchShare" :options="{ size: 90}"></qrcode>
          </div>
        </div>
      </div>
    </myModal>
    <commonPart :linkActive="4">
      <div slot="pageRight">
        <div id="mySubsidy">
          <div id="app">
            <p class="title">我的补贴</p>
            <p class="line"></p>
            <div v-if="isSuccess" id="success">
              <div class="container">
                <div class="success">
                  <div class="cont">
                    <div class=successMsg>
                      <div id="box">
                        <div id="main" style="width: 550px;height: 300px;"></div>
                      </div>
                      <div class="msg">
                        <div class="msgUsed">
                          <p>已用补贴</p>
                          <p>￥{{userMoney.acquire}}</p>
                        </div>
                        <p class="line"></p>
                        <div class="msgHave">
                          <p>剩余补贴</p>
                          <p>￥{{userMoney.balance}}</p>
                        </div>
                      </div>
                    </div>
                    <p>恭喜！您已成功获得平台的举办比赛补贴</p>
                    <div class="money clearfix">
                      <div class="fl">
                        <p>￥<span>{{userMoney.singleSubsidy}}</span></p>
                        <p>单场补贴</p>
                      </div>
                      <div class="fl">
                        <p><span style="color: #3dc6ff">￥</span><span>{{userMoney.balance}}</span></p>
                        <p>补贴余额</p>
                      </div>
                      <div class="fl">
                        <p><span style="color: #ff5722">￥</span><span>{{userMoney.acquire}}</span></p>
                        <p>已用补贴</p>
                      </div>
                      <div class="fl">
                        <p>￥<span>{{userMoney.total}}</span></p>
                        <p>补贴总额</p>
                      </div>
                    </div>
                    <div class="footer">
                      <div class="share">
                        <button class="share-btn" @click="shareMatch()">分享给好友</button>
                        <a :href='this.GLOBAL.urlConfig+"/html/match/createMatch.html"'>
                          <button class="create">创建比赛</button>
                        </a>
                      </div>
                      <p>现在分享还将获得额外100元补贴额度</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="isWait" id="wait">
              <div class="container fail">
                <div class="cont">
                  <p class="pic">
                    <img src="../../assets/image/subsidy_state/Process.png">
                  </p>
                  <p>您的申请已提交</p>
                  <p>客服会在2个工作日内完成审核</p>
                  <p>
                    <a :href='this.GLOBAL.urlConfig+"/match"'>
                      <button>返回首页</button>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div v-if="isFail" id="fail">
              <div class="container fail">
                <div class="cont">
                  <p class="pic">
                    <img src="../../assets/image/subsidy_state/Reject.png">
                  </p>
                  <p>您提交的审核已被驳回</p>
                  <p>原因：{{auditReason}}</p>
                  <p>
                    <a :href='this.GLOBAL.urlConfig+"/html/match/subsidy.html"'>
                      <button>重新提交</button>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div v-if="isHasnt" id="hasnt">
              <p>您还未申请补贴</p>
              <a :href='this.GLOBAL.urlConfig+"/html/match/subsidy.html"'>申请补贴</a>
            </div>
          </div>
          <div class="reCord" v-if="isSuccess">
            <p class="title">创建比赛记录</p>
            <div class="record-table">
              <ul class="clear record-title">
                <li>赛事名称</li>
                <li>开始时间</li>
                <li>获得补贴(现金券)</li>
                <li>赛事状态</li>
              </ul>
              <ul class="record-msg" v-for="(item, index) in matchList">
                <li>
                  <img v-if="item.gameCode === 1" src="../../assets/image/personCenter/LeagueofLegends.png">
                  <img v-if="item.gameCode === 2" src="../../assets/image/personCenter/SWXF.png">
                  <img v-if="item.gameCode === 3" src="../../assets/image/personCenter/glory.png">
                  <img v-if="item.gameCode === 4" src="../../assets/image/personCenter/HearthStone.png">
                  <img v-if="item.gameCode === 5" src="../../assets/image/personCenter/dota2.png">
                </li>
                <li>
                  <p class="matchName ellipsisS">{{item.matchTitle}}</p>
                  <p class="matchPrize">奖金：<span v-if="item.cash !== null">{{item.cash}}现金券</span>
                    <span v-if="item.bonus !== null">{{item.bonus}}狗粮</span>
                    <span v-if="item.customBonus !== null">{{item.customBonus}}</span>
                    <span v-if="item.bonus === null && item.customBonus === null && item.cash === null">无</span>
                  </p>
                </li>
                <li>
                  <p>{{item.startTime}}</p>
                </li>
                <li>
                  <span class="add" v-if="item.num !== null">{{item.num}}</span>
                  <span v-else>无</span>
                </li>
                <!--<li class="wait">+8300</li>-->
                <li>
                  <template v-if="item.state ===7 || item.state ===5">
                    <template>已结束</template>
                  </template>
                  <template
                    v-if="item.state === 0 || item.state === 1 ||item.state === 2 ||item.state === 3 ||item.state === 4">
                    未开始
                  </template>
                  <template v-if="item.state === 6">
                    进行中
                  </template>
                </li>
                <li>
                  <template v-if="item.state ===7">
                    <template v-if="item.auditState === null ">
                      <a href="###" title="申请补贴" @click="submitSubsidy(item.id)">申请补贴</a>
                    </template>
                    <template v-if="item.auditState ===0">等待审核</template>
                    <template v-if="item.auditState ===1">审核通过</template>
                    <template v-if="item.auditState ===2">
                      <span style="color: #ff5722">补贴被拒</span>
                    </template>
                  </template>
                </li>
                <li>
                  <a @click="share(index)"><img class="shareImg" title="分享"
                                                src="../../assets/image/personCenter/Share.png"></a>
                  <div v-show="index === matchI" class="exchangeShare">
                    <div class="code">
                      <qrcode :value="shareUrl" :options="{ size: 90}"></qrcode>
                    </div>
                    <div class="text">
                      <p>打开微信“扫一扫”</p>
                      <p>打开网页后点击屏幕</p>
                      <p>右上角“分享”按钮</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="footer">
              <el-pagination
                layout="prev, pager, next"
                :current-page="matchCurrentPage"
                :page-size="matchPageSize"
                @current-change="myMatchChange"
                :total='myMatch'>
              </el-pagination>
            </div>
          </div>
        </div>
      </div>
    </commonPart>
  </div>
</template>
<script>
  import './../../assets/css/subsidy.css'
  import './../../assets/css/element.css'
  import echarts from 'echarts'
  const h5Url = 'http://h5.cccgaming.com/applyshare?money='
  export default {
    data: function () {
      return {
        isSuccess: false,
        isFail: false,
        isWait: false,
        subsidyId: '',
        userMoney: '',
        activeName: 'first',
        matchList: [],
        myMatch: 0,
        matchPageSize: 3,
        matchCurrentPage: 1,
        auditReason: '',
        modalshow: false,
        matchShare: '',
        isHasnt: false,
        matchI: -1,
        shareUrl: ''
      }
    },
    methods: {
//      分享赛事
      shareMatch () {
        this.modalOpen()
        this.matchShare = this.GLOBAL.commomUrl + '/subsidy/subsidy/shareSubsidy?userId=' + this.userMoney.userId + '&url=' + encodeURI(h5Url)
//        this.matchShare = encodeURI(h5Url) + this.userMoney.total
      },
      share (index) {
        if (this.matchI === index) {
          this.matchI = -1
        } else {
          this.matchI = index
        }
        this.shareUrl = 'http://h5.cccgaming.com/matchDetail?id=' + this.matchList[index].id
//        this.shareMatch = 'http://h5.cccgaming.com/matchDetail?id=0001cafeac394f0a828711e8b15283e8'
      },
      modalClose () {
        this.$refs.childMethod.modalClose()
      },
      modalOpen () {
        this.$refs.childMethod.modalShow()
      },
      SubsidyUser: function () {
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.commomUrl + '/subsidy/subsidy/querySubsidyUser',
          headers: this.GLOBAL.hearder
        })
          .then((res) => {
            console.log(res)
            this.userMoney = res.data
          })
      },
      handleClick (tab, event) {
//        console.log(tab, event);
      },
      //    分页查询
      handleSizeChange: function (size) {
        this.matchPageSize = size
      },
      myMatchChange: function (currentPage) {
        this.matchCurrentPage = currentPage
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.commomUrl + '/subsidy/subsidy/querySubsidyMatchLog',
          headers: this.GLOBAL.hearder,
          params: {
            pageSize: this.matchPageSize,
            pageNum: this.matchCurrentPage
          }
        })
          .then((res) => {
            this.myMatch = res.data.total
            this.matchList = res.data.list
          })
      },
      submitSubsidy (matchId) {
        console.log(matchId)
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.commomUrl + '/subsidy/subsidy/submitSubsidy',
          headers: this.GLOBAL.hearder,
          params: {
            matchId: matchId
          }
        })
          .then((res) => {
            console.log(res)
            if (res.data.errCode === 0) {
              this.$message.success('申请成功！')
              console.log(this.matchCurrentPage)
              this.myMatchChange(this.matchCurrentPage)
            }
          })
          .catch(() => {
            this.$message.error('服务器异常！')
          })
      }
    },
    created: function () {
      this.$ajax({
        method: 'POST',
        url: this.GLOBAL.commomUrl + '/subsidy/subsidy/queryHasSaveInfo',
        headers: this.GLOBAL.hearder
      })
        .then((res) => {
          console.log(res.data)
          if (res.data.auditState === 0 && res.data.hasFrom) {
            this.isWait = true
          } else if (res.data.auditState === 1) {
            this.isSuccess = true
            this.SubsidyUser()
          } else if (res.data.auditState === 2) {
            this.isFail = true
            this.auditReason = res.data.auditReason
          } else if (res.data.auditState === 0 && !res.data.hasFrom) {
            this.isHasnt = true
          }
        })
      this.$ajax({
        method: 'POST',
        url: this.GLOBAL.commomUrl + '/subsidy/subsidy/querySubsidyMatchLog',
        headers: this.GLOBAL.hearder,
        params: {
          pageNum: this.matchCurrentPage,
          pageSize: this.matchPageSize
        }
      })
        .then((res) => {
          console.log(res.data)
          this.matchList = res.data.list
          this.myMatch = res.data.total
        })
    },
    updated: function () {
      if (this.isSuccess) {
        let myChart = echarts.init(document.getElementById('main'))
        // 指定图表的配置项和数据
        let option = {
          series: [
            {
              name: '我的补贴',
              type: 'pie',
              radius: ['50%', '55%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: [
                {value: this.userMoney.total - this.userMoney.acquire, name: '剩余补贴'},
                {value: this.userMoney.acquire, name: '已用补贴'}
              ]
            }
          ],
          color: ['#3dc6ff', '#ff5722']
        }
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option)
      }
    }
  }
</script>
<style scoped="">

</style>
