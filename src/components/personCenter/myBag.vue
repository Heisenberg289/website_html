<template>
  <div>
    <commonPart :linkActive="2">
      <div slot="pageRight">
        <div id="mybag">
          <p class="title">我的背包</p>
          <p class="line"></p>
          <el-tabs v-model="activeName" class="walletTab" @tab-click="handleClick" onselectstart="return false">
            <el-tab-pane label="全部" name="first">
            </el-tab-pane>
            <el-tab-pane label="虚拟物品" name="second">
            </el-tab-pane>
            <el-tab-pane label="礼包" name="third">
            </el-tab-pane>
            <el-tab-pane label="兑换券" name="forth">
            </el-tab-pane>
          </el-tabs>
          <div class="input-front">
            <span>背包容量：{{bagList.length}}/36</span>
            <div class="input-with-select">
              <div class="search">
              <el-input v-model="inputVal" placeholder="道具物品名称搜索"></el-input>
              <i class="el-icon-search search-btn" @click="searchList"></i>
              </div>
            </div>
          </div>
          <div class="picture-list">
            <div class="picture" v-for="item in bagList">
              <a class="hoverFloat" @click="exchangeGift(item.type,item.id,item.itemId,item.kind)" ></a>
              <div class="picture-images">
                <img :src="item.logo" width="181" height="181">
              </div>
              <p class="picture-line"  v-if="item.kind==1" style="background-color: #3dc6ff"></p>
              <p class="picture-line"  v-if="item.kind==2" style="background-color: #3dc6ff"></p>
              <p class="picture-line"  v-if="item.kind==3" style="background-color: #3dc6ff"></p>
              <p class="picture-line"  v-if="item.kind==4" style="background-color: #ff5722"></p>
              <p class="picture-line"  v-if="item.kind==5" style="background-color: #3fdc45"></p>
              <p class="picture-line"  v-if="item.kind==null" style="background-color: #3dc6ff"></p>
              <div class="picture-name">
                <span class="giftname ellipsis" :title="item.name">{{item.name}}</span>
                <span class="giftnumber">×{{item.num}}</span>
              </div>
            </div>
          </div>
          <div class="block">
            <el-pagination
              layout="prev, pager, next"
              :current-page.sync ="CurrentPage"
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
  import './../../assets/css/myBag.css'
  import './../../assets/css/myWallet.css'
  import './../../assets/css/element.css'
  export default {
    data: function () {
      return {
        activeName: 'first',
        bagkind: '',
        bagnum: '',
        bagList: [],
        pageSize: 12,
        CurrentPage: 1,
        total: null,
        inputVal: ''
      }
    },
    methods: {
      giftsDetail: function (arry) {
        let str = ''
        arry.forEach(function (value, index) {
          str = str.concat(value.name + '*' + value.num + ' ')
        })
//        console.log(str, 555)
        return str
      },
      exchangeGift: function () {
        if (arguments[0] === 1) {
          this.$ajax({
            method: 'POST',
            url: this.GLOBAL.webConfig + '/package/exchange/currency',
            headers: this.GLOBAL.hearder,
            params: {
              id: arguments[1]
            }
          })
            .then((response) => {
//              console.log(response)
              if (response.data.errCode === 0) {
                this.$message({
                  showClose: true,
                  message: '恭喜你，兑换成功',
                  type: 'success'
                })
                this.getBagList(this.getKindNum, 1, this.inputVal)
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
        if (arguments[0] === 2) {
          this.$router.push({path: './myexchange', query: { itemID: arguments[2] }})
        }
        if (arguments[0] === 3) {
          this.$ajax({
            method: 'POST',
            url: this.GLOBAL.webConfig + '/package/exchange/virtual',
            headers: this.GLOBAL.hearder,
            params: {
              id: arguments[1]
            }
          })
            .then((response) => {
//              console.log(response)
              if (response.data.errCode === 0) {
                this.$message({
                  showClose: true,
                  message: '恭喜你，兑换成功',
                  type: 'success'
                })
                this.getBagList(this.getKindNum, 1, this.inputVal)
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
        if (arguments[3] === 4) {
          this.$ajax({
            method: 'POST',
            url: this.GLOBAL.webConfig + '/package/openGift',
            headers: this.GLOBAL.hearder,
            params: {
              id: arguments[1]
            }
          })
            .then((response) => {
//              console.log(response)
              this.$message({
                showClose: true,
                message: '恭喜你获得:' + this.giftsDetail(response.data.gifts),
                type: 'success'
              })
              this.getBagList(this.getKindNum, 1, this.inputVal)
            })
            .catch(function (error) {
              console.log(error)
            })
        }
      },
      searchList: function () {
        this.getBagList(this.getKindNum, 1, this.inputVal)
      },
      handleClick: function (tab, event) {
        this.CurrentPage = 1
        this.getBagList(this.getKindNum)
      },
      handleCurrentChange: function (currentPage) {
        this.getBagList(this.getKindNum, currentPage)
      },
      getBagList: function (kind, page, name) {
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.webConfig + 'package/items',
          headers: this.GLOBAL.hearder,
          params: {
            kind: kind,
            num: this.bagnum,
            order: true,
            pageNum: page,
            pageSize: this.pageSize,
            name: name
          }
        })
          .then((response) => {
//            console.log(response)
            this.bagList = response.data.list
            this.total = response.data.total
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    },
    created: function () {
      this.getBagList(this.getKindNum)
    },
    computed: {
      getKindNum () {
        if (this.activeName === 'first') {
          return null
        }
        if (this.activeName === 'second') {
          return 3
        }
        if (this.activeName === 'third') {
          return 4
        }
        if (this.activeName === 'forth') {
          return 5
        }
      }
    }
  }
</script>
<style scoped="">
</style>
