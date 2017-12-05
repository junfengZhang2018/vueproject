<template>
    <div>
        <!-- 1.0 轮播图 -->
        <mt-swipe :auto="3000">
            <mt-swipe-item v-for="(item,index) in LunboArray" :key="index">
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>

        <!--2.0九宫格-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/news/newslist">
                    <span class="mui-icon mui-icon-home"></span>
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>

            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon mui-icon-email"></span>
                    <div class="mui-media-body">图片分享</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon mui-icon-chatbubble"></span>
                    <div class="mui-media-body">商品购买</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon mui-icon-location"></span>
                    <div class="mui-media-body">视频专区</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon mui-icon-search"></span>
                    <div class="mui-media-body">留言反馈</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon mui-icon-phone"></span>
                    <div class="mui-media-body">联系我们</div>
                </a>
            </li>
        </ul>
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

    .mui-icon {
        width: 50px;
        height: 50px;
        background-size: cover;
    }

    .mui-table-view {
        background-color: #fff;
        border: 0 none;
    }

    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        border: 0 none;
    }

    .mui-icon::before {
        content: '';
    }

    .mui-icon-home {
        background-image: url("../../statics/images/menu3.png");
    }

    .mui-icon-email {
        background-image: url("../../statics/images/menu4.png");
    }

    .mui-icon-chatbubble {
        background-image: url("../../statics/images/menu5.png");
    }

    .mui-icon-location {
        background-image: url("../../statics/images/menu6.png");
    }

    .mui-icon-search {
        background-image: url("../../statics/images/menu9.png");
    }

    .mui-icon-phone {
        background-image: url("../../statics/images/menu10.png");
    }
</style>

<script>
    export default {
        data() {
            return {
                LunboArray: []
            }
        },
        created() {
            this.getLunboArrayData()
        },
        methods: {
            getLunboArrayData() {
                const url = "http://vue.studyit.io/api/getlunbo"

                this.$http.get(url).then(response => {
                    this.LunboArray = response.body.message
                })
            }
        }
    }
</script>