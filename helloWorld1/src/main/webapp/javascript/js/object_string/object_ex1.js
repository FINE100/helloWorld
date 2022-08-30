// 8월 30일
// object_ex1.js : 1교시 두번째 (교재 p.100)


// 클래스 Estimate. 속성 : 재료, 단가: 재료와 부피 => 총 금액. 
class Estimate{
    constructor(param){ // 생성자 : 한번만 선언가능
        this.unit = param; 
    }
    getEstimate(unitType, width, height){ // (ex) Wood, 20, 20 => 100 * 20* 20 = 금액
        // find : 배열에서 조건을 만족하는 첫번째 값 반환하는 메소드 
        let priceInfo = this.unit.find(function(val){
            return val.type == unitType;
        })
        return priceInfo.price * width * height                   
    }

    addUnit(unit){
        this.unit.push(unit); //push: 값 추가 
    }
}

let unitInfo = [
    {type : "wood", price : 100}, 
    {type : "iron", price : 300}, 
    {type : "prastic", price : 200}
]


let estmate = new Estimate(unitInfo); 
let result = estmate.getEstimate('wood', 30, 50);

estmate.addUnit({type: 'ceramic', price : 400});
result = estmate.getEstimate('ceramic', 10, 20);

console.log(`계산값은 ${result}`);