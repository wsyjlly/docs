[TOC]

# 一、基础

1. `“=="与equals的区别？`

    "=="比较的是对象地址，equals比较的是字符串

2. `String，StringBuffer，StringBuilder区别？`

    String
    
3. ``hashMap``

4. ``Java虚拟机 ~ class字节码文件剖析``

5. ``Java虚拟机 ~ 类的加载过程剖析``

# 二、SpringBoot

1. `SpringBoot优势？`
    1. 在原始的Java EE开发中，大量的XML文件存在于项目之中，导致JavaEE项目变得笨重，繁琐的自身配置及整合第三方框架的配置，导致开发和部署的效率大大降低。
    2. SpringBoot不是Spring的替代解决方案，而是和Spring框架紧密结合，用于提升Spring开发者体验的工具，同时它集成了大量常用的第三方库配置，SpringBoot中这些第三方库的配置几乎是零配置（开箱即用），大部分的SpringBoot项目都只需要非常少量的配置代码，让开发者更加著重于业务逻辑。
2. `Spring与SpringMVC的区别与联系？`
    1. Spring是IOC和AOP的容器框架，SpringMVC是基于Spring功能之上添加的Web框架，想要使用SpringMVC必须依赖使用Spring。