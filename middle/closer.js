function grandParent(g1,g2){
    const g3 = 3;
    return function parent(p1, p2){
        const p3 = 33;
        return function child(c1, c2){
            const c3 = 333;
            return g1+g2+g3+p1+p2+p3+c1+c2+c3;
        };
    };
}

/* 
 * parentFunction에 담긴건 'function : parent임을 알고 있다.
 * 이때 외부함수 (부모함수) 변수( 자유 변수 라고 함)에 접근할 수 있다.
*/
const parentFunction = grandParent(1,2);

/* 
 * parentFunction에 담긴 것이 parent이 므로 parent에 11, 22 라는 인자를 보내주고 리턴값으로 받아온것은
 * child 이므로 childFunction에는 child가 담겨있다.
 */
const childFunction = parentFunction(11,22);

/*
 * childFunction을 호출하게 되면 111,222를 인자로 child 함수를 호출하게 되고 클로저이므로 내부함수인 child에서
 * 자유변수(외부함수의 변수들)에 접근할 수 있게 되므로 
 * return g1+g2+g3+p1+p2+p3+c1+c2+c3; 값을 산출 할 수 있다.
 */
console.log(childFunction(111,222));
// 1 + 2 + 3 + 11 + 22 + 33 + 111 + 222 + 333 == 738

