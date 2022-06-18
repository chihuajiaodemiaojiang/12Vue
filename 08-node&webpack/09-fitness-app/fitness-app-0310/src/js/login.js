require('../css/reglog.less')
let axios = require('axios');
// 导入公共弹框
let $utils = require('./utils.js');


window.addEventListener('load', function () {
    let uname = document.querySelector('#uname');
    let pwd = document.querySelector('#pwd');
    let loginBtn = document.querySelector('#loginBtn');
    let errTip = document.querySelector('#errTip');

    // 1. 给按钮绑定点击事件
    loginBtn.addEventListener('click', function () {
        let unameVal = uname.value.trim();
        let pwdVal = pwd.value.trim();
        if (unameVal && pwdVal) {
            axios.post('http://139.9.177.51:3701/api/user/login', {
                account: unameVal,
                password: pwdVal
            }).then(function (res) {
                console.log(res);
                if (res.data.errno === 0) {
                    localStorage.setItem('userObj', JSON.stringify(res.data.data));
                    $utils.getAlertBox('ok', '登录成功!', function () {
                        location.href = './main.html';
                    });
                }

            }).catch(function (err) {
                console.log(err);

            })
        } else {
            errTip.textContent = '*请输入用户名或密码'
        }
    })
})