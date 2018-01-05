<template>
  <div class="PageA">
    <div class="header">
      <i class="icon" @click="back"><</i>
       陋室铭
    </div>
    <div class="content">
      <router-link to='/page-B'>
        山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有？
      </router-link>
    </div>
  </div>
</template>

<script type="text/javascript">
export default{
  data () {
    return {
      message: 'hello'
    }
  },
  methods: {
    back () {
      this.$router.goBack()
    }
  }
}
</script>

<style scoped>
.header{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  background: #5454db;
  color: #fff;
}
.icon{
  position: absolute;
  left: 10px;
  top: 5px;
  font-size: 30px;
  font-weight: bold;
}
.content{
  background: #fff;
  padding: 20px;
}
</style>
