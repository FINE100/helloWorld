//variable.js : 29일 1교시 

var age; //undefined. 변수 선언 후 값을 할당하지 않은 상태 - 호이스팅.

//전역변수 

//지역변수


//ES6 ver
let fname = 'Hong'; // 변수선언.
fname = 'Hwang';
console.log(fname);

const PI = 3.14; // 상수선언 : 재할당 불가.
// PI = 1.23;

console.log(age);
age = 20;

function localFnc(){
    var age = 30; // 지역변수. 
    console.log('지역변수 : ' + age);
    age = 35;     
    console.log('지역변수 : ' + age); // 지역변수 초기값 30에서 35로 변경됨

    let fname = 'Kim'
    console.log(fname);
}

localFnc(); // () : 메소드 실행하겠다는 의미.

// 블럭 안에서는 이전 전역변수와 동일한 이름으로 새로 선언 가능

{
    let fname = 'Park'; // 블럭 안에 선언된 값은 끝나면 유효하지 않음.
    console.log(fname);
    var age = 22; // 새로 선언 가능하므로 전역변수 값이 됨. 에러는 아니지만 위험. 

    //let을 선언하여 프로그램 오류를 줄이는 것이 합당함.
} 




console.log('전역변수' + age); // age : 20 출력됨
console.log('전역변수' + fname);



console.log(window); // 가장 상위의 객체. var로 선언하면 window 안에 속성값으로 선언됨.  
                     // let으로 선언된 변수들은 window 안에 들어가지 않음. 