<template>
  <div id="tab3" class="border-style innerbox animated fadeIn">
    <div class="tab3_01">
      <ul class="clearfix tab3_02 tab3_03">
        <li>
          <span class="tab3_04"></span>
          基本信息
        </li>
      </ul>
      <ul class="clearfix tab3_02">
        <li>
          赛事介绍
        </li>
        <li v-html="matchInfo.matchDesc">
        </li>
      </ul>
      <ul class="clearfix tab3_02">
        <li>
          赛事公告
        </li>
        <li v-html="matchInfo.specialRule">
        </li>
      </ul>
      <ul class="clearfix tab3_02">
        <li>
          比赛奖金
        </li>
        <li>
          <template v-if="bonusInfo.length === 1&&bonusInfo[0].bonus_num === 0">
            无
          </template>
          <template v-else>
            <p v-for="item in bonusInfo">第{{item.max_rank}}名：{{item.bonus_num}}
              <template v-if="item.bonus_type === 2">
                狗粮
              </template>
              <template v-if="item.bonus_type === 1">
                现金券
              </template>
            </p>
          </template>
        </li>
      </ul>
      <ul class="clearfix tab3_02">
        <li>
          比赛模式
        </li>
        <li>
          <p>第一阶段48强进36强：共48支队伍随机分成A/B/C/D四组，小组两两对抗，双循环积分。积分垫底的十二支队伍被淘汰；</p>
          <p>第二阶段36强进24强：余下的36支队伍随机分成A/B/C三组，小组两两对抗，双循环积分。积分垫底十二支队伍被淘汰；</p>
          <p>第三阶段24强最终总决赛：共24支队伍在两天内进行九场比赛，按积分决定名次。</p>
        </li>
      </ul>
      <ul class="clearfix tab3_02">
        <li>
          通用规则
        </li>
        <li>
          <p>1，禁止使用任何第三方软件（包括但不限于外挂、鼠标宏、PUBGSUMO、PROconfig Moedaze等）及一切代打行为，一经发现立即取消比赛资格，并禁止该玩家/队伍永久参赛权；</p>
          <p>2，禁止恶意使用游戏BUG破坏游戏平衡（如把平底锅卡脸上。），视情节严重性做出处罚；</p>
          <p>3，禁止玩家/队伍之间非法组队，一经发现取消该场游戏成绩；</p>
          <p>4，如个别玩家/队伍在比赛过程中出现掉线、游戏崩溃等状况，所产生的一切后果由选手自行负责；</p>
          <p>5，如不少于5名玩家出现严重游戏BUG以导致游戏不能正常进行（如玩家没上飞机。），该场比赛重赛。若出现此情况的人数不满足，则比赛继续；</p>
          <p>6，赛事主办方会记录各队伍的Team Radio，并有可能在直播中播出，请谨慎言行；</p>
          <p>7，比赛最多延迟10分钟开赛，超过10分钟后会强制开赛，没有参与的队伍该场比赛成绩视为0分。</p>
        </li>
      </ul>
      <!--<div v-html="matchInfo.matchDesc"></div>-->
      <ul class="clearfix tab3_05">
        <li @click="detailInfoControl('roomInfo')" onselectstart="return false">
          <img src="./../../assets/image/playbattlegrounds/Fold.png"
               :class="{tab3_09:showList.indexOf('roomInfo') === -1}"/>
          房间设置
        </li>
      </ul>
      <ul class="clearfix tab3_06 animated fadeIn" v-if="showList.indexOf('roomInfo') !== -1">
        <li>
          <ul class="clearfix tab3_07 ellipsis">
            <li>
              服务器
            </li>
            <li>
              {{matchInfo.matchAreaName}}
            </li>
          </ul>
          <ul class="clearfix tab3_07 ellipsis">
            <li>
              刷新倍率
            </li>
            <li>
              1x（默认）
            </li>
          </ul>
          <ul class="clearfix tab3_07 ellipsis">
            <li>
              安全区范围
            </li>
            <li>
              默认
            </li>
          </ul>
          <ul class="clearfix tab3_07 ellipsis">
            <li>
              天气选择
            </li>
            <li>
              晴天
            </li>
          </ul>
          <ul class="clearfix tab3_07 ellipsis">
            <li>
              OB视角
            </li>
            <li>
              4个
            </li>
          </ul>
        </li>
        <li class="tab3_08">
          <ul class="clearfix tab3_07 ellipsis">
            <li>
              最大玩家数
            </li>
            <li>
              100人
            </li>
          </ul>
          <ul class="clearfix tab3_07 ellipsis">
            <li>
              安全时间
            </li>
            <li>
              1x（默认）
            </li>
          </ul>
          <ul class="clearfix tab3_07 ellipsis">
            <li>
              轰炸频率
            </li>
            <li>
              默认
            </li>
          </ul>
          <ul class="clearfix tab3_07 ellipsis">
            <li>
              附件语音
            </li>
            <li>
              仅限组队成员
            </li>
          </ul>
          <ul class="clearfix tab3_07 ellipsis">
            <li>
              未分配位置
            </li>
            <li>
              禁用
            </li>
          </ul>
        </li>
        <li class="fr">
          <ul class="clearfix tab3_07 ellipsis">
            <li>
              队友治疗
            </li>
            <li>
              启用
            </li>
          </ul>
          <ul class="clearfix tab3_07 ellipsis">
            <li>
              区外伤害
            </li>
            <li>
              默认
            </li>
          </ul>
          <ul class="clearfix tab3_07 ellipsis">
            <li>
              空投频率
            </li>
            <li>
              1x（默认）
            </li>
          </ul>
          <ul class="clearfix tab3_07 ellipsis">
            <li>
              视角设置
            </li>
            <li>
              默认
            </li>
          </ul>
          <ul class="clearfix tab3_07 ellipsis">
            <li>
              赛事模式
            </li>
            <li>
              四排/双排
            </li>
          </ul>
        </li>
      </ul>
      <ul class="clearfix tab3_05">
        <li @click="detailInfoControl('ruleInfo')" onselectstart="return false">
          <img src="./../../assets/image/playbattlegrounds/Fold.png"
               :class="{tab3_09:showList.indexOf('ruleInfo') === -1}"/>
          积分规则
        </li>
      </ul>
      <div class="clearfix tab3_06 animated fadeIn" v-if="showList.indexOf('ruleInfo') !== -1">
        总分= 吃鸡分/排名分+击杀分*击杀数<br>
        <p class="tab3_10">排名分</p>
        <ul class="clearfix tab3_11">
          <template v-for="item in matchPointsInfo">
          <li>
            <ul class="clearfix tab3_12">
              <li>{{item.name}}</li>
              <li>
                <template v-if="item.point<10">0</template>{{item.point}} Points</li>
            </ul>
          </li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import './../../assets/css/playbattlegrounds_index.css'

  export default {
    data: function () {
      return {
        showList: [],
        matchPointsInfo: [{name: '吃鸡分', point: 300}, {name: '第二名', point: 80}, {name: '第三名', point: 55}, {name: '第四名', point: 40}, {name: '第五名', point: 30}, {name: '第六名', point: 25}, {name: '第七名', point: 20}, {name: '第八名', point: 18}, {name: '第九名', point: 16}, {name: '第十名', point: 14}, {name: '第十一名', point: 13}, {name: '第十二名', point: 12}, {name: '第十三名', point: 11}, {name: '第十四名', point: 10}, {name: '第十五名', point: 9}, {name: '第十六名', point: 8}, {name: '第十七名', point: 7}, {name: '第十八名', point: 6}, {name: '第十九名', point: 5}, {name: '第二十名', point: 4}, {name: '第二十一名', point: 3}, {name: '第二十二名', point: 2}, {name: '第二十三名', point: 1}, {name: '第二十四名', point: 0}
        ]
      }
    },
    methods: {
      detailInfoControl: function (val) {
        if (this.showList.indexOf(val) === -1) {
          this.showList.push(val)
        } else {
          this.showList.splice(this.showList.indexOf(val), 1)
        }
      }
    },
    created: function () {
    },
    props: ['matchInfo', 'bonusInfo']
  }
</script>
<style scoped="">

</style>
