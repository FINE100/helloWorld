// conditions.js

const members = [
    
    {id: 'user1', name: '윈터', score: 80, phone: '010-1234-1234', gender: 'M'},
    {id: 'user2', name: '카리나', score: 90, phone: '010-1234-4545', gender: 'W'},
    {id: 'user3', name: '닝닝', score: 55, phone: '010-1111-6677', gender: 'W'},
    {id: 'user4', name: '지젤', score: 85, phone: '010-1294-7834', gender: 'M'}
];


// 테이블 형식(표)=>
// 성별 : 남자 => 파란색 글씨, 여자 => 빨간색 글씨

//makeTr(파란색, 빨간색 ) / makeBlueTr(), makeRdeTr()

//1.
function makeTr(mem, color){
    let tr = `<tr style='color: ${color}' >`;
    for(let prop in mem){
        tr += `<td>${mem[prop]}</td>`;
    }
    tr += '</tr>';
    return tr;
}

//2.
function makeBlueTr(mem){
    let tr = `<tr style='color: blue' >`;
    for(let prop in mem){
        tr += `<td>${mem[prop]}</td>`;
    }
    tr += '</tr>';
    return tr;
}

function makeRedTr(mem){
    let tr = `<tr style='color: red' >`;
    for(let prop in mem){
        tr += `<td>${mem[prop]}</td>`;
    }
    tr += '</tr>';
    return tr;
}




let str = '<table border=1>';
str += '<tr><th>아이디</th><th>이름</th><th>점수</th>/<th>연락처</th><th>성별</th></tr>';
for(let member of members) {
    if(member.gender == 'M'){  // 남자일 경우 makeBlueTr을 호출
        str += makeTr(member,'blue');
    }else if(member.gender == 'W'){ // 여자일 경우 makeRedTr을 호출 
        str += makeTr(member, 'red');

    }
}
str += '</table>';
document.write(str);












const passMember = [];

for (let i = 0; i < members.length; i++) {
    if (members[i].score > 60) {
        console.log('이름 : ' + members[i].name);
        passMember[passMember.length] = members[i].name;
    }
}
console.log(passMember);

const women = [];
for(let member of members){
    if(member.gender == 'W'){
        women[women.length] = member;
    }
}
console.log(women);