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


//각가의 값만 가져오기 , 월은 0부터 시작해서 +1해줘야 지금 날짜 보임
console.log(`${now.getFullYear()}년 ${now.getMonth()+1}월 ${now.getDate()}일 ${now.getHours()}시 ${now.getMinutes()}분 ${now.getSeconds()}초`);
// = 2022년 8월 30일 17시 33분 58초

console.log(`${now.getFullYear()}년 ${now.getMonth()+1}월 ${now.getDate()}일 ${now.getHours()}시 ${now.getMinutes()}분 ${now.getSeconds()}초`);
// = 09월 01일 07시 01분 01초 이런식으로 만들어보깅

console.log(`${now.getSeconds()<10?'0' + now.getSeconds():now.getSeconds()}초`);
// = 02초 (삼항식)

console.log(`0${now.getSeconds()}`.slice(-2));
// = 02초 (slice)





//숙제 :hhmiss(시간 09:08:07 형식 표현 메소드)
//삼항 연산자 이용

Date.prototype.hhmiss =()=> {
    

   let hh = (`${now.getHours()<10?'0' + now.getHours():now.getHours()}`);
   let mi = (`${now.getMinutes()<10?'0' + now.getMinutes():now.getMinutes()}`);
   let ss = (`${now.getSeconds()<10?'0' + now.getSeconds():now.getSeconds()}`);

    return `${hh} : ${mi} : ${ss}`;


}
console.log(now.hhmiss());

//slice() 메소드 사용
Date.prototype.hhmiss =()=> {    
  
    return `0${now.getHours()}`.slice(-2)+ ':'+ `0${now.getMinutes()}`.slice(-2) + ':'+`0${now.getSeconds()}`.slice(-2)  
    
}
console.log(now.hhmiss());

