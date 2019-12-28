[TOC]

# Git命令

## 配置命令

### 获取全局配置列表

```git
git config --list
```

### 查看git用户名：

```
git config user.name
```

### 查看邮箱配置

```
git config user.email
```

### 全局配置用户名

```
git config --global user.name "wsyjlly"
```

### 全局配置邮箱：

```
git config --global user.email "211874876@qq.com"
```



## 操作命令

### 1、生成SSH-KEY

```git
ssh-keygen -t rsa  -C "wsyjlly@foxmail.com"
```

### 2、创建远程仓库

```
curl -u wsyjlly  https://api.github.com/user/repos -d '{ "name": "docs" }' 
```

### 从远程分支拉取分支

```
git pull origin server:server
//如果不写远程分支名称，则默认和本地分支同名
git pull origin server
```

### 提交本地分支到远程分支(git push)

```
git push origin server:server
//如果不写远程分支名称，则默认和本地分支同名
git push origin server
```

### 添加远程仓库(git remote)

```
git remote add cm https://github.com/wsyjlly/cloud-memo
```

### 添加远程仓库(git remote)

> 运行 `git remote add <shortname> <url>` 添加一个新的远程 Git 仓库，同时指定一个你可以轻松引用的简写

```
D:\Typora>git remote add origin https://github.com/wsyjlly/docs
D:\Typora>git remote
origin
D:\Typora>git remote -v
origin  https://github.com/wsyjlly/docs (fetch)
origin  https://github.com/wsyjlly/docs (push)
```

### 下载远程仓库(git clone)

```
git clone https://github.com/wsyjlly/cloud-memo.git
```



### 下载远程仓库到指定目录(git clone)

> 默认情况下，`git clone` 命令会自动设置本地 master 分支跟踪克隆的远程仓库的 master 分支（或不管是什么名字的默认分支）。

```
git clone https://github.com/wsyjlly/cloud-memo.git D:/wsyjlly/cloud-memo
```



### 添加文件到版本库(git add)

```
git add .
```

### 将暂存区中存放的文件提交到git仓库(git commit)

```
git commit -m "提交记录信息"
```

### 将本地代码库的当前分支推送到远程的代码库(git push)

```
git push -u origin master
```

### 从远程仓库中抓取与拉取(git clone)

> 如果你使用 `clone` 命令克隆了一个仓库，命令会自动将其添加为远程仓库并默认以 “origin” 为简写。

```
git clone https://github.com/wsyjlly/cloud-memo.git
```

### 从远程仓库中抓取(git fetch)

> `git fetch origin` 会抓取克隆（或上一次抓取）后新推送的所有工作

```
git fetch https://github.com/wsyjlly/cloud-memo.git
```



