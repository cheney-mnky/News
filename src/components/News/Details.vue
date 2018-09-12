<template>
  <div>
  <div class='content'>
   <h3>{{list.title}}</h3>
   <div v-html="list.content">
   </div>
  </div>
</div>
</template>

<script type="text/javascript">
  export default {
    data(){
      return {
        msg:'',
        list:[],
        aid:'',
      }
    },
    created(){
      console.log("我是created console"),
      this.requestDetails();
    },
    watch: {
      "$route" () {
        this.requestDetails();}
    },
    /*
或者watch的另一种写法：
    watch: {
      "$route" : "requestDetails"
    },

    mounted(){
      console.log("我是Details console");
      console.log(this.$route.params); 
     // var aid = this.$route.params.aid; 
      this.requestDetails();
    },*/
    methods:{
      requestDetails(){
         var that = this ;
          var aid = that.$route.params.aid; 
        var api = 'http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid='+aid;
      
         this.$http.get(api).then(function(response){
          // console.log(response)
          that.list = response.body.result[0];
         },function(err){
          console.log(err)
         })
      }
    }
  }
  

</script>

<style type="text/css">
  img{
      max-width: 90%;
    }
.content{ 
    
    text-align: center;
    float:right;
    line-height: 1.8rem; 
    font-size: 1rem;
    padding:15px; 
  }

</style>