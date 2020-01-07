const sumNumber = (src, des, accumulator) =>{
    if(src == des) return accumulator;
    /*
     * 왜 아래 함수 재귀호출 부분에 return 을 빼면 undefined가 나오고, 써주면 생각했던대로 나오는지..?
     * return을 뺐을 경우, src가 des랑 같아질 때 총 합을 리턴 하는데, (최종 함수에서 return을 한다는 의미)
     * 받아줄 값이 없어서 값이 붕 떠버린채로 함수가 종료되기 때문에
     * return을 써줌으로써 최종 값이 현재 함수에서 이전 함수로 return...return... return 해서 처음 호출 한 곳으로 값이 전달(?) 되어야 한다.
     */
    return sumNumber(src + 1, des, src + accumulator);
}

console.log(sumNumber(1, 10, 0));