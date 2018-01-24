<template>
  <div id="matchDetail">
    <myModal ref="childMethod">
      <div slot="modal-content">
        <div id="enrollO1" v-if="matchDetail.signUpType === '1'">
          <div class="title">
            <img src="../../assets/image/match/bell.png">
            <p>信息提示</p>
          </div>
          <div class="cont">
            <p>该赛事由第三方提供</p>
            <p>赛狗电竞不对该赛事报名所产生的后果负责</p>
            <button @click="routerLink()">前往报名</button>
          </div>
        </div>
        <div id="enrollO2" v-if="matchDetail.signUpType === '2'">
          <p class="title">
            <img :src="matchDetail.signUpContent">
          </p>
          <p class="msg">该赛事由第三方提供</p>
          <p class="msg" style="margin-bottom: 30px;">赛狗电竞不对该赛事报名所产生的后果负责</p>
        </div>
        <div id="enrollO3" v-if="matchDetail.signUpType === '3'">
          <p class="cont">{{matchDetail.signUpContent}}</p>
          <p class="msg">该赛事由第三方提供</p>
          <p class="msg" style="margin-bottom: 30px;">赛狗电竞不对该赛事报名所产生的后果负责</p>
        </div>
      </div>
    </myModal>
    <div class="detail-bg" :style="'background-image:url(' + matchDetail.matchLogo + ')'"></div>
    <div class="detail-title">
      <h1>
        <span>{{matchDetail.matchTitle}}</span>
        <img src="../../assets/image/match/Sent.png">
      </h1>
      <div class="title-msg">
        <p>比赛组织: {{matchDetail.release}}</p>
        <p>比赛时间: {{matchDetail.matchStartTime | formatTime}}</p>
      </div>
      <p class="commit">
        <button @click="modalOpen()">前往报名</button>
      </p>
    </div>
    <div class="detail-msg">
      <p class="msg-title">
        <span></span>
        <span>赛事信息</span>
      </p>
      <p class="line"></p>
      <div class="msg-cont">
        <p v-html="matchDetail.matchDesc"></p>
      </div>
    </div>
    <my-footer></my-footer>
    <my-head locationUrl="match"></my-head>
    <my-side></my-side>
  </div>
</template>
<script>
  export default {
    data: function () {
      return {
        matchDetail: '',
        id: this.$route.query.id
      }
    },
    filters: {
      formatTime (value) {
//        return new Date(parseInt(('/Date(' + value + ')/').substr(6, 13))).toLocaleDateString()
        let now = new Date(value)
        let year = now.getFullYear()
        let month = now.getMonth() + 1
        let date = now.getDate()
        let hour = now.getHours()
        if (month < 10) {
          month = '0' + month
        }
        if (date < 10) {
          date = '0' + date
        }
        if (hour < 10) {
          hour = '0' + hour
        }
        let minute = now.getMinutes()
        if (minute < 10) {
          minute = '0' + minute
        }
        let second = now.getSeconds()
        if (second < 10) {
          second = '0' + second
        }
        return year + '-' + month + '-' + date + ' ' + hour + ':' + minute
      }
    },
    methods: {
      modalClose () {
        this.$refs.childMethod.modalClose()
      },
      modalOpen () {
        this.$refs.childMethod.modalShow()
      },
      routerLink () {
//        this.matchDetail.signUpContent = this.matchDetail.signUpContent.substr(0, 8).toLowerCase() === 'https://' ? this.matchDetail.signUpContent : 'http://' + this.matchDetail.signUpContent
        if (this.matchDetail.signUpContent.substr(0, 8).toLowerCase() === 'https://') {
          this.matchDetail.signUpContent = this.matchDetail.signUpContent
        } else if (this.matchDetail.signUpContent.substr(0, 7).toLowerCase() === 'http://') {
          this.matchDetail.signUpContent = this.matchDetail.signUpContent
        } else {
          this.matchDetail.signUpContent = 'http://' + this.matchDetail.signUpContent
        }
        window.open(this.matchDetail.signUpContent)
      }
    },
    created: function () {
      this.$ajax({
        method: 'POST',
        url: this.GLOBAL.commomUrl + '/match/queryMatchRelease',
//        url: ' http://192.168.10.154:8080/match/queryMatchRelease',
        params: {
          matchId: this.id
        }
      })
        .then((res) => {
          console.log(res)
          if (res.data.errCode === 0) {
            this.matchDetail = res.data.matchRelease
          } else {
            alert('服务器异常！')
          }
        })
        .catch(() => {
          alert('服务器异常！')
        })
    }
  }
</script>
<style scoped>
  #enrollO1, #enrollO2, #enrollO3 {
    text-align: center;
    color: #b8babc;
    font-size: 14px;
  }

  .detail-title h1 {
    font-size: 36px;
    color: #fff;
    font-weight: bold;
    text-align: center;
    margin-bottom: 30px;
    margin-top: 20px;
  }

  .title-msg {
    font-size: 24px;
    color: white;
    text-align: center;
  }

  .title-msg p {
    margin-top: 16px;
  }

  .detail-msg {
    width: 1067px;
    margin: 43px auto 52px;
    color: #b8babc;
    border-image: url(../../assets/image/personCenter/border_01.png) 3 3 stretch;
    -moz-border-image: url(../../assets/image/personCenter/border_01.png) 3 3 stretch; /* Old Firefox */
    -webkit-border-image: url(../../assets/image/personCenter/border_01.png) 3 3 stretch; /* Safari and Chrome */
    -o-border-image: url(../../assets/image/personCenter/border_01.png) 3 3 round; /* Opera */
    border-image-width: 2px;
  }

  .detail-msg p {
    margin-top: 15px;
  }

  .detail-title .commit {
    text-align: center;
    margin-top: 35px;
  }

  .detail-title .commit button {
    width: 164px;
    height: 45px;
    border: none;
    border-radius: 4px;
    background-color: #ffd100;
    cursor: pointer;
    font-size: 16px;
  }

  .msg-title span:first-child {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #ffd100;
  }

  .detail-msg {
    padding: 10px 0 20px 10px;
  }

  .msg-cont {
    padding-left: 12px;
  }

  .line {
    height: 1px;
    background: rgba(255, 255, 255, .1);
  }

  .detail-bg {
    width: 100%;
    height: 660px;
    background-image: url("../../assets/image/match/Match_Home_Fog.png");
    background-position: center center;
    background-size: cover;
  }

  #enrollO1 .title {
    margin-top: 40px;
    margin-bottom: 40px;
    font-weight: bold;
    color: #fff;
    font-size: 16px;
  }

  #enrollO1 .title p {
    margin-top: 5px;
  }

  #enrollO1 button {
    display: inline-block;
    width: 200px;
    height: 28px;
    border: 1px solid #ffd100;
    color: white;
    background: transparent;
    border-radius: 4px;
    margin: 20px 0 20px 0;
    cursor: pointer;
  }

  #enrollO1 .cont {
    margin-bottom: 20px;
  }

  #enrollO1 .cont p {
    margin-bottom: 5px;
  }

  #enrollO2 .title {
    margin-top: 40px;
    margin-bottom: 30px;
  }

  #enrollO3 .cont {
    width: 60%;
    margin: 80px auto 50px;
  }
</style>
