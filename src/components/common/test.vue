<template>
  <div>
    222
    <p class="text">34534</p>
    <img-cut @getURL="getURL"></img-cut>
    <img :src="returnUrl" v-if="returnUrl">
  </div>
</template>
<script>
  export default {
    data: function () {
      return {
        returnUrl: ''
      }
    },
    methods: {
      getURL: function (val) {
        this.returnUrl = val
      }
    }
  }
</script>
<!--<style lang="scss" scoped>-->
  <!--$primaryColor: #fff;-->
  <!--.text{color: $primaryColor}-->
<!--</style>-->
