[TOC]

# SFOW官网

## 一、sfow官网项目介绍

> ​		sfow是为北京嘉瑞世飞制冷有限公司设计的官方网站，该网站分为官网展示和后台管理两大部分。运用了前后端分离的技术，使得前端代码与后端代码分开发布，并行运行，提高效率。以下介绍项目主要配置：
> - 前端：主要运用了Vue组件开发搭载了 vuex、vueRouter、ElementUI、axios等开源框架，布局方式，采用flex布局。
> - 后端：主要使用SpringBoot搭载最新的持久层框架mybatis-plus。
> - 数据库：关系数据库使用mysql、NoSQL使用redis。
> - 服务器配置：1vCPU、2GiB内存、1Mbps带宽、CentOS 7.6 Linux系统。
> - 项目部署方式：docker发布

## 二、sfow官网项目部署流程

### 1、服务器关闭防火墙 或 开启相关端口号
> 方案一：关闭防火墙
>> systemctl stop firewalld
>> systemctl disable firewalld

> 方案二：开启端口号（推荐）
> > firewall-cmd --zone=public --add-port=80/tcp --permanent
> > firewall-cmd --zone=public --add-port=8080/tcp --permanent
> > firewall-cmd --zone=public --add-port=3306/tcp --permanent
> > firewall-cmd --zone=public --add-port=2375/tcp --permanent
> > firewall-cmd --zone=public --add-port=6379/tcp --permanent
> >
> > - 重启firewall
> > firewall-cmd --reload
> > - 查看开放端口
> > firewall-cmd --list-ports

### 2、云服务器安全组开放相应端口号

![安全组入方向配置](./assets/1563012474819.png)

![安全组出方向配置](./assets/1563012645955.png)

### 3、yum安装docker

> yum install docker

### 4、开启docker远程发布端口监听
> vi /usr/lib/systemd/system/docker.service
添加内容：　　-H tcp://0.0.0.0:2375 -H unix:///var/run/docker.sock \

### 5、创建服务器本地挂载文件夹
> mkdir -p /ysw/app/sfow/uploadFiles
mkdir -p /ysw/app/mysql/data
mkdir -p /ysw/app/redis/data

### 6、docker启动mysql容器
> docker pull mysql:5.6
docker run --name mysql56-sfow -v /ysw/app/mysql/data:/var/lib/mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=234 -d mysql:5.6 --character-set-server=utf8 --collation-server=utf8_general_ci
docker exec -it mysql56-sfow bash

### 7、docker启动redis容器
> docker pull redis:4.0
docker run -d --privileged=true --name redis01-sfow -v /ysw/app/redis/data:/data  -p 6379:6379 redis:4.0 --requirepass "root@234" --appendonly yes
docker exec -it redis01-sfow redis-cli -h 127.0.0.1 -p 6379 -a root@234　

### 8、docker启动动态应用容器
> docker run -d --name sfow  -v /ysw/app/sfow/uploadFiles:/ysw/app/uploadFiles -p 8080:8080 sfow:0.0.1-SNAPSHOT
docker exec -it sfow bash

### 9、docker启动静态应用容器
> docker run -d --name static -v /ysw/app/sfow/uploadFiles:/ysw/app/uploadFiles -p 80:8080 demo05:static
docker exec -it static bash

### 10、整个应用的停止与启动

> docker停止该应用程序相关容器
>
> > docker stop mysql56-sfow redis01-sfow sfow static

> docker启动该应用程序相关容器
>
> > docker start mysql56-sfow redis01-sfow sfow static

### 11、项目访问

> [官网地址](http://47.102.210.175)
> [官网后台管理地址](http://47.102.210.175/back/index.html)