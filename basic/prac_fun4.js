/*
 * 화살표 함수 는 4가지 방법으로 사용할 수 있음.
 * 1. 매개변수 없고 기능 한가지 일 때 대괄호 묶지 않고 사용하기
 * 2. 매개변수 없고 리턴 기능만 존재할 때 역시 대괄호 묶지 않고, return 키워드를 빼고 사용하기
 * 3. 하나의 매개변수, 기능 하나일 때 매개변수 묶지 않고 기능 역시 대괄호로 묶지 않고 사용
 * 4. 매개변수 2개 이상일 때 괄호로 묶고 하나의 기능만 존재할 때 그 기능이 리턴 값이라면 return을 생략할 수 있고 대괄호를 사용하지 않기
 */


const printHello = () => console.log('Hello');
const printHello2 = () => 'Hello2';
const printMessage = message => console.log(message);
const plus = (a,b) => a+b;
const minus = (a,b) => a-b;

const sumAndPrint = (a, b) =>{
    const result = a + b;

    return `결과는 ${result} 입니다.`;
}

const result = sumAndPrint(10, 20);

console.log(result);

