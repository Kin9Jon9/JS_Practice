// 합성함수 (그냥 함수 인자값으로 함수 넣어서 함수의 리턴값이 인자로 대치 되는 것...)
const multiple5 = x => x * 5;
const add10 = x => x + 10;

const plus = (a, b) => a + b;
const minus = (a, b) => a - b;

console.log(multiple5(add10(20)))
console.log(minus(plus(10,20), 40));