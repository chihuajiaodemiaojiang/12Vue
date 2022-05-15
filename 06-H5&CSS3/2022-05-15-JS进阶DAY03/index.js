let input = document.querySelectorAll('.inbox input');
let regBtn = document.querySelector('#regBtn');
let span = document.querySelectorAll('#regForm span');
const arr = [/^[a-zA-Z\d\u4e00-\u9fa5_]{5,10}$/, /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, /^\w{6,12}$/];
let flag = true
input.forEach(function (v, i) {
    v.onblur = function () {
        if (arr[i].test(v.value)) {
            span[i].style.color = 'green';
        } else {
            span[i].style.color = 'red';
        }
    }
    regBtn.onclick = function () {
        flag = true
        input.forEach(function (v2, i2) {
            if (!arr[i2].test(v2.value)) {
                flag = false
            }
        })
        if (flag) {
            alert('注册成功')
        } else {
            alert('注册失败')
        }
    }
})

