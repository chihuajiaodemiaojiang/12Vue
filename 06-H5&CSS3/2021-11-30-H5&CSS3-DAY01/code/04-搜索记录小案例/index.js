window.onload = function() {
    // 思路: 先获取本地存储中的内容,当点击了按钮后,将用户输入的内容保存到数组中,再将数组保存到本地存储中,通过这个数组渲染数据到页面; 别忘了页面加载完成时,也需要渲染数据到页面

    // 步骤:
    // 1. 获取页面相关元素
    let cont = document.querySelector('#cont');
    let btn = document.querySelector('#btn');
    let list = document.querySelector('#list');
    let arr = JSON.parse(localStorage.getItem('list')) || []; // 接收本地存储的数据,并保存用户输入的内容

    // 2. 给按钮绑定点击事件
    btn.addEventListener('click', function(){
        // 3. 获取输入框的值
        let inpVal = cont.value;
        if(!inpVal) {
            inpVal = cont.placeholder;
        }
        // 4. 将用户输入的内容添加的数组中
        arr.unshift(inpVal);
        // 5. 将数组保存到本地存储
        localStorage.setItem('list', JSON.stringify(arr));
        // 6. 渲染数据到页面
        render();
    })

    // 6. 渲染数据到页面
    function render() {
        // 6.1 创建一个空字符串
        let htmlStr = '';
        // 6.2 遍历数组,拼接html结构
        arr.forEach(function(item){
          htmlStr += `<li>${item}</li>`  
        })
        console.log(htmlStr);
        // 6.3 将htmlStr放入ul里面
        list.innerHTML = htmlStr;
    }

    // 7. 页面渲染完成,也需要调用render函数
    render();
}