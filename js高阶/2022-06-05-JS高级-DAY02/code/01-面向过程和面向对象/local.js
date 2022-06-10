// 本次存储的保存和获取

let local = {
    set: function (data = []) {
        localStorage.setItem('list', JSON.stringify(data))
    },
    get: function () {
        return JSON.parse(localStorage.getItem('list')) || [];
    }
}