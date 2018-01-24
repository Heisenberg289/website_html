<template>
  <div>
    <commonPart :linkActive="0">
      <div slot="pageRight">
        <div id="myDog">
          <p class="title">我的GO牌</p>
          <p class="line"></p>
          <div class="dog-top">
            <div class="top-myPic">
              <div class="choosePic">
                <el-upload
                  class="avatar-uploader"
                  action="http://116.62.204.235:8080/upload/uploadImgCostumer?thumbConfig=186x90&thumbConfig=270x153&thumbConfig=1080x480"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </div>
              <template>
                <img v-if="!imageUrl" src="../../assets/image/personCenter/dogBg.png" class="dogBg">
                <img v-else :src='imageUrl' class="myDogBg">
              </template>
              <img src="../../assets/image/myDog/Card.png" class="myPic-bg">
              <div class="myMessage">
                <div class="my-head" :style="'background: url('+myImg+') no-repeat center center /100% 100%;'">
                  <img v-if="levelCode ===0" src="../../assets/image/personCenter/Coppe-small.png">
                  <img v-if="levelCode ===1" src="../../assets/image/personCenter/Silver-small.png">
                  <img v-if="levelCode ===2" src="../../assets/image/personCenter/Golden-small.png">
                </div>
                <img v-if="levelCode ===0" src="../../assets/image/myDog/Go-copperr-small.png">
                <img v-if="levelCode ===1" src="../../assets/image/myDog/Go-silver-small.png">
                <img v-if="levelCode ===2" src="../../assets/image/myDog/Go-golden-small.png">
                <p class="myName">{{fans_group_name}}</p>
                <p class="myNumber">No.{{dogNumber}}</p>
              </div>
            </div>
            <div class="top-myMsg">
              <div class="clear">
                <p class="label">GO牌名称</p>
                <div class="cont">
                  <input type="text" placeholder="请输入" maxlength="8" v-model="fans_group_name" class="dogNameText">
                </div>
              </div>
              <div class="clear" style="margin: 30px 0 15px 0">
                <p class="label">GO牌号码</p>
                <div>
                  <input class="dogNumber" type="text" v-model="dogNumber" readonly="readonly">
                  <button @click="copyLink()">复制</button>
                </div>
              </div>
              <div class="clear" style="margin-top: 10px;font-size: 13px;color: #888">GO牌可以作为邀请码，分享给您的朋友注册绑定。双方都将获得平台赠与的狗粮奖励</div>
              <p class="commit">
                <button @click="changeDog()">保存</button>
              </p>
            </div>
          </div>
          <p style="padding-left: 102px;margin:15px 0 30px 0;color: #666">点击GO牌更换GO牌背景</p>
          <p class="title">GO牌收益 <span style="margin-left: 20px;color: #b8babc;font-size: 14px">使用您的GO牌注册的用户，每进行一次充值，您都将获得收益返点</span></p>
          <p class="line"></p>
          <div class="dog-center clear">
            <div class="fl">
              <img src="../../assets/image/myDog/people.png">
              <p>{{fans_num}}</p>
              <p>邀请人数</p>
            </div>
            <div class="fl">
              <img src="../../assets/image/myDog/cash.png">
              <p style="margin-top: 4px;">{{interests_last_day}}</p>
              <p>昨日收益</p>
            </div>
            <div class="fl">
              <img src="../../assets/image/myDog/cash.png">
              <p style="margin-top: 4px;" class="myMoney">{{total_interests}}</p>
              <p>累计收益</p>
            </div>
          </div>
          <div class="dog-footer">
            <p class="title">GO牌礼包权益 <span style="margin-left: 20px;color: #b8babc;font-size: 14px">使用您的GO牌进行注册的用户，将获得以下权益</span></p>
            <div class="clear dog-prize dog-prize-title">
              <div class="fl">种类</div>
              <div class="fl">数量(张)</div>
              <div class="fl">存量(张)</div>
              <div class="fr">概率</div>
            </div>
            <div class="clear dog-prize" v-for="item in tagRights">
              <div class="fl">{{item.name}}</div>
              <div class="fl">1</div>
              <div class="fl" v-if="item.num === -1">无限制</div>
              <div class="fl" v-else>{{item.num}}</div>
              <div class="fr">{{item.probability * 100}}%</div>
            </div>
          </div>
        </div>
      </div>
    </commonPart>
  </div>
