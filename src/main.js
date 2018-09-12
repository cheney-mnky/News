import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueResource from 'vue-resource';
Vue.use(VueResource);


import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

  // 创建、引入组件
  import Home from "./components/Home.vue";
  import News from "./components/News.vue";
  import Details from "./components/News/Details.vue";
  import Content from "./components/Content.vue";

// 配置路由
const routes = [
  { path:'/home', component: Home},
  { path:'/news',component: News,name:'news', 
    children:[
    {path: 'details/:aid',component: Details},
    ]
  }, 
  { path:'/content/:bid',component: Content},
  { path:'*',redirect: '/home'},
]

//实例化VueRouter
const router = new VueRouter({
  mode:"history",
	routes  //相当于 routes:routes
})

//挂载路由
new Vue({
  el: '#app',
  router, //挂载路由
  render: h => h(App)
})

// <router-view> </router-view> 放在根组件app.vue，表示根据路由，动态加载的组件放在根组件

import './assets/CSS/basic.scss';