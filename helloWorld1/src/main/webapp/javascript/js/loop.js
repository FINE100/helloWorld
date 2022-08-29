// loop.js

let numbers = [23, 33, 14, 52, 77, 55, 16];

//1)
//let result = 짝수합; 

let result =0;

for(let i=0; i<numbers.length; i++){
    if(numbers[i]%2==0){
        result += numbers[i]
    }
}
console.log('짝수 합 : ' + result);


//2)
result = 0;
numbers.forEach((val, ind, ary)=> {
    if(val%2 ==0){
        result += val;
    }

});

console.log('짝수 합 : ' + result);

//3)
//1,3,5,7번째(홀수번째) 값의 합

result =0;
for(let i=0; i<numbers.length; i++){
    if(i%2==0){
        result += numbers[i]
    }
}

console.log('홀수 번째 합 : ' + result);

//4)
result =0;
numbers.forEach((val, ind)=> {
    if(ind%2 ==0){
        result += val;
    }

});

console.log('홀수 번째 합: ' + result);


//5) 30보다 큰 값

result =0;
for(let i=0; i<numbers.length; i++){
    if(numbers[i]>30){
        result += numbers[i]
    }
}


console.log('30보다 큰 값의 합: ' + result);

//6)30보다 큰 값
result =0;
numbers.forEach((val, ind)=> {
    if(val>30){
        result += val;
    }

});

console.log('30보다 큰 값의 합: ' + result);

