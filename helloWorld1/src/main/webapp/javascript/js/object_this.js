// 8월 30일 : 3교시 첫번째 
// object_this p112 ~113 예제 설명 비교하기

let obj = {}


//act : ojb의 메서드 
obj.act = function(){
    this.value = 'defaul value';
    
    function innerAct(){
        this.value = 'innerAct value';
        console.log('innerAct : ' + this.value);
    }
    function innerReact(caller){
        caller.value = 'innerReact value';
        console.log('this.value : ' + this.value);
        console.log('caller.value : ' + caller.value);
    }

    innerAct();
    console.log('obj 객체의 this.value : ' + this.value);

    innerReact(this);
    console.log('obj 객체의 this.value : ' + this.value);
}
obj.act();

// 이벤트.
let btn = document.createElement('button'); // <button></button>과 동일.
btn.innerHTML = '클릭;'                     // <button>innerHTML</button>
btn.onclick = function(){
    console.log(this);
}

document.querySelector('body').append(btn); // body 태그의 하위요소. <script></script> 내용이 body에 위치해야 정상 실행됨
console.log(btn);