<template>
  <div>
    <div class="div1">
      <router-link to="/home">首页</router-link>
      <router-link to="/news/details/499">新闻</router-link> 
    </div>
    <br>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return { 
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
.div1{
  text-align:center;
  background-color: #ddd;
  height: 4rem;
  line-height: 3.1rem;
  font-size: 3.1rem;
}
</style>
