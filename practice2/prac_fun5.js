const studentList = [
    {name : '1', age : 23, score : 100, math : 43},
    {name : '2', age : 24, score : 95, math : 86},
    {name : '3', age : 25, score : 90, math : 93}
];

const plus = (a,b) => a+b;
studentList.forEach( student => console.log(`student name : ${student.name} , total : ${plus(student.score, student.math)}`))


console.log('- - - -  - - - - - - - - --');
