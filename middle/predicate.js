//predicate는 함수이지만 true 또는 false 를 리턴하는 함수를 프리디케이트라고 부른다.

const isApple = (fruit) => {
    if(fruit === 'apple') return true;
    return false;
}

console.log(isApple('apple'));