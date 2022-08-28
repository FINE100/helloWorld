// table_func.js 

//const : let과 동일한 역할. 변수 값을 바꿀수 없다는 특징(재할당 불가능)

function makeTr(mem={}){
    let tr = '<tr>';
    //`<td> ${member.id}</td><td>${member.name}</td><td>${member.score}</td>`; 대신 아래의 for문 씀
    for (let prop in mem) {
        tr += `<td>${mem[prop]}</td>`;
    }
    tr += '<td><button>확인</button></td>';
    tr += '</tr>';
    return tr;
}

function makeHd(){
    let titles = ['아이디', '이름', '점수', '연락처','확인'];
    let tr = '<tr>';
    for(let title of titles){
        tr += `<th>${title}</th>`;
    }
    tr += '</tr>';
    return tr;
}

const members = [
    {id: 'user1', name : '윈터', score: 80, phone: '010-1234-1234'},
    {id: 'user2', name : '카리나', score: 90, phone: '010-1234-4545'},
    {id: 'user3', name : '닝닝', score: 70, phone: '010-1111-6677'},
    {id: 'user4', name : '지젤', score: 100, phone: '010-1294-7834'}
];

let str = '<table border=1>'; // 배열 변수 읽어올때는 of 
str += makeHd();
for(let member of members) { //{id: 'user1', name : '윈터', score: 80}
    str += makeTr(member);
}
str += '</table>';
document.write(str);


// 함수 쓰기 전 코드
//let str = '<table border=1>';
// str += '<tr><th>아이디</th><th>이름</th><th>점수</th></tr>';
// str += '<tr>';
// str += `<td> ${member.id}</td><td>${member.name}</td><td>${member.score}</td>`;
// str += '</tr>';
 //str += makeTr(member);
//}
//str += '</table>';
//document.write(str);

