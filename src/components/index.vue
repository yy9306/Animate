<template>
  <div class="index">
    <div class="header">
       中华诗词
    </div>
    <ul class="item">
      <li class="list"><router-link to='page-A'>陋室铭</router-link></li>
      <li class="list"><router-link to='page-B'>岳阳楼记</router-link></li>
      <li class="list"><router-link to='page-B'>出师表</router-link></li>
    </ul>
  </div>
</template>

<script type="text/javascript">
export default{
  data () {
    return {
      message: 'hello'
    }
  }
}
</script>

<style scoped>
.header{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  width: 100%;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  background: #5454db;
  color: #fff;
}
.item{
  background: #fff;
}
</style>
