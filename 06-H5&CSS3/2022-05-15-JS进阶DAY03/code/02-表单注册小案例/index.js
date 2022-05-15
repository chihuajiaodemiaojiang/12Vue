// 1. 获取相关元素
let uname = document.querySelector('#uname');
let unameTip = document.querySelector('#unameTip');
let email = document.querySelector('#email');
let emailTip = document.querySelector('#emailTip');
let pwd = document.querySelector('#pwd');
let pwdTip = document.querySelector('#pwdTip');
let regBtn = document.querySelector('#regBtn');
let regForm = document.querySelector('#regForm');

// 2. 验证用户名
uname.addEventListener('blur', checkUname)
function checkUname(){
    let unameVal = uname.value;
    // 中文、字母、数字、下划线长度5-10位
    let reg = /^[a-zA-Z0-9\u4e00-\u9fa5_]{5,10}$/
    if(!reg.test(unameVal)) {
        unameTip.style.color = 'red';
        return false;
    } else {
        unameTip.style.color = 'green';
        return true;
    }
}

// 3. 验证邮箱
email.addEventListener('blur', checkEmail)
function checkEmail(){
    let emailVal = email.value;
    // 中文、字母、数字、下划线长度5-10位
    let reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    if(!reg.test(emailVal)) {
        emailTip.style.color = 'red';
        return false;
    } else {
        emailTip.style.color = 'green';
        return true;
    }
}

// 4. 验证密码
pwd.addEventListener('blur', checkPwd)
function checkPwd(){
    let pwdVal = pwd.value;
    // 字母、数字、下划线长度6-12位
    let reg = /^[a-zA-Z0-9_]{6,12}$/
    if(!reg.test(pwdVal)) {
        pwdTip.style.color = 'red';
        return false;
    } else {
        pwdTip.style.color = 'green';
        return true; 
    }
}

// 5. 点击注册按钮验证内容
regBtn.addEventListener('click', function(){
    let flag = [checkUname(), checkEmail(), checkPwd()].every(function(item){
        return item;
    })
    // if(flag) {
    //     regForm.submit(); // 提交表单
    // }
    
    flag && regForm.submit();
})