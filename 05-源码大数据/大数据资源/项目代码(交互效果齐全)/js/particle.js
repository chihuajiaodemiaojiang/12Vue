window.onload=function(){
    //配置
    var config = {
        vx: 4,	//小球x轴速度,正为右，负为左
        vy: 4,	//小球y轴速度
        height: 2,	//小球高宽，其实为正方形，所以不宜太大
        width: 2,
        count: 200,		//点个数
        // color: "121, 162, 185", 	//点颜色
        color: "200,193,193", 	//点颜色
        // stroke: "130,255,255", 		//线条颜色
        // stroke: "240,250,228", 		//线条颜色
        stroke: "0,0,0", 		//线条颜色
        dist: 6000, 	//点吸附距离
        e_dist: 20000, 	//鼠标吸附加速距离
        max_conn: 10 	//点到点最大连接数
    }

    //调用
    CanvasParticle(config);
}