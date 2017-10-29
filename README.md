# APICloud

## 简介

### APP分类:

#### WEBApp

纯粹前端开发的网页技术,在移动端的网页
优点:

1. 入门门槛低
2. 简单易用
3. 开发效率高,成本低
4. 不需要升级,可以实时更新

缺点:

1. 性能差,体验不如NativeApp
2. 对手机端的原生接口调用支持、兼容不太好

#### NativeApp

原生APP, IOS(OC/swift) / ANDROID, 分平台开发

优点：

1. 原生开发，可以直接调用手机的接口
2. 性能好

缺点：

1. 开发成本高，周期长，效率低
2. 需要升级

#### HybridApp

混合APP, 用NativeApp的壳子中间用webview嵌入WEBApp的内容

优点：

1. 用原生APP的壳子，性能接近NativeApp（转场，窗口操作）
2. 开发用的是webapp的技术，开发效率高，周期短，成本低（1个7天做一个APP）
3. 云端数据库（不需要后台，也可以直接操作数据库）
4. 云修复（小更新是不需要升级，可以静默修复）
5. 云统计

### 资源

+ [官网](http://www.apicloud.com/)
+ [文档](http://docs.apicloud.com/)
+ [开发者控制台](http://www.apicloud.com/console)
+ [前端框架](http://docs.apicloud.com/Front-end-Framework/framework-dev-guide)
+ [API对象](http://docs.apicloud.com/Client-API/api)
+ 开发工具，跟github开源的ATOM编辑器基本是一样，用的是前端的技术开发的，electron(开发桌面端程序)

## 开始

### 新建项目

#### 云平台新建

在“开发者控制台”中选择“创建应用”
在studio里,选择"代码管理" -> "代码检出" -> "APICloud云端应用"

#### SVN检出

控制台中选择 "代码" -> 复制"svn代码信息(如:代码分支信息svn://svn3.apicloud.com/A6054797274762/SWT1707)"  -> 到本地文件夹中使用svn工具checkout -> 粘贴复制的svn地址 -> 输入用户名(注册邮箱) -> 输入密码(在平台上点击"获取分支代码",复制弹出的密码)粘贴复制的分支密码 -> 检出

#### 本地创建项目

用APICloud Studio 创建项目

### 运行

#### 海马玩模拟器

#### 真机运行

USB链接手机, 手机需要打开"开发者选项" -> "USB调试"

#### wifi同步

1. 安装apploader到手机

2. 手机上点击小圆点

3. 在studio工具的项目上右击，选择“查看真机同步IP和端口”

4. 将studio右上角弹出的 ip填到上级的输入框，再填入端口号，确认

5. 在studio项目上右击， 选择“wifi全量同步”

### 项目目录

+ index.html 项目入口文件

+ config.xml [配置文件](http://docs.apicloud.com/Dev-Guide/app-config-manual#10)

## apiready

**注意：** 只要你用到了`api.` 的方法或属性，就必须放到apiready中。封装函数除外。

## 侧边栏

[openSlidLayout](http://docs.apicloud.com/Client-API/api#30)

``` JS
api.openSlidLayout({
  type: 'left',
  // 侧滑栏
  fixedPane: {
    name: 'win1',
    url: 'win1.html'  // 页面路径
  },
  // 首页
  slidPane: {
    name: 'win2',
    url: 'win2.html'
  }
}, function(ret, err) {

});
```

## 打开窗口组

[openFrameGroup](http://docs.apicloud.com/Client-API/api#28)

经常用来制作tab或者底部操作栏

``` js
api.openFrameGroup({
  name: 'group1',
  rect: {
    x: 0,
    y: 0,
    w: 'auto',
    h: 'auto'
  },
  frames: [{
    name: 'frame1',
    url: 'frame1.html',
    bgColor: '#fff'
  }, {
    name: 'frame2',
    url: 'frame2.html',
    bgColor: '#fff'
  }]
}, function(ret, err) {
  var index = ret.index;
});
```

## 属性

1. 窗口宽度 `api.winWidth`