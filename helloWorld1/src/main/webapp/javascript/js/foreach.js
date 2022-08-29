// foreach.js

const members = [
    
    {id: 'user1', name: '윈터', score: 80, phone: '010-1234-1234', gender: 'M'},
    {id: 'user2', name: '카리나', score: 90, phone: '010-1234-4545', gender: 'W'},
    {id: 'user3', name: '닝닝', score: 55, phone: '010-1111-6677', gender: 'W'},
    {id: 'user4', name: '지젤', score: 85, phone: '010-1294-7834', gender: 'M'}
];



function makeTr(mem, color){
    let tr = `<tr style='color: ${color}' >`;
    for(let prop in mem){
        tr += `<td>${mem[prop]}</td>`;
    }
    tr += '</tr>';
    return tr;
}

//for 반복문. 배열 메소드(forEach)
let str = '<table border=1>';
str += '<tr><th>아이디</th><th>이름</th><th>점수</th>/<th>연락처</th><th>성별</th></tr>';

members.forEach(function(val, ind, ary) => {
    if(val.gender == 'M'){  // 남자일 경우 makeBlueTr을 호출
        str += makeTr(val,'blue');
    } else if(val.gender == 'W'){ // 여자일 경우 makeRedTr을 호출 
        str += makeTr(val, 'red');

    }
});

document.write(str);






// function callbackFnc(val,ind,ary){ //val, index, array
//     console.log(val.phone);
// };
