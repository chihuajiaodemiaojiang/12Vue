function getSum(a,b) {
    return a + b;
}

console.log(getSum(1,2));

const fn = () => {
    console.log(111);
}

fn();

const pi = Math.PI;

// 导入样式
require('./index.css');
require('./demo.less');
// 导入字体图标的样式文件
require('./font/iconfont.css');

// js导入图片
let img = document.querySelector('#img');
img.src = require('./img/2.webp')
