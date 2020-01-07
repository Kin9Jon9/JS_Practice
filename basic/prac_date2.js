const getYymmdd = (date) => {
    const yyyy = date.getFullYear();
    /*
    *
    *백틱 문자열을 애용하자.
    *`0${date.getMonth()+1}`
    * date.getMonth() 의 결과값이 7 이라면
    * 중괄호 안에 값은 8이 되고
    * 백틱"문자열"이므로 08이 최종 결과값이 된다.
    */
    const mm = date.getMonth() < 9 ? `0${date.getMonth()+1}` : (date.getMonth() + 1);
    const dd = date.getDate() < 10 ? `0${date.getDate()}` : (date.getDate());

    return `${yyyy}-${mm}-${dd}`
};

const yymmdd = getYymmdd(new Date());
const yymmdd191228 = getYymmdd(new Date(2017, 9 - 1, 9));
console.log(yymmdd);
console.log(yymmdd191228);

