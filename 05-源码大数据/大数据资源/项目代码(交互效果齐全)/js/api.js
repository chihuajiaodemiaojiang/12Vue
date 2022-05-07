// 模拟服务器上的传递过来的数据
let apiTypeData = [
  { name: "全部", keyword: "身份证实名", isnew: false },
  { name: "生活服务", keyword: "银行卡", isnew: false },
  { name: "金融科技", keyword: "短信", isnew: false },
  { name: "交通地理", keyword: "天气", isnew: false },
  { name: "充值缴费", keyword: "短信", isnew: false },
  { name: "数据智能", keyword: "手机归属地", isnew: false },
  { name: "企业工商", keyword: "IP", isnew: false },
  { name: "应用开发", keyword: "手机归属地", isnew: false },
  { name: "电子商务", keyword: "IP", isnew: false },
  { name: "吃喝玩乐", keyword: "视频", isnew: false },
  { name: "文娱视频", keyword: "视频", isnew: false },
  { name: "免费接口大全", keyword: "短信", isnew: true },
  { name: "短信", keyword: "身份证实名", isnew: false },
  { name: "汽车", keyword: "银行卡", isnew: false },
  { name: "核验", keyword: "银行卡", isnew: false },
  { name: "最新发布", keyword: "银行卡", isnew: true },
  { name: "API私有化部署", keyword: "身份证实名", isnew: true },
]
/* 思路：
    根据以上的数据动态创建a标签，添加到 .nav盒子中
 
*/
// 获取元素
let nav = getEle("#nav");
//显示当前类别的span
let curType = getEle("#curType");
//搜索框
let searchInp =getEle("#searchInp");

//给分类大盒子添加事件
/* 
由于这里的a标签是动态生成的，页面加载时不能绑定事件，
所以使用事件委托来实现。

*/
// console.log("nav",nav);

nav.addEventListener("click", function (e) {
  //    console.log( 1);
  // console.log(e.target.textContent);
  //如果点击的是a标签，才做处理
  if (e.target.nodeName.toLowerCase() === "a") {
      //1 把自己的内容添加到span中
      curType.textContent = e.target.textContent;
      //2 修改搜索框的placeholder
      //    searchInp.placeholder="xxxxxx"  ok
      // searchInp.setAttribute("placeholder", "yyyyy")

      //遍历数组，找到对应的对象，然后取出对象身上的keyword属性值赋给搜索框。
      /*  for (let i = 0; i < apiTypeData.length; i++) {
          if (apiTypeData[i].name === e.target.textContent) {
              // console.log((apiTypeData[i]));
              // 修改搜索框的placeholder
              searchInp.setAttribute("placeholder", apiTypeData[i].keyword)
              break;
              
          }
      } */
      //从事件源a标签身上获取自定义属性的值 ，赋给搜索框
      searchInp.setAttribute("placeholder", e.target.getAttribute("keyword"))
  }

})
/* 
 动态创建a标签
*/
for (let i = 0; i < apiTypeData.length; i++) {
  //创建a标签
  let newa = document.createElement("a");
  //设置a标签的内容
  newa.innerText = apiTypeData[i].name;
  //添加类名
  // newa.classList.add("fl")  ok
  // newa.className = "fl"   ok
  newa.setAttribute("class", "fl")
  //把自己的keyword属性的值，设置为自定义属性
  newa.setAttribute("keyword", apiTypeData[i].keyword)
  //加粗文字
  // if(apiTypeData[i].isnew)  newa.style.fontWeight="bold"; 
  if (apiTypeData[i].isnew) {
      newa.classList.add("bold");
  }
  //添加到.nav盒子中
  nav.append(newa);
  // console.log(newa);
}
//获取列表的大盒子
let apiContent = getEle("#apiContent");

