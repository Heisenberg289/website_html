<template>
  <div>
    <div class="pagebg">
      <div class="menuleft_01">
        <ul class="clearfix menuleft_02">
          <li class="menuleft_03">
            <div class="menuleft_04">
              <div class="menuleft_06">
                <div class="menuleft_17">
                  <img src="./../../assets/image/personCenter/Golden.png" v-if="baseInfo.levelCode === 2"/>
                  <img src="./../../assets/image/personCenter/Copper.png" v-if="baseInfo.levelCode === 0"/>
                  <img src="./../../assets/image/personCenter/Silver.png" v-if="baseInfo.levelCode === 1"/>
                  <img :src="userInfo.headPortrait" class="menuleft_08"/>
                  <img src="./../../assets/image/personCenter/Copper (2).png" v-if="baseInfo.levelCode === 0" title="铜狗牌"/>
                  <img src="./../../assets/image/personCenter/Gold.png" v-if="baseInfo.levelCode === 2" title="金狗牌"/>
                  <img src="./../../assets/image/personCenter/Silver (2).png" v-if="baseInfo.levelCode === 1" title="银狗牌"/>
                  <div class="menuleft_09 ellipsis">
                    {{userInfo.nickname}}
                  </div>
                  <template>
                    <input v-model="signature" class="menuleft_18 ellipsis menuleft_19" @blur="savesignature" v-if="editMode"/>
                  <div class="menuleft_18 ellipsis" v-if="userInfo.signature&&!editMode" @click="changeEditMode" :title="userInfo.signature">{{userInfo.signature}}</div>
                    <div class="menuleft_18 ellipsis" v-if="!userInfo.signature&&!editMode" @click="changeEditMode">这个人很懒 什么都没有写</div>
                  </template>
                </div>
                <router-link to="./mySetting">
                <img src="./../../assets/image/personCenter/Edit.png" class="menuleft_10"/>
                </router-link>
              </div>
              <div class="menuleft_07">
                <ul class="clearfix menuleft_13">
                  <li class="menuleft_15 ellipsis" title="狗粮">
                    <span>{{baseInfo.goldBalance}}</span>
                    <img src="./../../assets/image/personCenter/bone.png" />
                  </li>
                  <li class="menuleft_15 ellipsis" title="彩蛋">
                    <span>{{baseInfo.egg}}</span>
                    <img src="./../../assets/image/personCenter/egg.png" />
                  </li>
                  <li class="ellipsis" title="现金券">
                    <span>{{baseInfo.diamond}}</span>
                    <img src="./../../assets/image/personCenter/cash.png" />
                  </li>
                  <li class="fr">
                    <a :href='this.GLOBAL.urlConfig+"/personcenter/index/recharge"' class="menuleft_16">我要充值</a>
                  </li>
                </ul>
              </div>
              <div class="menuleft_12">
                <ul class="clearfix menuleft_11">
                  <li class="ellipsis">
                    <img src="./../../assets/image/personCenter/Location.png"/>
                    <span v-if="baseInfo.locationName||baseInfo.locationCityName">{{baseInfo.locationName}}{{baseInfo.locationCityName}}</span>
                    <span v-if="!baseInfo.locationName&&!baseInfo.locationCityName">GO星球</span>
                  </li>
                  <!--<li class="ellipsis">-->
                    <!--<img src="./../../assets/image/personCenter/date.png"/>-->
                    <!--<span>今天</span>-->
                  <!--</li>-->
                </ul>
              </div>
            </div>
            <div class="menuleft_20">
              <!--<div class="menuleft_21" :style="{top: linkActive*61+linkActive+'px'}"></div>-->
            <router-link to="./mydoggo">
              <div class="menuleft_05" v-on:mouseover="enter(0)" @mouseleave="leave"
                   :class="{menuleft_active:linkActive===0}">
                <div class="menuleft_21" v-if="linkActive === 0"></div>
                <img src="./../../assets/image/personCenter/Card.png" v-if="hoverActive !== 0&&linkActive !== 0"/>
                <img src="./../../assets/image/personCenter/Card-hover.png" v-if="hoverActive === 0||linkActive === 0"/>
                我的GO牌
              </div>
            </router-link>

              <!--<router-link to="./myvip">-->
                <!--<div class="menuleft_05" v-on:mouseover="enter(10)" @mouseleave="leave"-->
                     <!--:class="{menuleft_active:linkActive===10}">-->
                  <!--<div class="menuleft_21" v-if="linkActive === 10"></div>-->
                  <!--<img src="./../../assets/image/personCenter/Crown.png" v-if="hoverActive !== 10&&linkActive !== 10"/>-->
                  <!--<img src="./../../assets/image/personCenter/Crown-Golden.png" v-if="hoverActive === 10||linkActive === 10"/>-->
                  <!--会员中心-->
                <!--</div>-->
              <!--</router-link>-->


            <router-link to="mywallet">
              <div class="menuleft_05" v-on:mouseover="enter(1)" @mouseleave="leave"
                   :class="{menuleft_active:linkActive===1}">
                <div class="menuleft_21" v-if="linkActive === 1"></div>
                <img src="./../../assets/image/personCenter/Wallet.png" v-if="hoverActive !== 1&&linkActive !== 1"/>
                <img src="./../../assets/image/personCenter/Wallet-hover.png"
                     v-if="hoverActive === 1||linkActive === 1"/>
                我的钱包
              </div>
            </router-link>
            <router-link to="mybag">
              <div class="menuleft_05" v-on:mouseover="enter(2)" @mouseleave="leave"
                   :class="{menuleft_active:linkActive===2}">
                <div class="menuleft_21" v-if="linkActive === 2"></div>
                <img src="./../../assets/image/personCenter/Bag.png" v-if="hoverActive !== 2&&linkActive !== 2"/>
                <img src="./../../assets/image/personCenter/Bag-hover.png" v-if="hoverActive === 2||linkActive === 2"/>
                我的背包
              </div>
            </router-link>
            <router-link to="mymatch">
              <div class="menuleft_05" v-on:mouseover="enter(3)" @mouseleave="leave"
                   :class="{menuleft_active:linkActive===3}">
                <div class="menuleft_21" v-if="linkActive === 3"></div>
                <img src="./../../assets/image/personCenter/Cup.png" v-if="hoverActive !== 3&&linkActive !== 3"/>
                <img src="./../../assets/image/personCenter/Cup-hover.png" v-if="hoverActive === 3||linkActive === 3"/>
                我的赛事
              </div>
            </router-link>
            <router-link to="mysubsidy">
              <div class="menuleft_05" v-on:mouseover="enter(4)" @mouseleave="leave"
                   :class="{menuleft_active:linkActive===4}">
                <div class="menuleft_21" v-if="linkActive === 4"></div>
                <img src="./../../assets/image/personCenter/Subsidy.png" v-if="hoverActive !== 4&&linkActive !== 4"/>
                <img src="./../../assets/image/personCenter/Subsidy-hover.png"
                     v-if="hoverActive === 4||linkActive === 4"/>
                我的补贴
              </div>
            </router-link>
            <router-link to="mymission">
              <div class="menuleft_05" v-on:mouseover="enter(5)" @mouseleave="leave"
                   :class="{menuleft_active:linkActive===5}">
                <div class="menuleft_21" v-if="linkActive === 5"></div>
                <img src="./../../assets/image/personCenter/Mission.png" v-if="hoverActive !== 5&&linkActive !== 5"/>
                <img src="./../../assets/image/personCenter/Mission-hover.png"
                     v-if="hoverActive === 5||linkActive === 5"/>
                我的任务
              </div>
            </router-link>
            <router-link to="myrecords">
              <div class="menuleft_05" v-on:mouseover="enter(6)" @mouseleave="leave"
                   :class="{menuleft_active:linkActive===6}">
                <div class="menuleft_21" v-if="linkActive === 6"></div>
                <img src="./../../assets/image/personCenter/History.png" v-if="hoverActive !== 6&&linkActive !== 6"/>
                <img src="./../../assets/image/personCenter/History-hover.png"
                     v-if="hoverActive === 6||linkActive === 6"/>
                我的记录
              </div>
            </router-link>
            <router-link to="myexchange">
              <div class="menuleft_05" v-on:mouseover="enter(7)" @mouseleave="leave"
                   :class="{menuleft_active:linkActive===7}">
                <div class="menuleft_21" v-if="linkActive === 7"></div>
                <img src="./../../assets/image/personCenter/Ticket-Normal.png"
                     v-if="hoverActive !== 7&&linkActive !== 7"/>
                <img src="./../../assets/image/personCenter/Ticke-hover.png" v-if="hoverActive === 7||linkActive ===7"/>
                券码兑换
              </div>
            </router-link>
            <router-link to="./mymessage">
              <div class="menuleft_05" v-on:mouseover="enter(8)" @mouseleave="leave"
                   :class="{menuleft_active:linkActive===8}">
                <div class="menuleft_21" v-if="linkActive === 8"></div>
                <img src="./../../assets/image/personCenter/Notice.png" v-if="hoverActive !== 8&&linkActive !== 8"/>
                <img src="./../../assets/image/personCenter/Notice-active.png"
                     v-if="hoverActive === 8||linkActive ===8"/>
                消息中心
              </div>
            </router-link>
            <router-link to="./mysetting">
              <div class="menuleft_05" v-on:mouseover="enter(9)" @mouseleave="leave"
                   :class="{menuleft_active:linkActive===9}">
                <div class="menuleft_21" v-if="linkActive === 9"></div>
                <img src="./../../assets/image/personCenter/Setting.png" v-if="hoverActive !== 9&&linkActive !== 9"/>
                <img src="./../../assets/image/personCenter/Setting-hover.png"
                     v-if="hoverActive === 9||linkActive ===9"/>
                个人设置
              </div>
            </router-link>
            </div>
          </li>
          <li class="animated fadeInRight pageRight">
            <slot name="pageRight"></slot>
          </li>
        </ul>
      </div>
      <my-footer></my-footer>
      <my-head></my-head>
      <my-side></my-side>
    </div>
  </div>
</template>
<script>
  import './../../assets/css/common.css'

  export default {
    data: function () {
      return {
        hoverActive: '',
        editMode: false,
        signature: this.$store.state.userInfo.signature
      }
    },
    methods: {
      enter (val) {
        this.hoverActive = val
      },
      leave: function () {
        this.hoverActive = ''
      },
      changeEditMode: function () {
        this.editMode = true
      },
      savesignature: function () {
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.webConfig + 'personcenter/saveUserInfo',
          params: {
            signature: this.signature
          },
          headers: this.GLOBAL.hearder
        })
          .then((response) => {
            this.editMode = false
            this.initInfo()
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      initInfo: function () {
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.webConfig + 'personcenter/getUserinfo',
          data: {},
          headers: this.GLOBAL.hearder
        })
          .then((response) => {
            this.signature = response.data.tUser.signature
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    },
    props: {
      linkActive: {
        type: Number,
        default: 0
      }
    },
    created: function () {
      this.initInfo()
    },
    computed: {
      userInfo () {
        return this.$store.state.userInfo
      },
      baseInfo () {
        return this.$store.state.baseInfo
      }
    }
  }
</script>
<style scoped="">

</style>
