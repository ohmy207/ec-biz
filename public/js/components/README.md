## 文档说明

该目录提供项目angular代码，不参与任何业务需求，主要提供一下独立模块：

- `appDirective` 解析器指令
- `appFilter`  模板过滤器
- 一些外部插件，如stringUtils，notification等等



#### 1.模块申明方案

- 申明模块，定义外部依赖，同时返回模块的引用

``` javascript
'use strict';

// define the filter module
define(['angular'], function(angular) {

	// just need to create a module,
	return angular.module('appDirective', []);
});
```

> 注意文件名称必须是 `module.js` ， 该模块 `只能` 被具体实现引用，`绝对不能`被外部其他任何模块引用。

**PS**：这段代码有两个很重要的作用，在全局对象 `angular` 开辟空间，保证其他模块能访问的到，另外一个功能是 `返回引用` ，这里返回的引用将会被逻辑实现者使用，如果少了这一步就会失去 requireJS 核心价值！



- 实现模块具体逻辑

例如我们需要定义一个 `helloWorld` 的指令，新建 `hello-world.js` ，这里约定文件名称推荐为中划线小写格式，源码如下：

``` javascript
'use strict';

// Specific code implementation
define(['angular', './module'], function(angular, module) {
	module.directive('helloWorld', function() {
		return {
			restrict: 'E',
			template: '<div>Hi there, hello World!</div>',
			replace: true
		};
	});
});
```

>  PS：鉴于一个指令一个文件可能会产生很多文件，可以考虑按功能划分实现到一个文件中。



- 申明模块加载器，导出所有资源

到此，模块已经实现完成，剩下 `导出模块加载器` 给外部消费者，虽说是导出实际上就是将资源加载到浏览器。具体代码如下：

``` javascript
'use strict';

// Inner dependent component set
define(['require'], function(require) {

	// directive, filters
	require([
		'./directive/bootstrap-switch',
		'./directive/hello-world',
		'./directive/ng-scrollbar'
	]);
});
```

> 约定，文件名称必须是 `index.js` 并且放于总模块第一级！

上面代码`并没有返回任何引用` 是因为 `angular.module()` 本身就创建一个模块，任何地方都可以读取的到。所以：



- 外部用户使用

通过上面代码，模块申明全部完成，接下来就是模块的消费者加载该模块，上面讲过模块导出到一个加载器，那么只需要引用这个加载器就行了：

``` javascript
'use strict';
define([
        'angular',
        'components/index' // <<< look at this
    ],
    function(angular) {

        // just need to create a module
        return angular.module('app', [
            'ui.router',
            'ui.bootstrap',
            'ui.utils',

            'ngAnimate',
            'ngResource',
            'ngSanitize',
            'ngWebSocket',

            'appDirective' // <<< look this line
        ]);
    });

```

代码中 `appDirective` 就通过依赖 `components/index` 被全部加载进来！