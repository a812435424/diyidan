<template>
    <div class="footer">
      <ul>
        <li>
          <router-link to="/">
            <i class="iconfont">&#xe65f;</i>
            <span>首页</span>
          </router-link>
        </li>
        <li>
          <router-link to="/seq">
            <i class="iconfont">&#xe661;</i>
            <span>社区</span>
          </router-link>
        </li>
        <li>
          <router-link to="/shop">
            <i class="iconfont">&#xe662;</i>
            <span>宅物</span>
          </router-link>
        </li>
        <li>
         <router-link to="/Message">
            <i class="iconfont">&#xe6b7;</i>
            <span>消息</span>
          </router-link>
        </li>
        <li>
          <router-link to="/me">
            <i class="iconfont">&#xe663;</i>
            <span>我</span>
          </router-link>
        </li>
      </ul>
    </div>
  </template>
<script>
    export default {
        name: 'footer'
    }
</script>
<style>
    .footer {
        overflow: hidden;
        height: 50px;
        width: 100%;
        position: fixed;
        left: 0;
        bottom: 0;
        z-index: 99;
        background: #fff;
        height: 50px;
    }

    .footer::before {
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

    .footer ul li {
        float: left;
        text-align: center;
        width: 20%;
        font-size: 12px;
        color: #979797;
        line-height: 18px;
    }

    .footer ul li i {
        display: block;
        font-size: 21px;
        margin: 8px 0 3px;
        color: #b5b5b5;
    }

    .footer ul li .router-link-exact-active,
    .footer ul li .router-link-exact-active i {
        color: #fe7881;
    }
</style>
