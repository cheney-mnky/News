 <template>
  <div>
  	<hr>
    <h2>{{msg}}</h2>
    <div class="list">
      <ul>
        <el-button type="danger" icon="el-icon-d-arrow-right">新闻列表</el-button>
     	  <li v-for = "(item,key) in list"> 
          <router-link :to="'/news/details/'+item.aid">{{item.title}}</router-link> 
     	  </li>
      </ul>
    </div>
    <div class="content">
       <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/javascript"> 
  export default {
    data(){
      return {
        msg:'使用watch方法监听route变化，实现渲染子路由',
        list:['111','222','333']
      }
    },
     methods:{
      requestData(){
        var that = this;
        var api= "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
        that.$http.jsonp(api).then(function(response){ 
          that.list = response.body.result;
        },function(err){
          console.log(err)
        });
      }
    },
    mounted(){
      this.requestData();

    }
 }    
  
</script>

<style type="text/css" scoped>

  .list{  
      box-sizing: border-box;
      line-height: 1.8rem;
      border-top: 1px solid #888;
      border-right: 1px solid #888;
      font-size: 1rem;
      width: 35%;
      float: left;
  }
  .content{ 
    box-sizing: border-box;
    text-align: center;
    float:right;
    border: 2px solid #888;
    width: 65%; 
    font-size: 1rem;
    padding:1rem; 
  }


</style>