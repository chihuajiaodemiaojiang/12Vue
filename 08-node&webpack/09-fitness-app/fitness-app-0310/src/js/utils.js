// 公共组件函数库
// 公共弹框
function getAlertBox(type, tip, callback) {
    // 1. 创建节点
    let toast = document.createElement('div');
    // 2. 给节点添加类名
    toast.classList.add('mage-toast');
    // 3. 给节点添加内容
    toast.innerHTML = ` <i class="iconfont ${type === 'ok' ? 'icon-gougou' : 'icon-chacha'}"></i>
    <p class="tips">${tip}</p>`;
    // 4. 将节点插入到页面中
    document.body.appendChild(toast);
    // 5. 2s后干掉自己
    setTimeout(function () {
        toast.remove();
        // 如果有callback, 才执行
        callback && callback();
    }, 2000)
}

// 公共底部
function getPublicFooter(type) {
    // 1. 创建节点
    let footer = document.createElement('footer');
    // 2. 给节点添加内容
    footer.innerHTML = `<ul>
        <li class="${type === 'main' ? 'on' : ''}">
            <span class="iconfont icon-shouye"></span>
            <a href="./main.html">首页</a>
        </li>
        <li class="${type === 'train' ? 'on' : ''}">
            <span class="iconfont icon-xintiao"></span>
            <a href="./train.html">运动</a>
        </li>
        <li class="${type === 'user' ? 'on' : ''}">
            <span class="iconfont icon-wode"></span>
            <a href="./user.html">我的</a>
        </li>
    </ul>`;
    // 3. 将节点添加到页面中 
    document.body.appendChild(footer);
}

// 运动模块公共头部
function getSportsHeader(type) {
    // 1. 创建节点
    let header = document.createElement('header');
    // 2. 给节点添加类名
    header.classList.add('sports-header');
    // 2. 给节点添加内容
    header.innerHTML = `<ul>
        <li class="${type === 'running' ? 'on' : ''}">
            <a href="./running.html">跑步</a>
        </li>
        <li>
            <a href="javascript:;">骑行</a>
        </li>
        <li class="${type === 'train' ? 'on' : ''}">
            <a href="./train.html">课程训练</a>
        </li>
    </ul>`
    // 3. 将节点插入到页面中
    // document.body.appendChild(header);
    // 父节点.insertBefore(新节点,兄弟节点); 在特定的父节点中, 在某一个兄弟节点前面加上新的节点
    document.body.insertBefore(header, document.querySelector('#sports'));
}
// 导出
module.exports = {
    getAlertBox: getAlertBox,
    getPublicFooter: getPublicFooter,
    getSportsHeader: getSportsHeader
}