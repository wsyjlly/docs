[TOC]

# Vue笔记

## 全局配置

> - silent
> - optionMergeStrategies
> - devtools
> - errorHandler
> - warnHandler
> - ignoredElements
> - keyCodes
> - performance
> - productionTip

```
//配置是否取消 Vue 所有的日志与警告。
Vue.config.silent = true;
//配置是否允许 vue-devtools 检查代码
Vue.config.devtools = false;
//配置是否以在浏览器开发工具的性能/时间线面板中启用对组件初始化、编译、渲染和打补丁的性能追踪
Vue.config.performance = false;
//配置是否阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = true;
```





---



## 全局 API

> - Vue.extend
> - Vue.nextTick
> - Vue.set
> - Vue.delete
> - Vue.directive
> - Vue.filter
> - Vue.component
> - Vue.use
> - Vue.mixin
> - Vue.compile
> - Vue.observable
> - Vue.version

### Vue.set()

> 作用：向data中对象添加响应式属性

> - 当vue的data里边声明或者已经赋值过的对象或者数组（数组里边的值是对象）时，向对象中添加新的属性，如果更新此属性的值，是不会更新视图的。
>
> - 根据官方文档定义：**如果在实例创建之后添加新的属性到实例上，它不会触发视图更新**。
>
> - Vue 不能检测到对象属性的添加或删除。由于 Vue 会在初始化实例时对属性执行 getter/setter 转化过程，所以属性必须在 data 对象上存在才能让 Vue 转换它，这样才能让它是响应的。

```
Vue 不允许在已经创建的实例上动态添加新的根级响应式属性 (root-level reactive property)。然而它可以使用 Vue.set(object, key, value) 方法将响应属性添加到嵌套的对象上：

Vue.set(vm.obj, 'e', 0)
 您还可以使用 vm.$set 实例方法，这也是全局 Vue.set 方法的别名：

this.$set(this.obj,'e',02)

有时你想向已有对象上添加一些属性，例如使用 Object.assign() 或 _.extend() 方法来添加属性。但是，添加到对象上的新属性不会触发更新。在这种情况下可以创建一个新的对象，让它包含原对象的属性和新的属性：

// 代替 `Object.assign(this.obj, { a: 1, e: 2 })`
 this.obj= Object.assign({}, this.obj, { a: 1, e: 2 })
```



