<template>
  <div id="tab2" class="border-style animated fadeIn">
    <ul class="clearfix tab2_01">
      <li class="">
        <div class="tab1_04">
          <span class="tab1_05"></span>团队吃鸡榜
        </div>
        <ul class="tab2_02 clearfix">
          <li>排名</li>
          <li>队伍</li>
          <li>吃鸡数</li>
        </ul>
        <div class="tab2_07 innerbox">
        <template v-for="(item,index) in teamChiJi">
        <ul class="clearfix tab2_03">
          <li :class="{tab2_05:item.rownu!==1&&item.rownu!==2&&item.rownu!==3}">
            <img src="./../../assets/image/playbattlegrounds/Golden.png" v-if="item.rownu === 1"/>
            <img src="./../../assets/image/playbattlegrounds/silver.png" v-if="item.rownu === 2"/>
            <img src="./../../assets/image/playbattlegrounds/copper.png" v-if="item.rownu === 3"/>
            第<span class="tab2_04">{{item.rownu}}</span>名</li>
          <li class="ellipsis" :title="item.teamName">
            <img :src="item.teamLogo" class="tab1_16"/>
            {{item.teamName}}
          </li>
          <li>{{item.championNum}}</li>
          <li @click="getMore(index,0)" onselectstart="return false">
            <template v-if="list1.indexOf(index) == -1">展开</template>
            <template v-if="list1.indexOf(index) !== -1">收起</template>
            <img src="./../../assets/image/playbattlegrounds/arrow.png" class="tab1_21" :class="{tab1_22:list1.indexOf(index) !== -1}"/>
          </li>
        </ul>
          <template v-for="item in item.gamers" v-if="list1.indexOf(index) !== -1">
        <ul class="ellipsis tab2_06 animated fadeIn">
          <li class="ellipsis" :title="item.nickname">
            <img :src="item.headPortrait" class="tab1_16"/>
            {{item.nickname}}
          </li>
          <li>{{item.championNum}}</li>
          <!--<li>-->
            <!--<router-link to="">-->
            <!--查看详情-->
            <!--</router-link>-->
          <!--</li>-->
        </ul>
          </template>
        </template>
        </div>
      </li>
      <li class="innerbox">
        <div class="tab1_04">
          <span class="tab1_05"></span>团队击杀榜
        </div>
        <ul class="tab2_02 clearfix">
          <li>排名</li>
          <li>队伍</li>
          <li>击杀数</li>
        </ul>
        <div class="tab2_07 innerbox">
        <template v-for="(item,index) in teamJiSha">
          <ul class="clearfix tab2_03">
            <li :class="{tab2_05:item.rownu!==3&&item.rownu!==1&&item.rownu!==2}">
              <img src="./../../assets/image/playbattlegrounds/Golden.png" v-if="item.rownu === 1"/>
              <img src="./../../assets/image/playbattlegrounds/silver.png" v-if="item.rownu === 2"/>
              <img src="./../../assets/image/playbattlegrounds/copper.png" v-if="item.rownu === 3"/>
              第<span class="tab2_04">{{item.rownu}}</span>名</li>
            <li class="ellipsis" :title="item.teamName">
              <img :src="item.teamLogo" class="tab1_16"/>
              {{item.teamName}}
            </li>
            <li>{{item.killAmount}}</li>
            <li @click="getMore(index,1)" onselectstart="return false">
              <template v-if="list2.indexOf(index) == -1">展开</template>
              <template v-if="list2.indexOf(index) !== -1">收起</template>
              <img src="./../../assets/image/playbattlegrounds/arrow.png" class="tab1_21" :class="{tab1_22:list2.indexOf(index) !== -1}"/>
            </li>
          </ul>
          <template v-for="item in item.gamers" v-if="list2.indexOf(index) !== -1">
            <ul class="ellipsis tab2_06 animated fadeIn">
              <li class="ellipsis" :title="item.nickname">
                <img :src="item.headPortrait" class="tab1_16"/>
                {{item.nickname}}
              </li>
              <li>{{item.killAmount}}</li>
              <!--<li>-->
                <!--<router-link to="">-->
                  <!--查看详情-->
                <!--</router-link>-->
              <!--</li>-->
            </ul>
          </template>
        </template>
        </div>
      </li>
      <li class="innerbox">
        <div class="tab1_04">
          <span class="tab1_05"></span>个人击杀榜
        </div>
        <ul class="tab2_02 clearfix">
          <li>排名</li>
          <li>队员</li>
          <li>击杀数</li>
        </ul>
        <div class="tab2_07 innerbox">
        <template v-for="(item,index) in personJiSha">
          <ul class="clearfix tab2_03">
            <li :class="{tab2_05:item.rownu!==3&&item.rownu!==1&&item.rownu!==2}">
              <img src="./../../assets/image/playbattlegrounds/Golden.png" v-if="item.rownu === 1"/>
              <img src="./../../assets/image/playbattlegrounds/silver.png" v-if="item.rownu === 2"/>
              <img src="./../../assets/image/playbattlegrounds/copper.png" v-if="item.rownu === 3"/>
              第<span class="tab2_04">{{item.rownu}}</span>名</li>
            <li class="ellipsis" :title="item.nickname">
              <img :src="item.headPortrait" class="tab1_16"/>
              {{item.nickname}}
            </li>
            <li style="padding-left: 20px;">{{item.killAmount}}</li>
            <li @click="getMore(index,2)" onselectstart="return false" v-if="0">
              <template v-if="list3.indexOf(index) == -1">展开</template>
              <template v-if="list3.indexOf(index) !== -1">收起</template>
              <img src="./../../assets/image/playbattlegrounds/arrow.png" class="tab1_21" :class="{tab1_22:list3.indexOf(index) !== -1}"/>
            </li>
          </ul>
        </template>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  import './../../assets/css/playbattlegrounds_index.css'
  import './../../assets/css/element.css'
  export default {
    data () {
      return {
        activeName: 'first',
        CurrentPage: 1,
        PageSize: null,
        total: null,
        activeList: [],
        list1: [],
        list2: [],
        list3: [],
        teamChiJi: [],
        teamJiSha: [],
        personJiSha: []
      }
    },
    methods: {
      getMore: function (index, val) {
        if (val === 0) {
          if (this.list1.indexOf(index) === -1) {
            this.list1.push(index)
          } else {
            this.list1.splice(this.list1.indexOf(index), 1)
          }
        }
        if (val === 1) {
          if (this.list2.indexOf(index) === -1) {
            this.list2.push(index)
          } else {
            this.list2.splice(this.list2.indexOf(index), 1)
          }
        }
        if (val === 2) {
          if (this.list3.indexOf(index) === -1) {
            this.list3.push(index)
          } else {
            this.list3.splice(this.list3.indexOf(index), 1)
          }
        }
      },
      getChiJiInfo: function (order) {
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.commomUrl + 'pubg/pubg/queryPubgTeamRanking',
          params: {
            matchId: this.matchId,
            order: order,
            pageSize: 999
          }
        })
          .then((res) => {
            if (order === 1) {
              this.teamChiJi = res.data.list
            } else if (order === 2) {
              this.teamJiSha = res.data.list
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      getpersonJiSha: function () {
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.commomUrl + '/pubg/pubg/queryGamerRanking',
          params: {
            matchId: this.matchId,
            pageSize: 999
          }
        })
          .then((res) => {
            this.personJiSha = res.data.list
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    },
    created: function () {
      this.getChiJiInfo(1)
      this.getChiJiInfo(2)
      this.getpersonJiSha()
    },
    props: ['matchId']
  }
</script>
<style scoped="">

</style>
