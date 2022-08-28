//multi.js : 구구단 출력 

// <p> 3 * 1 = 3 </p>
// 3 * 2 = 6
// 3 * 3 = 9

function gugudan(numb) {
    let num = numb;
    let str = '';
    for (let i = 1; i <= 9; i++) {
        //str += '<p>'+num + '*'+ i + '=' + (num*i) + '</p>'
        str += `<p> ${num} * ${i} = ${num*i} </p>`
    }
    return str;
}
let result = gugudan(8);
document.write(result);


let numb = 30;
console.log(`numb의 값은 ${numb}입니다.`);
//` ${} ` 쓰면 + 기호 없이 문자열 안에서 변수 쓸 수 있음(숫자키 1 왼쪽에 있는 `표시) 