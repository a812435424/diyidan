<template>
    <div class="index">
      <div id="header">
        <div class="header_title">
          <ul>
            <li>关注</li>
            <li class="active">推荐</li>
            <li>视频</li>
          </ul>
        </div>
        <div class="header_fr">
          <i class="iconfont">&#xe732;</i>
        </div>
      </div>
      <!-- 轮播图开始 -->
      <div class="banner">
        <swiper :options="swiperOption" ref="mySwiper">
          <template v-if="banner" v-for="item in banner">
            <swiper-slide>
              <a :href="item.href">
                <img :src="item.src" alt="">
              </a>
            </swiper-slide>
          </template>
<div class="swiper-pagination" slot="pagination"></div>
</swiper>
</div>
<!-- 轮播图结束 -->
<!-- 热门话题开始 -->
<div class="hot_topic">
    <ul>
        <template v-if="hot_topic" v-for="item in hot_topic">
            <li>
              <a :href="item.href">
                <img :src="item.src" alt="">
                <span class="padding_not">{{item.title}}</span>
              </a>
            </li>
          </template>
    </ul>
</div>
<!-- 热门话题结束 -->
<!-- 更多话题开始 -->
<div class="topic">
    <template v-if="topic" v-for="(item,index) in topic">
          <div class="topic_box">
            <div class="topic_user">
              <a :href="item.topic_userhref">
                <div class="topic_user_box">
                  <div class="topic_user_pic"><img :src="item.topic_userimg" alt=""></div>
                  <div class="topic_user_message">
                    <div class="topic_user_name">{{item.topic_username}}</div>
                    <div class="topic_user_level"><span>{{item.topic_userlevel}}</span></div>
                    <div class="topic_user_time">{{item.topic_time}}</div>
                  </div>
                </div>
              </a>
              <div class="topic_user_operate" @click="active_operate()">
                <i class="iconfont">&#xe602;</i>
              </div>
            </div>
            <div class="topic_body">
              <a :href="item.topic_href">
                <div class="topic_title">{{item.topic_title}}</div>
                <div class="topic_info">
                  <div class="topic_info_txt" v-html="item.topic_text"></div>

</div>
</a>
<div class="topic_info_img" :class="{topic_info_img_more:(item.topic_img.length<3)}">
  <a :href="item.topic_href">
    <div class="topic_info_img_box">
  <template v-if="item.topic_img" v-for="item2 in item.topic_img">
    <div><img :src="item2.src" alt=""></div>
  </template>
</div>
</a>
<template v-if="item.topic_video">
    <video :src="item.topic_video" controls="controls"></video>
  </template>
<template v-if="item.topic_music">
      <audio :src="item.topic_music.src" controls="controls"></audio>
    </template>
</div>
<div class="topic_label">
    <em><i class="iconfont">&#xe655;</i>{{item.topic_special.title}}</em>
    <template v-if="item.topic_label" v-for="item3 in item.topic_label">
      <span>{{item3.title}}</span>
    </template>
</div>
</div>
<div class="topic_operate">
    <ul>
        <li @click="collect(index)" :class="{checked:item.topic_collect.state}"><i class="iconfont">&#xe662;</i><span>{{item.topic_collect.number}}</span></li>
        <li><i class="iconfont">&#xe6b7;</i><span>{{item.topic_comment.number}}</span></li>
        <li @click="gift(index)" :class="{checked:item.topic_gift.state}"><i class="iconfont">&#xe6de;</i><span>{{item.topic_gift.number}}</span></li>
    </ul>
</div>
</div>
</template>
</div>
<!-- 更多话题结束 -->
<!-- 对该用户进行操作开始 -->
<div class="topic_user_operate_body" v-show="operate">
    <div class="topic_user_operate_box_bg" @click="active_operate()"></div>
    <div class="topic_user_operate_box">
        <ul>
            <li>分享</li>
            <li>不感兴趣并隐藏</li>
            <li>举报</li>
        </ul>
    </div>
