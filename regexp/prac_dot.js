const string = '<h1>특별가 - </h1><h2>99,000원</h2>';
const result1 = string.replace(/<..>/g, '');
const result2 = string.replace(/<.../g, '');

// . 점 하나는 하나의 글자를 의미함. 시작은 /, 끝은 /g 로 묶어서 정규표현식이란 것을 알게 하자! (문자열로 < 또는 > 을 사용하려면 \ 을 넣어야함.)
// 점 n 개는 n개의 글자를 의미함.
console.log('<...> :', result1);
console.log('<... :', result2);

//정규표현식은 " / 정규표현식 /g " 이 자체를 따옴표로 묶지 않아도 됌.
console.log(string.replace(/특../g, ''))
