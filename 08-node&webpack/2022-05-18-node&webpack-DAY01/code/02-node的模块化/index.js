function getSum(a, b) {
    return a + b;
}

console.log(getSum(1,2));
// 导入 导出的内容是啥, 导入得到内容就是啥
let moduleA = require('./a.js')
let moduleB = require('./b.js')
console.log(moduleA.show());
console.log(moduleB.show2());


