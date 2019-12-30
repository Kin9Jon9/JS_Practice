const part1 = ['a', 'b'];
const part2 = ['c', 'd'];
const part3 = ['e', 'f'];

//문자열 합치기 , 콤마로 구분해 계속 연결하는 방식으로 사용 가능.
const team1 = part1.concat(part2);
const team2 = part1.concat(part2, part3);

console.log(team1);
console.log(team2);
