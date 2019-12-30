const numbers = [3,6,2,8,1];
const strings = [
    'timeoutRemaining',
    'flagrantFouls',
    'defensive3Seconds',
    'jumpShots',
    'dunks',
    'layups'
];

const sortedNumbers = numbers.sort();
const sortedStrings = strings.sort();

console.log(sortedNumbers);
console.log(sortedNumbers.reverse())
console.log(sortedStrings);
console.log(sortedStrings.reverse())

const studentList = [
    {name : 'doa', age : 23, math : 80 , english : 100},
    {name : 'minjong', age : 23, math : 65, english : 90},
    {name : 'minju', age : 21, math : 90, english : 95},
    {name : 'yuna', age : 21, math : 54, english : 67},
    {name : 'jisu', age : 25, math : 100, english : 100},
    {name : 'kiri', age : 22, math : 50, english : 20}
]

// 1, -1 은 오름차순 ; -1, 1 은 내림차순
studentList.sort((beforeStudent, nextStudent) => {
    if(beforeStudent.age > nextStudent.age) return 1;
    else if(beforeStudent.age < nextStudent.age) return -1;
    //나이가 같다면 수학점수로 정렬
    else if(beforeStudent.math > nextStudent.math) return -1;
    else if(beforeStudent.math < nextStudent.math) return 1;
    return 0;
})

console.log(studentList);