// 숫자가 값이 들어 있을 때 '배열', json 오브젝트가 들어 있어서 목록처럼 다룰 때 '리스트'

const studentList =[
    { name : '1', age : 20, score : 85},
    { name : '2', age : 21, score : 23},
    { name : '3', age : 24, score : 99}
];

const studentTemp = {name : '4', age : 24, score : 50};
studentList.push(studentTemp);

console.log(studentList);

studentList.pop();
console.log(studentList);