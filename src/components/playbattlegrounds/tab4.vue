<template>
  <div id="tab4">
    <ul class="clearfix tab4_01">
      <li>
        <div class="tab1_04">
          <span class="tab1_05"></span>赛事详情
        </div>
        <div class="innerbox tab4_13">
        <template v-for="item in againstList">
        <div class="tab4_02">
          <div class="tab4_03">
            <div class="tab4_04">
              <p>{{item.startTime}}</p>
              <p>
                <span class="tab4_07">
                  <span class="tab4_05">{{item.leftGroupAliax}}</span>组
                </span>
                <span class="tab4_06">v.s</span>
                <span>
                  <span class="tab4_05">{{item.rightGroupAliax}}</span>组
                </span>
              </p>
              <p v-if="item.state === 2">已结束</p>
              <p v-if="item.state === 0">未开始</p>
              <p v-if="item.state === 1">进行中</p>
            </div>
          </div>
          <div class="tab4_08" v-if="item.winTeamInfo">
            <div class="tab4_09">
              <div class="tab4_10">
                <p>Winner</p>
                <div class="tab4_12">
                  <p>
                    <img src="./../../assets/image/playbattlegrounds/cock.png"/>
                  </p>
                  <p>
                    <img :src="item.winTeamInfo.teamLogo" class="tab4_11"/>
                  </p>
                </div>
                <p class="ellipsis">{{item.winTeamInfo.teamName}}</p>
              </div>
            </div>
          </div>
        </div>
        </template>
        </div>
      </li>
      <li>
        <div class="tab1_04">
          <span class="tab1_05"></span>团队积分表
        </div>
        <el-tabs v-model="activeName">
          <el-tab-pane label="总积分" name="0"></el-tab-pane>
          <template v-for="(item, index) in groupNum">
            <template v-if="index === 0">
              <el-tab-pane label="A组" :name="(index+1).toString()"></el-tab-pane>
            </template>
            <template v-if="index === 1">
              <el-tab-pane label="B组" :name="(index+1).toString()"></el-tab-pane>
            </template>
            <template v-if="index === 2">
              <el-tab-pane label="C组" :name="(index+1).toString()"></el-tab-pane>
            </template>
            <template v-if="index === 3">
              <el-tab-pane label="D组" :name="(index+1).toString()"></el-tab-pane>
            </template>
          </template>
        </el-tabs>
        <ul class="clearfix tab4_14">
          <li>排名</li>
          <li class="tab4_15">小组</li>
          <li>队伍</li>
          <li class="tab4_19">第一轮</li>
          <li class="tab4_19 tab4_20">第二轮</li>
          <li>总积分</li>
        </ul>
        <div class="tab4_16 innerbox">
          <template v-for="(item, index) in againstPaiMingList">
            <ul class="clearfix tab4_17">
              <li :class="{tab4_18:item.rownu!==3&&item.rownu!==1&&item.rownu!==2}">
                <img src="./../../assets/image/playbattlegrounds/Golden.png" v-if="item.rownu == 1"/>
                <img src="./../../assets/image/playbattlegrounds/silver.png" v-if="item.rownu === 2"/>
                <img src="./../../assets/image/playbattlegrounds/copper.png" v-if="item.rownu === 3"/>
                第<span class="tab2_04">{{item.rownu}}</span>名
              </li>
              <li style="width: 9%;padding-left: 5px;">{{item.groupAliax}}</li>
              <li style="width: 18%;" class="ellipsis" :title="item.teamName">
                <img :src="item.teamLogo" class="tab1_16"/>{{item.teamName}}
              </li>
              <li class="tab4_19">
                <template v-if="item.points[0]">
                  {{item.points[0].point}}
                </template>
                <template v-if="!item.points[0]">
                  暂无
                </template>
              </li>
              <li class="tab4_19 tab4_20">
                <template v-if="item.points[1]">
                  {{item.points[1].point}}
                </template>
                <template v-if="!item.points[1]">
                  暂无
                </template>
              </li>
              <li style="width: 9%;" >
                <template v-if="!item.totalPoint">
                  暂无
                </template>
                <template v-if="item.totalPoint">
                  {{item.totalPoint}}
                </template>
              </li>
              <li style="width: 9%;" onselectstart="return false" @click="getMore(item.rownu)">
                <template v-if="showList.indexOf(item.rownu) == -1">
                  展开
                </template>
                <template v-if="showList.indexOf(item.rownu) !== -1">
                  收起
                </template>
                <img src="./../../assets/image/playbattlegrounds/arrow.png" class="tab1_21" :class="{tab1_22:showList.indexOf(item.rownu) !== -1}" />
              </li>
            </ul>
            <template v-if="showList.indexOf(item.rownu) !== -1">
            <ul class="clearfix tab1_14 animated fadeIn" >
              <template v-for="item in item.gamers">
                <li class="tab1_15">
                  <div class="clearfix tab1_19" style="width: 80%;">
                    <div class="tab1_18 ellipsis">
                      <img :src="item.headPortrait" class="tab1_16"/>
                      {{item.nickname}}
                    </div>
                    <p class="tab1_17">
                      总击杀:{{item.killAmount}}人
                      <span class="fr">场均击杀:{{item.avgKill}}人</span>
                    </p>
                    <!--<a class="tab1_18 fr">查看详情</a>-->
                  </div>
                </li>
              </template>
            </ul>
            </template>
          </template>
        </div>
        <div style="margin-top: 20px;">
          <el-pagination
            layout="prev, pager, next"
            :current-page.sync ="CurrentPage"
            :page-size="PageSize"
            @current-change="handleCurrentChange"
            :total="total">
          </el-pagination>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  import './../../assets/css/playbattlegrounds_index.css'
  export default {
    data () {
      return {
        showList: [],
        activeName: '0',
        CurrentPage: 1,
        PageSize: 10,
        total: null,
        againstList: [],
        againstPaiMingList: [],
        groupNumTemp: ''
      }
    },
    methods: {
      handleCurrentChange: function (page) {
        if (this.activeName === '0') {
          this.getMatchPaiMingInfo(this.matchId, 2, this.stageNum, this.PageSize, page)
        } else {
          this.getMatchFenzuPaiMingInfo(this.matchId, this.groupNumTemp, this.stageNum, this.PageSize, page)
        }
      },
      getMore: function (val) {
        if (this.showList.indexOf(val) === -1) {
          this.showList.push(val)
        } else {
          this.showList.splice(this.showList.indexOf(val), 1)
        }
      },
      getMatchListInfo: function (matchId, order, roundNum, pageSize, pageNum) {
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.commomUrl + 'pubg/pubg/queryAgainstByStage',
          params: {
            matchId: matchId,
            order: order,
            stageNum: roundNum,
            pageSize: pageSize,
            pageNum: pageNum
          }
        })
          .then((res) => {
            if (res.data.errCode === 0) {
              this.againstList = res.data.against
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      getMatchPaiMingInfo: function (matchId, order, roundNum, pageSize, pageNum) {
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.commomUrl + 'pubg/pubg/queryTeamRankByStageNumAndMatchId',
          params: {
            matchId: matchId,
            order: order,
            stageNum: roundNum,
            pageSize: pageSize,
            pageNum: pageNum
          }
        })
          .then((res) => {
            this.againstPaiMingList = res.data.list
            this.total = res.data.total
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      getMatchFenzuPaiMingInfo: function (matchId, groupNum, roundNum, pageSize, pageNum) {
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.commomUrl + 'pubg/pubg/queryTeamGroupRanking',
          params: {
            matchId: matchId,
            groupNum: groupNum,
            stageNum: roundNum,
            pageSize: pageSize,
            pageNum: pageNum
          }
        })
          .then((res) => {
            // console.log(res, '分组信息')
            this.againstPaiMingList = res.data.list
            this.total = res.data.total
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      init: function () {
        this.CurrentPage = 1
        this.showList = []
      }
    },
    watch: {
      activeName (curVal, oldVal) {
        this.init()
        if (curVal !== '0') {
          this.groupNumTemp = curVal
          return this.getMatchFenzuPaiMingInfo(this.matchId, curVal, this.stageNum, 10, 1)
        } else {
          return this.getMatchPaiMingInfo(this.matchId, 2, this.stageNum, this.PageSize, 1)
        }
      }
    },
    created: function () {
      this.getMatchListInfo(this.matchId, 2, this.stageNum, 99, 1)
      this.getMatchPaiMingInfo(this.matchId, 2, this.stageNum, this.PageSize, 1)
    },
    props: ['groupNum', 'stageNum', 'matchId'],
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
        return year + '-' + month + '-' + date + ' ' + hour + ':' + minute
      }
    }
  }
</script>
<style>

</style>
