// 8월 30일
//object.js : 1교시 첫번째  

// 객체 : {name : "홍길동", age : 20, showAge: function(){...}}

class Student{  // 객체 생성
    // 속성(=필드) 정의 불가. this 키워드 이용. 메서드만 쓸 수 있음
    
    //생성자 
    constructor(sno, name){ 
        this.sno = sno;  //s1이 가지고 있는 sno의 값으로 sno을 담겠다.
        this.name = name; //this 지시자 
    }
    setGrade(grade){
        this.grade = grade;
    }

    setInfo(){
        return `이름은 ${this.name}이고 학번은 ${this.sno}입니다.`; // this.name ~ 인스턴스의 속성을 이용한다
    }
}

let s1 = new Student('s11', '홍길동');
console.log(s1.sno);
s1.setGrade(3);
console.log(s1.grade);

let s2 = new Student('s12', '김민식');
s2.setGrade(2);

const students = [s1, s2, new Student('s13', '최홍식')];
students[2].setGrade(1); //인덱스 값은 0, 1, 2... 


s1.phone = '010-1234-5678' // 각각의 객체에 변수를 추가하거나 제거할 수 있음.
delete s1.phone;            // 속성(java = 필드) 삭제.

students.forEach(student => console.log(`이름 : ${student.name}, 학번: ${student.phone}`)); // 객체에서 속성 뽑아서 출력 

//students.forEach(student => console.log(`이름 : ${student.name}`); // 객체에서 이름만 뽑음

students.forEach(student => console.log(student.setInfo()));