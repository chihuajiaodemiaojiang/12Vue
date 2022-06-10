// 节点的获取和数据的渲染

let dom = {
    getById: function (ele) {
        return document.querySelector(ele);
    },
    render: function (box, data) {
        let htmlStr = '';
        data.forEach(function (item) {
            htmlStr += `<p>${item}</p>`
        })
        box.innerHTML = htmlStr;
    }
}