<template>
  <div> 
    <el-button type="primary" icon="el-icon-success">{{msg}}</el-button>
   <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10">
      <li v-for="item in list">
        <router-link :to ="'/content/'+ item.aid"> {{ item.title }}</router-link>
      </li>
  </ul>
    <h1 id="hidden" style= "text-align: center"> 正在加载 ... ...</h1>
  </div>
</template>

<script type="text/javascript">
  export default {
    data(){
      return {
        msg: '新闻列表',  
        list:[],
        page:1, 
        loading:false
      }
    },
    methods:{
        loadMore() {  
          this.requestData();     
        }, 
      requestData(){ 
        this.loading = true; 
        var that = this;
        var api= 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page='+this.page;
        that.$http.jsonp(api).then(function(response){ 
          that.list = that.list.concat(response.body.result);
          if(response.body.result.length>19){
          that.loading = false; 
        } else {
          document.getElementById("hidden").style.display="none";
         }
          },function(err){
            console.log(err);
          });
        this.page++;
        console.log(this.page);   
      },
    },
  }

</script>

<style type="text/css">
  .scroll{
    line-height: 2rem;
    height: 2rem
  }
</style>


