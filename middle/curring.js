// 화살표 갯수만큼 인자가 들어와야함.
// 화살표 갯수보다 인자가 적을 경우 함수가 리턴 됌
const add = x => y => x + y;
const add10 = add(10);

console.log(add10(20));
console.log(add(10)(20));