> 这个命令会访问远程仓库，从中拉取所有你还没有的数据。 执行完成后，你将会拥有那个远程仓库中所有分支的引用，可以随时合并或查看。
>
>  所以，。 必须注意 `git fetch` 命令会将数据拉取到你的本地仓库 - 它并不会自动合并或修改你当前的工作。 当准备好时你必须手动将其合并入你的工作。
>
> 如果你有一个分支设置为跟踪一个远程分支（阅读下一节与 [Git 分支](https://git-scm.com/book/zh/v2/ch00/ch03-git-branching) 了解更多信息），可以使用 `git pull` 命令来自动的抓取然后合并远程分支到当前分支。 这对你来说可能是一个更简单或更舒服的工作流程； 运行

```console
$ git fetch [remote-name]
```

### 远程仓库的移除与重命名(git remote)

> 如果想要重命名引用的名字可以运行 `git remote rename` 去修改一个远程仓库的简写名。 例如，想要将 `pb` 重命名为 `paul`，可以用 `git remote rename` 这样做：

```console
git remote rename pb paul
git remote
origin
paul
```

> 值得注意的是这同样也会修改你的远程分支名字。 那些过去引用 `pb/master` 的现在会引用 `paul/master`。

> 如果因为一些原因想要移除一个远程仓库 - 你已经从服务器上搬走了或不再想使用某一个特定的镜像了，又或者某一个贡献者不再贡献了 - 可以使用 `git remote rm` ：

```git
$ git remote rm paul
$ git remote
origin
```

### 从远程仓库获取所有分支

```
git clone https://github.com/wsyjlly/cloud-memo.git
git fetch https://github.com/wsyjlly/cloud-memo.git --all
git pull https://github.com/wsyjlly/cloud-memo.git --all
```

### 查看本地分支(*代表当前分支)

```
git branch
```

### 查看本地及远程分支(server)

```
git branch a
```

### 创建本地分支(server)

```
git branch localbranch
```

### 切换到本地分支
```
git checkout localbranch
```

### 删除本地分支

```
git branch -d localbranch
```



### 创建远程分支

1. 新建并切换到本地分支

    ```
    git checkout -b localbranch
    ```

2. 把新建从本地分支push到远程服务器

    ```
    git push origin localbranch:localbranch
    ```

### 删除远程分支

1. 推送一个空分支到远程分支，其实就相当于删除远程分支

    ```
    git push origin :localbranch
    ```

2. delete命令删除

    ```
    git push origin --delete localbranch
    ```
    
    ```
    git branch -r -d origin/branch-name
    ```

### 如果远程新建了一个分支branch_name，本地没有该分支。

```
git checkout --track origin/branch_name	
```

### 如果本地新建了一个分支 branch_name，但是在远程没有

> 这时候 push 和 pull 指令就无法确定该跟踪谁，一般来说我们都会使其跟踪远程同名分支，所以可以利用 git 
> push --set-upstream origin branch_name ，这样就可以自动在远程创建一个 branch_name 分支，然后本地分支会 track 该分支。后面再对该分支使用
> push 和 pull 就自动同步。

```
git push --set-upstream origin branch_name
```



### 查看当前版本库状态

```
git status
```

### 新建本地分支与远程分支关联

```
git push --set-upstream origin branch_name
```



## clone、pull和fetch的用法及区别

### git clone 将其他仓库克隆到本地

> git clone顾名思义就是将其他仓库克隆到本地，**包括被clone仓库的版本变化**。举个例子，你当前目录比方说是在e:/course/中，此时若想下载远程仓库，本地无需**git init**,直接git
> clone url（url是你远程仓库的地址，直接复制就可以了）。执行git 
> clone等待clone结束，e:/course/目录下自动会有一个.git的隐藏文件夹（如果看不见，请尝试设置隐藏文件夹可见），因为是clone来的，所以.git文件夹里存放着与远程仓库一模一样的版本库记录。clone操作是一个从无到有的**克隆**操作，再次强调不需要`git init`初始化。

**git clone的用法**

```
$ git clone <版本库的url>
```

例如克隆TensorFlow：

```
$ git clone https://github.com/tensorflow/tensorflow.git
```

或者使用SSH协议：

```
$ git clone git@github.com:tensorflow/tensorflow.git
```

这样就会在本地生成一个目录，该目录与远程仓库同名。
However，如果本地目录不想与远程仓库同名怎么办？？也有办法，将目录名作为`git clone`命令的第二个参数:

```
$ git clone <版本库的网址> <本地目录名>
```



### git pull 拉取远程分支更新到本地仓库

> git pull是拉取远程分支更新到本地仓库的操作。比如远程仓库里的学习资料有了新内容，需要把新内容下载下来的时候，就可以使用`git pull`命令。事实上，git pull是相当于从远程仓库获取最新版本，然后再与本地分支merge（合并）。
> 　　即：`git pull = git fetch + git merge`
>
> > 注：git fetch不会进行合并，执行后需要手动执行git merge合并，而git  pull拉取远程分之后直接与本地分支进行合并。更准确地说，git pull是使用给定的参数运行git fetch，并调用git  merge将检索到的分支头合并到当前分支中。

**git pull的用法**

```
$ git pull <远程主机名> <远程分支名>:<本地分支名>
```

举例：将远程主机origin的master分支拉取过来，与本地的branchtest分支合并。

```
$ git pull origin master:branchtest
```

如果将冒号和后面的branchtest去掉，则表示将远程origin仓库的master分支拉取下来与本地**当前分支**合并。
以上的git pull操作如果用git fetch来表示：

```
$ git fetch origin master:brantest
$ git merge brantest
```

相比起来，`git fetch`更安全也更符合实际要求，因为可以在merge前，我们可以查看更新情况，根据实际情况再决定是否合并。



### git fetch  更新远程代码到本地仓库

> 理解 fetch 的关键, 是理解 FETCH_HEAD，FETCH_HEAD指的是: 某个branch在服务器上的最新状态’。这个列表保存在 .Git/FETCH_HEAD 文件中, 其中每一行对应于远程服务器的一个分支。
> 当前分支指向的FETCH_HEAD, 就是这个文件第一行对应的那个分支.
> 一般来说, 存在两种情况:
>
> - 如果没有显式的指定远程分支, 则远程分支的master将作为默认的FETCH_HEAD
> - 如果指定了远程分支, 就将这个远程分支作为FETCH_HEAD

**git fetch更新本地仓库的两种用法**

```
# 方法一
$ git fetch origin master                #从远程的origin仓库的master分支下载代码到本地的origin maste
$ git log -p master.. origin/master      #比较本地的仓库和远程参考的区别
$ git merge origin/master                #把远程下载下来的代码合并到本地仓库，远程的和本地的合并

```

```
# 方法二
$ git fetch origin master:temp           #从远程的origin仓库的master分支下载到本地并新建一个分支temp
$ git diff temp                          #比较master分支和temp分支的不同
$ git merge temp                         #合并temp分支到master分支
$ git branch -d temp                     #删除temp
```

