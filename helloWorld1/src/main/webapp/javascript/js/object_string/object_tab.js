// 8월 30일 : 2교시 첫번째 
//object_tab.js 

function Table(param){
    this.members = param; // 만들어진 멤버 객체의 속성에 담긴 param
    
    this.addMember = function(member){ // 속성에 할당되어진 함수 
    
        // 멤버 추가하기
       this.members.push(member);

    }

    this.showList = function(){
        // 테이블 태그 생성하기 
        let str = '<table border=1>';
        this.members.forEach(member => {
            str += '<tr>';
            for(let prop in member){
                str += `<td>${member[prop]}</td>`;
            }
            str += '</tr>';
       
        })
        str += '</table>';
        return str;
    }
}

let members = [
    {id : 'user1', name: '백제니', age:20}, 
    {id : 'user2', name: '노지수', age:22}, 
    {id : 'user3', name: '김리사', age:25}
]


let t1 = new Table(members);
t1.addMember({id: 'user5', name: '이로제', age: 27});

//let str = t1.showList();
document.write(t1.showList());

