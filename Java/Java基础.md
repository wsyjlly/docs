[TOC]

# Java基础

## 基础语法

### Java标识符

Java所有的组成部分都需要名字。类名、变量名以及方法名都被称为标识符。

关于Java标识符，有以下几点需要注意：

-  所有的标识符都应该以字母（A-Z或者a-z）,美元符（$）、或者下划线（_）开始
-  首字符之后可以是任何字符的组合
-  关键字不能用作标识符
-  标识符是大小写敏感的
-  合法标识符举例：age、$salary、_value、__1_value
-  非法标识符举例：123abc、-salary

### Java修饰符

 像其他语言一样，Java可以使用修饰符来修饰类中方法和属性。主要有两类修饰符：

- 访问控制修饰符 : default, public , protected, private
- 非访问控制修饰符 : final, abstract, static，synchronized 和 volatile

### Java变量

 Java中主要有如下几种类型的变量

-  局部变量
-  类变量（静态变量）
-  成员变量（非静态变量）

### Java数组

数组是储存在堆上的对象，可以保存多个同类型变量。在后面的章节中，我们将会学到如何声明、构造以及初始化一个数组。

### Java枚举

Java 5.0引入了枚举，枚举限制变量只能是预先设定好的值。使用枚举可以减少代码中的bug。

例如，我们为果汁店设计一个程序，它将限制果汁为小杯、中杯、大杯。这就意味着它不允许顾客点除了这三种尺寸外的果汁。

### Java关键字 

> 下面列出了Java保留字。这些保留字不能用于常量、变量、和任何标识符的名称。 

| 关键字       | 描述                                                         |
| ------------ | ------------------------------------------------------------ |
| abstract     | 抽象方法，抽象类的修饰符                                     |
| assert       | 断言条件是否满足                                             |
| boolean      | 布尔数据类型                                                 |
| break        | 跳出循环或者label代码段                                      |
| byte         | 8-bit 有符号数据类型                                         |
| case         | switch语句的一个条件                                         |
| catch        | 和try搭配捕捉异常信息                                        |
| char         | 16-bit Unicode字符数据类型                                   |
| class        | 定义类                                                       |
| const        | 未使用                                                       |
| continue     | 不执行循环体剩余部分                                         |
| default      | switch语句中的默认分支                                       |
| do           | 循环语句，循环体至少会执行一次                               |
| double       | 64-bit双精度浮点数                                           |
| else         | if条件不成立时执行的分支                                     |
| enum         | 枚举类型                                                     |
| extends      | 表示一个类是另一个类的子类                                   |
| final        | 表示一个值在初始化之后就不能再改变了 表示方法不能被重写，或者一个类不能有子类 |
| finally      | 为了完成执行的代码而设计的，主要是为了程序的健壮性和完整性，无论有没有异常发生都执行代码。 |
| float        | 32-bit单精度浮点数                                           |
| for          | for循环语句                                                  |
| goto         | 未使用                                                       |
| if           | 条件语句                                                     |
| implements   | 表示一个类实现了接口                                         |
| import       | 导入类                                                       |
| instanceof   | 测试一个对象是否是某个类的实例                               |
| int          | 32位整型数                                                   |
| interface    | 接口，一种抽象的类型，仅有方法和常量的定义                   |
| long         | 64位整型数                                                   |
| native       | 表示方法用非java代码实现                                     |
| new          | 分配新的类实例                                               |
| package      | 一系列相关类组成一个包                                       |
| private      | 表示私有字段，或者方法等，只能从类内部访问                   |
| protected    | 表示字段只能通过类或者其子类访问 子类或者在同一个包内的其他类 |
| public       | 表示共有属性或者方法                                         |
| return       | 方法返回值                                                   |
| short        | 16位数字                                                     |
| static       | 表示在类级别定义，所有实例共享的                             |
| strictfp     | 浮点数比较使用严格的规则                                     |
| super        | 表示基类                                                     |
| switch       | 选择语句                                                     |
| synchronized | 表示同一时间只能由一个线程访问的代码块                       |
| this         | 表示调用当前实例 或者调用另一个构造函数                      |
| throw        | 抛出异常                                                     |
| throws       | 定义方法可能抛出的异常                                       |
| transient    | 修饰不要序列化的字段                                         |
| try          | 表示代码块要做异常处理或者和finally配合表示是否抛出异常都执行finally中的代码 |
| void         | 标记方法不返回任何值                                         |
| volatile     | 标记字段可能会被多个线程同时访问，而不做同步                 |
| while        | while循环                                                    |

