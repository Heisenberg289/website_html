<template>
    <div class="matchRank_01 contentStyle" :style="setStyle" >
      <ul class="clearfix matchRank_02">
        <li><img src="./../../assets/image/match/Rank.png" class="matchRank_03"></li>
        <li class="matchRank_04">
          赛季名人堂
        </li>
      </ul>
      <template v-for="(item, index) in matchRankList">
      <ul class="clearfix newHome_16" style="position: relative;">
        <li>
          <img :src="item.headPortrait" class="newHome_17">
        </li>
        <li class="ellipsis newHome_19">
        {{item.nickname}}
      </li>
        <li class="fr">
          <ul class="newHome_18 clearfix">
            <li class="newHome_181" v-if='index == 0'>{{item.winPoint}}</li>
            <li class="newHome_181" v-if='index == 1' style="color: #dfdfdf;">{{item.winPoint}}</li>
            <li class="newHome_181" v-if='index == 2' style="color: #d3823a">{{item.winPoint}}</li>
            <li class="newHome_181" v-if='index != 0&&index != 1&&index != 2' style="color: #b8babc;font-weight: normal;">{{item.winPoint}}</li>
            <li v-if='index == 0||index == 1||index == 2'>
              <div style="position: relative;">
                <template  v-if="index == 0">
                  <img src="./../../assets/image/match/Golden-Cup.png" />
                </template>
                <template  v-if="index == 1">
                  <img src="./../../assets/image/match/Silver-Cup.png" />
                </template>
                <template  v-if="index == 2">
                  <img src="./../../assets/image/match/Copper-Cup.png" />
                </template>
                <div class="newHome_20">
                  {{index+1}}
                </div>
              </div>
            </li>
            <li style="height: 60px;" v-if='index != 0&&index != 1&&index != 2'>
              <div class="newHome_22"style="margin-left: 6px">
                {{index+1}}
              </div>
            </li>
          </ul>
        </li>
        <a class="hoverFloat"  @click="rankGo(item.matchingId)"></a>
      </ul>
      </template>
    </div>
</template>
<script>
  export default {
    data: function () {
      return {
      }
    },
    methods: {
      rankGo: function (id) {
        window.location.href = this.GLOBAL.urlConfig + 'matching/detail/' + id + '?index=1'
      }
    },
    props: ['setStyle', 'matchRankList']
  }
</script>
<style scoped>
  .contentStyle{border-image: url(./../../assets/image/match/border_02.png) 3 3 stretch;-webkit-border-image: url(./../../assets/image/match/border_02.png) 3 3 stretch;-o-border-image: url(./../../assets/image/match/border_02.png) 3 3 stretch;border-image-width: 2px;background-color: rgba(20,23,31,0.7);}
  .matchRank_01{width: 320px;height: 816px;}
  .matchRank_02{height: 72px;border-bottom: 1px solid #17171b;}
  .matchRank_03{    margin: -20px 19px 0 10px;}
  .matchRank_04{padding-top: 19px;font-size: 16px;color: #fff;}
  .newHome_16{height: 60px;color: #fff;font-size: 16px;box-sizing: border-box;width: 100%;padding: 0 20px;border-bottom: 1px solid #17171b;}
  .newHome_16:hover{background-color:#2b2b30}
  .newHome_16 li{line-height: 60px;}
  .newHome_17{width: 30px;height: 30px;border-radius: 100%;margin-right: 15px;}
  .newHome_18{font-size: 24px;font-family: arial;font-weight: bold;color: #ffd100;}
  .newHome_181{margin-right: 20px;}
  .newHome_19{width: 40%;}
  .newHome_20{position: absolute;color: #ffffff;font-size: 16px;top: 0;width: 100%;text-align: center;}
  .newHome_22{font-size: 16px;color: #ffffff;width: 24px;height: 24px;border: 1px solid #ffffff;border-radius: 100%;line-height: 24px;text-align: center;
    position: relative;top: 50%; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%);transform: translateY(-50%);}
</style>
