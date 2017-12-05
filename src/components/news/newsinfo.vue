<template>
    <div>
      <!-- 1.0 标题部分 -->
      <div class="titleStyle">
        <h4>{{newsInfo.title}}</h4>
        <p>{{newsInfo.add_time | fmtDate}}&nbsp;&nbsp;{{newsInfo.click}}次浏览&nbsp;&nbsp;分类:民生经济</p>
      </div>

      <!-- 2.0 内容部分 -->
      <div class="contentStyle">
        <p v-html="newsInfo.content"></p>
      </div>

      <!-- 3.0 评论子组件 -->
      <subcomment :commentId="this.$route.params.newsid"></subcomment>  
  </div>
</template>


<style scoped>
    .titleStyle,.contentStyle{
    padding: 6px;
  }

  .titleStyle{
    border-bottom: 1px solid rgba(92,92,92,0.3);
  }

  h4{
    font-size: 16px;
    color:#0094ff
  }
</style>


<script>

    import subcomment from '../subcomponent/subcomment.vue'

    export default{
        data(){
            return{
                newsInfo:{}
            }
        },
        created:function(){
            this.getNewsInfo()
        },
        methods:{
            getNewsInfo:function(){
                const url = "http://vue.studyit.io/api/getnew/"+this.$route.params.newsid;
                this.$http.get(url).then(response=>{
                    this.newsInfo = response.body.message[0];
                    // console.log(response.body.message[0])
                    
                })
            }
        },
        components:{
            subcomment:subcomment
        }
    }
</script>