### Java注释

类似于C/C++，Java也支持单行以及多行注释。注释中的字符将被Java编译器忽略。

### Java 空行

空白行，或者有注释的的行，Java编译器都会忽略掉。

### 继承

在Java中，一个类可以由其他类派生。如果你要创建一个类，而且已经存在一个类具有你所需要的属性或方法，那么你可以将新创建的类继承该类。

 利用继承的方法，可以重用已存在类的方法和属性，而不用重写这些代码。被继承的类称为超类（super class），派生类称为子类（subclass）。

### 接口

在Java中，接口可理解为对象间相互通信的协议。接口在继承中扮演着很重要的角色。

 接口只定义派生要用到的方法，但是方法的具体实现完全取决于派生类。

 下一节介绍Java编程中的类和对象。之后你将会对Java中的类和对象有更清楚的认识。

### 注意

编写Java程序时，应注意以下几点：

-  **大小写敏感**：Java是大小写敏感的，这就意味着标识符Hello与hello是不同的。
-  **类名**：对于所有的类来说，类名的首字母应该大写。如果类名由若干单词组成，那么每个单词的首字母应该大写，例如 MyFirstJavaClass 。
-  **方法名**：所有的方法名都应该以小写字母开头。如果方法名含有若干单词，则后面的每个单词首字母大写。
-  **源文件名**：源文件名必须和类名相同。当保存文件的时候，你应该使用类名作为文件名保存（切记Java是大小写敏感的），文件名的后缀为.java。（如果文件名和类名不相同则会导致编译错误）。
-  **主方法入口**：所有的Java 程序由**public static void main(String args[])**方法开始执行。

## Java修饰符

### 访问控制修饰符

| 访问权限  | 所有类可访问 | 不同包子类访问 | 同包中类访问 | 修饰类和接口 | 接口成员方法 | 接口成员变量 |
| :-------: | :----------: | :------------: | :----------: | :----------: | ------------ | :----------: |
|  private  |    false     |     false      |    false     |    false     | false        |    false     |
| protected |    false     |     `true`     |    `true`    |    false     | false        |    false     |
|  default  |    false     |     false      |    `true`    |    `true`    | `true`       |    false     |
|  public   |    `true`    |     `true`     |    `true`    |    `true`    | `true`       |    `true`    |

>  注意:
>
> - 接口里的变量都隐式声明为public static final了，而且必须是public static final 修饰，而接口里的方法默认情况下访问权限为public，还可声明为default。 
>
> - 访问控制和继承
>
>     -  父类中声明为public的方法在子类中也必须为public。
>     -  父类中声明为protected的方法在子类中要么声明为protected，要么声明为public。不能声明为private。
>     -  父类中声明为private的方法，不能够被继承。
>     -  父类中声明为default的方法，不在同一包中时不能够被继承。

### 非访问修饰符

> static修饰符，用来创建类方法和类变量。
>
> final修饰符，用来修饰类、方法和变量，final修饰的类不能够被继承，修饰的方法不能被继承类重新定义，修饰的变量为常量，是不可修改的。
>
> abstract修饰符，用来创建抽象类和抽象方法。
>
> synchronized和volatile修饰符，主要用于线程的编程。

#### static修饰符

> - **静态变量：**
>
>     static关键字用来声明独立于对象的静态变量，无论一个类实例化多少对象，它的静态变量只有一份拷贝。静态变量也被称为类变量。局部变量不能被声明为static变量。 
>
> - **静态方法：**
>
>     static关键字用来声明独立于对象的静态方法。静态方法不能使用类的非静态变量。静态方法从参数列表得到数据，然后计算这些数据。 

#### final修饰符

> - **final变量：**
>    final变量能被显式地初始化并且只能初始化一次。被声明为final的对象的引用不能指向不同的对象。但是final对象里的数据可以被改变。也就是说final对象的引用不能改变，但是里面的值可以改变。
>    final修饰符通常和static修饰符一起使用来创建类常量。
>- **final方法**
>类中的Final方法可以被子类继承，但是不能被子类修改。
>    声明final方法的主要目的是防止该方法的内容被修改。
>    如下所示，使用final修饰符声明方法。

#### abstract修饰符

