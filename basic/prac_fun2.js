function printMessage(message){
    console.log(message);
}

const printWelcome = function (){
    console.log('Welcome');
}

printMessage('Bye');
printWelcome();

console.log(`typeof printMessage : ${typeof printMessage}`);
console.log(`typeof printWelcome : ${typeof printWelcome}`);

const pm = printMessage;
pm('Good Morning');
console.log(`typeof pm : ${typeof pm}`);