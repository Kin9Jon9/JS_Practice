const students= [
    {name : 'doa', age : 23, math : 80 , english : 100},
    {name : 'minjong', age : 23, math : 65, english : 90},
    {name : 'minju', age : 21, math : 90, english : 95},
    {name : 'yuna', age : 21, math : 54, english : 67},
    {name : 'jisu', age : 25, math : 100, english : 100},
    {name : 'kiri', age : 22, math : 50, english : 20}
];

const mathUpper80 = students.filter(student => student.math > 80);
const mathUpper80AndEnglishUpper70 = students.filter(student => student.math > 90 && student.english > 70);

console.log('mathUpper80 : ', mathUpper80);
console.log('mathUpper80AndEnglishUpper70 : ', mathUpper80AndEnglishUpper70);
