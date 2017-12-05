<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
               
                 <router-link :to="'/news/newsinfo/'+item.id">    
                        <img class="mui-media-object mui-pull-left" :src="item.img_url">
                        <div class="mui-media-body">
                            {{item.title}}
                            <p class="mui-ellipsis">{{item.add_time | fmtDate}}</p>
                        </div>
                    
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                newslist:[]
            }
        },
        created(){
            this.getNewsData()
        },
        methods:{
            getNewsData(){
                const url = "http://vue.studyit.io/api/getnewslist"
                    
                this.$http.get(url).then(response=>{
                    // console.log(response)
                    // console.log(Date.parse(response.body.message[0].add_time))
                    this.newslist = response.body.message
                })
            }
        }
    }

</script>