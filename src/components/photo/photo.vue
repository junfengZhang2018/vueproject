<template>
   <div>
       <!-- 1.0 图片分类 -->
      <div class="photoCategoryStyle">
          <ul>
              <li @click="getPhotoListByCategoryId(0)">全部</li>
              <li @click="getPhotoListByCategoryId(item.id)" v-for="item in categoryList" :key="item.id">{{item.title}}</li>
          </ul>
      </div>

      <!-- 2.0 图片列表 -->
      <div class="photoListStyle">
          <ul>
              <li v-for="item in photoList" :key="item.id">
                  <router-link :to="'/photo/photoinfo/'+item.id">
                    <img :src="item.img_url" alt="">
                    <p class="titleAndZhaiyaoStyle">
                        <span>{{item.title}}</span><br/>
                        {{item.zhaiyao}}
                    </p>
                  </router-link>
              </li>
          </ul>
      </div>
   </div>
</template>
   
<style scoped>
   .photoCategoryStyle{
        overflow-x: auto;
    }

    /** 图片分类的样式 */
    .photoCategoryStyle ul{
        margin: 3px 2px;
        padding: 0px 0px 12px 0px;
        white-space: nowrap;
    }

    .photoCategoryStyle ul li{
        list-style: none;
        display: inline-block;
        font-size: 16px;
        color: #0094ff;
        margin: 0px 3px;
    }

    /**
        图片列表的样式
    */
    .photoListStyle ul{
        margin: 2px;
        padding: 0px 2px;
    }

    .photoListStyle ul li{
        list-style: none;
        position: relative;
    }

    img{
        width: 100%;
        height: 400px;
    }

    .titleAndZhaiyaoStyle{
        position: absolute;
        left: 2px;
        bottom: 2px;
        color: white;
        background-color: rgba(0, 0, 0, 0.3);
    }

    .titleAndZhaiyaoStyle span {
        font-size: 16px;
        font-weight: 600;
    }
</style>
   
<script>
    // import  {Indicator}  from 'mint-ui';
   
   export default {
       data() {
           return {
               categoryList:[],
               photoList:[]
           }
       },
       created() {
           console.log(this)
           this.getCategoryData()
           this.getPhotoListByCategoryId(0)
       },
       methods: {
           getCategoryData(){
               const url = 'http://vue.studyit.io/api/getimgcategory'
               this.$http.get(url).then(response=>{
                   this.categoryList = response.body.message
               })
           },
           getPhotoListByCategoryId(id){
               const url = 'http://vue.studyit.io/api/getimages/'+id
               this.$indicator.open({
                    text: 'Loading...',
                    spinnerType: 'fading-circle'
                });
               this.$http.get(url).then(response=>{
                   console.log(response.body.message)
                   this.photoList = response.body.message
                   this.$indicator.close();
               })
           }
       }
   }
</script>