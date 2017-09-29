<template>
    <div class="attention">
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
    <video width="100%" controls="controls">
      <source :src="item.topic_video" type="video/mp4">
    </video>
  </template>
<template v-if="item.topic_music">
      <audio :src="item.topic_music.src" width="100%" controls="controls"></audio>
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
        name: 'recommend',
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

</style>