</div>
<!-- 对该用户进行操作结束 -->
<wk-tooltip :isShow="isShow" :time="time" :message="message" @on-isShow-change="onResultChange"></wk-tooltip>
</div>
</template>
<script>
    import Vue from 'vue'
    import Router from 'vue-router'
    import axios from 'axios'
    Vue.prototype.$ajax = axios

    export default {
        name: 'index',
        data() {
            return {
                isShow: false,
                time: 2000,
                message: '',
                banner: {},
                hot_topic: {},
                topic: {},
                operate: 0,
                user_id: 123,
                operate_id: 0,
                swiperOption: {
                    autoplay: 3000,
                    loop: true,
                    pagination: '.swiper-pagination',
                    paginationClickable: true
                }
            }
        },
        created() {
            axios.get('static/data.json', {
                params: {
                    ID: 12345
                }
            }).then((res) => {
                this.banner = res.data.banner;
                this.hot_topic = res.data.hot_topic;
                this.topic = res.data.topic;
            })
        },
        methods: {
            active_operate() {
                if (this.operate == 1) {
                    this.operate = 0
                } else {
                    this.operate = 1
                }
            },
            collect(index) {
                if (this.topic[index].topic_collect.state == 0) {
                    this.isShow = true;
                    this.message = "收藏成功";
                    this.topic[index].topic_collect.state = 1;
                    this.topic[index].topic_collect.number++;
                } else {
                    this.topic[index].topic_collect.state = 0;
                    this.topic[index].topic_collect.number--;
                }
            },
            gift(index) {
                if (this.topic[index].topic_gift.state == 0) {
                    this.isShow = true;
                    this.message = "送糖成功";
                    this.topic[index].topic_gift.state = 1;
                    this.topic[index].topic_gift.number++;
                } else {
                    this.topic[index].topic_gift.state = 0;
                    this.topic[index].topic_gift.number--;
                }
            },
            onResultChange(val) {
                this.isShow = val;
            }
        }
    }
