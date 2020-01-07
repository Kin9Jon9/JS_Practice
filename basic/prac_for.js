const studentList = [
    {name : '1', age : 23, score : 100 },
    {name : '2', age : 24, score : 90},
    {name : '3', age : 25, score : 85},
    {name : '4', age : 26, score : 80}
]

let resultStudent;

for(let i = 0 ; i < studentList.length ; i++){
    if(studentList[i].name === '3'){
        resultStudent = studentList[i];
        break;
    }
    console.log(studentList[i].name, '은 3이 아닙니다.')
    console.log(`${studentList[i].name} 은 3이 아닙니다.`)
    console.log(studentList[i].name+' 은 3이 아닙니다.')
}

console.log('resultStudent:', resultStudent);

//어떤 object 를 출력 할떄는 백틱문자열 또는 문자열 연산을 통해서 출력하지말고 ,로 구분하여 출력
console.log(`resultStudent : ${resultStudent}`);
console.log('resultStudent : '+ resultStudent)