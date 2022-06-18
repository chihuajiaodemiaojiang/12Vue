require('../css/user.less')

let axios = require('axios');

let api = 'http://139.9.177.51:3701';

// 获取本地存储的token
let userObj = JSON.parse(localStorage.getItem('userObj'));

// 设置axios请求头:
axios.defaults.headers.authorization = `Bearer ${userObj.token}`

window.addEventListener('load', function () {
    let avatar = document.querySelector('#avatar');
    let nickname = document.querySelector('#nickname');
    let sign = document.querySelector('#sign');
    let uploadImg = document.querySelector('#uploadImg');

    // 渲染用户信息
    render();
    function render() {
        axios.get(api + '/api/user/info')
            .then(function (res) {
                console.log(res);
                if (res.data.errno === 0) {
                    let data = res.data.data;
                    avatar.src = api + data.imgUrl;
                    nickname.textContent = data.nickName;
                    sign.textContent = data.sign ? data.sign : '这个很懒,什么也没有留下';
                }
            })
            .catch(function (err) {
                console.log(err);
            })
    }

    // 头像上传功能
    uploadImg.addEventListener('change', function () {
        // 文件上传必须使用input type=file这个按钮, 上传的文件相关信息都在这个按钮身上
        console.dir(this.files[0]);
        // 文件上传必须使用FormData这个js内置对象
        let formData = new FormData();
        // 将图片信息添加到formData里面
        formData.append('file', this.files[0])
        // 发起请求, 上传头像
        axios.post(api + '/api/shared/uploadPortrait1', formData)
            .then(function (res) {
                if (res.data.errno === 0) {
                    //  替换头像
                    avatar.src = api + res.data.data.url;
                    // 因为用户的头像都是从数据库里面来的,替换头像后,需要调用接口保存到数据库中
                    axios.post(api + '/api/user/changeInfo', {
                        imgUrl: res.data.data.url
                    }).then(function (res) {
                        console.log(res);
                    }).catch(function (err) {
                        console.log(err);
                    })
                }
            })
            .catch(function (err) {
                console.log(err);
            })
    })

    // 点击图片实现头像上传
    // 思路: 点击图片时, 让按钮去实现头像上传
    avatar.addEventListener('click', function (e) {
        // 自动触发事件. 
        // 前提: 前面给相同的dom元素绑定了相同的或者类似的事件.
        uploadImg.click();
        e.preventDefault();
    })
})

