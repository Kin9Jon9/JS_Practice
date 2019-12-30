const text = 'hello my name is minjabcg';
const matched = text.match(/[a-l]{1,3}/g);


// /[a-l]{1,3}/g : 알파벳 a ~ l 까지 1개 이상 3개 이하의 문자열을 추출하는 정규표현식

console.log(matched);

