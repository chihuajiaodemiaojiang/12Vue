window.onload = function() {
    // 思路: 先从本地存储中获取数据并保存到数组中,点击了按钮后,,再将用户搜索的新内容添加到数组中,再次将数组保存到本地存储即可; 别忘了页面加载时,也需要渲染数据
    // 1. 获取相关元素
    let inp = document.querySelector('#cont');
    let btn = document.querySelector('#btn');
    let list = document.querySelector('#list');

    let arr = JSON.parse(localStorage.getItem('list')) || []; // 接收用户输入的内容

    // 2. 给按钮绑定点击事件
    btn.addEventListener('click', function(){
        // 3. 获取输入框的值
        let inpVal = inp.value;
        if(!inpVal) {
            inpVal = inp.placeholder;
        }
        // 4. 将用户输入内容加入到数组中
        arr.unshift(inpVal)
        // 5. 将数组保存到本地存储中
        localStorage.setItem('list', JSON.stringify(arr));
        // 6. 将本地存储中的数据渲染到页面中
        render();
    })

    // 6. 渲染数据到页面
    function render() {
        // 6.1. 创建一个空字符串
        let htmlStr = '';
        // 6.2. 遍历数组,并拼接html结构
        arr.forEach(function(item){
            htmlStr += `<li>${item}</li>`
        })
        // 6.3 将htmlStr放入ul中
        list.innerHTML = htmlStr; 
    }

    // 刷新页面的时候应该也要调用数据渲染的函数
    render();
}