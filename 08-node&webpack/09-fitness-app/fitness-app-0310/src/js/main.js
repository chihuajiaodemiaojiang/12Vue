require('../css/main.less')




// 导入公共组件
let $utils = require('./utils.js');
$utils.getPublicFooter('main');
let axios = require('axios');
let userObj = JSON.parse(localStorage.getItem('userObj'));
console.log(userObj);

// 设置axios请求头:
axios.defaults.headers.authorization = `Bearer ${userObj.token}`

var mySwiper = new Swiper('.swiper', {
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    }
})

// 渲染数据到页面
render();

let rank = document.querySelector('#rank');
let badge = document.querySelector('#badge');
let punch = document.querySelector('#punch');
let punchState = document.querySelector('#punchState');
function render() {
    // 获取排名和徽章
    axios.get('http://139.9.177.51:3701/api/user/info')
        .then(function (res) {
            if (res.data.errno === 0) {
                rank.textContent = res.data.data.ranking;
                badge.textContent = res.data.data.badges;
            }
        })
        .catch(function (err) {
            console.log(err);
        })
    // 获取打卡天数和打卡状态

    axios.get('http://139.9.177.51:3701/api/user/clockInInfo')
        .then(function (res) {
            if (res.data.errno === 0) {
                punch.textContent = res.data.data.clockCount;
                punchState.textContent = res.data.data.isClockIn ? '已打卡' : '今日打卡';
            }
        })
        .catch(function (err) {
            console.log(err);
        })
}


// 打卡功能
punchState.addEventListener('click', function () {
    axios.post('http://139.9.177.51:3701/api/user/clockIn')
        .then(function (res) {
            console.log(res);
            if (res.data.errno === 0) {
                $utils.getAlertBox('ok', '打卡成功!');
                render()
            } else if (res.data.errno === -1) {
                $utils.getAlertBox('no', '今日已打卡!');
            }
        })
        .catch(function (err) {
            console.log(err);
        })
})

