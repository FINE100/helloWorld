//dom_mainpulate2.js
let addBtn = document.querySelector('button');

// addBtn.onclick = 'click' > 속성 넣기 

// <buttond>에 적용될 메서드 만들어짐
addBtn.onclick = function(){
    let mid = document.getElementById('mid');
    let mname = document.getElementById('mname');
    let mphone = document.getElementById('mphone');
    console.log(mid.value, mname.value, mphone.value);

    // 저장값이 없으면 warning.
    if(!mid.value || !mname.value|| !mphone.value){
        alert('필수값을 입력하세요!!!');;
        return; //return이 있으면 break; 역할함(강제종료)
    }

    const mValues = [mid.value, mname.value, mphone.value];

    let tr = document.createElement('tr');
    mValues.forEach(val => {
        let td = document.createElement('td'); //id 위치. <td>user1</td>
        let txd = document.createTextNode(val);
        td.appendChild(txd); //<td>user1</td> => td가 감싸고 있으므로 자식요소로 봄
        tr.appendChild(td); //<tr><td>user1</td></tr>
    });
    document.getElementById('list').appendChild(tr);

        // 초기화.
        mid.value = '';
        mname.value = '';
        mphone.value = '';
        mid.focus();
}


