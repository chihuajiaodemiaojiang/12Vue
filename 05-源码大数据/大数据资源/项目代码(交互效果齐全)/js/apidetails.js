



//二维码盒子
let qrimg = getEle(".banner .content .qrcode")
let priceUl = getEle("#priceUl")
let price = getEle("#price");
let unitPrice = getEle("#unitPrice");
// 添加鼠标移入事件
qrimg.addEventListener("mouseenter", function () {
  this.lastElementChild.style.height = "150px";
  // alert(1);
})
// 添加鼠标移入事件
qrimg.addEventListener("mouseleave", function () {
  this.lastElementChild.style.height = "0";
  // alert(1);
})


// 价格模拟服务器的数据

let data = `[
      {"count": 4000, "price": 1200, "unitPrice": "0.3000"},
      {"count": 8000, "price": 2000,"unitPrice": "0.2500" },
      {"count": 40000, "price": 8000, "unitPrice": "0.2000" }
     ]`

// console.log(data, typeof data);
//把字符串转为数组（对象）
let dataArr = JSON.parse(data);
// console.log(dataArr);
for (let i = 0; i < dataArr.length; i++) {
  // console.log(dataArr[i]);
  //创建li标签
  let newLi = document.createElement("li");
  //添加内容
  newLi.innerHTML = dataArr[i].count + "次";
  //添加样式
  newLi.classList.add("price-li", "fl");
  //把价格绑定在自己身上
  newLi.setAttribute("price", dataArr[i].price)
  //把单价绑定在自己身上
  newLi.setAttribute("unitPrice", dataArr[i].unitPrice)
  if (i === 0) {
    newLi.classList.add("selected")
    price.textContent = '¥' + dataArr[i].price;
    unitPrice.textContent = dataArr[i].unitPrice
  }
  // console.log(newLi);
  priceUl.append(newLi);
}
//为每个动态添加的li标签添加事件
priceUl.addEventListener("click", function (e) {

  let eventLi = e.target;
  //    console.dir(eventLi);
  if (eventLi.classList.contains("price-li")) {
    price.textContent = "¥" + eventLi.getAttribute("price")  //价格
    unitPrice.textContent = eventLi.getAttribute("unitPrice")  //单价
  }
  let lis = getEleAll(".price-li");
  for (let i = 0; i < lis.length; i++) {
    lis[i].classList.remove("selected");
  }
  //给当前的事件源添加这个类名
  eventLi.classList.add("selected")

})
// }

//二维码盒子
/* let qrcode = getEle("#qrcode");
// //二维码盒子 装图片的盒子
let qrcodeBox = getEle(".qrcode-box");

// console.dir(qrcodeBox);
qrcode.addEventListener("mouseenter", function () {
  qrcodeBox.style.height = "150px";
})
qrcode.addEventListener("mouseleave", function () {
  qrcodeBox.style.height = "0px";
}) */
/*------------选项卡交互功能------------*/
//获取元素
tab(".content .tabtop .tabul li", ".tabcon  .tabcon-item", "active", "current")

/*  let toplis = document.querySelectorAll(".content .tabtop .tabul li");
let tabitems = document.querySelectorAll(".tabcon  .tabcon-item");
console.log(toplis);
console.log(tabitems);
for (let i = 0; i < toplis.length; i++) {
  toplis[i].addEventListener("click", function () {
    // alert(i)
    // 处理头部
    for (let j = 0; j < toplis.length; j++) {
      toplis[j].classList.remove("active");
    }
    this.classList.add("active")
    for (let j = 0; j < tabitems.length; j++) {
      tabitems[j].classList.remove("current");
    }
    tabitems[i].classList.add("current");
  })
}
  */