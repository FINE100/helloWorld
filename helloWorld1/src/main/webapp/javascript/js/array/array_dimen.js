// 8월 31일 1교시
//array_dimen.js

const members = [
    ['홍길동', 20],
    ['김익수', 25],
    ['손봉호', 23],
]

members.push(['노은경', 29]); // 배열타입 추가
members[0][1] = 22; //members[0]의 idx 1 변경 

console.table(members); //console.table 하면 콘솔창에 table 형태로 출력됨



// 배열 속성 -> object 타입 형변환하기
const objMembers = [];

members.forEach(member => {        
    let obj = {
        name : member[0],
        age : member[1]
    }
    objMembers.push(obj);
})

console.log(objMembers);


// object -> 배열 타입 형변환하기

const aryMembers = [];

objMembers.forEach(member =>{
    let ary = [member.name, member.age];
    aryMembers.push(ary);
})

console.log(aryMembers);
