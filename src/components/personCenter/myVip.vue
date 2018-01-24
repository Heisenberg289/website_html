<template>
  <div>
    <commonPart :linkActive="10">
      <div slot="pageRight">
        <div class="myvip">
          <p class="title">会员中心</p>
          <p class="line"></p>
          <ul class="clearfix vip-info">
            <li>
              现在开通，即享VIP专属福利
            </li>
            <li>
              会员等级 : <span class="vip-text">Lv.1</span>
            </li>
            <li>
              升级进度 : <span class="vip-text">0/30</span>
            </li>
            <li>
              到期时间 : <span class="vip-text">2018/9/30</span>
              <span class="vip-out-date">已过期</span>

            </li>
          </ul>
          <div class="vip-btn"></div>
          <div class="vip-intro">
            <template v-for="item in list">
              <ul class="clearfix">
                <li>
                  {{item.t1}}
                </li>
                <li>
                  <span class="vip-active2" v-if="item.t2 === 'yes'">✔</span>
                  <span class="vip-active3" v-if="item.t2 === 'no'">✖</span>
                  <span  v-if="item.t2 !== 'yes'&&item.t2 !== 'no'">{{item.t2}}</span>
                </li>
                <li>
                  <span class="vip-active2" v-if="item.t3 === 'yes'">✔</span>
                  <span class="vip-active3" v-if="item.t3 === 'no'">✖</span>
                  <span  v-if="item.t3 !== 'yes'&&item.t3 !== 'no'">{{item.t3}}</span>
                </li>
                <li>
                  <span class="vip-active2" v-if="item.t4 === 'yes'">✔</span>
                  <span class="vip-active3" v-if="item.t4 === 'no'">✖</span>
                  <span  v-if="item.t4 !== 'yes'&&item.t4 !== 'no'">{{item.t4}}</span>
                </li>
                <li>
                  <span class="vip-active2" v-if="item.t5 === 'yes'">✔</span>
                  <span class="vip-active3" v-if="item.t5 === 'no'">✖</span>
                  <span  v-if="item.t5 !== 'yes'&&item.t5 !== 'no'">{{item.t5}}</span>
                </li>
                <li>
                  <span class="vip-active2" v-if="item.t6 === 'yes'">✔</span>
                  <span class="vip-active3" v-if="item.t6 === 'no'">✖</span>
                  <span  v-if="item.t6 !== 'yes'&&item.t6 !== 'no'">{{item.t6}}</span>
                </li>
              </ul>
            </template>
          </div>
        </div>
      </div>
    </commonPart>
  </div>
</template>
<style scoped>
  .title {
    font-size: 16px;
    color: #fff;
    line-height: 43px
  }

  .myvip {
    padding: 0 20px;
    color: #b8babc;
    font-size: 14px;
  }

  .line {
    height: 1px;
    background: rgba(255, 255, 255, .1)
  }

  .vip-info {
    padding: 20px;
    font-size: 14px;
    color: #b8babc;
  }

  .vip-info > li {
    margin-right: 60px
  }

  .vip-text {
    color: #fff
  }

  .vip-btn {
    width: 137px;
    height: 36px;
    cursor: pointer;
    background: url("./../../assets/image/personCenter/Recharge.png") no-repeat center center;
    margin: 0 0 30px 20px;
  }

  .vip-btn:hover {
    opacity: 0.7
  }

  .vip-out-date {
    color: #ff5722
  }

  .vip-intro > ul {
    height: 40px;
    line-height: 40px;
    padding-left: 16px;
  }

  .vip-intro > ul:nth-child(odd) {
    background-color: #1a1c20;
    box-sizing: border-box;
    border: 1px solid rgba(255, 255, 255, 0.08)
  }

  .vip-intro > ul:nth-child(1) {
    color: #b8babc;
  }

  .vip-intro > ul > li {
    width: 14%;
    text-align: center;
    font-weight: bold;
  }
  .vip-intro > ul > li>span{
    display: block;
  }
  .vip-intro > ul > li:nth-child(1) {
    width: 28%;
    text-align: left;
    font-weight: normal;
  }

  .vip-intro {
    background-color: #1f2125;
    color: #fff;
  }

  .vip-active {
    color: #FFD100
  }

  .vip-active2 {
    color: #3fdc45;
    font-weight: bold;
    font-size: 20px;
  }
  .vip-active3 {
    color: #666;
    font-weight: bold;
    font-size: 20px;
  }
</style>
<script>
  export default {
    data: function () {
      return {
        list: [{t1: '会员福利', t2: 'VIP 1', t3: 'VIP 2', t4: 'VIP 3', t5: 'VIP 4', t6: 'VIP 5'}, {
          t1: '专属客服',
          t2: 'yes',
          t3: 'yes',
          t4: 'yes',
          t5: 'yes',
          t6: 'yes'
        }, {t1: '战队成员数无上限', t2: 'no', t3: 'yes', t4: 'yes', t5: 'yes', t6: 'yes'}, {
          t1: '提现比例升至70%',
          t2: 'yes',
          t3: 'yes',
          t4: 'yes',
          t5: 'yes',
          t6: 'yes'
        }, {t1: '月度提现次数升至5次', t2: 'yes', t3: 'yes', t4: 'yes', t5: 'yes', t6: 'yes'}, {
          t1: '每日彩蛋次数',
          t2: '5',
          t3: '8',
          t4: '10',
          t5: '15',
          t6: '30'
        }, {t1: '竞猜收益', t2: '1.0', t3: '1.0', t4: '1.0', t5: '1.2', t6: '1.5'}, {
          t1: '官方比赛收益',
          t2: '1.0',
          t3: '1.0',
          t4: '1.0',
          t5: '1.1',
          t6: '1.3'
        }, {t1: '每日比赛战斗力双倍奖励', t2: '前1场', t3: '前5场', t4: '前10场', t5: '不限', t6: '不限'}, {
          t1: '高级狗牌',
          t2: 'yes',
          t3: 'yes',
          t4: 'yes',
          t5: 'yes',
          t6: 'yes'
        }, {t1: '累计充值', t2: '激活即享', t3: '￥30', t4: '￥100', t5: '￥500', t6: '￥3000'}]
      }
    }
  }
</script>
