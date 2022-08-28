//basic.js

//object
let student = {}
student.id = 'st1';
student.name = '홍길동';
student['score'] = 80;

for(let prop in student){
    console.log(student[prop]);
}

// console.log(student);


//array
let numbers = [];
numbers[0] = 90;
numbers[1] = 80;
numbers[2] = 75;
numbers[3] = 85;

for(let num of numbers){
    console.log(num);
}

let students = [];
let stu1 = {
    sno: '1001',
    sName: '윈터',
    score : 90
}
let stu2 = {
    sno: '1002',
    sName: '카리나',
    score : 88
}
let stu3 = {
    sno: '1003',
    sName: '닝닝',
    score : 85
}
let stu4 = {
    sno: '1004',
    sName: '지젤',
    score : 95
}

// 배열 변수 값을 추가
students[0] = stu1;
students[1] = stu2;
students[2] = stu3;
students[3] = stu4;

//학생 이름...출력
let str = '<ul>';
for(let student of students){  // 여기까진 콘솔 출력
    console.log('학번 : ' +student.sno + ', 학생이름 : ' + student.sName +', 점수 : ' + student.score);
    str += '<li>' + '학번 : <b> ' + student.sno + '</b>, 학생이름 : ' + student.sName +', 점수 : ' + student.score + '</li>'
}
str += '</ul>'
document.write(str) //학생 이름... 화면 출력