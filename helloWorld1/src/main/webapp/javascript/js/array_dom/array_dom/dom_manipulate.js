//8월 31일 5교시
//dom_mainpulate.js

// element 생성 : createElement()
// textNode 생성 : createTextNede()
// 부모-자식 형성 : appendChild()


// 폼태그 생성 : <form action ="addMember.jsp" method="post"
let frm = document.createElement('form'); 
frm.setAttribute('action', 'addMember.jsp'); 
frm.setAttribute('method', 'post'); 



// 자식요소 : <label for="user_id">사용자 아이디</label>
let labelId = document.createElement('label');
labelId.setAttribute('for', 'user_id');
labelId.innerText = '사용자 아이디';
frm.appendChild(labelId) // 폼태그의 자식 요소로 넣는다

// 자식요소 :  <input type="text" name="user_id" id="user_id">
let inputId = document.createElement('input');
inputId.setAttribute('type', 'text');
inputId.setAttribute('name', 'user_id');
inputId.setAttribute('id', 'user_id');
frm.appendChild(inputId)

// id = show (div#show) 아래에 자식 요소로 frm(폼태그)를 붙여주겠다.
document.getElementById('show').appendChild(frm); 

// 자식요소 : <label for="user_pass">사용자 비번</label>
let labelPw = document.createElement('label');
labelPw.setAttribute('for', 'user_pass');
labelPw.innerText = '사용자 비번'; 
frm.appendChild(labelPw);

// 자식요소 : <input type="text" name="user_pass" id="user_pass">
let inputPw = document.createElement('input');
inputPw.setAttribute('type', 'text');
inputPw.setAttribute('name', 'user_pass');
inputPw.setAttribute('id', 'user_pass');
frm.appendChild(inputPw);


// 자식요소 : button 
let button = document.createElement('button');
button.innerText = '로그인'
frm.appendChild(button);

console.log(frm);