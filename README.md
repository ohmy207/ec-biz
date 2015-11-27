## OPOA系统

### 1、设计目标

一套比较全面的OPOA应用解决方案，用于快速启动一个单页应用。该项目已经完成大部分基础架构类的设计，只需要下载下来稍做修改即可。

我希望实现以下功能：

- 引入`库包管理`，稳定良好的文件组织结构
  
- 支持`构建压缩`，提供hook自定义构建打包任务
  
- 内置服务器，提供`请求转发`，`livereload`
  
- `热部署`功能
  
- `增量发布`，统一使用版本号区分资源
  
  需要考虑哪些问题？
  
- 项目的`自动化构建`,包括是`库文件管理`，库之间的依赖关系，代码的压缩合并
  
- 还有静态资源的`版本号`
  
- URL的设计文件的组织结构保持高度统一
  
- 还有很多...



### 2、基础架构

- 项目使用 `RequireJS` + `Bootstrap` + `Angular` 开发模式
  
- 前端库采用 `bower` 管理，因此使用前请前往 <http://bower.io> 下载安装
  
  目录结构
  
  ``` 
  ├── README.md
  ├── app/                  // 应用代码
  │   ├── config.js         // requireJS依赖配置
  │   ├── css/              // 样式
  │   ├── js/
  │   │   ├── app/
  │   │   ├── app.js        
  │   │   ├── routes.js     // 路由规则
  │   │   ├── startup.js
  │   └── page/
  │       └── tpl/          // 静态模板
  ├── bower.json
  ├── index.html            // 统一入口
  ├── package.json
  ├── Gruntfile.js
  └── tool/
  ```

使用方法

``` shell
npm install -g bower grunt
git clone git@github.com:mycoin/ec-biz.git && cd ec-biz
grunt server
```

使用浏览器打开 <http://127.0.0.1:8787>

### 3、后续改进

- [x] 使用`grunt`来管理项目，目前不支持构建
- [x] 实现requireJS合并优化
- [ ] 合并模板，使用 $templateCache

### 4、更多文档

- [项目目录结构规范](doc/directory-structure.md)
- [RequireJS + Bootstrap + Angular 相关文档](doc/require-bootstrap-angular.md)
- [项目架构解析](doc/project-architecture.md)

------

[nqliujiangtao@gmail.com](mailto:nqliujiangtao@gmail.com)