let data = [
    {studentNumber: '003', name: '小源', age: '20', hobby: '篮球、足球、乒乓球', score: '59'},
    {studentNumber: '001', name: '小明', age: '22', hobby: 'html、css', score: '81'},
    {studentNumber: '002', name: '小红', age: '17', hobby: '篮球,乒乓球', score: '70'},
];

// 获取相关元素
let initTable = document.querySelector('#initTable');
let resTable = document.querySelector('#resTable');
let sort = document.querySelector('#sort');
let filter = document.querySelector('#filter');
let some = document.querySelector('#some');
let every = document.querySelector('#every');
let map = document.querySelector('#map');
let find = document.querySelector('#find');

// 1. 初始表格数据渲染
function render(dom, arr) {
    let html = '';
    arr.forEach(function(item){
        html += `<tr>
            <td>${item.studentNumber}</td>
            <td>${item.name}</td>
            <td>${item.age}</td>
            <td>${item.hobby}</td>
            <td>${item.score}</td>
        </tr>`
    })
    dom.innerHTML = html;
}

render(initTable, data);


// 2. 排序
sort.addEventListener('click', function(){
    let arr = data.sort(function(a, b){
        return a.studentNumber - b.studentNumber;
    })
    render(resTable, arr);
})

// 3. 筛选
filter.addEventListener('click', function(){
    let arr = data.filter(function(item){
        return item.age > 18
    })
    render(resTable, arr);
})

// 4. 是否有不及格的学生
some.addEventListener('click', function(){
    let flag = data.some(function(item){
        return item.score < 60;
    })
    if(flag) {
        alert('有不及格的菜逼');
    } else {
        alert('都是大佬啊');
    }
})

// 5. 是否都满18岁的学生
every.addEventListener('click', function(){
    let flag = data.every(function(item){
        return item.age > 18;
    })
    if(flag) {
        alert('都是成年人了');
    } else {
        alert('还有小学生呀');
    }
})

// 6. 所有学生年龄加1
map.addEventListener('click', function(){
    // 需要先将原始数据深拷贝一份, 在+1; 否则会改变原始数据的值
    let newData = JSON.parse(JSON.stringify(data));
    let arr = newData.map(function(item){
        item.age = parseInt(item.age) + 1;
        return item;
    })
    render(resTable, arr);
})

// 7. 第一个大于80分
find.addEventListener('click', function(){
    let obj = data.find(function(item){
        return item.score > 80;
    })
    render(resTable, [obj]);
})
