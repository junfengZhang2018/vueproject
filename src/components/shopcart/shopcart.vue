<template>
   <div>
      <!-- 1.0 展示购物车列表 -->
       <div class="shopCartItemStyle" >
           <!-- 开关 -->
           <mt-switch class="switchStyle" ></mt-switch>
           <!-- 商品缩略图 -->
           <div class="thumbImageStyle">
               <img  alt="">
           </div>
           <!-- 价格和数量 -->
           <div class="titleAndPriceStyle">
               <p></p>
               <p>
                   <span></span>
                   <span>商品数量:</span>
               </p>
           </div>
           <!-- 删除按钮 -->
           <mt-button  class="deleteButtonStyle" size="small" type="danger">删除</mt-button>
       </div>

       <!-- 2.0 展示统计信息 -->
       <div class="statisticsStyle">
           <div>
               <h4>总计(不含运费)</h4>
               <p>已经勾选商品 <span></span> 件,总价 <span></span> 元</p>
           </div>
           <mt-button class="goToPayStyle" size="normal" type="danger">去结算</mt-button>
       </div>
   </div>
</template>
   
<style scoped>
   .shopCartItemStyle{
       height: 100px;
       display: flex;
       align-items: center;
       border-bottom: 1px solid rgba(92,92,92,0.3);
   }

   .switchStyle{
       margin-left: 5px;
   }

   .thumbImageStyle{
       max-width:70px;
       height: 70px;
       border: 1px solid rgba(92,92,92,0.3);
       padding: 3px;
       border-radius: 5px;
       margin-left: 5px;
   }

   .thumbImageStyle img{
       width:100%;
       height: 100%;
   }

   .deleteButtonStyle{
       margin-right: 5px;
   }

   .titleAndPriceStyle{
       margin-left: 5px;
       flex: 1;
   }

   .titleAndPriceStyle p:first-child{
       color: #0094ff;
       font-size: 14px;
   }

   .titleAndPriceStyle p:last-child span:first-child{
       font-size: 16px;
       color: red;
   }

   .statisticsStyle{
       height: 100px;
       display: flex;
       background-color: rgba(92,92,92,0.3);
       justify-content: space-between;
       align-items: center;
   }

   .statisticsStyle div:first-child{
       margin-left: 5px;
   }

   .statisticsStyle div:first-child span{
       color: red;
       font-size: 18px;
   }

   .goToPayStyle{
       margin-right: 5px;
   }
</style>
   
<script>
   import common from '../../common/common.js'
   
   export default {
       data() {
           return {
           }
       },
       created() {
           
       },
       methods: {
           
       }
   }
</script>