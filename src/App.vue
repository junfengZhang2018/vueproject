<template>
  <div>
      <!-- 1.0 头部 -->
      <mt-header fixed title="Vue_Project"></mt-header>
      
        <div @click="goback()" v-show="isShowBack" class="backStyle" style="">&lt;返回</div>
      
      <!-- 2.0 中间内容 -->
      <router-view class="mt40"></router-view>

      <!-- 3.0 底部TabBar -->
      <mt-tabbar v-show="isShowTabBar" :fixed="true">
        <mt-tab-item>
          <router-link to="/home">
            <img src="http://img08.jiuxian.com/bill/2016/0224/cccd8df26a754c139de800406af82178.png">
          </router-link>
        </mt-tab-item>
        <mt-tab-item>
          <router-link to="/category">
            <img src="http://img07.jiuxian.com/bill/2016/0224/36a49b28ec5e4cdf9dbe37988199487d.png">
          </router-link>
        </mt-tab-item>
        <mt-tab-item>
          <img src="http://img08.jiuxian.com/bill/2016/0224/42baf46987b6460bb43b3396e9941653.png">
        </mt-tab-item>
        <mt-tab-item>
          <img src="http://img09.jiuxian.com/bill/2016/0224/cba9029a8f4444a989a2ab5aa84c6538.png">
        </mt-tab-item>
      </mt-tabbar>
  </div>
</template>

<!-- scoped代表样式私有，只能在当前组件中起作用 -->
<style scoped>
  .mint-tabbar > .mint-tab-item.is-selected{
    background-color: #fafafa;
  }

  img{
    width:42px;
    height: 35px;
  }

  .mt40{
    margin-top:40px;
  }

  .backStyle{
    z-index:5;
    color:#fff;
    position:fixed;
    top:11px;
    left:5px;
    font-size:14px;
  }
</style>

<script>
  export default{
    data(){
      return {
        isShowBack:false,
        isShowTabBar:true
      }
    },
    methods:{
      toggle:function(path){
        if(path!=='/home'){
          // console.log(this)   里面的this就是指这个Vue对象
          this.isShowBack=true;
          this.isShowTabBar=false;
        }else{
          this.isShowBack=false;
          this.isShowTabBar=true;
        }
      },
      goback:function(){
        this.$router.go(-1);
      }
    },
    created:function(){
      this.toggle(this.$route.path);
    },
    watch:{
      $route(newvalue,old){
        // console.log(newvalue)
        this.toggle(newvalue.path);
      }
      // $route:function(newValue,oldValue){
      //   console.log(newValue)
      //    this.toggle(newValue.path);
      // }
    }
  }
</script>
