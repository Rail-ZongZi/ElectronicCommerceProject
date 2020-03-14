<template>
  <div class="nav_header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-nav">
          <a href="javascript:void(0);">小米商城</a>
          <a href="javascript:void(0);">MUI</a>
          <a href="javascript:void(0);">云服务</a>
          <a href="javascript:void(0);">协议规则</a>
        </div>
        <div class="topbar-cart">
          <router-link to="/">登录</router-link>
          <router-link to="/">注册</router-link>
          <div class="cart-mini">
            <i class="iconfont icon-gouwucheman"></i>
            <span>购物车（0）</span>
          </div>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo"></div>
        <div class="header-nav">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div class="header-search"></div>
      </div>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  name: 'NavHeader',
  data() {
    return {}
  }
}
</script>

<style scoped lang='scss' rel='stylesheet/scss'>
.nav_header {
  .nav-topbar {
    height: 40px;
    line-height: 40px;
    font-size: $font-12;
    color: $color-gray-l;
    background-color: $bgcolor_black-S;
    .container {
      display: flex;
      justify-content: space-between;
      .topbar-nav {
        a {
          margin-right: 18px;
          &:after {
            content: "|";
            margin-left: 18px;
            color: $color-gray-ll;
          }
          &:hover {
            color: #fff;
          }
        }
      }
      .topbar-cart {
        a {
          margin-right: 18px;
          &:hover {
            color: $color-white-l;
          }
        }
        .cart-mini {
          width: 120px;
          height: 40px;
          text-align: center;
          display: inline-block;
          padding: 0 10px;
          margin-left: 15px;
          color: $color-gray-l;
          background-color: $color-shopping-l;
          &:hover {
            background-color: $bgcolor-white-S;
            color: $color-orange_hover-l;
            cursor: pointer;
          }
          span {
            margin: 0 4px;
          }
        }
      }
    }
  }
  .nav-header {}
}
</style>
