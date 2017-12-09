<template>
   <div>
       <subcomment :commentId="$route.query.goodsId"></subcomment>
   </div>
</template>
   
<style scoped>
   
</style>
   
<script>
   import common from '../../common/common.js'
   import subcomment from '../subcomponent/subcomment.vue'

   export default {
       data() {
           return {
           }
       },
       created() {
           
       },
       methods: {
           
       },
       components:{
           subcomment
       }
   }
</script>