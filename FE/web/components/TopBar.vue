<template>
  <div class="topBar">
    <div class="topBar-content">
      <div class="wechat-icon"></div>
      <div class="weibo-icon"></div>
      <div class="register">注册</div>
      <div class="login">登陆</div>
      <div class="search"></div>
    </div>
  </div>
</template>
<style lange='scss'>
    .topBar{
      height: 35px;
      width: 100%;
      background: #333333;
    }
    .topBar-content{
      width: 1200px;
      margin: 0 auto;
      height: 35px;
    }
    .wechat-icon,.weibo-icon{
      float: left;
      width: 24px;
      height: 24px;
      margin: 5.5px 12px 5.5px 0;
      cursor: pointer;
    }
    .wechat-icon{
      background: url('~assets/imgs/icon/wechat.png') 0 0 no-repeat;
      background-size: 100%;
    }
    .weibo-icon{
      background: url('~assets/imgs/icon/weibo.png') 0 0 no-repeat;
      background-size: 100%;
    }
    .register,.login,.search{
      float: right;
      line-height: 35px;
      margin-left: 15px;
      font-size: 12px;
      font-weight: bold;
      color: #8a8a8a;
      cursor: pointer;
    }
    .search{
      width: 18px;
      height: 18px;
      margin-top: 8.5px;
      background: url('~assets/imgs/icon/search.png') 0 0 no-repeat;
      background-size: 100%;
    }
</style>