> - **抽象类：**
>     抽象类不能用来实例化对象，声明抽象类的唯一目的是为了将来对该类进行扩充。 
>     一个类不能同时被abstract和final修饰。如果一个类包含抽象方法，那么该类一定要声明为抽象类，否则将出现编译错误。 
>     抽象类可以包含抽象方法和非抽象方法。 
>-  **抽象方法**
>  抽象方法是一种没有任何实现的方法，该方法的的具体实现由子类提供。抽象方法不能被声明成final和static。 
>     任何继承抽象类的子类必须实现父类的所有抽象方法，除非该子类也是抽象类。 
>     如果一个类包含若干个抽象方法，那么该类必须声明为抽象类。抽象类可以不包含抽象方法。 
>     抽象方法的声明以分号结尾，例如：public abstract sample(); 

#### synchronized修饰符

> synchronized关键字声明的方法同一时间只能被一个线程访问。Synchronized修饰符可以应用于四个访问修饰符。 

#### transient修饰符

> 序列化的对象包含被transient修饰的实例变量时，java虚拟机(JVM)跳过该特定的变量。 
>
> 该修饰符包含在定义变量的语句中，用来预处理类和变量的数据类型。 

#### volatile修饰符

> volatile修饰的成员变量在每次被线程访问时，都强迫从共享内存中重读该成员变量的值。而且，当成员变量发生变化时，强迫线程将变化值回写到共享内存。这样在任何时刻，两个不同的线程总是看到某个成员变量的同一个值。一个volatile对象引用可能是null。 

## 正则表达式

> 正则表达式定义了字符串的模式。
>
> 正则表达式可以用来搜索、编辑或处理文本。
>
> 正则表达式并不仅限于某一种语言，但是在每种语言中有细微的差别。
>
> Java正则表达式和Perl的是最为相似的。
>
> java.util.regex包主要包括以下三个类：**
>
> - Pattern类：
>
>     pattern对象是一个正则表达式的编译表示。Pattern类没有公共构造方法。要创建一个Pattern对象，你必须首先调用其公共静态编译方法，它返回一个Pattern对象。该方法接受一个正则表达式作为它的第一个参数。
>
> - Matcher类：
>
>     Matcher对象是对输入字符串进行解释和匹配操作的引擎。与Pattern类一样，Matcher也没有公共构造方法。你需要调用Pattern对象的matcher方法来获得一个Matcher对象。
>
> - PatternSyntaxException：
>
>     PatternSyntaxException是一个非强制异常类，它表示一个正则表达式模式中的语法错误。
>
> **捕获组** 
>
> 捕获组是把多个字符当一个单独单元进行处理的方法，它通过对括号内的字符分组来创建。
>
>  例如，正则表达式(dog) 创建了单一分组，组里包含"d"，"o"，和"g"。 
>
> 捕获组是通过从左至右计算其开括号来编号。例如，在表达式（（A）（B（C））），有四个这样的组： 
>
> - ((A)(B(C)))
> - (A)
> - (B(C))
> - (C)
>
> 可以通过调用matcher对象的groupCount方法来查看表达式有多少个分组。groupCount方法返回一个int值，表示matcher对象当前有多个捕获组。 
>
> 还有一个特殊的组（组0），它总是代表整个表达式。该组不包括在groupCount的返回值中。 

### 正则表达式语法

> 在其他语言中，\\ 表示：**我想要在正则表达式中插入一个普通的（字面上的）反斜杠，请不要给它任何特殊的意义。**
>
> 在 Java 中，\\  表示：**我要插入一个正则表达式的反斜线，所以其后的字符具有特殊的意义。**
>
> 所以，在其他的语言中（如Perl），一个反斜杠 \ 就足以具有转义的作用，而在 Java 中正则表达式中则需要有两个反斜杠才能被解析为其他语言中的转义作用。也可以简单的理解在 Java 的正则表达式中，两个 \\ 代表其他语言中的一个 \，这也就是为什么表示一位数字的正则表达式是 \\d，而表示一个普通的反斜杠是 \\\\。

