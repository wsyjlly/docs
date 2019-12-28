# vuepress 构建文档页面
vuepress build
# 进入到dist目录
cd .vuepress/dist
# 初始化git仓库
git init
# 添加所有文件到暂存区
git add .
# 将暂存区中的文件提交到git仓库
git commit -m 'docs.wsyjlly.cn'
# 将本地仓库的master分支push到远程docs仓库的master分支
git push -f git@github.com:/wsyjlly/docs.git master