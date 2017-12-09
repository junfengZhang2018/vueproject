<template>
   <div>
       <!-- 1.0 标题部分 -->
       <div class="titleStyle">
           <h4>{{photoinfo.title}}</h4>
           <p>{{photoinfo.add_time | fmtDate('YYYY-MM-DD')}}&nbsp;&nbsp;{{photoinfo.click}}次浏览</p>
       </div>

       <!-- 2.0 缩略图 -->
       <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li v-for="(item,index) in thumbList" :key="index" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <img :src="item.src" class="preview-img" height="100" @click="$preview.open(index, thumbList)" alt="">
            </li>
        </ul> 

       <!-- 3.0 内容 -->
       <div class="contentStyle">
           <p v-html="photoinfo.content"></p>
       </div>

       <!-- 4.0 评论子组件 -->
       <subcomment :commentId="this.$route.params.imgid"></subcomment>
   </div>
</template>
   
<style scoped>
   .titleStyle,.contentStyle{
       padding: 6px;
   }

   h4{
       font-size: 16px;
       color: #0094ff;
   }

   .contentStyle p{
       color: gray;
   }

   .mui-grid-view.mui-grid-9 .mui-table-view-cell{
       border:none;
   }

   .mui-grid-view.mui-grid-9{
       border: none;
   }
</style>
   
<script>
    
    import subcomment from '../subcomponent/subcomment.vue'

   export default {
       data() {
           return {
                photoinfo:{},
                thumbList:[]
           }
       },
       created() {
           this.getPhotoInfoData()
           this.getThumbData()
       },
       methods: {
           getPhotoInfoData(){
               const url = 'http://vue.studyit.io/api/getimageInfo/'+this.$route.params.imgid

                this.$http.get(url).then(response=>{
                    this.photoinfo = response.body.message[0]
                })
           },
           getThumbData(){
               const url = 'http://vue.studyit.io/api/getthumimages/'+this.$route.params.imgid
               this.$http.get(url).then(response=>{
                   console.log(response.body.message)
                   response.body.message.forEach(item=>{
                       item.w=600;
                       item.h=600;
                   })
                   this.thumbList = response.body.message
               })
           }
       },
       components:{
           subcomment:subcomment
       }
   }
</script>