<template>
  <div id="chiji">
    <my-head></my-head>
    <div class="chiji-banner_01">
      <img src="./../../assets/image/playbattlegrounds/Icons.png" class="chijiNews_01"/>
    </div>
    <div class="chiji_01">
      <div class="chiji_03" style="padding-bottom: 130px;">
      <div class="chiji_02" style="padding-top: 50px;">
        <ul class="clearfix chijiNews_03">
          <li></li>
          <li class="chijiNews_02">
            <p>我要报名</p>
            <p style="letter-spacing: 3px;">Register</p>
          </li>
          <li></li>
        </ul>
        <div class="chijiNews_06">
          <ul class="clearfix chijiNews_04">
            <li>
              联系QQ
            </li>
            <li>
              <el-input v-model="input1"></el-input>
            </li>
          </ul>
          <ul class="clearfix chijiNews_04">
            <li>
              游戏昵称
            </li>
            <li>
              <el-input v-model="input2" placeholder="请输入绝地求生游戏昵称"></el-input>
              <p style="margin-top: 10px;text-align: left;">要和游戏内完全一致,好好填不然杀人数不算数</p>
            </li>
          </ul>
          <ul class="clearfix chijiNews_04" style="text-align: left;">
            <li>
              游戏时间
            </li>
            <li style="width: 40%;">
              <el-select v-model="input3" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li style="width: 40%;text-align: right;" >
              <el-select v-model="input4" placeholder="请选择">
                <el-option
                  v-for="item in options2"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </li>
          </ul>
          <ul class="clearfix chijiNews_04">
            <li>
              我有话说
            </li>
            <li>
              <el-input v-model="input5" placeholder="吐槽和建议写在这里" type="textarea" :rows="3"></el-input>
            </li>
          </ul>
          <el-button type="info" @click="submitInfo">立即提交</el-button>
        </div>
        <div class="chijiNews_07" style="margin-top: 70px;">
          <p>合作伙伴</p>
          <p class="chijiNews_08">THEY TRUST US</p>
        </div>
        <div class="chijiNews_09">
          <ul class="clearfix chijiNews_10">
            <li>
              <a href="https://weibo.com/estarwzry" class="hoverFloat"></a>
              <img src="./../../assets/image/playbattlegrounds/eSTAR.png">
            </li>
            <li>
              <a href="https://weibo.com/tbgclub" class="hoverFloat"></a>
              <img src="./../../assets/image/playbattlegrounds/SNG.png">
            </li>
            <li>
              <a href="https://weibo.com/igaming" class="hoverFloat"></a>
              <img src="./../../assets/image/playbattlegrounds/IG.png">
            </li>
            <li>
              <a href="http://www.wywk.cn/wywk " class="hoverFloat"></a>
              <img src="./../../assets/image/playbattlegrounds/WANGYU.png">
            </li>
            <li>
              <a href="http://www.youtaidu.com " class="hoverFloat"></a>
              <img src="./../../assets/image/playbattlegrounds/TAIDU.png">
            </li>
          </ul>
        </div>
        <div class="chijiNews_07">
          <p>合作媒体</p>
          <p class="chijiNews_08">MEDIA HEZUO</p>
        </div>
        <div class="chijiNews_09">
          <ul class="clearfix chijiNews_10">
            <li>
              <a href="https://www.douyu.com/ " class="hoverFloat"></a>
              <img src="./../../assets/image/playbattlegrounds/DOUYU.png"></li>
            <li>
              <a href="http://news.66esports.cn/ " class="hoverFloat"></a>
              <img src="./../../assets/image/playbattlegrounds/66.png">
            </li>
            <li>
              <a href="http://www.wysd.com/" class="hoverFloat"></a>
              <img src="./../../assets/image/playbattlegrounds/wanyou.png">
            </li>
            <li>
              <a href="http://www.wanplus.com/ " class="hoverFloat"></a>
              <img src="./../../assets/image/playbattlegrounds/wanplus.png">
            </li>
            <li>
              <a href="https://www.huomao.com/ " class="hoverFloat"></a>
              <img src="./../../assets/image/playbattlegrounds/HUOMAO.png">
            </li>
          </ul>
        </div>
        </div>
    </div>
      <my-footer :showControl="false"></my-footer>
      <my-side></my-side>
    </div>
  </div>
</template>
<style scoped>

</style>
<script>
import myFooter from './../common/bottom.vue'
import myHead from './../common/Head'
import mySide from './../common/side'
import './../../assets/css/playbattlegrounds_index.css'
import './../../assets/css/inputStyle.css'
export default {
  data: function () {
    return {
      input1: '',
      input2: '',
      input3: 2,
      input4: 3,
      input5: '',
      options: [{
        value: 1,
        label: '工作日'
      }, {
        value: 2,
        label: '周末'
      }, {
        value: 3,
        label: '都行'
      }],
      options2: [{
        value: 1,
        label: '0:00-6:00'
      }, {
        value: 2,
        label: '6:00-12:00'
      }, {
        value: 3,
        label: '12:00-18:00'
      }, {
        value: 4,
        label: '18:00-24:00'
      }],
      value: ''
    }
  },
  methods: {
    numberOnly: function () {
      var regexp = /^[1-9][0-9]{4,10}$/gim
      if (!regexp.test(this.input1)) {
        this.$message({
          showClose: true,
          message: '请输入正确的QQ号',
          type: 'error'
        })
        return false
      }
      return true
    },
    submitInfo: function () {
      if (this.numberOnly()) {
        if (!this.input1 || !this.input2 || !this.input3 || !this.input4) {
          this.$message({
            showClose: true,
            message: '请完善报名信息',
            type: 'error'
          })
          return false
        }
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.webConfig + '/pubg/pubgEnroll',
          headers: this.GLOBAL.hearder,
          params: {
            qq: this.input1,
            pubgName: this.input2,
            week: this.input3,
            time: this.input4,
            mark: this.input5
          }
        })
          .then((response) => {
//            console.log(response)
            if (response.data.errCode === 0) {
              this.$message({
                showClose: true,
                message: '恭喜你，报名成功',
                type: 'success'
              })
            } else {
              this.$message({
                showClose: true,
                message: response.data.errDesc,
                type: 'error'
              })
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    }
  },
  components: {
    myFooter,
    myHead,
    mySide
  }
}
</script>
