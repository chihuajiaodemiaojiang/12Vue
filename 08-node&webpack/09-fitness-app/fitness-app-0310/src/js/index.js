// 导入样式
require('../css/index.less');



// 倒计时效果
let timer = null;
function countDown() {
    let num = 5;
    let time = document.querySelector('#time');
    time.textContent = num;
    timer = setInterval(function () {
        num--;
        if (num === 0) {
            clearInterval(timer);
            location.href = './login.html';
            return;
        }
        time.textContent = num;
    }, 1000)
}

countDown();

// 点击跳过, 清定时器, 并跳转验证
let link = document.querySelector('#link');
link.addEventListener('click', function () {
    clearInterval(timer);
    location.href = './login.html';
})
