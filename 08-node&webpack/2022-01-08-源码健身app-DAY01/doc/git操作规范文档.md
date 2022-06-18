# git操作规范文档

## 前置条件

```javascript
# 清除掉缓存在git中的用户名和密码  ( 可能之前有人用过这台电脑 )
git credential-manager uninstall

# 记住自己的用户名和密码
git config --global credential.helper store

# 仓库地址
https://gitee.com/xxx.git

# 仓库账号和密码
账号: ********
密码: ******
```



## 第一次下载(克隆)代码

```javascript
git clone 仓库地址 // 例如: git clone https://gitee.com/xxxxx.git
```



## 第二次以后下载(拉取)代码

```javascript
git pull 仓库地址 分支名 // 例如: git pull origin develop
```



## 提交代码步骤

```javascript
git add .           // 纳入到版本控制
git commit -m"描述信息"   // 暂存到本地 

# git pull: 1. 进公司第一件事情就是拉取，2. 推送至远程仓库之前一定要拉取
git pull origin develop

# commit一般是一个功能一次 push是一天一次. 一般是下班之前push

git push 仓库地址 分支名  // 推送到远程服务器仓库 例如: git push origin develop 
```



## commit 规范

```javascript
feat：新功能（feature）  // git commit -m"feat: 注册功能完成" 

fix：修补bug   // git commit -m"fix: 修复登录表单验证bug"

docs：文档（documentation）  // git commit -m"docs: 新增功能文档"
```



## 其他命令

```javascript
git status  // 查看仓库状态

git branch // 查看当前有哪些分支
git branch 分支名  // 创建分支
git checkout 分支名 // 切换分支

# git checkout -b 分支名 // 创建并切换分支

git merge 分支名  // 合并分支

git config --global user.name "小貂蝉"  // 配置用户名
git config --global user.email dc@qq.com // 配置邮箱

git tag -a v1.1 -m "test_tag"； // 打标签
```

























