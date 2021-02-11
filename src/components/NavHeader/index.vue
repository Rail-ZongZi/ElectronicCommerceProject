<template>
  <div class="nav_header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-nav">
          <a v-for="item in navList" :key="item.id" href="javascript:void(0);">{{item.name}}</a>
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
  data () {
    return {
      navList: [
        {
          id: '001',
          name: '小米商城'
        },
        {
          id: '002',
          name: 'MUI'
        },
        {
          id: '003',
          name: 'IoT'
        },
        {
          id: '004',
          name: '云服务'
        },
        {
          id: '005',
          name: '天星数科'
        },
        {
          id: '006',
          name: '有品'
        },
        {
          id: '007',
          name: '小爱开放平台'
        },
        {
          id: '008',
          name: '企业团购'
        },
        {
          id: '009',
          name: '资质证照'
        },
        {
          id: '010',
          name: '协议规则'
        }
      ]
    }
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
          margin-right: 8px;
          &:after {
            content: "|";
            display: inline-block;
            margin-left: 8px;
            color: $color-shopping-l;
          }
          // 最后一个不显示
          &:last-child::after {
            display: none;
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
          color: $bgcolor-white-S;
          background-color: $bgcolor_orange-S;
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
  .nav-header {
    height: 100px;
    background-color: $bgcolor-white-S;
    .header-logo {}
  }
}
</style>
