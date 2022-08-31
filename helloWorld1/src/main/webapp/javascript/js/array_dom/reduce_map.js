// 8월 31일 3교시
//reduce_map.js

//Array.prototype.map();  =>  맵핑(A -> A'), 건수 동일, 새로운 타입 만들어줌 
//Array.prototype.filter(); => 필터링(A -> a), 건수 줄어듦

const names = ['이현성', '이주훈', '황용주', '최승현']; 

let mapfnc = (name, idx) => {
    let obj = {} 
    obj.name = name;
    obj.sno = idx + 1; 
    return obj;        
}

let filfnc =(member)=>{
        return member.name.startsWith('이'); 
    }

    // filter() : return값 true이면 반환, false 이면 반환안함.
    //startsWith(): 어떤 문자열이 특정 문자로 시작하는지 확인하여 결과를 true 혹은 false로 반환


// ===========================================================================================================
// map, filter, map + filter

// 1) map 
// let members = names.map((name, idx) => {
//     let obj = {} //object
//     obj.name = name;
//     obj.sno = idx + 1; // idx 값은 0부터이므로 1더해줌
//     return obj;        // {name : '이현성', sno : 1}
// });
// console.log(members);   // 배열 타입 -> object 타입으로 변환돼서 출력됨.


// 2) filter
// let lees = members.filter((member)=>{
//     // filter() : return값 true이면 반환, false 이면 반환안함.
//     return member.name.startsWith('이'); 
//     //startsWith(): 어떤 문자열이 특정 문자로 시작하는지 확인하여 결과를 true 혹은 false로 반환
// });
// console.log(lees);


// 3) map + filter
// map이 배열형태이므로 map메서드.filter로 사용 가능 
// let result = names.map((name, idx) => {
//     let obj = {} 
//     obj.name = name;
//     obj.sno = idx + 1; 
//     return obj;        
// }).filter((member)=>{
//     return member.name.startsWith('이'); 
// }); 

// ===========================================================================================================

// 
// 1) map 메서드
let members = names.map(mapfnc);
console.log(members);


// 2) filter 메서드
let lees = members.filter(filfnc);
console.log(lees);


// 3) map.filter 메소드 체인
let result = names.map(mapfnc).filter(filfnc);
console.log(result);   



//================================================================================================================



// // reduce로 map을 구현하는 fnc
// let reduceMapFnc = (acc, val, idx) => {
//     let obj = {}
//     obj.name = val;
//     obj.sno = idx + 1;
//     acc.push(obj);  // [{name : '이현성', sno : 1}, {name : '이주훈', sno : 2}]
//     return acc;
// }, []);
// console.log(members);


// // reduce로 filter을 구현하는 fnc
// let reduceFilFnc =(acc,val)=>{
//     if(val.name.startsWith('이')) {
//         acc.push(val);
//         return acc;
//     }
// }

// 
// reduce로 map과 같은 기능 구현.
members = names.reduce(reduceMapFnc, []); // names.reduce(reduceMapFnc, []) : 초기값으로 둠
console.log(members);

// reduce로 filter와 같은 기능 구현.
lees = members.reduce(reduceFilFnc, []);
console.log(lees);

// 메소드 체인.
result = names.reduce(reduceMapFnc, [])
              .reduce(reduceFilFnc, [])
console.log(result);