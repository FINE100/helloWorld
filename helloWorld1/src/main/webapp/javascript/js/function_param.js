//function_param.js : 점심시간 전 

// 함수 호이스팅. 
function myFunc(param){ //parameter
    console.log('Hello!' + param);
}

function myFunc2(param1, param2){
    console.log(param1 + param2);
}

// 함수선언식: 선언부가 끝부분에 있더라도 자동으로 읽음. 오류 안남.
myFunc('World'); // argument;
myFunc2('Welcome ', 'Home!!');

// 함수표현식.
let myFunc3 = function(param){
    document.write('<p>Hello, ' + param + ' </p>');
}
myFunc3('홍길동');      // Hollo, 홍길동 출력


let myFunc4 = myFunc3;  // myFunc3을 참고하고 있음.
myFunc4('World');       // Hollo, Wolrd 출력


// 매개값을 처리하는 arguments 객체.

// 함수 선언시 함수 파라메터 2개 정의했지만, 실행시 인자를 5개 넣어 호출했다면, 원래 나머지 3개의 인자 값에는 파라메터로 접근 불가.
//arguments 객체를 이용하면 접근 가능함. => 함수로 전달된 인자들 함수대로 모두 연산 가능. 배열처럼 이용.

function mySum(n1 =0, n2 = 0){
    let sum = 0;
    console.log(arguments); // arguments ; 함수로 전달된 인자들의 정보 담고 있음.
    //console.log(n1 + n2);
    for(let num of arguments)
     sum += num;
    console.log('합계 값 : ' + sum);
}

mySum(1,2,3,4,5,6,7,8,9,10); 

// 화살표 함수 
function mySum5(a,b) {
    console.log(a + b);
}

//forEach 메소드의 매개값으로 화살표 함수를 사용.
['Hello', 'World'].forEach((val, idx) =>  console.log(val, idx)); // 내용 한줄 밖에 없으면 {} 생략 가능
