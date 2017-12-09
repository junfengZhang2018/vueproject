<template>
   <div>
       <mt-swipe :auto="time">
            <mt-swipe-item v-for="(item,index) in LunboArray" :key="index">
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>
   </div>
</template>
   
<style scoped>
   .mint-swipe {
        height: 250px;
        width: 100%;
    }

    img {
        width: 100%;
        height: 100%;
    }
</style>
   
<script>
   import common from '../../common/common.js'
   
   export default {
       data() {
           return {
               LunboArray:[]
           }
       },
       props:['url','time'],
       created() {
           this.getLunboData()
       },
       methods: {
           getLunboData(){
                const url = `${common.apihost}${this.url}`
                this.$http.get(url).then(response=>{
                    response.body.message.forEach(item=>{
                        if(!item.img){
                            item.img = item.src
                        }
                        
                    })
                    this.LunboArray = response.body.message
                })
           }
       }
   }
</script>