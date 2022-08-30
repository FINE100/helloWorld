//8월 30일 5교시 첫번째
//string_object.js

// 메소드 : trim() > trimStart() > trimEnd()
// 메소드 : replace(a,b) : a문자를 b문자 변환.
// 정규 표현식 : replace(/\s+ /, '표현값')                      => s: space(공백), + : 공백이 있다.
// 메소드 : split('구분자') => 문자열 배열 생성.
// 메소드 : join('구분자') => 배열 -> 문자열

let str1 = 'Hello';
let str2 = new String('Hello');

console.log(str1, str2, str1 == str2, str1 === str2);
console.log(str1.substring(0,3)); //idx 0~2까지 내용 출력(객체의 시작 인덱스로 부터 종료 인덱스 전)

//String => string
console.log(typeof str2.valueOf()); // 객체 -> 기본타입 

let result = eval(new String('1 + 2 * 3').valueOf());
console.log(result);

let trimStr = ' 문자열 앞뒤 공백을 제 거하는 메소 드 s  ';
console.log(trimStr.trimStart().trimEnd()); // 앞뒤로 공백 모두 제거 


// ==========================================================================================================

// String 객체의 메소드 추가 정의 

let obj = {}; // new object();
let ary = []; // new Array();
let regExp = /\s+$/; new RegExp();

String.prototype.ltrim = function(){
    return this.replace(/\s/, '') // .replace(/\s/, '') > 공백을 찾아서 s로 바꿈
}

String.prototype.rtrim = function(){
    return this.replace(/\s+$/, '') // .replace(/\s$/, '') > s문자 : 공백을 나타내는 문자.  $ 문자열의 끝이라는 뜻
}

console.log(trimStr.ltrim().rtrim()) // 내가 정의한 메소드, 왼쪽 공백 제거

trimStr = '   how are you   to  day     everyone.         ';
console.log(trimStr.trim().replace(/|s+/g, ' '));

const trimAry = trimStr.split(' ');
//forEach, map, filter `
const filAry = trimAry.filter(function(str){
    return str != '';
});

console.log(filAry.join(' '));

const str = 'The quick brown fox jumps over the lazy dog.';
const strAry = str.split(' ');  // 단어마다(띄워쓰기 한 단위마다) 추출, string -> array 
console.log(strAry.join('-')); //'The-quick-brown-fox-jumps-over-the-lazy-dog.'

console.log('   hello,     '.replace(/\s{2}$/,'tt')); //.replace(/\s{2}$/,'tt') >> 문자열 끝에서 공백 2개를 tt로 변경

