let data = [
  {
    count: 4000,
    price: 1200,
    unitPrice: 0.3000
  },
  {
    count: 8000,
    price: 2000,
    unitPrice: 0.2500
  },
  {
    count: 40000,
    price: 8000,
    unitPrice: 0.2000
  },
];
// 获取dom
let priceUl = document.querySelector(".price-ul");
let price = document.querySelector("#price");
let unitPrice = document.querySelector("#unitPrice");
//二维码盒子
let qrcodeBox = document.querySelector(".qrcode-box");
let qrcode = document.querySelector("#qrcode");
// console.dir(qrcodeBox);
// console.dir(qrcode);

//循环数组 拼接dom结构
let domStr = '';
for (let i = 0; i < data.length; i++) {
  //类名 priceli仅作为标识
  domStr +=
    ` <li class="fl priceli  ${i === 0 ? "selected" : ""}">
          <span>${data[i].count}</span>次
       </li>
     `
}
// 填充结构 
priceUl.innerHTML += domStr;
// 显示价格
price.innerHTML = data[0].price.toFixed(2);
//显示单价
unitPrice.innerHTML = data[0].unitPrice.toFixed(4);

//获取新添加的li标签，添加事件
let newLi = document.querySelectorAll(".price-ul .priceli");
for (let i = 0; i < newLi.length; i++) {
  //添加点击事件
  newLi[i].addEventListener("click", function () {
    //去除所有人的背景
    for (let j = 0; j < newLi.length; j++) {
      newLi[j].classList.remove("selected")
      newLi[j].style.borderColor = "#999";
      newLi[j].style.color = "#666";
      // newLi[j].classList.add("defaultstyle");

    }
    this.classList.add("selected");
    this.style.borderColor = "#00bdff";
    this.style.color = "#00bdff";
    //显示对应的价格  
    price.innerHTML = data[i].price;
    //显示对应的单价
    unitPrice.innerHTML = data[i].unitPrice.toFixed(4);

  })
  //添加鼠标移入事件
  newLi[i].addEventListener("mouseenter", function () {
    this.style.color = "#00bdff";
    this.style.borderColor = "#00bdff";
  })
  //添加鼠标移出事件
  newLi[i].addEventListener("mouseleave", function () {
    this.style.color = "#666";
    this.style.borderColor = "#999";
    // 如果当前是选中的项目就改回颜色
    if (this.classList.contains("selected")) {
      this.style.color = "#00bdff";
      this.style.borderColor = "#00bdff";
    }
  })
}

//二维码盒子
// console.log(qrcode ,typeof qrcode);

qrcode.style.borderColor="red";