</template>
<script>
  import './../../assets/css/myDog.css'
  import './../../assets/css/element.css'
  export default {
//    name: 'vueCropper',
    data: function () {
      return {
        dogName: '',
        imageUrl: '',
        levelCode: '', // 狗牌等级
        dogNumber: '', // 狗牌号码
        total_interests: '', // 狗牌总收益
        fans_num: '', // 邀请人数
        interests_last_day: '', // 昨日收益
        tagRights: [], // 狗牌权益
        fans_group_name: '',
        background_pic: '',
        myImg: ''
      }
    },
    methods: {
      copyLink: function () {
        var url = document.getElementsByClassName('dogNumber')[0]
        url.select()
        document.execCommand('copy')
        this.$message.success('复制成功!')
      },
//        上传图片
      handleAvatarSuccess (res, file) {
        this.imageUrl = 'http://' + res.imgServer + '/' + res.path // 设置图片路径
        console.log(this.imageUrl)
      },
      beforeAvatarUpload (file) {
        const isLt2M = file.size / 1024 / 1024 < 2
        const isJPG = file.type === 'image/jpeg'
        const isPNG = file.type === 'image/png'
        if (!isJPG && !isPNG) {
          this.$message.error('上传头像图片只能是 JPG，PNG 格式!')
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!')
        }
        return (isJPG || isPNG) && isLt2M
      },
      changeDog () {
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.commomUrl + '/stargo/personcenter/activeGoStart',
          headers: this.GLOBAL.hearder,
          params: {
            imgRealPath: this.imageUrl,
            fansName: this.fans_group_name
          }
        })
          .then((res) => {
            console.log(res.data)
            if (res.data.errCode === 0) {
              this.$message.success('信息修改成功！')
              this.myDogMsg()
            } else {
              this.$message.error(res.data.errDesc)
            }
          })
      },
      myDogMsg () {
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.commomUrl + '/stargo/personcenter/tagInfo',
          headers: this.GLOBAL.hearder
        })
          .then((res) => {
            console.log(res.data)
            this.levelCode = res.data.level_code
            this.dogNumber = res.data.number
            this.fans_group_name = res.data.fans_group_name
            this.background_pic = res.data.background_pic
            this.imageUrl = res.data.background_pic
          })
      }
    },
    created: function () {
//      我的狗牌信息
      this.myDogMsg()
//      个人信息
      this.$ajax({
        method: 'POST',
        url: this.GLOBAL.commomUrl + '/stargo/personcenter/getUserinfo',
        headers: this.GLOBAL.hearder
      })
        .then((res) => {
          console.log(res)
          this.myImg = res.data.tUser.headPortrait
        })
//      狗牌收益
      this.$ajax({
        method: 'POST',
        url: this.GLOBAL.commomUrl + '/stargo/tag/tagInterest',
        headers: this.GLOBAL.hearder
      })
        .then((res) => {
          console.log(res.data)
          if (!res.data.interests_last_day) {
            this.interests_last_day = 0
          } else {
            this.interests_last_day = res.data.interests_last_day
          }
          this.fans_num = res.data.fans_num
          this.total_interests = res.data.total_interests
        })
//      狗牌权益
      this.$ajax({
        method: 'POST',
        url: this.GLOBAL.commomUrl + '/stargo/tag/tagRights',
        headers: this.GLOBAL.hearder
      })
        .then((res) => {
          console.log(res.data)
          this.tagRights = res.data
        })
    }
  }
</script>
