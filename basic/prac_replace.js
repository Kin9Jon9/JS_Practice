
// replace

const greeting = 'hello';
const dateString = '2019-12-30T11:00:00';
const smallBracket = '()';

const replacedGreeting = greeting.replace('el', '');
const replaceDateString = dateString.replace('T', ' ');
const middleBracket = smallBracket.replace('(', '{').replace(')', '}');

console.log(replacedGreeting);
console.log(replaceDateString);
console.log(middleBracket);
