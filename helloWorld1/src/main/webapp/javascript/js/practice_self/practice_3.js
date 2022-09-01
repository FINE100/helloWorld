//객체와 클래스 

class Estimate{
    constructor(param){
    this.unit = param;}

    getEstimate(unitType, width, height){
        let priceInfo = this.unit.find(function(val){
            return val.type == unitType;
        })
        return priceInfo.price * width* height
    }

    addUnit(unit){
        this.unit.push(unit); 
    }

}

let uniInfo = [
    {type : "wood", price : 100}, 
    {type : "iron", price : 300}, 
    {type : "prastic", price : 200}
]

let estmate = new Estimate(uniInfo);
let result = estmate.getEstimate('wood', 30, 50);

estmate.addUnit({type : 'ceramic', price : 400});
result = estmate.getEstimate('ceramic', 30, 50);
console.log(result);

