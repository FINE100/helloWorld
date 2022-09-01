// 8월 31일 2교시
//array_reduce.js

//reduce() : 누적합을 구하는 내장 메서드 
// 숫자 배열 : 배열 요소의 전체 합 구하는 용도 
// 문자열 : 배열 요소의 문자열을 하나로 붙이는 (join()과 같은 역할)



const numbers = [2, 3, 8, 5, 1];
let sum = 0;
//console.log(sum);

let result = numbers.reduce(function(acc,val,idx,ary){ // 누적 초기값, 값, 인덱스, 배열
    return acc + val;
}, 0); // 초기값 : 0

//결과 
// 0 2 0 (5) [2, 3, 8, 5, 1] : 0의 의미 = 초기값 0 =>  numbers.reduce(function(acc,val,idx,ary){}, 0) 
// 2 3 1 (5) [2, 3, 8, 5, 1]
// 5 8 2 (5) [2, 3, 8, 5, 1]
// 13 5 3 (5) [2, 3, 8, 5, 1]
// 18 1 4 (5) [2, 3, 8, 5, 1]

result = numbers.reduce((acc,val,idx,ary)=>{
    console.log(acc,val)
    acc.push(val + 2); //[4, 5, 10, 7, 3]
    return acc;
}, []);// 배열로 초기값 선언

console.log('최종결과: ' , result)


//<ul><li>2</li><li>3</li><li>8</li><li>5</li><li>1</li></ul>
result = numbers.reduce((acc, val, idx)=>{
    console.log(acc);

    if(idx == 0){
        acc = '<ul>';
    }
    acc += '<li>' + val + '</li>';
    
    if(idx == numbers.length -1)
    acc += '</ul>'
    
    return acc; // 다음 순번의 누적초기값으로 사용.
}, '');
document.write(result);
console.log('최종결과: ', result);

// 배열 요소의 max 값. 
let max = numbers[0];
let min = numbers[0];

for(let i=0; i<numbers.length; i++){
   
    if(max<numbers[i]){
        max = numbers[i]
    }else if(min>numbers[i]){
        min = numbers[i]
    }
}
console.log('최대값: ', max);
console.log('최소값 : ', min);

// 최대값
result = numbers.reduce((acc, val)=>{
// 순번을 비교해서 그 다음 값의 인덱스로??? 리턴??
return val<acc? acc : val;     
}, Number.MIN_SAFE_INTEGER); //가지고  올 수 있는 안전한 값 중 최소값.

console.log('최종결과: ', result, Number.MIN_SAFE_INTEGER);

// 최소값 
result = numbers.reduce((acc, val)=>{
    // 순번을 비교해서 그 다음 값의 인덱스로??? 리턴??
    return val<acc? val : acc;     
    }, Number.MAX_SAFE_INTEGER); //가지고  올 수 있는 안전한 값 중 최소값.
    
    console.log('최종결과: ', result, Number.MAX_SAFE_INTEGER);
    

    console.log(Number.MIN_SAFE_INTEGER)