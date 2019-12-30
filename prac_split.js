
//split

const dateString = '2017-08-24 11:00:00'

const date = dateString.split(' ')[0];
const time = dateString.split(' ')[1];

console.log(`date : ${date}`);
console.log('time : ', time);

const result = 'abc'.split('b');
console.log('result : ', result);