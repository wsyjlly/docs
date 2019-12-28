# dos命令删除.git文件夹
# rmdir /s/q .git
# bash命令删除.git文件夹
rm -rf .git
# 初始化仓库
git init
# 创建note-md分支并切换到该分支
git checkout -b note-md
# 在note-md分支下添加所有Markdown文档
git add .
# 将暂存区中存放的文件提交到git仓库
git commit -m '笔记Markdown文档'
# 将本地仓库的note-md分支push到远程仓库的note-md分支
git push -f git@github.com:/wsyjlly/docs.git note-md