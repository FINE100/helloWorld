// mysource.js

const boards = [
    {bno : '6', title : '문의', content : '문의',writer: '문의', creationDate : '2022-09-05'},
     {bno : '7', title : '수정', content : '수정',writer: '수정', creationDate : '2022-09-05'},
       {bno : '8', title : '삭제', content : '삭제',writer: '삭제', creationDate : '2022-09-05'}
]


document.addEventListener('DOMContentLoaded', function(){
//dom 요소에 이벤트 등록하는 메서드 : DOM컨텐츠가 다 다운받아진 후에 함수 실행

 
    
    showBoard();
// addBtn.onclick = 'click' > 속성 넣기, <buttond>에 적용될 메서드 만들어짐
let addBtn = document.querySelector('button');
addBtn.addEventListener('click', addBoard);

});  

 let xhtp = new XMLHttpRequest();
        xhtp.open('get','../../board') 
        xhtp.send(); // 서버요청.
      
        xhtp.onload = function(){
        	let data = JSON.parse(xhtp.response); // 객체로 변경
            console.log(data);

        	let list = document.getElementById('list');
        	// 서버의 json 파일 -> JSON.parse() -> 페이지 출력
        	data.forEach(data =>{   		
				let tr = makeTr(data);
        	list.append(tr); // tbody에 자식요소로 tr 붙이라는 뜻
        	})
        }
        
function showBoard(){
        //리스트 보여주기. 
        let table = document.getElementById('list');

        boards.forEach(board => {
            let mValues = [];            
            mValues = Object.values(board); // Object.keys(member) : [속성,속성]
            let tr = makeTr(mValues);
            table.appendChild(tr);
        });
}

function addBoard(){
    let bno = document.getElementById('bno');
    let title = document.getElementById('title');
    let content = document.getElementById('content');
    let writer = document.getElementById('writer');
   let creationDate = document.getElementById('creationDate');
    
    console.log(bno.value, title.value, content.value, writer.value, creationDate.value);

    // 저장값이 없으면 warning.
 //   if(!bno.value || !title.value|| !mphone.value){ 
 //       alert('필수값을 입력하세요!!!');;
 //       return; //return이 있으면 break; 역할함(강제종료)
//    }

    const mValues = [bno.value, title.value, content.value, writer.value, creationDate.value];
    let tr = makeTr(mValues);
    document.getElementById('list').appendChild(tr);

        // 초기화.
        bno.value = '';
        title.value = '';
       content.value = '';
       writer.value = '';

} 


// 신규 데이터 추가시 삭제 버튼 같이 추가하기 
function makeTr(mValues =[]){
    let tr = document.createElement('tr');
    tr.addEventListener('click', function(){
        console.log(this.firstElementChild.innerText);// <td><button>user1</button></td>
    
        // 선택된 tr의 정보를 입력화면에 보여지도록. 
        document.getElementById('bno').value = this.firstElementChild.nextElementSibling.innerText; //id
        document.getElementById('title').value = this.firstElementChild.nextElementSibling.nextElementSibling.innerText;
        document.getElementById('content').value = this.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerText;
    	document.getElementById('writer').value = this.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerText;
   		document.getElementById('creationDate').value = this.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerText;
    
    
    
    }, false) // true : 캡처링, false : 버블링(=default)

    // 체크박스 추가 
    let td = document.createElement('td');
    let checkbox = document.createElement('input');
    checkbox.addEventListener('click', function(e){
        //tr의 이벤트가 발생하지 않도록 하기 위해서 
        e.stopPropagation()
    });

    checkbox.addEventListener('change', function(){
        let checkProp = document.querySelectorAll('tbody tr input[type="checkbox"]');       
        document.getElementById('allChecked').checked = 
                                                    [...checkProp].every(item => item.checked);

        // ... : 나머지 파라메타 (배열 처럼 만들어짐)
    })
    checkbox.checked = false // default = checked 상태
    checkbox.setAttribute('type','checkbox');        // 속성 지정
    td.appendChild(checkbox);
    tr.appendChild(td);



    mValues.forEach(val => {
        let td = document.createElement('td'); //id 위치. <td>user1</td>
        let txt = document.createTextNode(val);
        td.appendChild(txt); //<td>user1</td> => td가 감싸고 있으므로 자식요소로 봄
        tr.appendChild(td); //<tr><td>user1</td></tr>
    });

    // 삭제버튼 추가.
    td = document.createElement('td');
    let btn = document.createElement('button');
    let txt = document.createTextNode('삭제');
    
    // 버튼에 삭제 기능을 추가
    btn.addEventListener('click', function(e){
        this.parentElement.parentElement.remove();
        e.stopPropagation(); 
    }, false);

    btn.appendChild(txt);
    td.appendChild(btn);
    tr.appendChild(td); 

    return tr;
}





