const students = [
    {name : 'MinJong', age : 23, score : 85},
    {name : 'Doa', age : 23, score : 95},
    {name : 'Jong', age : 24, score : 76}
]

function getDegree(score){
    if(score >= 90){
        return 'A';
    }else if(score >= 80){
        return 'B';
    }else if(score >= 60){
        return 'C';
    }
    return 'F';
}

//백틱 문자열에서 함수도 호출 할 수 있어!
students.forEach((student) =>{
    const result = `name : ${student.name} age: ${student.age} score: ${getDegree(student.score)}`
    console.log(result);
})
