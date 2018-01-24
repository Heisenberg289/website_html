<template>
  <div>
      <div class="foot_info" style="width:100%">
        <div class="foot_01">
          <div class="foot_01Bg" v-if="showControl">
            <div>
              <ul class="clearfix foot_02">
                <li class="foot_08">
                  <div class="foot_03">战略合作伙伴</div>
                  <div class="foot_04">
                    <img src="./../../assets/image/foot/eStar.png" /> <img
                    src="./../../assets/image/foot/SNG.png" /> <img
                    src="./../../assets/image/foot/IG.png" /> <img
                    src="./../../assets/image/foot/YG.png" /> <img
                    src="./../../assets/image/foot/NB.png" /><img src="./../../assets/image/foot/JC.png"/>
                  </div>
                </li>
                <li class="foot_07">
                  <div class="foot_03">其他合作伙伴</div>
                  <div class="foot_04">
                    <img src="./../../assets/image/foot/DouYu.png" /> <img
                    src="./../../assets/image/foot/WangYu.png" /> <img
                    src="./../../assets/image/foot/Taidu.png" /> <img
                    src="./../../assets/image/foot/NTF.png" /> <img
                    src="./../../assets/image/foot/BaoLong.png" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="container">
            <div class="foot_05">
              <div>
                客服热线：027-8335-8853 <span class="foot_06">丨</span> 内部反馈群：597189934 <span
                class="foot_06">丨</span> 商务合作：suntt@cccgaming.com
              </div>
              <div>
                Copyright©2016 cccgaming.com 赛狗电竞互娱 All rights
                reserved.苏ICP备17043021号 <span class="foot_06">丨</span>苏州竞享时代网络科技有限公司
              </div>
            </div>
          </div>
        </div>

      </div>
  </div>
</template>
<script>
  import './../../assets/css/bottom.css'
  export default {
    props: {
      showControl: {
        default: true,
        type: Boolean
      }
    }
  }
</script>
<style scoped="">

</style>
