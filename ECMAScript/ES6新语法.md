[TOC]

# ES6新语法

> ECMAScript6（ECMAScript 2015 ，ES5，ES2016）技术已经在前端圈子很流行了，他给前端开发人员带来了很多惊喜，提供的语法糖使复杂的操作变得简单。

## 1、const和let变量声明

> ES6推荐使用let声明局部变量，相比之前的var（无论声明在何处，都会被视为声明在函数的最顶部）

- let表示声明变量，而const表示声明常量，两者都为块级作用域；const 声明的变量都会被认为是常量，意思就是它的值被设置完成后就不能再修改了
- 如果const的是一个对象，对象所包含的值是可以被修改的。抽象一点儿说，就是对象所指向的地址没有变就行：
- let 关键词声明的变量不具备变量提升（hoisting）特性
- let 和 const 声明只在最靠近的一个块中（花括号内）有效
- 当使用常量 const 声明时，请使用大写变量，如：CAPITAL_CASING
- const 在声明时必须被赋值

```js
const IP_ADDRESS = 192.168.114.101
const DATA_ARRAY = [];
let currentIndex = 0;
function showMsg(){
	let index = 0;
}
```



## 2、模板字符串

> 1. 模板字面量本质上是包含嵌入式表达式的字符串字面量.
> 2. 模板字面量用倒引号 ``` `（而不是单引号 `''` 或双引号`""`）表示，
> 3. 可以包含用 `${expression}` 表示的占位符，即变量。
> 4. 基本的字符串格式化。将表达式嵌入字符串中进行拼接。

```js
$("body").html(`This demonstrates the output of HTML content to the page, 
including student's ${name}, ${seatNumber}, ${sex} and so on.`);
```

- 在jsp中`${}`与el表达式冲突，解决方式为加双层`${}`

    ```js
    let html = `<div class="content-item"><span>MAC：</span>${"${message.MAC}"}</div>`
    ```

## 3、箭头函数

> ES6 中，箭头函数就是函数的一种简写形式，使用括号包裹参数，跟随一个 =>，紧接着是函数体；
>
> - `不需要 function 关键字来创建函数`
> - `省略 return 关键字`
> - `继承当前上下文的 this 关键字`

```js
// ES5
var add = function (a, b) {
    return a + b;
};
// 使用箭头函数
var add = (a, b) => a + b;

// ES5
[1,2,3].map((function(x){
    return x + 1;
}).bind(this));
    
// 使用箭头函数
[1,2,3].map(x => x + 1);
```

- 细节：当你的函数有且仅有一个参数的时候，是可以`省略掉括号`的。当你函数返回有且仅有一个表达式的时候可以省略`{} `和` return`；

## 4、函数的参数默认值

- 在ES6之前，我们往往这样定义参数的默认值：

    ```js
    // ES6之前，当未传入参数时，text = 'default'；
    function printText(text) {
        text = text || 'default';
        console.log(text);
    }
    
    printText('hello'); // hello
    printText();// default
    ```

- ES6定义默认值

    ```js
    // ES6；
    function printText(text = 'default') {
        console.log(text);
    }
    
    printText('hello'); // hello
    printText();// default
    ```

## 5、Spread / Rest 操作符

> Spread / Rest 操作符指的是 ...，具体是 Spread 还是 Rest 需要看上下文语境。

- 当被用于迭代器中时，它是一个 Spread 操作符：

    ```js
    function foo(x,y,z) {
      console.log(x,y,z);
    }
     
    let arr = [1,2,3];
    foo(...arr); // 1 2 3
    ```

- 当被用于函数传参时，是一个 Rest 操作符：当被用于函数传参时，是一个 Rest 操作符：

    ```js
    function foo(...args) {
      console.log(args);
    }
    foo( 1, 2, 3, 4, 5); // [1, 2, 3, 4, 5];
    ```

## 6、二进制和八进制字面量

> ES6 支持二进制和八进制的字面量，通过在数字前面添加 0o 或者0O 即可将其转换为八进制值：

```js
let oValue = 0o10;
console.log(oValue); // 8
 
let bValue = 0b10; // 二进制使用 `0b` 或者 `0B`
console.log(bValue); // 2
```

## 7、对象和数组解构

```js
// 对象
const student = {
    name: 'Sam',
    age: 22,
    sex: '男'
}
// 数组
// const student = ['Sam', 22, '男'];

// ES5；
const name = student.name;
const age = student.age;
const sex = student.sex;
console.log(name + ' --- ' + age + ' --- ' + sex);

// ES6
const { name, age, sex } = student;
console.log(name + ' --- ' + age + ' --- ' + sex);
```

## 8、对象超类

ES6 允许在对象中使用 super 方法：

```js
var parent = {
  foo() {
    console.log("Hello from the Parent");
  }
}
 
var child = {
  foo() {
    super.foo();
    console.log("Hello from the Child");
  }
}
 
Object.setPrototypeOf(child, parent);
child.foo(); // Hello from the Parent
             // Hello from the Child
