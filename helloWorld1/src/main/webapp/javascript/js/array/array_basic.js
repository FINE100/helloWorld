// 8월 31일 1교시
//array_basic.js
//배열에 요소 추가 /삭제
// push() : 마지막 추가. pop() : 마지막 제거
// unshift() : 첫번째 추가. shift() : 첫번째 제거 
// slice(firstindex, lastindex);
// splice(위치, 대체할 갯수, 대체할 값 .... ) : 추가, 수정, 삭제 > 모든 기능 다 할 수 있음

const names = [];

names[0] = '정다슬';
names[names.length] = '백제니';
names[names.length] = '노지수';
names[names.length] = '김리사';

names.push('이로제'); 

names.pop(); // 이로제 사라짐
names.pop(); // 김리사 사라짐 ... 마지막부터 순서대로 사라짐
names.shift(); // 정다슬 사라짐 .. 첫번째 제거 

names.unshift('이로제'); // 이로제 추가됨 ... 첫번째 추가 



const newNames = names.slice(0,2); // 배열 만들어줌 (idx 0~1 부분 = 이로제, 백제니)
newNames.splice(0, 2, '백지젤')
console.log(newNames);

//splice 추가, 삭제, 수정
// names.splice(0, 3, '김윈터', '노닝닝', '백지젤' ); //idx 0번부터 시작, 기존값 3개 대체 => 김윈터/노닝닝/백지젤로 변경됨 
// names.splice(0, 3); // idx 0번부터 시작. 3개 공백으로 대체 => 값 사라짐 


names.splice(2, 0, '김윈터'); // idx 1번 자리에 추가됨 (원래 idx 1번 자리는 2번자리로 내려감)

const otherName = names.concat(newNames); // 기존 배열들 모두 합치기 
console.log(otherName);

names.length = 0; // 크기를 지정, 0으로 설정시 기존 배열 내용 다 지워짐. (js에서 씀)



names.forEach(name => {
    console.log(name);
})
