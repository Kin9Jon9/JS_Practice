orderList = [
    {no : 1, productName : '티셔츠' , price : '30000'},
    {no : 2, productName : '청바지' , price : '40000'},
    {no : 3, productName : '신발', price : '60000.2'},
    {no : 4, productName : '안경', price : '50000.3'}
];

const concatenate = orderList[0].price + orderList[1].price;
const sum1 = parseInt(orderList[0].price, 10) + parseInt(orderList[1].price, 10);
const sumParseInt = parseInt(orderList[2].price, 10) + parseInt(orderList[3].price, 10);
const sumNumber = Number(orderList[2].price) + Number(orderList[3].price);

console.log(`orderList[0].price + orderList[1].price = ${concatenate}`);
console.log(`parseInt(orderList[0].price) + parseInt(orderList[1].price) = ${sum1}`);
console.log(`parseInt(orderList[2].price, 10) + parseInt(orderList[3].price, 10) = ${sumParseInt}`)
console.log(`Number(orderList[2].price) + Number(orderList[3].price) = ${sumNumber}`)

