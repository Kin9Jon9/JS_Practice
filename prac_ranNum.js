const randomNumber = Math.random();
const zeroToNine = Math.floor(Math.random() * 10, 10);
const twentyToThirty = Math.floor(Math.random() * ((30 - 20) + 1), 10) + 20;
const oneToTen = Math.floor(Math.random() * 10, 10) + 1;
const makeRandom = (Min, Max) => Math.floor(Math.random() * ((Max - Min) + 1 ), 10) + Min;

console.log(randomNumber);
console.log('zeroToNine : ', zeroToNine);
console.log('oneToTen : ', oneToTen);
console.log('twentyToThirty : ', twentyToThirty);

for(let i = 1; i < 10; i+=1){
    console.log('10 to 20 : ', makeRandom(10, 20));
}