//API列表区域 模拟服务器返回的数据
let listDataArr = [
  //第一行
  { img: "API_01.jpg", name: "2021出行防疫政策指南", price: "免费", isSpecial: false },
  { img: "API_02.jpg", name: "身份证实名认证", price: "￥0.2000/次", isSpecial: true },
  { img: "API_03.jpg", name: "天气预报", price: "免费", isSpecial: false },
  { img: "API_04.jpg", name: "银行卡四元素校验", price: "￥0.3360/次", isSpecial: true },
  { img: "API_05.jpg", name: "短信API服务", price: "￥0.0400/次", isSpecial: true },

  //第二行
  { img: "API_01.jpg", name: "2021出行防疫政策指南", price: "免费", isSpecial: false },
  { img: "API_02.jpg", name: "身份证实名认证", price: "￥0.2000/次", isSpecial: true },
  { img: "API_03.jpg", name: "天气预报", price: "免费", isSpecial: false },
  { img: "API_04.jpg", name: "银行卡四元素校验", price: "￥0.3360/次", isSpecial: true },
  { img: "API_05.jpg", name: "短信API服务", price: "￥0.0400/次", isSpecial: true },
  //第三行
  { img: "API_01.jpg", name: "2021出行防疫政策指南", price: "免费", isSpecial: false },
  { img: "API_02.jpg", name: "身份证实名认证", price: "￥0.2000/次", isSpecial: true },
  { img: "API_03.jpg", name: "天气预报", price: "免费", isSpecial: false },
  { img: "API_04.jpg", name: "银行卡四元素校验", price: "￥0.3360/次", isSpecial: true },
  { img: "API_05.jpg", name: "短信API服务", price: "￥0.0400/次", isSpecial: true },
  //第四行
  { img: "API_01.jpg", name: "2021出行防疫政策指南", price: "免费", isSpecial: false },
  { img: "API_02.jpg", name: "身份证实名认证", price: "￥0.2000/次", isSpecial: true },
  { img: "API_03.jpg", name: "天气预报", price: "免费", isSpecial: false },
  { img: "API_04.jpg", name: "银行卡四元素校验", price: "￥0.3360/次", isSpecial: true },
  { img: "API_05.jpg", name: "短信API服务", price: "￥0.0400/次", isSpecial: true },

]
// 根据数组动态生成li标签
for (let i = 0; i < listDataArr.length; i++) {
  //创建li标签 
  let newLi = document.createElement("li")
  //添加类名
  newLi.classList.add("list-item", "fl", "tcenter");
  /* if(listDataArr[i].isSpecial){
      newLi.innerHTML = ` 
      <span>企业专用</span>
      <div class="content">
        <img src="./images/${listDataArr[i].img}" alt="">
        <p class="api-name">${listDataArr[i].name}</p>
        <p class="api-price">${listDataArr[i].price}</p>
      </div>
      <a class="apply-data">申请数据</a>

`
  }else{
      newLi.innerHTML = `        
      <div class="content">
        <img src="./images/${listDataArr[i].img}" alt="">
        <p class="api-name">${listDataArr[i].name}</p>
        <p class="api-price">${listDataArr[i].price}</p>
      </div>
      <a class="apply-data">申请数据</a>

`
  } */
  // //为li标签添加内容
  newLi.innerHTML = ` 
        <span class=" ${listDataArr[i].isSpecial ? 'on' : 'off'}">企业专用</span>
        <div class="content">
          <a href="apidetails.html">
                  <img src="./images/${listDataArr[i].img}" alt="">
                  <p class="api-name">${listDataArr[i].name}</p>
                  <p class="api-price ${listDataArr[i].price==='免费'? 'green':'red'} " >${listDataArr[i].price}</p>
          </a> 
        </div>
        <a class="apply-data">申请数据</a>
  
  `
  //把li标签添加到ul中
  apiContent.append(newLi)
}


// 调用选项卡方法
tab(".login-main .tab-top li.top-item", ".login-main .tab .con-item", "active", "current")


//------------------------------- 模态框----------------
//获取元素
let as = getEleAll(".api-list .list-item .apply-data")
/*let modal = getEle(".modal")
let loginMain = getEle(".login-main"); //中间的盒子
let userName = getEle("#userName"); //用户名
let userPsd = getEle("#userPsd");  //密码框
let loginBtn = getEle("#loginBtn");  //登录按钮
let clearUserNameImg = getEle("#clearUserName");//清除(叉叉)图片
let clearUserPwdImg = getEle("#clearUserPwd")
*/
// console.log(as);
// 为每个a添加事件 
for (let i = 0; i < as.length; i++) {
  as[i].addEventListener("click", function () {
      //    alert(i)
      // 隐藏模态框
      modal.style.display = "block";
      //清除用户名
      userName.value = ""
      //清除密码
      userPsd.value = ""

  })
}

// 模态框的点击事件
modal.addEventListener("click", function () {
  // alert(1)
  this.style.display = "none";
})
