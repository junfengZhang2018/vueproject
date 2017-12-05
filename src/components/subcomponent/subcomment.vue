<template>
    <div>
        <!-- 1.0 提交评论区域 -->
      <div class="postCommentStyle">
          <h4>提交评论</h4>
          <textarea name="" ref="textAreaRef" cols="30" rows="7" placeholder="请输入评论内容"></textarea>
          <mt-button @click="postComment()" type="primary" size="large">提交评论</mt-button>
      </div>

      <!-- 2.0 展示评论列表区域 -->
      <div class="commentListStyle">
          <h4>评论列表</h4>
          <div v-for="(item,index) in commentList" :key="index" class="commentItemStyle">
              <p>{{item.content}}</p>
              <p>
                  <span>{{item.user_name}}</span>
                  <span>{{item.add_time | fmtDate}}</span>
              </p>
          </div>
          <mt-button @click="loadMore()" class="loadMoreStyle" type="danger" plain size="large">加载更多</mt-button>
      </div>
    </div>
</template>

<style scoped>
    .postCommentStyle,.commentListStyle{
        padding: 6px;
    }

    h4{
        padding-bottom: 10px;
        border-bottom: 1px solid rgba(92,92,92,0.3);
    }

    .commentItemStyle{
        height: 100px;
        overflow-y: auto;
        border-bottom:  1px solid rgba(92,92,92,0.3);
    }

    .loadMoreStyle{
        margin-top: 15px;
        margin-bottom: 10px;
    }

    .commentItemStyle p:first-child{
        margin-top: 5px;
        color: black;
        font-size: 14px;
    }

    .commentItemStyle p:last-child{
        margin-top: 40px;
        color: #0094ff;
        display: flex;
        justify-content: space-between;
    }
</style>

<script>
    import {Toast} from 'mint-ui'

    export default{
        data(){
            return {
                commentList:[],
                pageindex:1
            }
        },
        props:['commentId'],
        created:function(){
            this.getCommentData()
        },
        methods:{
            getCommentData:function(){
                const url = "http://vue.studyit.io/api/getcomments/"+this.commentId+"?pageindex="+this.pageindex
                this.$http.get(url).then(response=>{
                    // console.log(response)
                    if(this.pageindex===1){
                        this.commentList = response.body.message
                    }else{
                        this.commentList = this.commentList.concat(response.body.message)
                    }
                    
                })
            },
            postComment:function(){
                var content = this.$refs.textAreaRef.value;
                const url = "http://vue.studyit.io/api/postcomment/"+this.commentId;
                if(content==''){
                    Toast({
                        message:'内容不能为空',
                        position:'middle',
                        duration:2000
                    })
                }else{
                    this.$http.post(url,{content:content},{emulateJSON:true}).then(response=>{
                   
                        this.getCommentData();
                        Toast({
                            message:'评论成功',
                            position:'middle',
                            duration:2000
                        });
                        this.$refs.textAreaRef.value = '';
                    })
                }
                
            },
            loadMore:function(){
                this.pageindex++;
                this.getCommentData();
            }
        }
    }
</script>