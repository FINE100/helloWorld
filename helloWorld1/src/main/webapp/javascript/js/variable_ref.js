//variable_ref.js ; 1교시 2번째 파일

//원시형 vs 참조형 
let str1 = 'Hello';             // 원시형 문자열 String
let str2 = new String('Hello'); // 참조형 객체타입 object

console.log(str1 == str2);   //'==' : 값을 비교
console.log(str1 === str2); // '===' :  값과 데이터 타입 비교

let num1 = 20;              //number
let num2 = new Number(20); // object
console.log(num1 == num2);

let obj;     // undefined. 
obj = null; // null. (null도 하나의 타입임.)


let sym1 = Symbol('symbol');   // unique 키 값을 생성.
let sym2 = Symbol('symbol');  // 
console.log(sym1 == sym2);

// 객체(object )
obj = {
    sname : 'Hong', //속성 : 속성값
    age : 20,
    showAge : function(){
        console.log('나이는' + this.sname + ' 입니다.')
    } // 메소드
}

console.log(obj.sname);
console.log(obj['age']);
obj.showAge();

obj.sname = 'Hwang'; // 값 할당.

// -----------------------------------------------------------------------------------------------------------

//배열
const numbers = []; //new Array();로 선언할 수도 있다.
numbers[numbers.length] = 10; //추가.
numbers[numbers.length] = 20; //추가.
numbers[numbers.length] = 30; //추가.

numbers.forEach(function(val){
    console.log(val);

});          //메소드(콜백함수(값, 인덱스, 배열))



// -----------------------------------------------------------------------------------------------------------


// Math.random : (1) 0 <= random < 1 (부동소수점, 실수).
const randomVals = [];

for (let i =0; i<5; i++){
    let val = Math.ceil(Math.random()*10); // 0~1 임의의 값Math.ceil > 올림 
    randomVals[i] = val;
}

//예제 1)  randomVals[i] = val에서 5보다 큰 값만 출력되도록 하기.
console.clear(); // 콘솔 메세지 초기화.

randomVals.forEach(function(val){
    if(val > 5){
       console.log(val);
    }
});

// -----------------------------------------------------------------------------------------------------------

//[3, 1, 6, 9, 4] 랜덤으로 생성...
randomVals.splice(0, randomVals.length, 1,2,3); // 
//console.log(randomVals)

//예제 2) 
//Math.random() : 0 ~ 1 임의값 생성.
// 21 ~ 50 까지의 임의 값을 생성. : Math.ceil(Math.random()*30)+20
// console.log(Math.ceil(.8)); // 0 ~ 1. 올림하므로..

for(let i =0; i<5; i++){
    randomVals[i] = Math.ceil(Math.random()*30)+20;
}
console.log(randomVals);

// 2교시 1번째 작업
// -----------------------------------------------------------------------------------------------------------

console.clear(); //콘솔 메세지 초기화


for(let i =0; i<5; i++){
    randomVals[i] = Math.ceil(Math.random()*30)+20;
}

//예제 3) 짝수만 출력

//3-2) forEach로 콜백 함수 호출
randomVals.forEach(showEven); 

//3-1) 콜백함수(callback function)로 정의.
function showEven(val){
    if(val % 2 ==0){
        console.log(val);
    }

}

// -----------------------------------------------------------------------------------------------------------

// 자료형의 변환 

//1) 숫자형으로 변환
console.log('3'+ 4); // '34'
console.log(-'3'+ 4); // 1, 문자열에 +, - 기호 붙이면 number 로 인식함.
console.log('3'* 4); //  12, *, / 은 number로 인식함.


//2) 문자열로 형 변환
console.log((3).toString()); 



// 절대값, 숫자의 부호 

console.log(Math.abs(-30)); // 절대값 반환
console.log(Math.sign(-20)); // 부호 알려줌. [ 양수 1 /  0 / 음수-1 / 파라메터가 숫자가 아닐때 NaN]  중 하나 반환됨 

console.clear();


const arr2 = [-3, 2, -45, 0, 4, 7];
const arr3 = arr2.map(function(val){
    return Math.sign(val);
}); // 배열의 갯수만큼 콜백함수 실행 => 새로운 배열 반환.

console.log(arr3); // [-1, 1, -1, 0, 1, 1] (배열 갯수만큼 양,음 판단해서 출력됨)

// -----------------------------------------------------------------------------------------------------------

//NaN, Infinity 
console.log(3 / 'five'); // NaN : 파라메터가 숫자가 아닐 때 등장
console.log(1/0); //Infinity : 무한대 값 


