// 8월 30일
// object_clone : 4교시 첫번째

let originObj = {
    sname : 'Park',
    age : 10,
    changeAge : function(){
        this.age++;
    }
}

let cloneObj = originObj; //originObj 참조값을 cloneObj 담음. 객체 복사X 참조 주소만 복사. 
cloneObj.sname = 'Choi';
console.log(originObj.sname);

originObj.changeAge();
console.log('originObj.age: ' + originObj.age);
console.log('cloneObj.age: ' +cloneObj.age); // originObj.age == cloneObj.age (같은 주소값을 가리키므로)




//객체 복사 : assin () => 빈 객체 {}와 원본 객체를 파라메터로 넘기면, 복사된 새 객체가 반환.
let obj2 = new Object();
let copyObj = Object.assign({}, originObj); // 반환된 객체를 새 변수에 담으면 원본 객체의 모든 속성이 복사된 새객채 사용 가능


copyObj.sname = 'Hong';         //복사된 새객채인 obj2의 sname이 됨
console.log(originObj.sname);   // originObj.sname은 영향 없음. 그대로 Choi




let newObj = {
    sname : 'Kim',
    phone : '010-1234-5678',
    age : 10 
}
let dupObj = Object.assign(newObj, originObj);
console.log(dupObj); 

// 객체의 속성을 지정.
let s1 = { 
    sname : 'Hong'
}
s1.age = 10; //delete s1.age; 
s1['phone'] = '010-4468-8899';
s1.friends = [{name : '김리사', phone : '010-5656-9944', age : 20},
              {name : '백제니', phone : '010-1216-7766', habbies : ['책읽기', '수영']}
]

console.log(s1.friends[0].name);
console.log(s1.friends[1].habbies[0]);

class Student{
    constructor(sname, age){
        this.sname =sname;
        this.age = age;
    }

}
let s2 = new Student('홍길동', 20);
Object.defineProperty(s2, 'score', { //'score' : 속성의 이름
    set : function(score){
        if(score > 100){
            throw '잘못된 값을 입력했습니다. (100보다 작은 값 필요)'
        }else if(score<0){
            throw '잘못된 값을 입력했습니다. (0보다 큰 값 필요)'
        } else {
            this._score = score; // this._score 쓰는 이유 ? 속성 이름 감추기. 불필요하게 call 반복 막기 위해서.

        }
    }, 
    get : function(){
        return this._score;
    }
});

s2.score = 80;
console.log('점수는 ' + s2.score)

let s3 = new Student('이로제', 22);


 // .prototype : 원형인 Student 객체에 정보를 추가 해서 보겠다.
Student.prototype.showInfo = function(){
    return `이름은 ${this.sname}이고 나이는 ${this.age} 입니다.`;
}

console.log(s2.showInfo());

console.log(s3.showInfo());