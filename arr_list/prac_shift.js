const destination = ['런던', '파리', '로마'];

console.log(destination);

// shift(); (배열의 첫 번째 값 제거하면서 해당 값은 변수로 반환 됨.)
console.log(destination.shift());
console.log(destination);

//unshift(); (인자를 첫 번째 배열에 추가)
destination.unshift('뉴욕');
console.log(destination);