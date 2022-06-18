require('../css/reglog.less')
// 导入公共弹框
let $utils = require('./utils.js');
// 导入axios
let axios = require('axios');
// 导入验证码插件模块
window.addEventListener('load', function () {
    let CaptchaMini = require("captcha-mini");

    // 获取验证码
    let captcha1 = new CaptchaMini({
        fontSize: 60,
    });
    let code = '';
    captcha1.draw(document.querySelector('#captcha1'), function (r) {
        console.log(r, '验证码1');
        code = r;
    });

    // 获取相关元素
    let uname = document.querySelector('#uname');
    let verify = document.querySelector('#verify');
    let pwd = document.querySelector('#pwd');
    let surePwd = document.querySelector('#surePwd');
    let regBtn = document.querySelector('#regBtn');
    let errTip = document.querySelector('#errTip');

    // 1. 验证用户名
    function checkReg() {
        // trim(): 去掉字符串的首尾空格
        let unameVal = uname.value.trim();
        let verifyVal = verify.value.trim();
        let pwdVal = pwd.value.trim();
        let surePwdVal = surePwd.value.trim();
        // 2. 验证用户名
        if (!unameVal) {
            errTip.textContent = '*请输入手机号码';
            return false;
        } else {
            // 手机号正则
            let reg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
            if (!reg.test(unameVal)) {
                errTip.textContent = '*请输入正确的手机号码';
                return false;
            }
        }
        // 2. 验证验证码
        if (!verifyVal) {
            errTip.textContent = '*请输入验证码';
            return false;
        } else {
            if (verifyVal != code) {
                errTip.textContent = '*请输入正确的验证码';
                return false;
            }
        }
        // 3. 验证密码
        if (!pwdVal) {
            errTip.textContent = '*请输入密码';
            return false;
        } else {
            // 密码(以字母开头，长度在4~10之间，只能包含字母、数字和下划线)：^[a-zA-Z]\w{5,17}$
            let reg = /^[a-zA-Z]\w{3,9}$/;
            if (!reg.test(pwdVal)) {
                errTip.textContent = '*请输入正确的密码';
                return false;
            }
        }
        // 4. 验证确认密码
        if (surePwdVal != pwdVal) {
            errTip.textContent = '*两次密码输入不一致';
            return false;
        }

        errTip.textContent = '';
        // 提交用户注册信息
        submitReg(unameVal, pwdVal);
    }

    // 1. 给按钮绑定点击事件
    regBtn.addEventListener('click', function () {
        checkReg();
    })

    // 提交用户注册信息
    function submitReg(uname, pwd) {
        axios.post('http://139.9.177.51:3701/api/user/register', {
            account: uname,
            password: pwd
        }).then(function (res) {
            console.log(res);
            if (res.data.errno === 0) {
                $utils.getAlertBox('ok', '注册成功!', function () {
                    location.href = './login.html'
                });

            } else {
                $utils.getAlertBox('no', '账号已存在!');
            }
        }).catch(function (err) {
            console.log(err);
        })
    }
})