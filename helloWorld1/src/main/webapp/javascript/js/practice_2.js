// ==================================================================================================

// 1. 함수 정의 방법


// 1) 함수 선언문
function myFunc(param){
    console.log(param + ' run!');
}

// 2) 함수 표현식

const myFunc2 = function(param){
    console.log(param + ' run!');
}

// 다른 변수로 선언해서 함수 사용도 가능함
let runRun = myFunc2;
console.log(runRun('kong'))

// 3) 화살표 함수

let myFunc3 = (param)=>{
    console.log(param + ' run!')
}

//2. 함수 사용 방법 : 모두 동일

myFunc('은경');
myFunc2('지니');
myFunc3('민지');

//3. arguments
function mySum(n1 =0, n2 = 0){
    let sum = 0;
    console.log(arguments); // arguments ; 함수로 전달된 인자들의 정보 담고 있음.
    //console.log(n1 + n2);
    for(let num of arguments)
     sum += num;
    console.log('합계 값 : ' + sum);
}
mySum(1,8);

//4. 커링

function orderSet(burger){
    return function orderBeverage(beverage){
        return function orderSide(side){
            return function orderKetchup(yn){
                return function orderChicken(count){
                    console.log("세트: "+burger+","+beverage+","+side+", 케첩("+beverage+"), 조각치킨("+count+"개")
                }
            }
        }
    }
}

const orderSet2 = burger => beverage => side => yn => count => {
    console.log("세트: "+burger+","+beverage+","+side+", 케첩("+beverage+"), 조각치킨("+count+"개)")   
}

let order = orderSet2('치즈버거')('콜라');
console.log(order('프렌치후라이')('y')('2'));