// for_test.js

// 1~100 사이의 임의의 수를 생성 => 배열에 저장[5]
// 배열값 중  최대값을 구하는 반복문을 작성. 


const randomVals = [];

for(let i=0; i<5; i++){
    let val = (Math.ceil(Math.random()*100));
    randomVals[i] = val;

    console.log(val);
}
document.write ('랜덤값은 : ' + randomVals);

let max = randomVals[0] ;
let min = randomVals[0];

randomVals.forEach(function(val){
   
    if(max<val){
        max = val;
    }else if(val<min){
        min = val;
    }
});
    console.log('최대값 : ' + max); 
    console.log('최소값 : ' + min); 







//교수님 코드
// const tempArr = [];
// for(let i=0; i<5; i++){
//     let temp = (Math.ceil(Math.random()*100));
//     tempArr[i] = temp;

//     console.log(temp);
// }

// tempArr.forEach(val => document.write(`<p>${val}</p>`));

// let max = tempArr[0];

// tempArr.forEach(val => {
//     if(val > max){
//         max = val;        
//     }
// });
// console.log('최대값 : ' + max); 

// =============================================================================================

// 함수의 스코프 체인. 
var a = 1;
var b = 5; 

function outerFunc(){
    var b; // 지역변수 b
    function innerFunc(){
        a = b;
    }
    console.log(a); // 출력값 : 1
    a = 2;          // 지역변수
    b = 4;          // 지역변수
    innerFunc();    // a = b 이므로 b = 4 = a가 됨
    console.log(a); // 출력값 : 4 
    var b = 2;
    console.log(b); // 출력값 : 2
}
outerFunc();
console.log(b); // 함수가 끝난 후므로 전역변수 b = 5 값이 출력됨

