const scores = [85,95,76];

const sum = (list, len, total) =>{
    if(len == list.length) return total;
    return sum(list, len+1, total+list[len])
} 

console.log('sum : ', sum(scores, 0, 0));

const avg = (list, len,total) =>{
    if(len == list.length) return total / len;
    return avg(list, len+1, total+list[len]);
}

console.log('avg : ', avg(scores, 0, 0));