<template>
  <div>
    <a class="btn" @click="toggleShow">
      <slot name="crop">
      set avatar
      </slot>
    </a>
    <my-upload field="img"
               @crop-success="cropSuccess"
               @crop-upload-success="cropUploadSuccess"
               @crop-upload-fail="cropUploadFail"
               v-model="show"
               :width="this.width"
               :height="this.height"
               url=""
               :headers="headers"
               ></my-upload>
    <!--<img :src="imgDataUrl">-->
    <!--<img :src="returnUrl" v-if="returnUrl">-->
  </div>
</template>
<script>
  import 'babel-polyfill'
  import myUpload from 'vue-image-crop-upload'
  export default {
    data: function () {
      return {
        url: this.GLOBAL.commomUrl + '/upload/uploadBase64Img',
        show: false,
        headers: {'Content-Type': 'application/json'},
        imgDataUrl: ''
      }
    },
    components: {
      'my-upload': myUpload
    },
    methods: {
      toggleShow () {
        this.show = !this.show
      },
      cropSuccess (imgDataUrl, field) {
        this.imgDataUrl = imgDataUrl
        var _this = this
        _this.$ajax({
          method: 'POST',
          url: _this.GLOBAL.commomUrl + '/upload/uploadBase64Img',
          headers: {'Content-Type': 'application/json'},
          data: _this.imgDataUrl
        })
          .then((response) => {
            if (response.status === 200) {
              _this.$emit('getURL', response.data.path)
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      cropUploadSuccess (jsonData, field) {
        console.log('-------- upload success --------')
        console.log(jsonData)
        console.log('field: ' + field)
      },
      cropUploadFail (status, field) {
        console.log('-------- upload fail --------')
        console.log(status)
        console.log('field: ' + field)
      }
    },
    props: {
      width: {
        type: Number,
        default: 100
      },
      height: {
        type: Number,
        default: 100
      }
    }
  }
</script>
<style>
 #app .vue-image-crop-upload .vicp-wrap{background-color: #141720}
 #app .vue-image-crop-upload .vicp-wrap .vicp-operate a{color: #b8babc;}
 #app .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-right .vicp-preview .vicp-preview-item img{padding: 0px;border: 1px solid #b8babc;}
</style>
