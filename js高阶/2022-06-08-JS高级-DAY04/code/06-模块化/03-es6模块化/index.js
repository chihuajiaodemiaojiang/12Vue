// 分开导出的内容需要用对象解构的方式来接收
import { show1, num } from './a.js';

console.log(show1, num);

show1();

// 一起导出的内容不能用对象解构来接收
import mouduleB from './b.js';

console.log(mouduleB);

mouduleB.show2();
console.log(mouduleB.str);


