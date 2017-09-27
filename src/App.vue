<template>
  <div id="app">
    <router-view></router-view>
    <wk-footer></wk-footer>
  </div>
</template>

<script>
    import Vue from 'vue'
    import Footer from '@/components/Footer/Footer'

    export default {
        name: 'app',
        data() {
            return {

            }
        },
        methods: {

        },
        components: {
            'wk-footer': Footer
        }
    }
</script>

<style>
    #app {
        padding: 50px 0;
    }
    
    .tooltip {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 500;
    }
    
    .tooltip_txt {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 115px;
        height: 60px;
        line-height: 60px;
        margin: -30px 0 0 -90px;
        border-radius: 5px;
        background: rgba(0, 0, 0, 0.8);
        color: #fff;
        padding: 0 55px 0 10px;
        font-size: 16px;
        text-align: center;
        animation: myfirst 1s;
        -moz-animation: myfirst 1s;
        /* Firefox */
        -webkit-animation: myfirst 1s;
        /* Safari 和 Chrome */
        -o-animation: myfirst 1s;
        /* Opera */
    }
    
    .tooltip_txt::after {
        content: "\e687";
        font-family: iconfont !important;
        font-size: 40px;
        position: absolute;
        top: 0;
        right: 10px;
    }
    
    @keyframes myfirst {
        from {
            top: 100%;
            opacity: 0;
        }
        to {
            top: 50%;
            opacity: 1;
        }
    }
    
    @-moz-keyframes myfirst {
        from {
            top: 100%;
            opacity: 0;
        }
        to {
            top: 50%;
            opacity: 1;
        }
    }
    
    @-webkit-keyframes myfirst {
        from {
            top: 100%;
            opacity: 0;
        }
        to {
            top: 50%;
            opacity: 1;
        }
    }
    
    @-o-keyframes myfirst {
        from {
            top: 100%;
            opacity: 0;
        }
        to {
            top: 50%;
            opacity: 1;
        }
    }
</style>