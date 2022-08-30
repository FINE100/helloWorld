// 8월 30일
//object_ex2.js : 1교시 4번째

//함수로 객체 만들기

function Estimate(param){
    this.unit = param;
    this.getEstimate = function(unitType, width, height){
        let priceInfo = this.unit.find(val => val.type == unitType);
        return priceInfo.price*width*height;
    }
    this.addUnit = function(unit){
        this.unit.push(unit);
    }
}

let unitInfo = [
    {type : "wood", price : 100}, 
    {type : "iron", price : 300}, 
    {type : "prastic", price : 200}
]

let estmate = new Estimate(unitInfo); 
let result = estmate.getEstimate('iron', 30, 20);
console.log(`계산결과 : ${result}`);

estmate.addUnit({type : 'carbon', price :500});
result = estmate.getEstimate('carbon', 30, 20);

console.log(`계산결과 : ${result}`);