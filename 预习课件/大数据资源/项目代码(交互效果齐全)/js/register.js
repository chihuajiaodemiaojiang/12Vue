// alert(1)
//获取元素
let regInputs = getEleAll(".reg-input");
let clearImgs = getEleAll(".clear-img ");
let captcha = getEle("#captcha");
// 定义4个变量
let username_bool = false; //用户名 
let phone_bool = false; //手机号码 
let captcha_bool = false; //手机验证码
let pwd_bool = false; //密码



//复选框
let argeeChkbox = document.querySelector("#argeeChkbox");
//注册按钮
let regBtn = document.querySelector("#regBtn");

for (let i = 0; i < regInputs.length; i++) {
  // 输入框的输入事件
  regInputs[i].addEventListener("input", function () {
    console.log(this.nextElementSibling);
    //显示叉叉图片
    this.parentNode.lastElementChild.style.display = "block";
    if (this.value.length == 0) {
      this.parentNode.lastElementChild.style.display = "none";

    }
  })
  //叉叉图片的点击事件
  clearImgs[i].addEventListener("click", function () {
    this.parentNode.firstElementChild.value = "";
    this.style.display = "none";
  })


}

let nameInput = regInputs[0];
console.log(nameInput);

// 用户名
regInputs[0].addEventListener("blur", function () {
  let val = this.value;

  let nameExp = /^[a-zA-Z][a-zA-Z0-9_]{5,11}$/
  let nameBool = nameExp.test(val);
  if (!nameBool) { //验证不通过
    username_bool = false;
    this.nextElementSibling.style.display = "block";
  }
  else {
    username_bool = true;
    this.nextElementSibling.style.display = "none";
  }
})
// 手机号码 
regInputs[1].addEventListener("blur", function () {
  let val = this.value;

  let phoneExp = /^1[345678][0-9]{9}$/
  let phoneBool = phoneExp.test(val);
  if (!phoneBool) {//验证不通过
    phone_bool = false;
    this.nextElementSibling.style.display = "block";
  }
  else {
    phone_bool = true;
    this.nextElementSibling.style.display = "none";
  }
})

// 手机验证码
regInputs[2].addEventListener("blur", function () {
  let val = this.value;
  let codeExp = /^[a-zA-Z][a-zA-Z0-9_]{3}$/;
  let codeBool = codeExp.test(val);
  if (!codeBool) {//验证不通过
    captcha_bool = false;
    captcha.style.display = "block";
  }
  else {
    captcha_bool = true;
    captcha.style.display = "none";
  }
})
// 密码
regInputs[3].addEventListener("blur", function () {
  let val = this.value;
  let pwdExp = /^[a-zA-Z][a-zA-Z0-9_]{5,11}$/;
  let pwdBool = pwdExp.test(val);
  if (!pwdBool) {//验证不通过
    pwd_bool = false;
    this.nextElementSibling.style.display = "block";
  }
  else {
    pwd_bool = true;
    this.nextElementSibling.style.display = "none";
  }
})

//复选框的事件
argeeChkbox.addEventListener("change", function () {
  console.log(this.checked);
  let bool = this.checked;
  if (bool) {
    //启用  
    regBtn.disabled = false;
    regBtn.style.backgroundColor = "#15bded";
    regBtn.style.color = "#fff";


  } else {
    regBtn.disabled = true;
    regBtn.style.backgroundColor = "#e0e0e0";
    regBtn.style.color = "#5f5f5f";

  }


})
//注册按钮
regBtn.addEventListener("click", function () {
  console.log("username_bool", username_bool);
  //用户名
  if (!username_bool) {
    regInputs[0].nextElementSibling.style.display = "block";
    return;
  }
  //手机号码 
  if (!phone_bool) {
    regInputs[1].nextElementSibling.style.display = "block";
    return;
  }
  //验证码
  if (!captcha_bool) {
    captcha.style.display = "block"
    return;
  }
  //密码
  if (!pwd_bool) {
    regInputs[3].nextElementSibling.style.display = "block";
    return;
  }
  alert("恭喜,注册成功!");
  //跳转到登录页面
  window.location = "./login.html";
})