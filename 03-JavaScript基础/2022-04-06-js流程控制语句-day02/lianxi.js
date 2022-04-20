
    // let a = 12;
    // a += 9;
    // console.log(a);
    // let h = '张飞';
    // document.write(`<h1>aaaa ${h}</h1>`);

    // let score = 10;
    // if (score >= 10) {
    //     console.log('啊');
    // } else {
    //     console.log('啊啊啊');
    // }
    // if (score <= 10) {
    //     console.log('aaaaa');
    // } else if (score >= 10) {
    //     console.log('啊啊啊啊啊啊');
    // } else if (score <= 10) {
    //     console.log('啊啊啊啊啊');
    // }
    let sum=0;
    for( let i=1; i<100; i++){
        if(i%3===0&&i%5===0){
        sum+=i;
        }

    }
    console.log(sum);
