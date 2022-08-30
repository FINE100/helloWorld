//8월 30일 
//object_fnc : 1교시 세번째 

// 생성자 함수 (Constructor Function) ; 객체 생성 가능

function Student(sno, sname){
    this.sno = sno;
    this.sname = sname;
    this.showInfo = function(){
        return `학번은 ${this.sno}, 이름은 ${this.sname}입니다.`;
    }
}

let s1 = new Student('s11', '홍길동'); // 함수 호출.
console.log(`학번은 ${s1.sno}`);
console.log(s1.showInfo());