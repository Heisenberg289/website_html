<template>
  <div>
    <myModal ref="childMethod">
      <div slot="modal-content">
        <div v-if="hasFind" id="success">
          <p class="title">
            <img src="../../assets/image/personCenter/Okay.png">
          </p>
          <p class="cont">兑换物品成功</p>
          <p class="msg">请耐心等待克服与您联系</p>
          <button @click="modalClose()">我知道了</button>
        </div>
        <div id="fail">
          <p class="title">
            <img src="../../assets/image/personCenter/Fail.png">
          </p>
          <p class="cont">兑换失败</p>
          <p class="msg">抱歉，您输入的兑换码有误或不存在</p>
          <p class="msg" style="margin-bottom: 30px;">请确认后重新兑换</p>
          <button @click="modalClose()">我知道了</button>
        </div>
      </div>
    </myModal>
    <commonPart :linkActive="7">
      <div slot="pageRight">
        <div id="myExchange">
          <div class="top">
            <p class="title">券码兑换</p>
            <p class="line"></p>
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="券码兑换" name="first">
                <div class="shopBox">
                  <p class="shopBtn">
                    <input type="text" v-model="shopId" placeholder="请输入您要兑换的券码">
                    <button @click="findShop()">兑换</button>
                  </p>
                  <div class="shops" v-if="hasFind">
                    <img :src="things.logo">
                    <p>
                      <span>{{things.name}}</span>
                    </p>
                  </div>
                </div>
                <p class="line"></p>
                <div class="footer" v-if="hasFind">
                  <p class="title">收货人信息</p>
                  <div class="personMsg">
                    <p>
                      <span>&nbsp;&nbsp;&nbsp;&nbsp;收货人姓名</span>
                      <input type="text" placeholder="请输入真实姓名" v-model="myName">
                    </p>
                    <p>
                      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;收货人QQ</span>
                      <input type="text" placeholder="请输入收货人QQ" v-model="qqNumber">
                    </p>
                    <p>
                      <span>收货人手机号</span>
                      <input type="text" placeholder="请输入收货人手机号" v-model="mobile">
                    </p>
                    <p>请如实填写您的联系方式，我们的工作人员会通过您填写的方式联系您发放奖品</p>
                  </div>
                  <p class="submit">
                    <button @click="exchange()">提交</button>
                  </p>
                </div>
              </el-tab-pane>
              <el-tab-pane label="兑换记录" name="second">
                <div class="exchange">
                  <div class="exchange-table">
                    <ul class="exchangeTitle clear">
                      <li>兑换券码</li>
                      <li>物品</li>
                      <li>时间</li>
                      <li>状态</li>
                    </ul>
                    <ul class="exchangeCont clear" v-for="item in exchangeList">
                      <li class="ellipsisS">{{ item.voucherCode }}</li>
                      <li class="ellipsisS">{{item.name}}</li>
                      <li>{{ item.createDate | formatTime}}</li>
                      <li>
                        <span class="done" v-if="item.state === 1">已兑换</span>
                        <span class="going" v-else>进行中</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </div>
    </commonPart>
  </div>
</template>
<script>
  import './../../assets/css/myExchange.css'
  import './../../assets/css/element.css'
  export default {
    data: function () {
      return {
        modalshow: false,
        activeName: 'first',
        qqNumber: '',
        myName: '',
        shopId: this.$route.query.itemID,
        mobile: '',
        hasFind: false,
        exchangeList: [],
        things: ''
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
//    打开关闭模态框
      modalClose () {
        this.$refs.childMethod.modalClose()
      },
      modalOpen () {
        this.$refs.childMethod.modalShow()
      },
      openSuccess () {
        this.$message({
          message: '兑换成功！',
          type: 'success'
        })
      },
      openFail () {
        this.$message.error('兑换失败！')
      },
      handleClick (tab, event) {
//        console.log(tab, event);
      },
      exchange () {
        if (!this.myName) {
          this.$message.error('请填写你的姓名')
        } else if (!this.qqNumber) {
          this.$message.error('请填写你的qq号码')
        } else if (!this.mobile) {
          this.$message.error('请填写你的手机号码')
        } else {
          this.$ajax({
            method: 'POST',
            url: this.GLOBAL.commomUrl + '/stargo/package/exchange/actual',
            headers: this.GLOBAL.hearder,
            params: {
              id: this.shopId,
              mobile: this.mobile,
              name: this.myName,
              qq: this.qqNumber
            }
          })
            .then((res) => {
              console.log(res)
              if (res.data.errCode === 0) {
                this.hasFind = true
                this.modalOpen()
              } else {
                this.hasFind = false
              }
            })
        }
      },
      findShop () {
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.commomUrl + '/stargo/package/checkItem',
          headers: this.GLOBAL.hearder,
          params: {
            code: this.shopId
          }
        })
          .then((res) => {
            console.log(res)
            this.things = res.data
            if (!res.data) {
              this.modalOpen()
              console.log(res.data)
            } else {
              this.hasFind = true
            }
          })
      }
    },
    created: function () {
      this.$ajax({
        method: 'POST',
        url: this.GLOBAL.commomUrl + '/stargo/personcenter/queryVoucherLog',
        headers: this.GLOBAL.hearder,
        params: {
          pageNum: 1,
          pageSize: 10
        }
      })
        .then((res) => {
          console.log(res.data)
          this.exchangeList = res.data.list
        })
    }
  }
</script>
<style scoped="">

</style>
