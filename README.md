# Falcon Front-End Project#

## 功能
- 登录/注销
- 权限验证
- 侧边栏
- 面包屑
- 富文本编辑器
- Markdown编辑器
- JSON编辑器
- 列表拖拽
- plitPane
- Dropzone
- Sticky
- echarts图表
- 401，401错误页面
- 错误日志
- 导出excel
- table example
- 动态table example
- 拖拽table example
- form example
- dashboard
- 二次登录
- 动态侧边栏
- mock数据


## 开发
```bash
    # 安装依赖
    npm install
 
    # 本地开发 开启服务
    npm run dev
```
浏览器访问 http://localhost:8890

## 发布
```bash
    # 发布测试环境 [带webpack ananalyzer]
    npm run build:test / npm run build:ba

    # 构建生成环境
    npm run build
```

## 目录结构
```shell
├── build                      // 构建相关  
├── config                     // 配置相关
├── src                        // 源代码
│   ├── api                    // API请求
│   ├── assets                 // 静态资源
│   ├── components             // 全局公用组件
│   ├── directive              // 全局指令
│   ├── filtres                // 全局filter
│   ├── mock                   // mock数据
│   ├── router                 // 路由
│   ├── store                  // 全局store管理
│   ├── styles                 // 全局样式
│   ├── utils                  // 全局公用方法
│   ├── view                   // 视图页面
│   ├── App.vue                // 入口页面
│   └── main.js                // 入口 加载组件 初始化等
├── static                     // 第三方不打包资源
│   ├── jquery
│   └── Tinymce                // 富文本
├── .babelrc                   // babel-loader 配置
├── eslintrc.js                // eslint 配置项
├── .gitignore                 // gitignore
├── favicon.ico                // favicon图标
├── index.html                 // 入口html模板
└── package.json               // package.json

```