const plus = (a,b) =>{
    return a+b;
}

function minus(a,b){
    return a-b;
}

let p = plus;

console.log(`typeof plus ${typeof plus}`);
console.log(`typeof p ${typeof p}`);
console.log(`10 + 20 = ${p(10, 20)}`);

// 함수를 파라미터로 받는 함수

function calculate(a,b,func){
    return func(a,b);
}

//함수를 넘겨서 계산
console.log(calculate(10,20,minus));
console.log(calculate(10,20, plus));