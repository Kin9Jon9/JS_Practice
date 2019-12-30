const today = new Date();
const date1 = new Date(2019, 12 - 1, 28);
const date2 = new Date(2019, 11, 28);
const date3 = new Date(2019, 11, 28, 18);
const date4 = new Date(2019, 11, 28, 18, 20);
const date5 = new Date(2019, 11, 28, 18, 20, 30);

console.log('date : ', date5.toLocaleString());
console.log('LocaleDateString : ', date5.toLocaleDateString());
console.log('LocaleTimeString : ', date5.toLocaleTimeString());

console.log('year : ', date5.getFullYear());
console.log('month', date5.getMonth() + 1);
console.log('date : ', date5.getDate());
console.log('hours : ', date5.getHours());
console.log('minutes : ', date5.getMinutes());
console.log('seconds : ', date5.getSeconds());