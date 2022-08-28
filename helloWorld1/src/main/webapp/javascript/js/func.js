// func.js

let num = null;
console.log(num);

// JS 에서
// boolean : 0, null, undefined, '' => false  

//함수 선언식
function sum(num1=0, num2=0){ 
    // if(!num1 && !num2)
    // return num1 + num2 ; //return undefined.
    // else return 0;  코드 길어지니까 그냥 매개변수에 초기값 지정하는걸로...
    return num1 + num2 ;

}

console.log(sum(1,2,3)); //매개값의 개수에 상관없이 맞는 개수만큼 계산하고 반환함
console.log(sum(1)); // NaN(Not a Number) => 1 + undefined, 오류는 아님. 값이 다 안들어온 걸 알려줌
console.log(sum()+ sum(2,3)); 

console.log(sum);

//함수 표현식
sum = function(num1, num2){
    return num1 + num2;
}

let showInfo = function (name){
    return `안녕하세요 ${name} 님`;
}
console.log(showInfo('홍길동'));

let welcome = showInfo;
console.log(welcome('김민수'));

let members = ['노은경','이준의','정민선'];
for(let member of members){
    console.log(welcome(member));
}