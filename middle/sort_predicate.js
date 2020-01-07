/* predicate 함수를 sort에서 사용할 때 true인 경우 위치가 바뀜, false면 바뀌지 않음.
 *
 */

const numbers = [1,2,19,38,4,98,25];

const isFirstBiggerThenSecond = (first, second) => {
    if (first > second) return true;
    return false;
}

const sortedNumbers = numbers.sort(isFirstBiggerThenSecond);

console.log(sortedNumbers);