| 字符          | 说明                                                         |
| ------------- | ------------------------------------------------------------ |
| \             | 将下一字符标记为特殊字符、文本、反向引用或八进制转义符。例如，"n"匹配字符"n"。"\n"匹配换行符。序列"\\\\"匹配"\\"，"\\("匹配"("。 |
| ^             | 匹配输入字符串开始的位置。如果设置了 **RegExp** 对象的 **Multiline** 属性，^ 还会与"\n"或"\r"之后的位置匹配。 |
| $             | 匹配输入字符串结尾的位置。如果设置了 **RegExp** 对象的 **Multiline** 属性，$ 还会与"\n"或"\r"之前的位置匹配。 |
| *             | 零次或多次匹配前面的字符或子表达式。例如，zo* 匹配"z"和"zoo"。* 等效于 {0,}。 |
| +             | 一次或多次匹配前面的字符或子表达式。例如，"zo+"与"zo"和"zoo"匹配，但与"z"不匹配。+ 等效于 {1,}。 |
| ?             | 零次或一次匹配前面的字符或子表达式。例如，"do(es)?"匹配"do"或"does"中的"do"。? 等效于 {0,1}。 |
| {*n*}         | *n* 是非负整数。正好匹配 *n* 次。例如，"o{2}"与"Bob"中的"o"不匹配，但与"food"中的两个"o"匹配。 |
| {*n*,}        | *n* 是非负整数。至少匹配 *n* 次。例如，"o{2,}"不匹配"Bob"中的"o"，而匹配"foooood"中的所有 o。"o{1,}"等效于"o+"。"o{0,}"等效于"o*"。 |
| {*n*,*m*}     | *m* 和 *n* 是非负整数，其中 *n* <= *m*。匹配至少 *n* 次，至多 *m* 次。例如，"o{1,3}"匹配"fooooood"中的头三个 o。'o{0,1}' 等效于 'o?'。注意：您不能将空格插入逗号和数字之间。 |
| ?             | 当此字符紧随任何其他限定符（*、+、?、{*n*}、{*n*,}、{*n*,*m*}）之后时，匹配模式是"非贪心的"。"非贪心的"模式匹配搜索到的、尽可能短的字符串，而默认的"贪心的"模式匹配搜索到的、尽可能长的字符串。例如，在字符串"oooo"中，"o+?"只匹配单个"o"，而"o+"匹配所有"o"。 |
| .             | 匹配除"\r\n"之外的任何单个字符。若要匹配包括"\r\n"在内的任意字符，请使用诸如"[\s\S]"之类的模式。 |
| (*pattern*)   | 匹配 *pattern* 并捕获该匹配的子表达式。可以使用 **$0…$9** 属性从结果"匹配"集合中检索捕获的匹配。若要匹配括号字符 ( )，请使用"\("或者"\)"。 |
| (?:*pattern*) | 匹配 *pattern* 但不捕获该匹配的子表达式，即它是一个非捕获匹配，不存储供以后使用的匹配。这对于用"or"字符 (\|) 组合模式部件的情况很有用。例如，'industr(?:y\|ies) 是比 'industry\|industries' 更经济的表达式。 |
| (?=*pattern*) | 执行正向预测先行搜索的子表达式，该表达式匹配处于匹配 *pattern*  的字符串的起始点的字符串。它是一个非捕获匹配，即不能捕获供以后使用的匹配。例如，'Windows (?=95\|98\|NT\|2000)'  匹配"Windows 2000"中的"Windows"，但不匹配"Windows  3.1"中的"Windows"。预测先行不占用字符，即发生匹配后，下一匹配的搜索紧随上一匹配之后，而不是在组成预测先行的字符后。 |
| (?!*pattern*) | 执行反向预测先行搜索的子表达式，该表达式匹配不处于匹配 *pattern*  的字符串的起始点的搜索字符串。它是一个非捕获匹配，即不能捕获供以后使用的匹配。例如，'Windows (?!95\|98\|NT\|2000)'  匹配"Windows 3.1"中的 "Windows"，但不匹配"Windows  2000"中的"Windows"。预测先行不占用字符，即发生匹配后，下一匹配的搜索紧随上一匹配之后，而不是在组成预测先行的字符后。 |
| *x*\|*y*      | 匹配 *x* 或 *y*。例如，'z\|food' 匹配"z"或"food"。'(z\|f)ood' 匹配"zood"或"food"。 |
| [*xyz*]       | 字符集。匹配包含的任一字符。例如，"[abc]"匹配"plain"中的"a"。 |
| [^*xyz*]      | 反向字符集。匹配未包含的任何字符。例如，"[^abc]"匹配"plain"中"p"，"l"，"i"，"n"。 |
| [*a-z*]       | 字符范围。匹配指定范围内的任何字符。例如，"[a-z]"匹配"a"到"z"范围内的任何小写字母。 |
| [^*a-z*]      | 反向范围字符。匹配不在指定的范围内的任何字符。例如，"[^a-z]"匹配任何不在"a"到"z"范围内的任何字符。 |
| \b            | 匹配一个字边界，即字与空格间的位置。例如，"er\b"匹配"never"中的"er"，但不匹配"verb"中的"er"。 |
| \B            | 非字边界匹配。"er\B"匹配"verb"中的"er"，但不匹配"never"中的"er"。 |
| \c*x*         | 匹配 *x* 指示的控制字符。例如，\cM 匹配 Control-M 或回车符。*x* 的值必须在 A-Z 或 a-z 之间。如果不是这样，则假定 c 就是"c"字符本身。 |
| \d            | 数字字符匹配。等效于 [0-9]。                                 |
| \D            | 非数字字符匹配。等效于 [^0-9]。                              |
| \f            | 换页符匹配。等效于 \x0c 和 \cL。                             |
| \n            | 换行符匹配。等效于 \x0a 和 \cJ。                             |
| \r            | 匹配一个回车符。等效于 \x0d 和 \cM。                         |
| \s            | 匹配任何空白字符，包括空格、制表符、换页符等。与 [ \f\n\r\t\v] 等效。 |
| \S            | 匹配任何非空白字符。与 [^ \f\n\r\t\v] 等效。                 |
| \t            | 制表符匹配。与 \x09 和 \cI 等效。                            |
| \v            | 垂直制表符匹配。与 \x0b 和 \cK 等效。                        |
| \w            | 匹配任何字类字符，包括下划线。与"[A-Za-z0-9_]"等效。         |
| \W            | 与任何非单词字符匹配。与"[^A-Za-z0-9_]"等效。                |
| \x*n*         | 匹配 *n*，此处的 *n* 是一个十六进制转义码。十六进制转义码必须正好是两位数长。例如，"\x41"匹配"A"。"\x041"与"\x04"&"1"等效。允许在正则表达式中使用 ASCII 代码。 |
| \*num*        | 匹配 *num*，此处的 *num* 是一个正整数。到捕获匹配的反向引用。例如，"(.)\1"匹配两个连续的相同字符。 |
| \*n*          | 标识一个八进制转义码或反向引用。如果 \*n* 前面至少有 *n* 个捕获子表达式，那么 *n* 是反向引用。否则，如果 *n* 是八进制数 (0-7)，那么 *n* 是八进制转义码。 |
| \*nm*         | 标识一个八进制转义码或反向引用。如果 \*nm* 前面至少有 *nm* 个捕获子表达式，那么 *nm* 是反向引用。如果 \*nm* 前面至少有 *n* 个捕获，则 *n* 是反向引用，后面跟有字符 *m*。如果两种前面的情况都不存在，则 \*nm* 匹配八进制值 *nm*，其中 *n* 和 *m* 是八进制数字 (0-7)。 |
| \nml          | 当 *n* 是八进制数 (0-3)，*m* 和 *l* 是八进制数 (0-7) 时，匹配八进制转义码 *nml*。 |
| \u*n*         | 匹配 *n*，其中 *n* 是以四位十六进制数表示的 Unicode 字符。例如，\u00A9 匹配版权符号 (©)。 |

