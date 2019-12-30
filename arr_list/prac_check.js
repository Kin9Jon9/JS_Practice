const destination = [
    '런던',
    '로마',
    '파리',
    '암스테르담'
];

const searchDestination = '파리';

for (let i = 0 ; i < destination.length ; i++){
    if(searchDestination == destination[i]){
        console.log(searchDestination, '입니다');
        break;
    }
}

