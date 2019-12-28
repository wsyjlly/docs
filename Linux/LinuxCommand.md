[TOC]

## 查看命令

### 查看安装软件名

rpm -qa | grep vsftpd
### 查看具体软件安装路径
rpm -ql vsftpd-3.0.2-25.el7.x86_64



## 配置命令

### 配置环境变量
vim /etc/profile

### 配置SSH连接

- 配置

```
vi /etc/ssh/sshd_config
```

```
PermitRootLogin no
PermitEmptyPasswords no
PasswordAuthentication yes
```

```
 systemctl restart sshd
```

- 设置防火墙，允许SSH服务使用22/TCP

```
firewall-cmd --add-service=ssh -–permanent
firewall-cmd –-reload
```

### 修改静态IP

```
 ll /etc/sysconfig/network-scripts/ifcfg-*
 
 sudo vi /etc/sysconfig/network-scripts/ifcfg-ens33
```

- > WMware默认网关
  >
  > ![1572139365794](assets/1572139365794.png)
  >
  > ![1572139326697](assets/1572139326697.png)

    

    

```
BOOTPROTO=static #dhcp改为static（修改）
ONBOOT=yes #开机启用本配置，一般在最后一行（修改）
 
IPADDR=192.168.114.136 #静态IP（增加）
GATEWAY=192.168.114.2 #默认网关，虚拟机安装的话，通常是2，也就是VMnet8的网关设置（增加）
NETMASK=255.255.255.0 #子网掩码（增加）
DNS1=192.168.114.2 #DNS 配置，虚拟机安装的话，DNS就网关就行，多个DNS网址的话再增加（增加）
```

```
systemctl restart network
```

### 修改主机名

```
vi /etc/hostname
reboot
```

### 修改hosts文件

```
vi /etc/hosts
```

### 修改root密码(我的默认：000000)

```
passwd
```

### 修改文件所有者和所有者的组

```
sudo chown swyan:swyan module/ software/
```



### 添加swyan账户具有root权限

```
su root
vim /etc/sudoers
```

```
swyan  	ALL=(ALL) 	ALL
```

### 软件安装

> Linux软件的二进制分发是指事先已经编译好二进制形式的软件包的发布形式，其优点是安装使用容易，缺点则是缺乏灵活性，如果该软件包是为特定的硬件/操作系统平台编译的，那它就不能在另外的平台或环境下正确执行。
> 　　1、`*.rpm形式的二进制软件包`
> 　　安装：rpm -ivh *.rpm
> 　　卸载：rpm -e packgename
> 　　说明：RPM（RedHat Packge Manager）是RedHat公司出的软件包管理器，使用它可以很容易地对rpm形式的软件包进行安装、升级、卸载、验证、查询等操作，安装简单，而卸载时也可以将软件安装在多处目录中的文件删除干净，因此推荐初学者尽可能使用rpm形式的软件包。rpm的参数中-i是安装，-v是校验，-h是用散列符显示安装进度，*.rpm是软件包的文件名（这里的*.rpm特指*.src.rpm以外的以rpm为后缀的文件）；参数-e是删除软件包，packgename是软件包名，与软件包的文件名有所区别，它往往是文件名中位于版本号前面的字符串，例如apache-3.1.12-i386.rpm和apache-devel-3.1.12-i386.rpm是软件包文件名，它们的软件包名称分别是apache和apache-devel。更多的rpm参数请自行参看手册页：man rpm。
> 　　2、`*.tar.gz/*.tgz、*.bz2形式的二进制软件包`
> 　　安装：tar zxvf *.tar.gz 或 tar yxvf *.bz2
> 　　卸载：手动删除
> 　　说明：*.tar.gz/*.bz2形式的二进制软件包是用tar工具来打包、用gzip/bzip2压缩的，安装时直接解包即可。对于解压后只有单一目录的软件，卸载时用命令“rm -rf 软件目录名”；如果解压后文件分散在多处目录中，则必须一一手动删除（稍麻烦），想知道解压时向系统中安装了哪些文件，可以用命令“tar ztvf *.tar.gz”/“tar ytvf *.bz2”获取清单。tar的参数z是调用gzip解压，x是解包，v是校验，f是显示结果，y是调用bzip2解压，t是列出包的文件清单。更多的参数请参看手册页：man tar

### 防火墙

- 防火墙开启端口

    ```
    firewall-cmd --zone=public --add-port=8080/tcp --permanent
    ```

- 查看防火状态

    ```
    systemctl status firewalld
    service  iptables status
    ```

- 暂时关闭防火墙

    ```
    systemctl stop firewalld
    service  iptables stop
    ```

- 永久关闭防火墙

    ```
    systemctl disable firewalld
    chkconfig iptables off
    ```

- 重启防火墙

    ```
    systemctl enable firewalld
    service iptables restart  
    ```

- 永久关闭后重启

    chkconfig iptables on

    

    

