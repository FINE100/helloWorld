
//switch
let a = 5;
switch ((a - 1) % 5 + 1) {
    case 5:
        console.log('별');
    case 4:
        console.log('별');
    default : 
    console.log('별별별'); //3 이하의 값
    break;

}

// for
let frirends =[ 
    {name : '라이언, ', age: 5},
    {name : '어피치, ', age: 7},
    {name : '춘식이, ', age: 3}
]

for(let i=0; i<frirends.length; i++){
    console.log('이름: '+frirends[i].name+'나이: '+frirends[i].age);
}

// for ~ of 
// 배열array, 문자열String, 맵Map, 셋Set 등 객체에서 간격하게 사용 

// 사용법:
// for(let 요소변수 이름 of 대상){반복 실행문} -> 요소변수는 내마음대로 지정, 반복실행문 안에서만 사용됨


for(let fri of frirends){ //friends 배열의(of) 요소(fri)를 한개씩 가져와 반복문에 대입한다.
    console.log('이름: ' +fri.name + '나이: '+fri.age); 
}


// for ~ in 
// 객체 전체 속성 키 나열. 일반 객체에 사용함. (배열, 문자열, 맵, 셋은 인덱스 값 나오니 주의)
// 참고! {} 중괄호로 묶인 것이 객체임

// 사용법 : for(let 속성 in 객체) {속성 처리 구문 } > 속성은 임의로 지정 가능

let ryon = {name : '라이언', age : 5};
for(let prop in ryon){
    console.log('속성 : '+prop+'값 : '+ryon[prop]);
}

// forEach
// 배열 전용 메서드. 배열의 모든 요소를 순환시킴. 콜백 함수 써서 다양한 배열 처리 가능함.
const randomVals = [];

for(let i = 0; i<5; i++){
    let val = Math.ceil(Math.random()*10);
    randomVals[i] = val
    console.log('랜덤값은 : ' + val);
}

randomVals.forEach(function(val){
    if(val%2==0){
        console.log(val)
    }
});




// ============================[수업 시간 예제]================================================================


// Math.random : (1) 0 <= random < 1 (부동소수점, 실수).
const tmpAry =[];

for(let i=0; i<5; i++){
    let val = Math.ceil(Math.random()*10);
    tmpAry[i] = val;
    console.log('추첨 번호 : ');
}

//예제 1)  tmpAry[i] = val에서 5보다 큰 값만 출력되도록 하기.

tmpAry.forEach(function(val){
    if(val>5){
    console.log('5보다 큰 추첨값' + val);
}
});


//예제 2) 
//Math.random() : 0 ~ 1 임의값 생성.
// 21 ~ 50 까지의 임의 값을 생성. : Math.ceil(Math.random()*30)+20

// 짝수만 출력 (콜백함수 만들어서 forEach로 부르기)


const randomAry =[];

for(let i=0; i<5; i++){
    let val = Math.ceil(Math.random()*10);
    randomAry[i] = val;
    console.log('추첨 번호 : ' + val);
}

//2) forEach로 콜백 함수 호출
randomVals.forEach(showEven); 

//1) 콜백함수(callback function)로 정의.
function showEven(val){
    if(val % 2 ==0){
        console.log(val);
    }
}