```

## 9、for...of 和 for...in

- for...of 用于遍历一个迭代器，如数组：

    ```js
    let letters = ['a', 'b', 'c'];
    letters.size = 3;
    for (let letter of letters) {
      console.log(letter);
    }
    // 结果: a, b, c
    ```

- for...in 用来遍历对象中的属性：

    ```js
     let stus = ["Sam", "22", "男"];
     for (let stu in stus) {
       console.log(stus[stu]);
      }
    // 结果: Sam, 22, 男
    ```

## 10、ES6中的类

> ES6 中支持 class 语法，不过，ES6的class不是新的对象继承模型，它只是原型链的语法糖表现形式。

- 函数中使用 static 关键词定义构造函数的的方法和属性：

    ```js
    class Student {
      constructor() {
        console.log("I'm a student.");
      }
     
      study() {
        console.log('study!');
      }
     
      static read() {
        console.log("Reading Now.");
      }
    }
     
    console.log(typeof Student); // function
    let stu = new Student(); // "I'm a student."
    stu.study(); // "study!"
    stu.read(); // "Reading Now."
    ```

- 类中的继承和超集： 

    ```js
    class Phone {
      constructor() {
        console.log("I'm a phone.");
      }
    }
     
    class MI extends Phone {
      constructor() {
        super();
        console.log("I'm a phone designed by xiaomi");
      }
    }
     
    let mi8 = new MI();
    ```

    > extends 允许一个子类继承父类，需要注意的是，子类的constructor 函数中需要执行 super() 函数。
    > 当然，你也可以在子类方法中调用父类的方法，如super.parentMethodName()。
    >
    > 有几点值得注意的是：
    >
    > - 类的声明不会提升（hoisting)，如果你要使用某个 Class，那你必须在使用之前定义它，否则会抛出一个 ReferenceError 的错误
    > - 在类中定义函数不需要使用 function 关键词

- super 和 extends

    > 使用新的super和extends关键字扩展类:

    ```javascript
    class Tree {
      constructor(size = '10', leaves = {spring: 'green', summer: 'green', fall: 'orange', winter: null}) {
        this.size = size;
        this.leaves = leaves;
        this.leafColor = null;
      }
    
      changeSeason(season) {
        this.leafColor = this.leaves[season];
        if (season === 'spring') {
          this.size += 1;
        }
      }
    }
    
    class Maple extends Tree {
      constructor(syrupQty = 15, size, leaves) {
        super(size, leaves); //super用作函数
        this.syrupQty = syrupQty;
      }
    
      changeSeason(season) {
        super.changeSeason(season);//super用作对象
        if (season === 'spring') {
          this.syrupQty += 1;
        }
      }
    
      gatherSyrup() {
        this.syrupQty -= 3;
      }
    }
    ```

    > 使用ES5编写同样功能的类:

    ```javascript
    function Tree(size, leaves) {
      this.size = size || 10;
      this.leaves = leaves || {spring: 'green', summer: 'green', fall: 'orange', winter: null};
      this.leafColor;
    }
    
    Tree.prototype.changeSeason = function(season) {
      this.leafColor = this.leaves[season];
      if (season === 'spring') {
        this.size += 1;
      }
    }
    
    function Maple (syrupQty, size, leaves) {
      Tree.call(this, size, leaves);
      this.syrupQty = syrupQty || 15;
    }
    
    Maple.prototype = Object.create(Tree.prototype);
    Maple.prototype.constructor = Maple;
    
    Maple.prototype.changeSeason = function(season) {
      Tree.prototype.changeSeason.call(this, season);
      if (season === 'spring') {
        this.syrupQty += 1;
      }
    }
    
    Maple.prototype.gatherSyrup = function() {
      this.syrupQty -= 3;
    }
    ```

    - super 必须在 this 之前被调用

- 在子类构造函数中，在使用 this 之前，必须先调用超级类。

    ```javascript
    class Apple {}
    class GrannySmith extends Apple {
      constructor(tartnessLevel, energy) {
        this.tartnessLevel = tartnessLevel; // 在 'super' 之前会抛出一个错误！
        super(energy); 
      }
    }
    ```

    

## 11、对象字面量简写法

```javascript
const gemstone = {
  	type,
  	color,
  	carat,
   	calculateWorth() { ... }
};
```

- 使用和所分配的变量名称相同的名称初始化对象时，如果属性名称和所分配的变量名称一样，那么就可以从对象属性中删掉这些重复的变量名称。

## 12、模块的 Import 和 Export

> `import` 用于引入模块，`export` 用于导出模块。

```javascript
// 引入整个文件
import dva from 'dva';

// 引入函数(可以是一个或多个)
import { connect } from 'dva';
import { Link, Route } from 'dva/router';

// 引入全部并作为 github 对象
import * as github from './services/github';

// 导出默认
export default App;
// 部分导出，复合写法是 export { App } from './file';
　　等价于import { App } from './file；export｛App｝
```



## 13、Promise函数

















