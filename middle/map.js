// 배열에 있는 모든 요소에 map의 파라미터로 받은 함수를 "적용"시킨 배열을 리턴함.

const list = [1,2,3];

const multipledList = list.map(n => n * 10);
multipledList.forEach(i => console.log(i));