#### 多种技术栈方式实现一套电商平台项目

> 电商功能拆分 --- **用户端**

- [x] **商品**

- 首页 、 商品列表  、 商品详情

- [x] **购物车**

- 购物车数量 、 添加删除商品  、  购物车提交

- [x] **订单确认** 

- 订单确认 （地址管理） 、 订单提交  、 订单列表  、 订单详情

- [x] **支付**

- 支付

- [x] **用户**

- 登录 、 注册 、 个人信息  、 找回密码  、  修改密码

> 电商功能拆分 --- **管理后台**

- [x] **商品管理**

- 添加 / 编辑商品 、 查看商品 、 下架

- [x] **品类管理**

- 添加品类 、 查看品类

- [x] **订单管理**

- 订单列表 、 订单详情 、 发货

- [x] **权限**

- 管理员登录

#### 项目目录搭建

```markdown
├─assets
│  ├─fonts
│  ├─images
│  │      logos.png   
│  └─styles
├─pages
│  ├─home
│  │      index.js
│  └─index
│          index.js
├─servicer
├─utils
└─views
    ├─home
    │      index.html
    └─index
            index.html
```

> webpack 基本配置

- [x] css 拆分 、 图片 、 图标字体

- [x] 服务器 `devServer`
  - 启动进度条 `compress: true`
  - 打包压缩gzip `progress: true`

- [x] 打包时候进度条，使用 [`progress-bar-webpack-plugin`](https://github.com/clessg/progress-bar-webpack-plugin)插件

> 通用的js工具封装

- 网络请求工具

- URL路径工具

- 模板渲染工具 -- hogan

- 字段验证 && 通用提示

- 统一跳转

