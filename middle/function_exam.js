const students = [
    {name : '1', age : 31, score : 85, department : 'development'},
    {name : '2', age : 31, score : 95, department : 'design'},
    {name : '3', age : 35, score : 76, department : 'development'}
]

//80점 이상인 학생 필터링 하기
// 학생들 중 80점 이상인 학생만 filter
// 위에서 얻은 객체배열에서 score 값만 map을 통해서 가져옴
// reduce를 통해서 합을 구함
const upper80StudentsSum = students.filter(n => n.score > 80).map(n=> n.score).reduce( (a, b) => (a+b) , 0);

console.log('sum :' ,upper80StudentsSum);

//개발부서 나이의 합계
const sumAge = students.filter(n => n.department === 'development').map(n => n.age).reduce((a,b) => a+b);
console.log('sum :', sumAge);

//21 이상 30 미만 점수 평균 구하기

/*리듀서 함수는 네 개의 인자를 가집니다.
* 1. 누산기accumulator (acc)
* 2. 현재 값 (cur)
* 3. 현재 인덱스 (idx)
* 4. 원본 배열 (src)
* reduce((a,b,index, array)=> (a+b)/array.index, 0);
*/