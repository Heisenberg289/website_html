<template>
  <div>
    <commonPart :linkActive="6">
      <div slot="pageRight">
        <div id="myRecord">
          <p class="title">我的记录</p>
          <p class="line"></p>
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="比赛记录" name="first">
              <div class="matchRecord">
                <div class="matchTable">
                  <ul class="match-title clear">
                    <li>赛事名称</li>
                    <li>开始时间</li>
                    <li>战绩</li>
                    <li></li>
                  </ul>
                  <div class="box-content">
                    <div v-for="(item, index) in matchList">
                      <ul class="match-cont">
                        <li class="bold">
                          <img v-if="item.gameCode === 1" src="../../assets/image/personCenter/LeagueofLegends.png">
                          <img v-if="item.gameCode === 2" src="../../assets/image/personCenter/SWXF.png">
                          <img style="margin-left: -5px;margin-right: 5px;" v-if="item.gameCode === 3"
                               src="../../assets/image/personCenter/glory.png">
                          <img v-if="item.gameCode === 4" src="../../assets/image/personCenter/HearthStone.png">
                          <img v-if="item.gameCode === 5" src="../../assets/image/personCenter/dota2.png">
                          <span>{{item.name}}</span>
                        </li>
                        <li>
                          {{item.startTime}}
                        </li>
                        <li>
                          <template v-if="item.state === 7 || item.state === 5">
                            <p v-if="item.achievement" class="bold">
                              <img src="../../assets/image/personCenter/goldencup.png">
                              <span>{{item.achievement}}</span>
                            </p>
                            <p v-else>
                              <span>未进入八强</span>
                            </p>
                          </template>
                          <template v-else>
                            <template v-if="item.state === 6 || item.state === 1">
                              <p><span>比赛进行中</span></p>
                            </template>
                            <template v-else>
                              <p><span>比赛暂未开始</span></p>
                            </template>
                          </template>
                        </li>
                        <li class="matchShareBox">
                          <!--<a v-if="item.achievement !== null" href="###" @click="matchShare(index)" title="分享到微信朋友圈">炫耀一下</a>-->
                          <div v-show="index === matchI" class="matchShare">
                            <div class="code">
                              <qrcode :value="shareMatch" :options="{ size: 90}"></qrcode>
                            </div>
                            <div class="text">
                              <p>打开微信“扫一扫”</p>
                              <p>打开网页后点击屏幕</p>
                              <p>右上角“分享”按钮</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <p class="line"></p>
                    </div>
                  </div>
                </div>
                <div class="footer">
                  <el-pagination
                    layout="prev, pager, next"
                    :current-page="matchCurrentPage"
                    :page-size="matchPageSize"
                    @current-change="handleCurrentChange"
                    :total="matchTotal">
                  </el-pagination>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="竞猜记录" name="second">
              <div class="guessRecord">
                <div class="guessTable">
                  <ul class="clear guess-title">
                    <li>赛事名称/对阵队伍</li>
                    <li>投注(彩蛋)</li>
                    <li>状态</li>
                    <li>收益(彩蛋)</li>
                  </ul>
                  <div class="box-content">
                    <ul class="guess-cont" v-for="(item, index) in guessList">
                      <li class="bold">
                        <div>
                          <img v-if="item.gameCode === '1'" src="../../assets/image/personCenter/LeagueofLegends.png">
                          <img v-if="item.gameCode === '2'" src="../../assets/image/personCenter/SWXF.png">
                          <img v-if="item.gameCode === '3'" src="../../assets/image/personCenter/glory.png">
                          <img v-if="item.gameCode === '4'" src="../../assets/image/personCenter/HearthStone.png">
                          <img v-if="item.gameCode === '5'" src="../../assets/image/personCenter/dota2.png">
                          <span>{{item.guessTitle}}</span>
                        </div>
                        <div style="margin-top: 10px;">
                          <img class="red" :src='item.guessTeamAlogo'>
                          <span class="ellipsisS">{{item.guessTeamAname}}</span>
                          <span style="font-size: 12px;">V.S</span>
                          <span class="ellipsisS">{{item.guessTeamBname}}</span>
                          <img class="blue" :src="item.guessTeamBlogo">
                        </div>
                      </li>
                      <li class="bold battle">
                      </li>
                      <li>
                        <div>
                          <p class="redTeam" style="line-height: 50px;" v-if="item.guessResult === 'A队获胜'">
                            {{item.guessTeamAname}}</p>
                          <p class="blueTeam" style="line-height: 50px;" v-if="item.guessResult === 'B队获胜'">
                            {{item.guessTeamBname}}</p>
                          <p class="bold">{{item.guessBetMoney}}</p>
                        </div>
                        <!--<p class="redTeam"><span>Fire L</span>-->
                        <!--<span>9980</span></p>-->
                      </li>
                      <li style="line-height: 75px">
                        <span v-if="item.guessBetFinal !== null" class="over">已结算</span>
                        <span v-if="item.guessBetFinal === null" class="going">进行中</span>
                      </li>
                      <li style="line-height: 75px">
                        <!--<span class="win">+9999</span>-->
                        <span v-if="!item.guessEarnMoney" class="lose">0</span>
                        <span v-else class="win">+{{item.guessEarnMoney}}</span>
                      </li>
                      <li style="line-height: 75px;position: relative">
                        <!--<a href="###" @click="guessShare(index)">炫耀一下</a>-->
                        <div v-show="index === guessI" class="matchShare">
                          <div class="code">
                            <qrcode :value="guessMatch" :options="{ size: 90}"></qrcode>
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
                </div>
                <div class="footer">
                  <el-pagination
                    layout="prev, pager, next"
                    :current-page="guessCurrentPage"
                    :page-size="guessPageSize"
                    @current-change="handleGuessChange"
                    :total='guessTotal'>
                  </el-pagination>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="交易记录" name="third">
              <div class="dealRecord">
                <div class="dealTable">
                  <ul class="deal-title clear">
                    <li>商品名称</li>
                    <li>单价</li>
                    <li>数量</li>
                    <li>时间</li>
                  </ul>
                  <div class="box-content">
                    <ul class="deal-cont" v-for="(item, index) in exchangeList">
                      <li class="bold">{{item.modityName}}</li>
                      <li>
                        <span>{{item.price}}</span>
                        <span v-if="item.ccy ===1">现金</span>
                        <span v-if="item.ccy ===2">狗粮</span>
                        <span v-if="item.ccy ===3">彩蛋</span>
                      </li>
                      <li>{{item.number}}个</li>
                      <li>{{item.createTime | formatTime}}</li>
                      <li class="exchangeShareBox">
                        <!--<a href="###" @click="shareEx(index)">炫耀一下</a>-->
                        <div v-show="index === exchangeI" class="exchangeShare">
                          <div class="code">
                            <qrcode :value="shareExchange" :options="{ size: 90}"></qrcode>
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
                </div>
                <div class="footer">
                  <el-pagination
                    layout="prev, pager, next"
                    :current-page="exchangeCurrentPage"
                    :page-size="exchangePageSize"
                    @current-change="handleExchangeChange"
                    :total='exchangeTotal'>
                  </el-pagination>
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
  import './../../assets/css/myRecord.css'
  import './../../assets/css/element.css'
  //  const header = {'Authorization': 'Bearer f183e9aa-577b-4a3f-9bed-27002dfe505d'}
  const shareUrl = 'http://118.178.133.45'
  export default {
    data: function () {
      return {
        activeName: 'first',
        matchList: [],
        guessList: [],
        recordList: [],
        matchCurrentPage: 1,
        matchPageSize: 10,
        matchTotal: 0,
        exchangeList: [],
        exchangeTotal: 0,
        guessCurrentPage: 1,
        guessPageSize: 6,
        guessTotal: 0,
        exchangeCurrentPage: 1,
        exchangePageSize: 10,
        shareExchange: '',
        exchangeI: -1,
        shareMatch: '',
        matchI: -1,
        guessI: -1,
        guessMatch: ''
      }
    },
    methods: {
//        分享交易
      shareEx (index) {
        if (this.exchangeI === index) {
          this.exchangeI = -1
        } else {
          this.exchangeI = index
        }
        this.shareExchange = shareUrl + '/share/show/show.html?id=' + this.exchangeList[index].id
        console.log(this.shareExchange)
      },
//      分享赛事
      matchShare (index) {
        console.log(this.matchList[index])
        if (this.matchI === index) {
          this.matchI = -1
        } else {
          this.matchI = index
        }
        this.shareMatch = shareUrl + '/share/showRecord/showRecord.html?matchId=' + this.matchList[index].id
      },
//      分享竞猜
      guessShare (index) {
        if (this.guessI === index) {
          this.guessI = -1
        } else {
          this.guessI = index
        }
        this.guessMatch = shareUrl + '/share/guess/guess.html?detailId=' + this.guessList[index].id
        console.log(this.guessMatch)
      },
      handleClick (tab, event) {
//        console.log(tab, event);
      },
      handleSizeChange: function (size) {
        this.matchPageSize = size
      },
      handleCurrentChange: function (currentPage) {
        this.matchCurrentPage = currentPage
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.commomUrl + '/stargo/personcenter/joined',
          headers: this.GLOBAL.hearder,
          params: {
            pageSize: this.matchPageSize,
            pageNum: this.matchCurrentPage
          }
        })
          .then((res) => {
            this.matchTotal = res.data.total
            this.matchList = res.data.list
            console.log(this.matchList)
          })
      },
      handleExchangeChange: function (currentPage) {
        this.exchangeCurrentPage = currentPage
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.commomUrl + '/stargo/personcenter/queryExchangeLog',
          headers: this.GLOBAL.hearder,
          params: {
            pageSize: this.exchangePageSize,
            pageNum: this.exchangeCurrentPage,
            timeFlag: ''
          }
        })
          .then((res) => {
            this.exchangeTotal = res.data.total
            this.exchangeList = res.data.list
          })
      },
      handleGuessChange: function (currentPage) {
        this.guessCurrentPage = currentPage
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.commomUrl + '/stargo/guess/listMyGuessBet',
          headers: this.GLOBAL.hearder,
          params: {
            pageNum: this.guessCurrentPage,
            pageSize: this.guessPageSize
          }
        })
          .then((res) => {
            this.guessList = res.data.list
            console.log(res.data)
          })
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
    },
    created: function () {
//        比赛记录
      this.$ajax({
        method: 'POST',
        url: this.GLOBAL.commomUrl + '/stargo/personcenter/joined',
        headers: this.GLOBAL.hearder,
        params: {
          pageSize: this.matchPageSize,
          pageNum: this.matchCurrentPage
        }
      })
        .then((res) => {
          this.matchTotal = res.data.total
          this.matchList = res.data.list
        })
//      交易记录
      this.$ajax({
        method: 'POST',
        url: this.GLOBAL.commomUrl + '/stargo/personcenter/queryExchangeLog',
        headers: this.GLOBAL.hearder,
        params: {
          pageNum: 1,
          pageSize: 10,
          timeFlag: ''
        }
      })
        .then((res) => {
          console.log(res.data)
          this.exchangeList = res.data.list
          this.exchangeTotal = res.data.total
        })
//      竞猜记录
      this.$ajax({
        method: 'POST',
        url: this.GLOBAL.commomUrl + '/stargo/guess/listMyGuessBet',
        headers: this.GLOBAL.hearder,
        params: {
          pageNum: 1,
          pageSize: 6
        }
      })
        .then((res) => {
          this.guessList = res.data.list
          this.guessTotal = res.data.total
          console.log(res.data)
        })
    }
  }
</script>
<style scoped="">
  .box-content {
    height: 700px;
  }
</style>
