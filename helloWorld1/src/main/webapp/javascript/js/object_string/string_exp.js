//8월 30일 마지막 교시
// string_exp.js 

let now = new Date();
console.log(now.toDateString()) // Tue Aug 30 2022
console.log(now.toLocaleDateString()) // 2022.08.30.
console.log(now.toLocaleTimeString()) // 오후 5:28:37
console.log(`${now.getFullYear()}년 ${now.getMonth()+1}월 ${now.getDate()}일 ${now.getHours()}시 ${now.getMinutes()}분 ${now.getSeconds()}초`);

//``으로 간단한 표현식 가능함
console.log(`${now.getSeconds()<10?'0'+now.getSeconds():now.getSeconds()}`); // 삼항 연산자
console.log(`0${now.getSeconds()}`.slice(-2));



console.log('abc'.toUpperCase()); // 대문자 변환
console.log('abc'.toLowerCase()); // 소문자 변환