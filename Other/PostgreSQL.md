[TOC]

使用方法:
  initdb [选项]... [DATADIR]

选项:
  -A, --auth=METHOD         本地连接的默认认证方法
      --auth-host=METHOD   本地的TCP/IP连接的默认认证方法
      --auth-local=METHOD   本地socket连接的默认认证方法
  -D, --pgdata=DATADIR      当前数据库簇的位置
  -E, --encoding=ENCODING   为新数据库设置默认编码
      --locale=LOCALE      为新数据库设置默认语言环境
  --lc-collate, --lc-ctype, --lc-messages=LOCALE
  --lc-monetary, --lc-numeric, --lc-time=LOCALE
                            为新的数据库簇在各自的目录中分别
                   设定缺省语言环境（默认使用环境变
                   量)
  --no-locale               等同于 --locale=C
  --pwfile=文件名           对于新的超级用户从文件读取口令
  -T, --text-search-config=CFG
                   缺省的文本搜索配置
  -U, --username=NAME       数据库超级用户名
  -W, --pwprompt            对于新的超级用户提示输入口令
  -X, --waldir=WALDIR       location for the write-ahead log directory

非普通使用选项:
  -d, --debug               产生大量的除错信息
 -k, --data-checksums    使用数据页产生效验和
  -L DIRECTORY              输入文件的位置
  -n, --no-clean            do not clean up after errors
  -N, --no-sync             do not wait for changes to be written safely to disk
  -s, --show                显示内部设置
  -S, --sync-only          只同步数据目录

其它选项:
  -V, --version             输出版本信息, 然后退出
  -?, --help                显示此帮助, 然后退出



```
initdb  -U swyan -W -D data
```