</script>
<style>
    #header {
        text-align: center;
        background: #fe7780;
        width: 100%;
        height: 50px;
        line-height: 50px;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;
        color: #fff;
        font-size: 16px;
        overflow: hidden;
    }
    
    .header_title ul li {
        display: inline-block;
        padding: 0 10px;
        position: relative;
        cursor: pointer;
        font-size: 14px;
    }
    
    .header_title ul li.active::after {
        content: "";
        position: absolute;
        bottom: 1px;
        left: 0;
        width: 100%;
        height: 2px;
        background: #fff;
    }
    
    .header_fr {
        position: absolute;
        top: 0;
        right: 15px;
        font-size: 21px;
    }
    
    .banner {
        overflow: hidden;
        position: relative;
        min-height: 100px;
    }
    
    .banner img {
        width: 100%;
    }
    
    .swiper-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        z-index: 1;
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-transition-property: -webkit-transform;
        -moz-transition-property: -moz-transform;
        -o-transition-property: -o-transform;
        -ms-transition-property: -ms-transform;
        transition-property: transform;
        -webkit-box-sizing: content-box;
        -moz-box-sizing: content-box;
        box-sizing: content-box;
    }
    
    .swiper-slide {
        -webkit-flex-shrink: 0;
        -ms-flex: 0 0 auto;
        flex-shrink: 0;
        width: 100%;
        height: 100%;
        position: relative;
    }
    
    .swiper-pagination {
        position: absolute;
        bottom: 8px;
        left: 0;
        width: 100%;
        text-align: center;
        z-index: 2;
    }
    
    .swiper-pagination span {
        display: inline-block;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        border: 1px solid #fff;
        margin: 0 4px;
    }
    
    .swiper-pagination span.swiper-pagination-bullet-active {
        background: #ffc000;
        border: 1px solid #ffc000;
    }
    
    .hot_topic {
        overflow: hidden;
        margin: 6px 0 2px;
    }
    
    .hot_topic ul li {
        float: left;
        width: calc(100%/3 - 4px);
        height: 20vw;
        position: relative;
    }
    
    .hot_topic ul li:nth-child(2) {
        margin: 0 6px;
    }
    
    .hot_topic ul li img {
        width: 100%;
        height: 100%;
    }
    
    .hot_topic ul li span {
        display: block;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        padding: 0 3px;
        height: 20px;
        line-height: 20px;
        font-size: 12px;
        background: rgba(0, 0, 0, 0.5);
        color: #fff;
        overflow: hidden;
    }
    
    .topic {
        background: #eeeef0;
        overflow: hidden;
    }
    
    .topic_box {
        margin: 10px 0 0;
        overflow: hidden;
        background: #fff;
    }
    
    .topic_user {
        position: relative;
        padding: 10px;
        height: 55px;
    }
    
    .topic_user_operate {
        position: absolute;
        top: 20px;
        right: 20px;
        color: #999;
        font-size: 18px;
    }
    
    .topic_user_pic {
        width: 55px;
        height: 55px;
        border-radius: 50%;
        overflow: hidden;
        position: absolute;
        top: 10px;
        left: 10px;
    }
    
    .topic_user_pic img {
        width: 100%;
        height: 100%;
    }
    
    .topic_user_message {
        margin: 0 0 0 65px;
        position: relative;
        width: auto;
        display: inline-block;
    }
    
    .topic_user_name {
        font-size: 15px;
        line-height: 30px;
        height: 30px;
        color: #212121;
    }
    
    .topic_user_time {
        color: #999;
        font-size: 13px;
        margin-top: 7px;
    }
    
    .topic_user_level {
        position: absolute;
        top: 0;
        right: -30px;
        line-height: 30px;
        width: 24px;
        text-align: center;
    }
    
    .topic_user_level span {
        font-size: 10px;
        color: #fff;
        position: relative;
        z-index: 3;
    }
    
    .topic_user_level::after {
        content: "\e66a";
        font-family: "iconfont" !important;
        position: absolute;
        top: 0;
        left: 0;
        color: #ffc000;
        font-size: 24px;
        line-height: 32px;
    }
    
    .topic_body {
        padding: 0 10px;
        overflow: hidden;
    }
    
    .topic_title {
        font-size: 18px;
        font-weight: bold;
        color: #212121;
        margin: 4px 0 8px;
    }
    
    .topic_info_txt {
        font-size: 15px;
        color: #5a5a5a;
        line-height: 24px;
        max-height: 48px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    
    .topic_info_img_box {
        display: flex;
    }
    
    .topic_info_img_box div {
        flex: 1;
        margin: 5px 5px;
        height: 30vw;
        text-align: center;
        overflow: hidden;
        vertical-align: middle;
    }
    
    .topic_info_img_more .topic_info_img_box div {
        height: 50vw;
    }
    
    .topic_info_img video {
        width: 100%;
        height: 50vw;
        margin: 5px 0;
    }
    
    .topic_info_img audio {
        width: 100%;
        margin: 5px 0;
    }
    
    .topic_info_img div img {
        width: 100%;
        height: auto;
        min-height: 100%;
    }
    
    .topic_label {
        font-size: 12px;
        overflow: hidden;
        margin: 10px 0;
    }
    
    .topic_label em,
    .topic_label span {
        padding: 5px;
        background: #f4f4f4;
        border-radius: 3px;
        color: #999;
        display: inline-block;
        margin-right: 5px;
    }
    
    .topic_label em {
        color: #212121;
    }
    
    .topic_label i {
        margin: 0 3px 0 0;
    }
    
    .topic_operate ul {
        overflow: hidden;
        display: flex;
        padding: 10px 10px;
        position: relative;
    }
    
    .topic_operate ul::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 200%;
        height: 1px;
        background: #eeeef0;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scale(.5, .5);
        transform: scale(.5, .5);
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }
    
    .topic_operate ul li {
        flex: 1;
        text-align: center;
        color: #666;
        font-size: 13px;
    }
    
    .topic_operate ul li i {
        font-size: 16px;
        margin: 0 5px 0 0;
    }
    
    .topic_operate ul li.checked i {
        color: #fe7780;
    }
    
    .topic_user_operate_box_bg {
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 100;
    }
    
    .topic_user_operate_box ul {
        width: 80%;
        position: fixed;
        top: 50%;
        left: 10%;
        z-index: 120;
        margin-top: -68px;
        text-align: center;
        background: #fff;
        border-radius: 10px;
        line-height: 45px;
        color: #999;
        font-size: 14px;
    }
    
    .topic_user_operate_box ul li:nth-child(2) {
        border-top: 1px solid #eeeef0;
        border-bottom: 1px solid #eeeef0;
    }
</style>