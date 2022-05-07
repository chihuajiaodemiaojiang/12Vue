/* 
  作者:张三涛
*/

// 获取单个元素
function getEle(selector) {
  return document.querySelector(selector);
}

// 获取多个元素
function getEleAll(selector) {
  return document.querySelectorAll(selector);
}

/* 
* 作用： 选项卡效果
* topselector:头部选择器
* conselector:内容选择器
* topactiveclassname:头部的激活类名
* conactiveclassname:内容区域的激活类名
*/
function tab(topselector,conselector,topactiveclassname,conactiveclassname  ) {
  let lis = getEleAll(topselector);
  let conItems = getEleAll(conselector);

  for (let i = 0; i < lis.length; i++) {
    //为每个li标签添加点击事件
    lis[i].addEventListener("click", function () {
      //    先去掉所有人的类名
      for (let j = 0; j < lis.length; j++) {
        lis[j].classList.remove(topactiveclassname);
        conItems[j].classList.remove(conactiveclassname)
      }
      this.classList.add(topactiveclassname)
      //找到对应的内容区域盒子进行样式操作
      conItems[i].classList.add(conactiveclassname)
    })
  }
}


/* 
* 作用： 显示一个自定义提示框
  msg:提示信息
  url:要跳转的地址
  parentnode:父结点
  time:延迟时间
*/
function tips(msg="操作成功",url, parentnode, time=2000) {
  // 创建一个div来显示提示信息
  let tips = document.createElement("div");
  tips.style = `
      position:absolute;
      top:50%;
      left:50%;
      transform:translate(-50%,-50%);
      min-width:100px;
      height:100px;
      background-color:rgba(0,0,0,0.5);
      color:#fff;
      text-align:center;
      line-height:100px;
      font-size:14px;
  `
  tips.innerText = msg;
  parentnode.append(tips);
  window.setTimeout(function () {
     tips.remove();  
     if(url){
       //跳转页面，登录成功转到首页
       window.location.href = url;
      }
  }, time)
}



















/* // 选项卡--抽取
function tab(topitem, conitem) {
  //获取元素
  let toplis = document.querySelectorAll(topitem);
  let tabitems = document.querySelectorAll(conitem);
  console.log(toplis);
  console.log(tabitems);
  for (let i = 0; i < toplis.length; i++) {
    toplis[i].addEventListener("click", function () {
      // alert(i)
      // 处理头部
      for (let j = 0; j < toplis.length; j++) {
        toplis[j].classList.remove("active");
      }
      this.classList.add("active")
      for (let j = 0; j < tabitems.length; j++) {
        tabitems[j].classList.remove("current");
      }
      tabitems[i].classList.add("current");
    })
  }

}

// 登录验证方式切换
tab(".login-main  .tab-top  .top-item", ".tab-content  .con-item") */

