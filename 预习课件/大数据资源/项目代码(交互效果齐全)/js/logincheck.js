let modal = getEle(".modal")
let loginMain = getEle(".login-main"); //中间的盒子
let userName = getEle("#userName"); //用户名
let userPsd = getEle("#userPsd");  //密码框
let loginBtn = getEle("#loginBtn");  //登录按钮
let clearUserNameImg = getEle("#clearUserName");//清除(叉叉)图片
let clearUserPwdImg = getEle("#clearUserPwd")



//阻止事件冒泡
loginMain.addEventListener("click", function (e) {
    // alert("hahaha")
    // 阻止事件冒泡(传播)
    e.stopPropagation();
})

// 登录按钮
loginBtn.addEventListener("click", function () {
    //获取用户名
    let uname = userName.value;
    //6-12
    /*  if(uname.length>=6 && uname.length<=12){
         //验证成功
     }else{
         //提示验证不成功
     } */
    if (uname.length < 6 || uname.length > 12) {

        tips("用户名格式不正确", "", loginMain, 1000)
        return
    }
    //获取密码 6-12
    let upwd = userPsd.value;
    if (upwd.length < 6 || upwd.length > 12) {
        // alert("密码格式不正确")
        tips("密码格式不正确", "", loginMain, 1000)
        return
    }

    //如果验证通过，那么就提交数据，跳转页面，登录成功转到首页
    //以后会使用ajax来提交数据
    // alert("登录成功")
    tips("登录成功", "index.html", loginMain, 3000)
    console.log(uname, upwd);
})

//userName 输入事件
userName.addEventListener("input", function () {
    if (this.value.length > 0) {
        //显示那个叉叉图标
        clearUserNameImg.style.display = "inline-block";
    } else {
        //隐藏那个叉叉图标
        clearUserNameImg.style.display = "none";
    }
})
// 清空用户名
clearUserNameImg.addEventListener("click", function () {
    // 清空用户名
    userName.value = '';
    // 隐藏自己
    this.style.display = "none";
})


//userName 输入事件
userPsd.addEventListener("input", function () {
    if (this.value.length > 0) {
        //显示那个叉叉图标
        clearUserPwdImg.style.display = "inline-block";
    } else {
        //隐藏那个叉叉图标
        clearUserPwdImg.style.display = "none";
    }
})
// 清空密码
clearUserPwdImg.addEventListener("click", function () {
    // 清空用户名
    userPsd.value = '';
    // 隐藏自己
    this.style.display = "none";
})


//-------------------- 登录验证（另一种提示）-------------------------
/* //获取用户名
let userName = document.querySelector("#userName");
//获取密码
let userPsd = document.querySelector("#userPsd");
//获取按钮
let loginBtn = document.querySelector("#loginBtn");

//获取错误 提示
let sysError = document.querySelector("#sysError");
let errMsg = document.querySelector("#errMsg");

//获取清除用户名和密码的图标
let clearUserName = document.querySelector("#clearUserName");
let clearUserPwd = document.querySelector("#clearUserPwd");


//为按钮添加事件---登录验证
loginBtn.addEventListener("click", function () {
  // 、、^[a-zA-Z][a-zA-Z0-9_]{4,15}$
  //获取用户名
  let name = userName.value;
  //获取密码 
  let pwd = userPsd.value;
  //验证用户名 5-12位
  // let nameExp = /^[a-zA-Z][a-zA-Z0-9_]{4,11}|1[345678]$/
  // let nameExp = /^1[345678][0-9]{9}$/
  // let nameExp = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
  let nameExp = /^[a-zA-Z][a-zA-Z0-9_]{4,11}$/

  let nameBool = nameExp.test(name);
  if(!nameBool){
    sysError.style.display = "block";
    errMsg.innerHTML = "请输入正确的用户名!";
    return ;
  }
  //验证密码 5-12位
  let pwdExp = /^[a-zA-Z][a-zA-Z0-9_]{4,11}/
  let pwdBool = pwdExp.test(pwd);
  // console.log(pwd, pwdBool);
  if(!pwdBool){
    sysError.style.display = "block";
    errMsg.innerHTML = "请输入正确的密码!";
    return ;
  }
  alert("登录成功")
  //实现页面跳转
  window.location.href="index.html";
  
})

//清除图片按钮的相关事件
userName.addEventListener("input",function(){
  console.log("用户名:",this.value);
    clearUserName.style.display ="inline-block";
})

userPsd.addEventListener("input",function(){
  clearUserPwd.style.display ="inline-block";
})
//清除用户名和密码
clearUserName.addEventListener("click",function(){
  userName.value = "";
  this.style.display="none";
})
clearUserPwd.addEventListener("click",function(){
  userPsd.value = "";
  this.style.display="none";
}) */