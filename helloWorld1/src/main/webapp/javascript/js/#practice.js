

const randomVals = [];

for (let i =0; i<5; i++){
    let val = Math.ceil(Math.random()*50); // 0~1 임의의 값Math.ceil > 올림 
    randomVals[i] = val;
    console.log('랜덤으로 출력된 값은 ['+val+']');
}

randomVals.forEach(function(val) {
    if(val>30){
        console.log(val);

    }
});
