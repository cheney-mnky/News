<template>
  <div id='content'>
   {{msg}}
   <h2>{{list.title}}</h2>
   <div v-html="list.content">
   </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    data(){
      return {
        msg:'我是详情组件',
        list:[]
      }
    },
    mounted(){
      console.log(this.$route.params); 
      var aid = this.$route.params.bid; 
      this.requestDetails(aid);
    },
    methods:{
      requestDetails(aid){
        var api = 'http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid='+aid;
        var that = this ;
        this.$http.get(api).then(function(response){ 
        that.list = response.body.result[0];
        },function(err){
        console.log(err)
         })
      }
    }
  }

</script>

<style type="text/css">
  #content{
    height: 1.2rem;
    line-height: 1.4rem;
    img{
      max-width: 100%;
    }
  }

</style>