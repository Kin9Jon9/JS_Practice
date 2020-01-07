//1초에 1번씩 hello 출력하기

const playInterval = setInterval(() => console.log('Hello'), 1000);

//clearInterval 은 setInterval 함수를 종료하는 함수야~
setTimeout(() => clearInterval(playInterval), 5000);