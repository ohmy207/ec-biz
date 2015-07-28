## 【项目架构设计】

该文档主要描述 `AngularJS` 执行的过程，同时阐述架设在 `requireJS`至上的原理基础 

以下规范文档中：

1. `项目`包含但不限于`业务项目`和`包项目`。
2. `${root}`表示`项目`的根目录。
3. `架构`特指采用 `Angular` + `RequireJS` + `Bootstrap`的一套OPOA应用解决方案。

### 1、加载器的引入

引入加载器方便项目模块化，所谓模块化包括函数库的公共抽离，也包括业务代码的按需加载。
> 更多介绍详见官方文档 - [点击打开](http://requirejs.org/docs/api.html)

`requireJS` 解决以下问题：

1. 全局资源路径适配：为适配多种环境（开发、测试、生产）加载资源根地址可能不同，
2. `内容资源`：指希望做为内容提供给访问者的资源，包括`图片`、`字体`、`flash`、`pdf`等。


配置如下：

```
require.config({
    baseUrl: 'src/',
    paths: {
        'jquery': 'path/to/jquery',
        'angular': 'path/to/angular',
        
        'config': './js/config',
        'modules': './js/modules',
        'components': './js/components',
        'page': './page'
    },
    config: {},
    shim: {},
    priority: ['angular'],
    deps: [
        'js/startup'
    ]
});
```

* `paths` 定义了常用模块短地址别名，其中重点关注 `config`, `modules`, `components` 分别存放配置文件，业务模块，框架组件等
* `deps` 用于启动整个依赖


### 2、AngularJS启动流程

> 这里主要针对当前架构，不从源码级别分析其流程


简洁
。有习惯性缩写的单词 *必须(MUST)* 采用容易理解的缩写。如：源代码目录使用`src`，不使用`source`。下面是更多例子：
    1. `img`: 图片
    2. `js`: javascript脚本
    3. `css`: 样式表
    4. `swf`: flash
    5. `src`: 源文件目录
    6. `vendor`: 引入的第三方依赖包目录
    7. `page`: 静态页面
2.  *不允许(MUST NOT)* 使用复数形式。如：`imgs`、`docs`。

### 3、目录划分

##### `/`根目录结构划分

在${root}下，目录结构 *必须(MUST)* 按照`职能`进行划分， *不允许(MUST NOT)* 将`资源类型`或`业务逻辑`划分的目录直接置于${root}下。



```
├── Gruntfile.js
├── README.md
├── bower.json
├── index.html            // 统一入口
├── package.json
├── doc/
├── output/               // 发布包
├── page/
├── src/                  // 应用代码
│   ├── config.js         // requireJS依赖配置
│   ├── css/
│   ├── image/
│   ├── js/
│   ├── page/             // 静态页面
│   └── vendor/           // 依赖框架
├── test/                 // 单元测试
└── tool/
```

其中:

* `src` 存放开发时源文件，发布时构建到`output`目录
* `tool` 存放开发时或构建阶段使用的工具
* `page` 目录用于存放项目的页面入口文件，通常是上线后可被直接访问的静态页面

##### `src/`应用代码结构划分

项目架构认为绝大多数情况，资源文件按照`文件类型`划分目录，框架逻辑按照`工作职能`划分目录，业务代码应当根据`业务模块`划分目录结构。

结构如下：

```
├── src/
│   ├── config.js         // requireJS依赖配置
│   ├── css/
│   ├── image/
│   ├── js/
│   ├── page/             // 静态页面
│   └── vendor/           // 依赖框架
```

`src`下 *必须(MUST)* 只包含`业务目录`，`配置文件`与`系统目录`。`业务公共资源` *必须(MUST)* 命名为`common`。`common`目录做为`业务公共资源`的目录，也视如`业务目录`。

详细结构：

```
├── config.js             // requireJS依赖配置
├── css
│   ├── font
│   ├── img
│   └── reset.css
├── image
├── js
│   ├── app.js            // 业务入口
│   ├── components        // 框架组件
│   │   ├── common        // 公共组件
│   │   ├── directive
│   │   ├── filter
│   │   │   ├── encode.js
│   │   ├── router.js
│   │   └── service
│   ├── config            // 配置文件，构建使用
│   ├── modules           // 业务目录
│   │   ├── common        // 业务公共资源
│   │   ├── context.js
│   │   └── home
│   └── startup.js        // 启动脚本
├── page
├── swf
└── vendor                // 框架依赖
    ├── angular
    ├── jquery
    └── require
    ...
```

> [点击这里](sample/directory-structure/)查看具体文件夹结构。

待续。。。

### 4、FAQ

#### 为啥`modules`下面没资源类型目录了？

如果在`modules`下继续划分`资源目录`，代码的结构可能就是这样子了：

    ${root}/
        src/
            modules/
                js/
                   list.js

当我们需要使用`list.js`的时候，必须写如下的代码：`require("../modules/js/list")`，但是从逻辑上说，更合理的写法应该是`require("../modules/list")`。因此我们不推荐在`modules`下面对源代码资源划分目录。

