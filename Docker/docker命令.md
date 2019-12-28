```docker
# 安装docker
yum install docker
docker ps -a
docker images
docker run image
docker build
docker start/stop/rm container
docker exec


# Redis安装
docker pull redis:4.0
docker run -d --name="redis01" -v /ysw/redis/data:/data  -p 6379:6379 redis:4.0 redis-serser --appendonly yes --requirepass "root@234"
docker exec -it redis01 redis-cli -h 127.0.0.1 -p 6379 -a root@234
docker exec -it demo01 /bin/bash
docker run -it --name="static" -v /ysw/app/data:/ysw/app/uploadFiles -p 80:8080 demo05:static
docker run -it --name demo01 -p:8080:8080 demo01:1.0
docker exec -it redis01 redis-cli -h 127.0.0.1 -p 6379 -a root@234
docker exec -it demo01 /bin/bash

# MYSQL
docker run --name mysql56 -p 3306:3306 -e MYSQL_ROOT_PASSWORD=234 -d mysql:5.6 --character-set-server=utf8 --collation-server=utf8_general_ci
docker run --name mysql56 -v /ysw/mysql/config:/etc/mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=234 -d mysql:5.6 --character-set-server=utf8 --collation-server=utf8_general_ci

# 解决外部访问数据中文乱码的问题
SET NAMES 'utf8';
等同以下三条命令
SET character_set_client = utf8;
SET character_set_results = utf8;
SET character_set_connection = utf8;

配置文件位置：
vim etc/mysql/mysql.conf.d/mysql.cnf
[mysqld]
default-character-set = utf8
character_set_server = utf8
default-character-set = utf8
[mysql]
default-character-set = utf8
[mysql.server]
default-character-set = utf8
[mysqld_safe]
default-character-set = utf8
[client]
default-character-set = utf8





Dockers容器内使用vim
1.apt-get update
2.apt-get install vim 

Docker 命令大全
================================================================
容器生命周期管理
    run创建一个新的容器并运行一个命令
        docker run [OPTIONS] IMAGE [COMMAND] [ARG...]
        OPTIONS说明：
            -a stdin: 指定标准输入输出内容类型，可选 STDIN/STDOUT/STDERR 三项；
            -d: 后台运行容器，并返回容器ID；
            -i: 以交互模式运行容器，通常与 -t 同时使用；
            -P: 随机端口映射，容器内部端口随机映射到主机的高端口
            -p: 指定端口映射，格式为：主机(宿主)端口:容器端口
            -t: 为容器重新分配一个伪输入终端，通常与 -i 同时使用；
            --name="nginx-lb": 为容器指定一个名称；
            --dns 8.8.8.8: 指定容器使用的DNS服务器，默认和宿主一致；
            --dns-search example.com: 指定容器DNS搜索域名，默认和宿主一致；
            -h "mars": 指定容器的hostname；
            -e username="ritchie": 设置环境变量；
            --env-file=[]: 从指定文件读入环境变量；
            --cpuset="0-2" or --cpuset="0,1,2": 绑定容器到指定CPU运行；
            -m :设置容器使用内存最大值；
            --net="bridge": 指定容器的网络连接类型，支持 bridge/host/none/container: 四种类型；
            --link=[]: 添加链接到另一个容器；
            --expose=[]: 开放一个端口或一组端口； 
    start/stop/restart
    kill
    rm
    pause/unpause
    create
    exec

容器操作
    ps
    inspect
    top
    attach
    events
    logs
    wait
    export
    port

容器rootfs命令
    commit
    cp
    diff

镜像仓库
    login
    pull
    push
    search

本地镜像管理
    images
    rmi
    tag
    build
    history
    save
    load
    import

info|version
    info
    version






docker容器使用
================================================================
@       通过命令 docker command --help 更深入的了解指定的 Docker 命令使用方法。 
docker stats --help 

@       在docker容器中运行一个 Python Flask 应用来运行一个web应用
docker run -d -P training/webapp python app.py

@       使用 docker ps 来查看我们正在运行的容器
docker ps

@       使用 docker port 可以查看指定 （ID或者名字）容器的某个确定端口映射到宿主机的端口号
我们创建的web应用容器ID为:7a38a1ad55c6 名字为：determined_swanson
使用docker port 7a38a1ad55c6 或docker port determined_swanson来查看容器端口的映射情况

@       docker logs [ID或者名字] 可以查看容器内部的标准输出。
docker logs -f 7a38a1ad55c6
-f:让 dokcer logs 像使用 tail -f 一样来输出容器内部的标准输出

@       使用 docker top 来查看容器内部运行的进程
docker top determined_swanson

@       使用 docker inspect 来查看Docker的底层信息。它会返回一个 JSON 文件记录着 Docker 容器的配置和状态信息
docker inspect determined_swanson

@       停止WEB应用容器
docker stop determined_swanson   

@       重启WEB应用容器
已经停止的容器，我们可以使用命令 docker start 来启动
正在运行的容器，我们可以使用 docker restart 命令来重启
docker start determined_swanson
docker restart determined_swanson

@       使用 docker rm 命令来删除不需要的容器，删除容器时，容器必须是停止状态
docker rm determined_swanson  




docker镜像使用
================================================================
@       获取一个新的镜像
当我们在本地主机上使用一个不存在的镜像时 Docker 就会自动下载这个镜像。如果我们想预先下载这个镜像，我们可以使用 docker pull 命令来下载它。
docker pull

@       查找镜像
我们可以从 Docker Hub 网站来搜索镜像，Docker Hub 网址为： https://hub.docker.com/
我们也可以使用 docker search 命令来搜索镜像
docker search httpd
NAME:镜像仓库源的名称
DESCRIPTION:镜像的描述
OFFICIAL:是否docker官方发布

@     拖取镜像
我们决定使用上图中的httpd 官方版本的镜像，使用命令 docker pull 来下载镜像。
docker pull httpd

@       使用镜像
docker run httpd

@       创建镜像
当我们从docker镜像仓库中下载的镜像不能满足我们的需求时，我们可以通过以下两种方式对镜像进行更改。
1.从已经创建的容器中更新镜像，并且提交这个镜像
2.使用 Dockerfile 指令来创建一个新的镜像

@       更新镜像
更新镜像之前，我们需要使用镜像来创建一个容器。 
runoob@runoob:~$ docker run -t -i ubuntu:15.10 /bin/bash
root@e218edb10161:/# 
在运行的容器内使用 apt-get update 命令进行更新。
在完成操作之后，输入 exit命令来退出这个容器。
此时ID为e218edb10161的容器，是按我们的需求更改的容器。我们可以通过命令 docker commit来提交容器副本。
runoob@runoob:~$ docker commit -m="has update" -a="runoob" e218edb10161 runoob/ubuntu:v2
sha256:70bf1840fd7c0d2d8ef0a42a817eb29f854c1af8f7c59fc03ac7bdee9545aff8
各个参数说明：
    -m:提交的描述信息
    -a:指定镜像作者
    e218edb10161：容器ID
    runoob/ubuntu:v2:指定要创建的目标镜像名
我们可以使用 docker images 命令来查看我们的新镜像 runoob/ubuntu:v2： 
使用我们的新镜像 runoob/ubuntu 来启动一个容器
runoob@runoob:~$ docker run -t -i runoob/ubuntu:v2 /bin/bash                            
root@1a9fbdeb5da3:/#

@       构建镜像
我们使用命令 docker build ， 从零开始来创建一个新的镜像。为此，我们需要创建一个 Dockerfile 文件，其中包含一组指令来告诉 Docker 如何构建我们的镜像。
runoob@runoob:~$ cat Dockerfile 
FROM    centos:6.7
MAINTAINER      Fisher "fisher@sudops.com"

RUN     /bin/echo 'root:123456' |chpasswd
RUN     useradd runoob
RUN     /bin/echo 'runoob:123456' |chpasswd
RUN     /bin/echo -e "LANG=\"en_US.UTF-8\"" >/etc/default/local
EXPOSE  22
EXPOSE  80
CMD     /usr/sbin/sshd -D

每一个指令都会在镜像上创建一个新的层，每一个指令的前缀都必须是大写的。
第一条FROM，指定使用哪个镜像源
RUN 指令告诉docker 在镜像内执行命令，安装了什么。。。
然后，我们使用 Dockerfile 文件，通过 docker build 命令来构建一个镜像。

runoob@runoob:~$ docker build -t runoob/centos:6.7 .
Sending build context to Docker daemon 17.92 kB
Step 1 : FROM centos:6.7
 ---&gt; d95b5ca17cc3
Step 2 : MAINTAINER Fisher "fisher@sudops.com"
 ---&gt; Using cache
 ---&gt; 0c92299c6f03
Step 3 : RUN /bin/echo 'root:123456' |chpasswd
 ---&gt; Using cache
 ---&gt; 0397ce2fbd0a
Step 4 : RUN useradd runoob
......

参数说明：
    -t ：指定要创建的目标镜像名
    . ：Dockerfile 文件所在目录，可以指定Dockerfile 的绝对路径
使用docker images 查看创建的镜像已经在列表中存在,镜像ID为860c279d2fec
我们可以使用新的镜像来创建容器
runoob@runoob:~$ docker run -t -i runoob/centos:6.7  /bin/bash
[root@41c28d18b5fb /]# id runoob
uid=500(runoob) gid=500(runoob) groups=500(runoob)

我们可以使用 docker tag 命令，为镜像添加一个新的标签。
runoob@runoob:~$ docker tag 860c279d2fec runoob/centos:dev
docker tag 镜像ID，这里是 860c279d2fec ,用户名称、镜像源名(repository name)和新的标签名(tag)。
使用 docker images 命令可以看到，ID为860c279d2fec的镜像多一个标签。

@       删除镜像
先停止由镜像创建的容器
docker stop containers
删除由镜像创建的容器
docker rm containers
再删除镜像
docker rmi image

  




docker配置
================================================================
@       配置镜像拉取国内站点：
https://registry.docker-cn.com
http://hub-mirror.c.163.com
https://3laho3y3.mirror.aliyuncs.com
http://f1361db2.m.daocloud.io
https://mirror.ccs.tencentyun.com

# 在dockerd后面加参数
ExecStart=/usr/bin/dockerd --registry-mirror=https://registry.docker-cn.com

以上操作后重启一下 Docker
sudo systemctl daemon-reload
sudo systemctl restart docker
```