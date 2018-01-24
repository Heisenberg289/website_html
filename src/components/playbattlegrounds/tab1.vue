<template>
  <div id="tab1" class="border-style animated fadeIn">
    <div>
      <template>
        <ul class="clearfix tab1_03" onselectstart="return false">
          <li class="tab_active_underline" :style="{left: underLinePosition+'px'}"></li>
          <template v-for="(item, index) in roundInfo">
            <li class="tab1_01 " @click="changTabActive(index)" :class="{tab_active:activeName===index,tab_middle:index === 1,fr:index === 2}"  >
              <p>{{item.stageName}}</p>
            </li>
          </template>
        </ul>
      </template>

      <template v-for="(item,index) in roundInfo">
        <div class="animated fadeIn" v-show="activeName === index">
          <template v-if="item.stageStatus === 1">
            <template v-if="item.groupNum === 2">
              <final-rank :matchId="matchId" :stageNum="item.stageNum"></final-rank>
            </template>
            <template v-if="item.groupNum !== 2">
              <points-list :stageNum = "item.stageNum" :matchId="matchId"  :groupNum="item.groupNum"></points-list>
            </template>
          </template>
          <template v-if="item.stageStatus === 2">
            <skip></skip>
          </template>
          <template v-if="item.stageStatus === 0">
            <empty></empty>
          </template>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
  import './../../assets/css/playbattlegrounds_index.css'
  import pointsList from './tab4.vue'
  import finalRank from './tab5.vue'
  import empty from './empty'
  import skip from './skip'
  import './../../assets/css/element.css'
  export default {
    data () {
      return {
        roundInfo: [],
        activeName: 0,
        CurrentPage: 1,
        PageSize: null,
        total: null,
        activeList: [],
        againstList: []
      }
    },
    methods: {
      getMoreInfo: function (val) {
        if (this.activeList.indexOf(val) === -1) {
          this.activeList.push(val)
        } else {
          this.activeList.splice(this.activeList.indexOf(val), 1)
        }
      },
      changTabActive: function (val) {
        this.activeName = val
      },
      handleCurrentChange: function (currentPage) {
      },
      getRoundInfo: function () {
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.commomUrl + 'pubg/pubg/queryStageInfo',
          params: {
            matchId: this.matchId
          }
        })
          .then((res) => {
            this.roundInfo = res.data.list
            console.log(res, 565)
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    },
    created: function () {
      this.getRoundInfo()
    },
    components: {
      pointsList,
      finalRank,
      empty,
      skip
    },
    computed: {
      underLinePosition: function () {
        if (this.activeName === 0) {
          return '0'
        }
        if (this.activeName === 1) {
          return '501.5'
        }
        if (this.activeName === 2) {
          return '1003'
        }
      }
    },
    props: ['matchId']
  }
</script>
<style scoped="">

</style>
