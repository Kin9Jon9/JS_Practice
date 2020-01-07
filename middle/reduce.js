// 누적 계산을 하는 함수
//a,b,c,d, 라는 값을 갖는 배열이 있다면 (a)+b => (a+b) + c => (a+b+c) + d 의 값을 리턴 함. 

const scores = [10, 20, 30, 40, 50];

const sum = scores.reduce((a, b) => (a + b));
// reduce의 두번째 인자는 초기값임. 현재 10을 초기값으로 지정함. 초기 값은 함수의 첫번째 호출에 첫번째 인수로 사용함.
const sumWithInitValue = scores.reduce((a, b) => (a + b), 10);

console.log('sum :', sum);
console.log('sumwithInitValue : ', sumWithInitValue);
