// for_test2.js
const arr = [];
//arr[arr.lenth] = 10;

arr.push(10); // 값 입력
arr.push(20); // 값 입력

let obj = {
    sname : 'Hong',
    age : 20, 
    friends : ['Park'], //배열타입
    addFriend : function(friend){
        this.friends.push(friend);
    },
        //친구의 이름을 콘솔 출력
    friendList : function(){
        for(let i =0; i<obj.length;i++){

            console.log()
    
        }
    }

}

obj.addFriend('Kim');
obj.addFriend({name :'Hwang', phone : '010-1234-5678'}) ;

console.log(obj.friends[2]['phone']); // obj.friends[2] = obj.addFriend({name :'Hwang', phone : '010-1234-5678'}) ;
