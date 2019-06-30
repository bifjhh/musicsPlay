# 使用Electron开发一款音乐播放软件

- 根据Electron官方提供的DEMO来进行改装
- 使用Bootstrap 来快速搭建UI界面

### 创建目录结构
- 创建renderer文件夹,用来存放渲染的界面(HTML)和js文件

### 完成首页样式
- 在index.html 引入bootstrap的css文件

### 创建添加音乐窗口
- 通过ipc来检测通信,收到通信后在main.js内创建选择音乐窗口

#### 创建一个类,用来简化创建窗口
- 通过继承原生BrowserWindow类来完成基础
- 设置默认配置,减少重复的代码工作
- 合并config,适配自定义参数传递
- 通过 `this.once('ready-to-show',()=>{this.show()})`解决闪烁问题

### 使用Dialog模块添加音乐文件
- 封装获取DOM元素方法
- 引入dialog模块并在showOpenDialog中配置
  - 在properties配置可选项
  - 在filters配置可以选择的文件
  - 通过回调函数接收参数