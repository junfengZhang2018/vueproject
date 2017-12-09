<template>
   <div>
       <!-- 1.轮播图组件 -->
        <swiper  :url="'api/getthumimages/'+this.$route.params.goodsId" :time="2000"></swiper>

       <!-- 2.商品价格、购买按钮 -->
        <div class="goodsInfoStyle">
            <h5>{{goodsInfo.title}}</h5>
            <p>
                市场价:<s>￥{{goodsInfo.market_price}}</s> &nbsp;&nbsp;销售价:￥<span>{{goodsInfo.sell_price}}</span>
            </p>
            <subnumber v-on:countChange="getSubNumberCount" v-if="goodsInfo.stock_quantity" :stock_quantity="goodsInfo.stock_quantity"></subnumber>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button @click="addToShopCart()" type="danger" size="small">加入购物车</mt-button>
       </div>

       <!-- 3.商品参数 -->
        <div class="goodsParamsStyle">
           <h6>商品参数</h6>
           <ul>
               <li>商品货号:{{goodsInfo.goods_no}}</li>
               <li>库存情况:剩余{{goodsInfo.stock_quantity}}件</li>
               <li>上架时间:{{goodsInfo.add_time | fmtDate}}</li>
           </ul>
       </div>

       <!-- 4.介绍、评论按钮 -->
       <div class="pictureAndTextStyle">
           <mt-button @click="goToPictureAndText()" size="large" type="primary" :plain="true">图文介绍</mt-button>
           <mt-button @click="goToGoodsComment()" size="large" class="goodsCommentStyle" type="danger" :plain="true">商品评论</mt-button>
       </div>
   </div>
</template>
   
<style scoped>
   .lunboStyle,.goodsInfoStyle,.goodsParamsStyle,.pictureAndTextStyle{
       margin: 8px;
       border: 1px solid rgba(92, 92, 92, 0.3);
       border-radius: 5px;
       padding: 6px;
   }

   h5{
       color: #0094ff;
       font-size: 16px;
       border-bottom: 1px solid rgba(92, 92, 92, 0.3);
       padding-bottom: 8px;
   }

   .goodsInfoStyle p span{
       color: red;
       font-size: 16px;
   }

   h6{
       border-bottom: 1px solid rgba(92, 92, 92, 0.3);
       padding-bottom: 8px;
   }

   .goodsParamsStyle ul{
       margin: 0px;
       padding: 0px;
   }

   .goodsParamsStyle ul li{
       list-style: none;
       font-size: 14px;
   }

   .goodsCommentStyle{
       margin-top: 10px;
   }
</style>
   
<script>
   import common from '../../common/common.js'
   import swiper from '../subcomponent/swiper.vue'
   import subnumber from '../subcomponent/subnumber.vue'
   import bus from '../../common/commonvue.js'
   import { Toast } from 'mint-ui';


   export default {
       data() {
           return {
               goodsInfo:{},
                count:1
           }
       },
       created() {
           this.getGoodsInfoData()
       },
       methods: {
           getGoodsInfoData(){
               const url = `${common.apihost}api/goods/getinfo/${this.$route.params.goodsId}`

               this.$http.get(url).then(response=>{
                   this.goodsInfo = response.body.message[0]
                })
           },
           goToPictureAndText(){
               this.$router.push({path:'/goods/pictureAndText',query:{goodsId:this.$route.params.goodsId}})
           },
           goToGoodsComment(){
               this.$router.push({path:'/goods/goodsComment',query:{goodsId:this.$route.params.goodsId}})
           },
           getSubNumberCount(count){
               this.count = count
           },
           addToShopCart(){
               Toast({
                    message: '加入购物车成功',
                    position: 'middle',
                    duration: 2000
               });

               bus.$emit('getCount',this.count)
           }    
       },
       components:{
           swiper,
           subnumber
       }
   }
</script>