### Matcher 类的方法

#### 索引方法

 索引方法提供了有用的索引值，精确表明输入字符串中在哪能找到匹配：

| 序号 | 方法及说明                                                   |
| :--: | :----------------------------------------------------------- |
|  1   | **public int start()**   				返回以前匹配的初始索引。 |
|  2   | **public int start(int group)**  				 返回在以前的匹配操作期间，由给定组所捕获的子序列的初始索引 |
|  3   | **public int end()**  				返回最后匹配字符之后的偏移量。 |
|  4   | **public int end(int group)**  				返回在以前的匹配操作期间，由给定组所捕获子序列的最后字符之后的偏移量。 |

#### 研究方法

研究方法用来检查输入字符串并返回一个布尔值，表示是否找到该模式：

| 序号 | **方法及说明**                                               |
| :-------: | ------------------------------------------------------------ |
|  1   | **public boolean lookingAt()**    尝试将从区域开头开始的输入序列与该模式匹配。 |
|  2   | **public boolean find()**   尝试查找与该模式匹配的输入序列的下一个子序列。 |
|  3   | public boolean find(int start）重置此匹配器，然后尝试查找匹配该模式、从指定索引开始的输入序列的下一个子列。 |
|  4   | **public boolean matches()**   尝试将整个区域与模式匹配。    |

#### 替换方法

 替换方法是替换输入字符串里文本的方法： 

| 序号 | **方法及说明**                                               |
| :--: | ------------------------------------------------------------ |
|  1   | **public Matcher appendReplacement(StringBuffer sb, String replacement)**  实现非终端添加和替换步骤。 |
|  2   | **public StringBuffer appendTail(StringBuffer sb)**  实现终端添加和替换步骤。 |
|  3   | **public String replaceAll(String replacement)**    替换模式与给定替换字符串相匹配的输入序列的每个子序列。 |
|  4   | **public String replaceFirst(String replacement)**   替换模式与给定替换字符串匹配的输入序列的第一个子序列 |
|  5   | **public static String quoteReplacement(String s)**  返回指定字符串的字面替换字符串。这个方法返回一个字符串，就像传递给Matcher类的appendReplacement 方法一个字面字符串一样工作。 |

#### start 和end 方法

 下面是一个对单词"cat"出现在输入字符串中出现次数进行计数的例子： 

```java
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegexMatches
{
    private static final String REGEX = "\\bcat\\b";
    private static final String INPUT =
                                    "cat cat cat cattie cat";

    public static void main( String args[] ){
       Pattern p = Pattern.compile(REGEX);
       Matcher m = p.matcher(INPUT); // 获取 matcher 对象
       int count = 0;

       while(m.find()) {
         count++;
         System.out.println("Match number "+count);
         System.out.println("start(): "+m.start());
         System.out.println("end(): "+m.end());
      }
   }
}
```

以上实例编译运行结果如下：

```
Match number 1
start(): 0
end(): 3
Match number 2
start(): 4
end(): 7
Match number 3
start(): 8
end(): 11
Match number 4
start(): 19
end(): 22
```

可以看到这个例子是使用单词边界，以确保字母 "c" "a" "t" 并非仅是一个较长的词的子串。它也提供了一些关于输入字符串中匹配发生位置的有用信息。 

Start方法返回在以前的匹配操作期间，由给定组所捕获的子序列的初始索引，end方法最后一个匹配字符的索引加1。 

#### matches 和lookingAt 方法

 matches 和lookingAt 方法都用来尝试匹配一个输入序列模式。它们的不同是matcher要求整个序列都匹配，而lookingAt 不要求。 

 这两个方法经常在输入字符串的开始使用。 

 我们通过下面这个例子，来解释这个功能： 

```java
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegexMatches
{
    private static final String REGEX = "foo";
    private static final String INPUT = "fooooooooooooooooo";
    private static Pattern pattern;
    private static Matcher matcher;

    public static void main( String args[] ){
       pattern = Pattern.compile(REGEX);
       matcher = pattern.matcher(INPUT);

       System.out.println("Current REGEX is: "+REGEX);
       System.out.println("Current INPUT is: "+INPUT);

       System.out.println("lookingAt(): "+matcher.lookingAt());
       System.out.println("matches(): "+matcher.matches());
   }
}
```

以上实例编译运行结果如下：

```
Current REGEX is: foo
Current INPUT is: fooooooooooooooooo
lookingAt(): true
matches(): false
```

#### replaceFirst 和replaceAll 方法

replaceFirst 和replaceAll 方法用来替换匹配正则表达式的文本。不同的是，replaceFirst 替换首次匹配，replaceAll 替换所有匹配。 

```java
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegexMatches
{
    private static String REGEX = "dog";
    private static String INPUT = "The dog says meow. " +
                                    "All dogs say meow.";
    private static String REPLACE = "cat";

    public static void main(String[] args) {
       Pattern p = Pattern.compile(REGEX);
       // get a matcher object
       Matcher m = p.matcher(INPUT); 
       INPUT = m.replaceAll(REPLACE);
       System.out.println(INPUT);
   }
}
```



#### appendReplacement 和 appendTail 方法

Matcher 类也提供了appendReplacement 和appendTail 方法用于文本替换： 

```java
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegexMatches
{
   private static String REGEX = "a*b";
   private static String INPUT = "aabfooaabfooabfoobbbb";
   private static String REPLACE = "-";
   public static void main(String[] args) {
      Pattern p = Pattern.compile(REGEX);
      // 获取 matcher 对象
      Matcher m = p.matcher(INPUT);
      StringBuffer sb = new StringBuffer();
      while(m.find()){
         m.appendReplacement(sb,REPLACE);
      }
      m.appendTail(sb);
      System.out.println(sb.toString());
   }
}
```

#### PatternSyntaxException 类的方法

PatternSyntaxException 是一个非强制异常类，它指示一个正则表达式模式中的语法错误。 

PatternSyntaxException 类提供了下面的方法来帮助我们查看发生了什么错误。 

| **序号** | **方法及说明**                                               |
| :------: | ------------------------------------------------------------ |
|    1     | **public String getDescription()**  获取错误的描述。         |
|    2     | **public int getIndex()**    获取错误的索引。                |
|    3     | **public String getPattern()**   获取错误的正则表达式模式。  |
|    4     | **public String getMessage()**   返回多行字符串，包含语法错误及其索引的描述、错误的正则表达式模式和模式中错误索引的可视化指示。 |

## 堆和栈

### 栈（stack）

> ​			栈是一个先进后出的结构，通过常用于保存方法（函数）中的参数，局部变量，Java中所有基本类型和引用类型都在栈中存储，栈中数据的生存空间，一般在当前域（即当前{}括起来的区域）。
>
> ​			栈的优势是，存取速度比堆要快，仅次于寄存器，栈数据可以共享。但缺点是，存在栈中的数据大小与生存期必须是确定的，缺乏灵活性。栈中主要存放一些基本类型的变量（,int, short, long, byte, float, double, boolean, char）和对象句柄。

### 堆（heap）

> ​			可动态申请的内存空间，在Java中所有使用new构造出来的对象都在队中存储，当垃圾回收器检测到某对象未被引用时，自动销毁该对象，所以，理论上说java的生存空间是没有限制的，只要有引用类型指向它，则他就可以在任意地方被使用。
>
> ​			Java的堆是一个运行时数据区,类的(对象从中分配空间。这些对象通过new、newarray、anewarray和multianewarray等
> 指令建立，它们不需要程序代码来显式的释放。堆是由垃圾回收来负责的，堆的优势是可以动态地分配内存大小，生存期也不必事先告诉编译器，因为它是在运行时
> 动态分配内存的，Java的垃圾收集器会自动收走这些不再使用的数据。但缺点是，由于要在运行时动态分配内存，存取速度较慢。

## Java创建数组的三种形式

测试类：

```java
package cn.wsyjlly.base;

import java.util.Arrays;

/**
 * @author wsyjlly
 * @create 2019.08.18 - 15:11
 **/
public class StringOperator {
    public static void main(String[] args) {
        //方式一：声明并赋初值，声明和赋值不可以分开写
        String[] str1 = {"aaa","bbb","ccc"};
        //方式二：先声明，后赋值，声明和赋值可以分开写。
        String[] str2 = new String[]{"aaa","bbb","ccc"};
        //方式三：先声明，后赋默认值，声明和赋值可以分开写。
        String[] str3;
        str3 = new String[3];
        Character[] str4 = new Character[3];
        Integer[] str5 = new Integer[3];
        char[] str6 = new char[3];
        byte[] str7 = new byte[3];
        short[] str8 = new short[3];
        int[] str9 = new int[3];
        long[] str10 = new long[3];
        float[] str11 = new float[3];
        double[] str12 = new double[3];
        boolean[] str13 = new boolean[3];
        System.out.println(Arrays.toString(str1));
        System.out.println(Arrays.toString(str2));
        System.out.println(Arrays.toString(str3));
        System.out.println(Arrays.toString(str4));
        System.out.println(Arrays.toString(str5));
        System.out.println("char"+Arrays.toString(str6));
        System.out.println("byte"+Arrays.toString(str7));
        System.out.println("short"+Arrays.toString(str8));
        System.out.println("int"+Arrays.toString(str9));
        System.out.println("long"+Arrays.toString(str10));
        System.out.println("float"+Arrays.toString(str11));
        System.out.println("double"+Arrays.toString(str12));
        System.out.println("boolean"+Arrays.toString(str13));
    }
}
```

测试结果：

```
[aaa, bbb, ccc]
[aaa, bbb, ccc]
[null, null, null]
[null, null, null]
[null, null, null]
char[ ,  ,  ]
byte[0, 0, 0]
short[0, 0, 0]
int[0, 0, 0]
long[0, 0, 0]
float[0.0, 0.0, 0.0]
double[0.0, 0.0, 0.0]
boolean[false, false, false]
```



## 注解

