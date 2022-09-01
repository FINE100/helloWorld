//8월 31일 4교시
// array_indexof.js

//Array.prototype.indexOf()
//String.prototype.indexOf()
// 값이 존재하면 1, 존재하지 않으면 -1 반환

//Array.prototype.some() : 값이 존재하면 true, 없으면 false


const members = ['진정욱', '노은경', '백나현'];
const newMems = ['김민지', '노은경', '정다슬'];


let pos = members.indexOf('노은경'); 
// members배열에 newMems 추가 
// 반복문 사용.

newMems.forEach(member=>{
    if(members.indexOf(member) == -1){
        members.push(member);
    }
});

console.log(members); // ['진정욱', '노은경', '백나현','김민지','정다슬' ];
members.push('김민');
// let result = members.some(member=>{
//     return member == '노은경';
// })

let result = members.some(member => member == '노은경');
result = members.every(member => member.length == 3); // every() 값 있으면 true, 없으면 false 
result = members.find(member => member.startsWith('김')); //find()  주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환
console.log(result);
