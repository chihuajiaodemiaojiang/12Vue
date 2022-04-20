
$(function () {
    // 启动轮播插件
    $('#banner').flexslider({
        animation: "slide",
        direction: "horizontal",
        easing: "swing",
        slideshowSpeed: 2000, //停留时间

    });

    //api列表区域交互效果
    /*
      分析:
         事件源：li中的 a 
         事件类型：mouseenter   mouseleave
         事件处理函数:
             mouseenter:
                 修改图片的src属性的值为新的值。 
                 修改文字的颜色为 #fff
                 修改盒子的背景色为：rgb(47, 126, 233)
             mouseleave:
                 修改图片的src属性的值为之前的值。 
                 修改文字的颜色为 ##181818
                 修改盒子的背景色为：#fff;    
        
                 mouseover和mouseout事件有事件冒泡现象。
                 mouseenter和mouseleave事件没有事件冒泡现象。
     */
    /***-----api 区域 -----------*/
    // 获取元素
    let as = getEleAll(".manyapi .api-item a");
    // console.log(as);  
    let oldFile = "";
    // 遍历添加事件
    for (let i = 0; i < as.length; i++) {
        // 鼠标移入

        as[i].addEventListener("mouseenter", function () {
            //  修改图片的src属性的值为新的值。 
            // console.log( this.firstElementChild); ok
            // console.log( this.children[0]); ok
            // console.log( this.getElementsByTagName("img")[0])ok
            // console.log(  this.firstElementChild.src );;
            // file:///E:/%E8%B4%B5%E9%98%B30823H5/07-jQuery%E5%A4%A7%E6%95%B0%E6%
            // 8D%AE%E9%A1%B9%E7%9B%AE/2021-10-22-jQuery%E5%A4%A7%E6%95%B0%E6%8D%
            // AE%E9%A1%B9%E7%9B%AE-day02/code/bigdata/images/api01.svg
            // this.firstElementChild.src = "images/api01-c.svg" //可以实现第一个的操作
            //          
            oldFile = this.firstElementChild.src  //获取到之前的文件名
            console.log("全局上的oldFile:", oldFile);
            //   console.log(oldFile.substring(0, oldFile.indexOf(".") ));  
            // 取到之前的文件名，再去拼接组成新的文件名
            let newFile = oldFile.substring(0, oldFile.indexOf(".")) + "-c.svg";
            console.log(newFile);
            // 修改图片标签的路径
            this.firstElementChild.src = newFile;
            //  修改文字的颜色为 #fff
            this.style.color = "#fff";
            //  修改盒子的背景色为：rgb(47, 126, 233)
            this.style.backgroundColor = "rgb(47, 126, 233)";
        })
        //鼠标移出
        as[i].addEventListener("mouseleave", function () {
            // 修改图片的src属性的值为之前的值。 
            this.firstElementChild.src = oldFile;
            // 修改文字的颜色为 ##181818
            this.style.color = "#181818";
            // 修改盒子的背景色为：#fff;  
            this.style.backgroundColor = "#fff";
        })
    }

    //助力企业的交互效果
    /* 
      需求：每隔指定的时间进行盒子的切换显示。
  
    */
    //定义一个变量,表示当前显示盒子的索引
    let index = 0
    window.setInterval(function () {
        //当前显示的那个盒子淡出
        $(".help .content .help-item").eq(index).fadeOut(300)
        index++;
        // console.log("index:", index);
        if (index === 3) {
            index = 0;
        }
        //下一个盒子淡入
        $(".help .content .help-item").eq(index).fadeIn(300)
    }, 2000)
    // $(".help .content .help-item").eq(1).addClass("current")

});
//返回顶部
let returnTop = getEle("#returnTop");
console.log(returnTop);
// 窗口滚动事件
window.addEventListener("scroll", function () {
    // console.log(window.scrollY);
    // 控制返回顶部的显示和隐藏
    if (this.window.scrollY >= 500) {
        returnTop.style.display = "block"
    } else {
        returnTop.style.display = "none"

    }
})
returnTop.addEventListener("mouseenter", function () {
    this.style.backgroundPositionY = "-98px"
})
returnTop.addEventListener("mouseleave", function () {
    this.style.backgroundPositionY = "-56px"
})
let timerId = null;
returnTop.addEventListener("click", function () {
    let st = window.scrollY;//获取距离文档顶部的距离
    window.clearInterval(timerId);
    timerId = window.setInterval(function () {
        st -= 100;
        if (st <= 0) {
            st = 0;
            window.clearInterval(timerId)
        }
        window.scrollTo(0, st);

    }, 30)
})
