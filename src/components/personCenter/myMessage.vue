<template>
  <div>
    <commonPart :linkActive="8">
      <div slot="pageRight">
        <div class="message-content" id="message">
          <p class="title">消息中心</p>
          <template v-for="item in messageList">
          <ul class="clearfix message-info">
            <li>
              <img src="./../../assets/image/personCenter/notice0.png"/>
            </li>
            <li>
              <p class="message_01">公告</p>
              <p class="message_02">{{item.sendDate|formatTime}}</p>
              <p class="message_03">
                {{item.content}}
              </p>
            </li>
          </ul>
          </template>
          <div class="block">
            <el-pagination
              layout="prev, pager, next"
              :current-page="1"
              :page-size="pageSize"
              @current-change="handleCurrentChange"
              :total="total">
            </el-pagination>
          </div>
        </div>
      </div>
    </commonPart>
  </div>
</template>
<script>
  import './../../assets/css/element.css'
  export default {
    data: function () {
      return {
        messageList: '',
        total: null,
        pageSize: 7,
        matchPageSize: null
      }
    },
    methods: {
      handleCurrentChange: function (currentPage) {
        this.getMessageInfo(currentPage)
      },
      getMessageInfo: function (pageNum) {
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.webConfig + 'personcenter/messagePage',
          params: {
            pageNum: pageNum,
            pageSize: this.pageSize
          },
          headers: this.GLOBAL.hearder
        })
          .then((res) => {
            // console.log(res)
            this.messageList = res.data.list
            this.total = res.data.total
          })
      },
      getUnderedInfo: function () {
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.webConfig + '/personcenter/getunread',
          data: {},
          headers: this.GLOBAL.hearder
        })
          .then((response) => {
            this.$store.commit('changeUnreadedInfo', response.data.number)
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    },
    created: function () {
      this.$ajax({
        method: 'POST',
        url: this.GLOBAL.webConfig + 'personcenter/messagePage',
        params: {
          pageNum: 1,
          pageSize: this.pageSize
        },
        headers: this.GLOBAL.hearder
      })
        .then((res) => {
          this.messageList = res.data.list
          this.total = res.data.total
          this.getUnderedInfo()
        })
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
    computed: {
    }
  }
</script>
<style scoped>
  #message{}
  .message-content{padding: 0 20px;color: #b8babc;font-size: 14px;}
  #message .title {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 16px;
    color: #fff;
    line-height: 43px;
  }
  .message-info{padding: 30px;border-bottom: 1px solid rgba(255, 255, 255, 0.1);overflow: hidden;box-sizing: border-box;min-height: 127px;}
  .message-info>li:nth-child(1){width: 8%;padding-right: 10px;box-sizing: border-box;text-align: right;}
  .message-info>li:nth-child(2){width: 92%;}
  .message_01{font-weight: bold;color: #b8babc;}
  .message_02{font-size: 12px;}
  .message_03{color: #fff;line-height: 1.5;margin-top: 10px;}
  .block{position: absolute;bottom: 50px;left: 50%;transform: translateX(-50%)}
</style>
