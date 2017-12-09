<template>
   <div>
       <div @click="minus()" class="left">-</div>
       <div class="middle">{{count}}</div>
       <div @click="add()" class="right">+</div>
   </div>
</template>
   
<style scoped>
    .left,.middle,.right{
       display: inline-block;
       border: 1px solid rgba(92, 92, 92, 0.3);
       width: 35px;
       height: 35px;
       text-align: center;
       line-height: 35px;
       margin-bottom: 6px;
   }

   .middle{
       width: 40px;
   }
</style>
   
<script>
   
   export default {
       data() {
           return {
               count:1
           }
       },
       props:['stock_quantity'],
       methods: {
           minus(){
               if(this.count>1){
                   this.count--
                   this.$emit('countChange',this.count)
               }
           },
           add(){
               if(this.count<this.stock_quantity){
                   this.count++
                   this.$emit('countChange',this.count)
               }
           }
       }
   }
</script>