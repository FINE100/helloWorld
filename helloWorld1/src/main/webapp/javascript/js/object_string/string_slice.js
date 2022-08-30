//8월 30일 5교시 3번째
//string_slice

let str = 'Good, Morning!';
console.log(str.length);
console.log(str.slice(2,7)); // index: 2(include) ~ index: 7(exclude)
console.log(str.slice(2)); // index : 2 ~ 끝까지. 
console.log(str.slice(2, -2)); // index: 2~ index : 12 (= 14-2)  
console.log(str.slice(-2)); // /  index (= 14-2)  =>  -2 : 오른쪽에서부터 index 2번까지 읽어옴

console.log(str.substring(0, 7));
// substr(3,5); index:3부터 5문자.

//문자열을 찾아서 인덱스 반환 
console.log(str.indexOf('Mor'));
console.log('Good Morning, Good Afternoon'.lastIndexOf('Good')); // 단어가 있으면 해당 위치 인덱스 리턴, 없으면 -1 반환

str = 'Good Morning, Good Afternoon, Good Evening';
let position = str.indexOf('Good', str.indexOf('Good') + 1) // => 출력값 : 0 
console.log(position); //두번째 Good 문자 있는 위치의 인덱스값 반환. 

// 문자열에서 반복되는 구문의 횟수.
let cnt = 0; 
let pos = str.indexOf('Good');

while(pos != -1){
    cnt ++;
    pos = str.indexOf('Good', pos + 1);
}

console.log(cnt + ' 회');



// index of로 배열 속성 찾기(교수님 코드 )
const members = [
    {name : "백제니", age : 25},
    {name : "이로제", age : 29},
    {name : "노지수", age : 27},
    {name : "김리사", age : 22}
                       ]
//members 배열에서 searchKey을 찾아서 나이 콘솔에 출력 
//prompt() => 검색창 메세지 뜸 
let searchKey = prompt('찾을 이름을 입력 >');
members.forEach(member => {
    if(member.name.indexOf(searchKey) != -1){ //indexOf() : 찾는 값이 없는 경우 -1 반환. includes() => true / false
        console.log(member.name + '은(는) '+ member.age+ '살입니다.');
    }
})


// 내가 짠 코드
// const members = [
//     {name : "백제니", age : 25},
//     {name : "이로제", age : 29},
//     {name : "노지수", age : 27},
//     {name : "김리사", age : 22}
// ]
// let searchKey = prompt('찾을 이름을 입력 >'); 
// console.log('입력한 이름은 ' + searchKey);
// // members 배열에서 searchKey을 찾아서 나이 콘솔 출력. 

// for(mem of members){
//     if(member.name.indexOf(searchKey) != -1)
//     console.log(mem.age + '살')
// }





