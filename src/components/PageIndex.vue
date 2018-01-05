<template>
  <div class="PageIndex">
   <transition :name="transitionName">
      <router-view class="child-view" />
   </transition>
  </div>
</template>

<script type="text/javascript">
export default{
  data () {
    return {
      transitionName: 'slide-left'
    }
  },
  beforeRouteUpdate (to, from, next) {
    let isBack = this.$router.isBack
    if (isBack) {
      this.transitionName = 'slide-right'
    } else {
      this.transitionName = 'slider-left'
    }
    this.$router.isBack = false
    next()
  }
}
</script>

<style scoped>
  .child-view {
    position: absolute;
    width:100%;
    transition: all .8s cubic-bezier(.55,0,.1,1);
  }
  .slider-left-enter, .slide-right-leave-active{
    opacity: 0;
    -webkit-transform: translate(100px, 0);
    transform: translate(100px, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-100px, 0);
    transform: translate(-100px, 0);
  }
</style>
