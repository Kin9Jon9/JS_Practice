const string = 'abcdefghijklmnopqrtuvwxyz';

/* substring(시작 인덱스, 전까지 인덱스);
 * abcd 를 추출하려면 0 1 2 3 이므로
 * substring(0, 4)로 추출한다.
 */

const substring1 = string.substring(0, 4);
const substring2 = string.substring(8, 11);
const substring3 = string.substring(24, 25);

console.log(`substring ${substring1}`);
console.log(`substring2 ${substring2}`);
console.log(`substring3 ${substring3}`);