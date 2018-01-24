<template>
  <div>
    <div class="tab1_04">
      <span class="tab1_05"></span>团队积分表
      <span style="position: absolute;left: 50%;transform: translateX(-50%)">{{getDate(startTime)}}</span>
    </div>
    <ul class="clearfix tab1_06" style="padding: 5px 0;">
      <li class="tab1_07 tab1_08">排名</li>
      <li>小组</li>
      <li class="tab1_07">队伍</li>
      <template v-for="(item, index) in roundNum">
        <li :style="{width: 547/roundNum + 'px'}">
          <p style="line-height: 1;margin-top: 3px;">第{{getRoundNum(index+1)}}轮</p>
          <template v-for="item2 in againstList">
            <p v-if="item2.roundNum === (index+1)" style="line-height: 1.5;">{{getTime(item2.startTime)}}</p>
          </template>
        </li>
      </template>
      <li style="margin-left: 20px">总积分</li>
      <li><br/></li>
    </ul>
    <div class="tab1_13 innerbox">
      <template v-for="(item,index) in teamList">
        <ul class="clearfix tab1_09">
          <li class="tab1_07 tab1_08">
            <div class="tab1_12">
              <img src="./../../assets/image/playbattlegrounds/Golden.png" v-if="item.rownu === 1"/>
              <img src="./../../assets/image/playbattlegrounds/silver.png" v-if="item.rownu === 2"/>
              <img src="./../../assets/image/playbattlegrounds/copper.png" v-if="item.rownu === 3"/>
            </div>
            <p class="tab1_10">第<span class="tab1_11">{{item.rownu}}</span>名</p>
          </li>
          <li class="tab1_24">
            {{item.groupAliax}}
          </li>
          <li class="tab1_07 ellipsis tab1_23" :title="item.teamName">
            <img :src="item.teamLogo" class="tab1_16"/>
            {{item.teamName}}
          </li>
          <template v-for="item1 in item.points">
            <li :style="{width: 547/item.points.length +'px'}">{{item1.point}}</li>
          </template>
          <li style="margin-left: 20px">{{item.totalPoint}}</li>
          <li class="tab1_20" @click="getMoreInfo(item.rownu)" onselectstart="return false">
            <template v-if="activeList.indexOf(item.rownu) === -1">
              展开
            </template>
            <template v-if="activeList.indexOf(item.rownu) !== -1">
              收起
            </template>
            <img src="./../../assets/image/playbattlegrounds/arrow.png" class="tab1_21" :class="{tab1_22:activeList.indexOf(item.rownu) !== -1}"/></li>
        </ul>
        <ul class="clearfix tab1_14 animated fadeIn" v-if="activeList.indexOf(item.rownu) !== -1">
          <template v-for="item in item.gamers">
            <li class="tab1_15">
              <div class="clearfix tab1_19">
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
    </div>
    <div class="block">
      <el-pagination
        layout="prev, pager, next"
        :current-page="CurrentPage"
        :page-size="PageSize"
        @current-change="handleCurrentChange"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>
<script>
  import './../../assets/css/playbattlegrounds_index.css'
  export default {
    data () {
      return {
        pageSize: 10,
        CurrentPage: 1,
        PageSize: 10,
        total: null,
        activeList: [],
        teamList: [],
        roundNum: null,
        againstList: [],
        startTime: null
      }
    },
    methods: {
      getTime: function (val) {
        if (val) {
          return val.substring(11)
        }
      },
      getDate: function (val) {
        if (val) {
          return val.substring(0, 10)
        }
      },
      getMoreInfo: function (val) {
        if (this.activeList.indexOf(val) === -1) {
          this.activeList.push(val)
        } else {
          this.activeList.splice(this.activeList.indexOf(val), 1)
        }
      },
      handleCurrentChange: function (val) {
        this.getFinalPaimingInfo(val, this.pageSize)
      },
      getFinalPaimingInfo: function (pageNum, pageSize) {
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.commomUrl + 'pubg/pubg/queryTeamRankByStageNumAndMatchId',
          params: {
            matchId: this.matchId,
            stageNum: this.stageNum,
            pageNum: pageNum,
            pageSize: pageSize
          }
        })
          .then((res) => {
            this.total = res.data.total
            this.teamList = res.data.list
            this.roundNum = res.data.list[0].points.length
          })
          .catch(function (error) {
            console.log(error)
          })
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
              this.startTime = res.data.against[0].startTime
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      getRoundNum: function (val) {
        switch (val) {
          case 1:
            return '一'
          case 2:
            return '二'
          case 3:
            return '三'
          case 4:
            return '四'
          case 5:
            return '五'
          case 6:
            return '六'
          case 7:
            return '七'
          case 8:
            return '八'
          case 9:
            return '九'
          case 10:
            return '十'
        }
      }
    },
    created: function () {
      this.getFinalPaimingInfo(1, this.pageSize)
      this.getMatchListInfo(this.matchId, 2, this.stageNum, 99, 1)
    },
    components: {
    },
    computed: {
    },
    props: ['matchId', 'stageNum']
  }
</script>
