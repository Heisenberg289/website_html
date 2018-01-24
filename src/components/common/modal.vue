<template>
  <div class="modal-outside" v-show="modalState">
      <div class=" animated bounceInDown modal-inner">
        <div class="close-btn" @click="modalClose"  v-on:mouseover="enter" @mouseleave="leave">
        <img src="./../../assets/image/label.png" />
          <img src="./../../assets/image/Close.png" class="close-btn-set" :class="{close_btn_on:closeBtnOn}"/>
        </div>
        <slot name="modal-content"></slot>
      </div>
  </div>
</template>
<script>
  export default {
    data: function () {
      return {
        modalState: false,
        closeBtnOn: false
      }
    },
    methods: {
      enter: function () {
        this.closeBtnOn = true
      },
      leave: function () {
        this.closeBtnOn = false
      },
      modalClose: function () {
        this.modalState = false
        this.$emit('modalClose')
      },
      modalShow: function () {
        this.modalState = true
      }
    }
  }
</script>
<style scoped="">
  .close-btn-set{position: absolute;left: 50%;top: 40%;transform: translate(-50%,-50%);transition: 0.3s}
  .close_btn_on{transform: translate(-50%,-50%) rotate(180deg) ;}
  .modal-outside{position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background: rgba(0,0,0,.5);}
  .modal-inner{position: fixed;top: 20%;width: 890px;min-height: 200px;background-color: #141720;left: 50%;border-radius: 4px;margin-left: -445px;box-shadow: 5px 5px 5px rgba(0,0,0,0.35)}
.close-btn{position: absolute;cursor: pointer;right: 24px;top: -10px;}
</style>
