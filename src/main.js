//导入第三方包
import Vue from 'vue'
import VueRouter from 'vue-router'

import Mint from 'mint-ui'

import VueResource from 'vue-resource'

import moment from 'moment'

//使用第三方包
Vue.use(Mint)
Vue.use(VueRouter)
Vue.use(VueResource)

//导入静态资源
import 'mint-ui/lib/style.css'
import './statics/mui/css/mui.css'
import './statics/mui/fonts/mui.ttf'
import './statics/css/site.css'
//主组件
import App from './App.vue';
//导入组件
import home from './components/home/home.vue'
import category from './components/category/category.vue'
import newslist from './components/news/news.vue'
import newsinfo from './components/news/newsinfo.vue'
//设置路由
const router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:home},
        {path:'/category',component:category},
        {path:'/news/newslist',component:newslist},
        {path:'/news/newsinfo/:newsid',component:newsinfo}
    ]
})

//全局过滤器
Vue.filter('fmtDate',(input,formatString)=>{
    const format = formatString || 'YYYY-MM-DD HH:mm:ss' ;
    return moment(input).format(format);
})

//实例化

new Vue({
    el:'#app',
    render:function (createElement) { 
        return createElement(App)
    },
    router
})