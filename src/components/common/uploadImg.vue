<template>
  <div>
    <div id="uploadImg">
        <label>
         <div :style="topStyle" :class="topClass">
           <slot name="topSlot"></slot>
         </div>
          <input type="file" id="change" accept="image/jpeg,image/jpg,image/png,image/svg" @change="change" style="display: none">
        </label>
    </div>
  </div>
</template>
<style>
  .hoverFloat{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
  #uploadImg .topBar_02 {
    position: absolute;
    top: 0;
    height: 50px;
    line-height: 50px;
    color: white;
    left: 0%;
    font-size: 16px;
  }

  #uploadImg .topBar_02 img {
    vertical-align: middle;
    width: 45px;
    margin-top: -5px;
  }

  #uploadImg #button {
    line-height: 30px;
    position: absolute;
    right: 4%;
    top: 10px;
    width: 60px;
    height: 30px;
    border: none;
    border-radius: 5px;
    background: white;
    background-color: #1aac19;
    color: white;
    font-size: 18px;
  }

  #uploadImg .show {
    position: absolute;
    right: 24px;
    top: 15px;
    width: 60px;
    height: 60px;
    overflow: hidden;
    /*position: relative;*/
    /*border: 1px solid #d5d5d5;*/
    display: inline-block;
  }

  #uploadImg .picture {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  #uploadImg .container {
    padding-top: 170px;
    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 1);
  }

  #uploadImg #image {
    max-width: 100%;
  }

  .cropper-view-box, .cropper-face {
    /*border-radius: 50%;*/
  }

  /*!
   * Cropper.js v1.0.0-rc
   * https://github.com/fengyuanchen/cropperjs
   *
   * Copyright (c) 2017 Fengyuan Chen
   * Released under the MIT license
   *
   * Date: 2017-03-25T12:02:21.062Z
   */

  .cropper-container {
    font-size: 0;
    line-height: 0;
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    direction: ltr;
    -ms-touch-action: none;
    touch-action: none
  }

  .cropper-container img {
    /* Avoid margin top issue (Occur only when margin-top <= -height) */
    display: block;
    min-width: 0 !important;
    max-width: none !important;
    min-height: 0 !important;
    max-height: none !important;
    width: 100%;
    height: 100%;
    image-orientation: 0deg
  }

  .cropper-wrap-box,
  .cropper-canvas,
  .cropper-drag-box,
  .cropper-crop-box,
  .cropper-modal {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .cropper-wrap-box {
    overflow: hidden;
  }

  .cropper-drag-box {
    opacity: 0;
    background-color: #fff;
  }

  .cropper-modal {
    opacity: .5;
    background-color: #000;
  }

  .cropper-view-box {
    display: block;
    overflow: hidden;
    width: 100%;
    height: 100%;
    outline: 1px solid #39f;
    outline-color: rgba(51, 153, 255, 0.75);
  }

  .cropper-dashed {
    position: absolute;
    display: block;
    opacity: .5;
    border: 0 dashed #eee
  }

  .cropper-dashed.dashed-h {
    top: 33.33333%;
    left: 0;
    width: 100%;
    height: 33.33333%;
    border-top-width: 1px;
    border-bottom-width: 1px
  }

  .cropper-dashed.dashed-v {
    top: 0;
    left: 33.33333%;
    width: 33.33333%;
    height: 100%;
    border-right-width: 1px;
    border-left-width: 1px
  }

  .cropper-center {
    position: absolute;
    top: 50%;
    left: 50%;

    display: block;

    width: 0;
    height: 0;

    opacity: .75
  }

  .cropper-center:before,
  .cropper-center:after {
    position: absolute;
    display: block;
    content: ' ';
    background-color: #eee
  }

  .cropper-center:before {
    top: 0;
    left: -3px;
    width: 7px;
    height: 1px
  }

  .cropper-center:after {
    top: -3px;
    left: 0;
    width: 1px;
    height: 7px
  }

  .cropper-face,
  .cropper-line,
  .cropper-point {
    position: absolute;

    display: block;

    width: 100%;
    height: 100%;

    opacity: .1;
  }

  .cropper-face {
    top: 0;
    left: 0;

    background-color: #fff;
  }

  .cropper-line {
    background-color: #39f
  }

  .cropper-line.line-e {
    top: 0;
    right: -3px;
    width: 5px;
    cursor: e-resize
  }

  .cropper-line.line-n {
    top: -3px;
    left: 0;
    height: 5px;
    cursor: n-resize
  }

  .cropper-line.line-w {
    top: 0;
    left: -3px;
    width: 5px;
    cursor: w-resize
  }

  .cropper-line.line-s {
    bottom: -3px;
    left: 0;
    height: 5px;
    cursor: s-resize
  }

  .cropper-point {
    width: 5px;
    height: 5px;

    opacity: .75;
    background-color: #39f
  }

  .cropper-point.point-e {
    top: 50%;
    right: -3px;
    margin-top: -3px;
    cursor: e-resize
  }

  .cropper-point.point-n {
    top: -3px;
    left: 50%;
    margin-left: -3px;
    cursor: n-resize
  }

  .cropper-point.point-w {
    top: 50%;
    left: -3px;
    margin-top: -3px;
    cursor: w-resize
  }

  .cropper-point.point-s {
    bottom: -3px;
    left: 50%;
    margin-left: -3px;
    cursor: s-resize
  }

  .cropper-point.point-ne {
    top: -3px;
    right: -3px;
    cursor: ne-resize
  }

  .cropper-point.point-nw {
    top: -3px;
    left: -3px;
    cursor: nw-resize
  }

  .cropper-point.point-sw {
    bottom: -3px;
    left: -3px;
    cursor: sw-resize
  }

  .cropper-point.point-se {
    right: -3px;
    bottom: -3px;
    width: 20px;
    height: 20px;
    cursor: se-resize;
    opacity: 1
  }

  @media (min-width: 768px) {

    .cropper-point.point-se {
      width: 15px;
      height: 15px
    }
  }

  @media (min-width: 992px) {

    .cropper-point.point-se {
      width: 10px;
      height: 10px
    }
  }

  @media (min-width: 1200px) {

    .cropper-point.point-se {
      width: 5px;
      height: 5px;
      opacity: .75
    }
  }

  .cropper-point.point-se:before {
    position: absolute;
    right: -50%;
    bottom: -50%;
    display: block;
    width: 200%;
    height: 200%;
    content: ' ';
    opacity: 0;
    background-color: #39f
  }

  .cropper-invisible {
    opacity: 0;
  }

  .cropper-bg {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC');
  }

  .cropper-hide {
    position: absolute;

    display: block;

    width: 0;
    height: 0;
  }

  .cropper-hidden {
    display: none !important;
  }

  .cropper-move {
    cursor: move;
  }

  .cropper-crop {
    cursor: crosshair;
  }

  .cropper-disabled .cropper-drag-box,
  .cropper-disabled .cropper-face,
  .cropper-disabled .cropper-line,
  .cropper-disabled .cropper-point {
    cursor: not-allowed;
  }
  #uploadImg{background-color: white;}
  #uploadImg .teamc_01 {
    padding: 0 0 0 4%;
    padding-bottom: 110px;
  }

  #uploadImg .teamc_02 {
    background-color: #000000;
    position: relative;
    line-height: 50px;
    border-bottom: 1px solid #c1c1c1;
    color: white;
    font-size: 18px;
    text-align: center
  }

  #uploadImg .teamc_03 {
    color: white;
    font-size: 16px;
    position: absolute;
    left: 0%;
  }

  #uploadImg .teamc_03 img {
    vertical-align: middle;
    margin-top: -5px;
  }

  #uploadImg .teamc_04 {
    height: 90px;
    color: #bababa;
    font-size: 12px;
    border-bottom: 1px solid #f2f2f2;
    width: 100%;
    line-height: 90px;
    position: relative;
  }

  #uploadImg .teamc_04 img {
    vertical-align: middle
  }


</style>
<script>
  export default {
    props: {
      topStyle: {
      },
      topClass: {
      }
    },
    data: function () {
      return {
        dataURL: '',
        imgURL: ''
      }
    },
    created: function () {
    },
    methods: {
      change (e) {
        var _this = this
        var file = e.target.files[0]
        if (file.size > 2 * 1024 * 1024) {
          this.$message.error('上传图片大于2M，请重新上传')
          return
        }
        var reader = new FileReader()
        reader.readAsDataURL(file) // 读出 base64
        reader.onloadend = function () {
          _this.dataURL = reader.result
          console.log(_this.dataURL)
          _this.$ajax({
            method: 'POST',
            url: _this.GLOBAL.commomUrl + '/upload/uploadBase64Img',
            headers: {'Content-Type': 'application/json'},
            data: _this.dataURL
          })
            .then((response) => {
              if (response.status === 200) {
                _this.$emit('getURL', response.data.path)
              }
            })
            .catch(function (error) {
              console.log(error)
            })
        }
      }
    },
    mounted () {
    }
  }
</script>
