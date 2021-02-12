<template>
  <div class="nav_header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-nav">
          <a v-for="item in navList" :key="item.id" href="javascript:void(0);">{{ item.name }}</a>
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
      <div class="container header-content">
        <div class="header-logo">
          <icon-svg icon-class="xiaomi" />
        </div>
        <div class="header-menu">
          <ul v-for="item in menuList" :key="item.id">
            <li>{{ item.name }}</li>
          </ul>
        </div>
        <div class="header-search">
          <input type="text" placeholder="【包邮】8k春晚不胖瑶" />
          <i class="icon-search"><icon-svg icon-class="sousuo" /></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'NavHeader',
  data() {
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
      ],
      menuList: [
        {
          id: '001',
          name: '小米手机'
        },
        {
          id: '002',
          name: 'Redmi 红米'
        },
        {
          id: '003',
          name: '电视'
        },
        {
          id: '004',
          name: '笔记本'
        },
        {
          id: '005',
          name: '家电'
        },
        {
          id: '006',
          name: '路由器'
        },
        {
          id: '007',
          name: '智能硬件'
        },
        {
          id: '008',
          name: '服务'
        },
        {
          id: '009',
          name: '社区'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
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
            cursor: text;
            content: '|';
            display: inline-block;
            margin-left: 8px;
            color: $color-shopping-l;
          }
          &:last-child::after {
            display: none;
          }
          &:hover {
            color: $color-white-l;
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
          color: $color-gray-l;
          background-color: $bgcolor_gray-SS;
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
    line-height: 100px;
    background-color: $bgcolor-white-S;
    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .header-logo {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 55px;
        height: 55px;
        font-size: $font-28 + 8px;
        color: $color-white-l;
        background-color: $bgcolor_orange-S;
      }
      .header-menu {
        display: flex;
        ul {
          li {
            display: inline;
            cursor: pointer;
            padding: 0 10px;
          }
          &:hover {
            color: $color-orange_hover-l;
          }
        }
      }
      .header-search {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 296px;
        height: 50px;
        font-size: $font-14;
        box-sizing: border-box;
        border: 1px solid $color-gray-ll;
        input {
          padding: 0 10px;
        }
        .icon-search {
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          font-size: $font-24;
          border-left: 1px solid $color-gray-ll;
          &:hover {
            color: $color-white-l;
            background-color: $bgcolor_orange-S;
          }
        }
        &:hover {
          border: 1px solid $bgcolor_black-S;
          transition: all 0.2s;
        }
      }
    }
  }
}
</style>
