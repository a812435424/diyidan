<template>
    <div class="index">
      <div id="header">
        <div class="header_title">
          <ul>
            <li @click="active_tab(0)">关注</li>
            <li @click="active_tab(1)">推荐</li>
            <li @click="active_tab(2)">视频</li>
            <span :style="{left:left_tab+'px'}"></span>
          </ul>
        </div>
        <div class="header_fr">
          <i class="iconfont">&#xe732;</i>
        </div>
      </div>
      <div class="index_box">
        <wk-attention v-show="tab==0"></wk-attention>
        <wk-recommend v-show="tab==1"></wk-recommend>
        <wk-video v-show="tab==2"></wk-video>
      </div>
</div>
</template>
<script>
    import Vue from 'vue'
    import Router from 'vue-router'
    import axios from 'axios'
    Vue.prototype.$ajax = axios
    import Recommend from '@/components/Index/Recommend'
    import Attention from '@/components/Index/Attention'
    import Video from '@/components/Index/Video'

    export default {
        name: 'index',
        data() {
            return {
                tab: 1,
                left_tab: 50
            }
        },
        components: {
            'wk-recommend': Recommend,
            'wk-attention': Attention,
            'wk-video': Video
        },
        methods: {
            active_tab(index) {
                this.tab = index;
                this.left_tab = index * 50;
            }
        }
    }
</script>
<style>
    #header {
        text-align: center;
        background: #fe7780;
        width: 100%;
        width: 100vw;
        height: 50px;
        line-height: 55px;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;
        color: #fff;
        font-size: 16px;
        overflow: hidden;
    }
    
    .header_title ul {
        display: inline-block;
        position: relative;
        height: 50px;
        width: 150px;
        font-size: 0;
    }
    
    .header_title ul li {
        display: inline-block;
        padding: 0 10px;
        position: relative;
        cursor: pointer;
        font-size: 14px;
        height: 50px;
    }
    
    .header_title ul span {
        display: block;
        position: absolute;
        bottom: 2px;
        width: 33.3333%;
        height: 2px;
        background: #fff;
        transition: left 0.3s;
        -moz-transition: left 0.3s;
        /* Firefox 4 */
        -webkit-transition: left 0.3s;
        /* Safari 和 Chrome */
        -o-transition: left 0.3s;
        /* Opera */
    }
    
    .header_fr {
        position: absolute;
        top: 0;
        right: 15px;
        font-size: 21px;
    }
    
    .index_box>div {
        width: 100%;
        width: 100vw;
        animation: left_to 0.5s;
        -moz-animation: left_to 0.5s;
        /* Firefox */
        -webkit-animation: left_to 0.5s;
        /* Safari 和 Chrome */
        -o-animation: left_to 0.5s;
        /* Opera */
    }
    
    @keyframes left_to {
        from {
            margin-left: 100%;
        }
        to {
            margin-left: 0;
        }
    }
    
    @-moz-keyframes left_to {
        from {
            margin-left: 100%;
        }
        to {
            margin-left: 0;
        }
    }
    
    @-webkit-keyframes left_to {
        from {
            margin-left: 100%;
        }
        to {
            margin-left: 0;
        }
    }
    
    @-o-keyframes left_to {
        from {
            margin-left: 100%;
        }
        to {
            margin-left: 0;
        }
    }
</style>