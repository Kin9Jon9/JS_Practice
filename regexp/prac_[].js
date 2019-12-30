const string = '(<h1>:::특별가 - 99,000원:::</h1>)';

/* [] 대괄호 안쪽에 넣은 문자들을 모두 찾아서 바꿔준다.
 * /[()/\-]/g 이 정규표현식은 (,),/,-을 모두 찾아준다. \-는 '-' 이 정규표현식에서 연산자이기 때문에 문자처럼 취급해주기 위해서 \를 붙였다.
 */
const replacedBracket = string.replace(/[()]/g, '');
const replacedBracketOrSlashHyphenComma = string.replace(/[()/\-,]/g, '');

console.log('바꾸기 전 ----> ', string);
console.log('() 없애기 ----> ', replacedBracket);
console.log('/-없애기 -----> ', replacedBracketOrSlashHyphenComma);
