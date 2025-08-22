// reduce()
// 배열 안에 있는 모든 요소들을 이용해서 하나의 값을 만들 때 사용.
const numbers = [1, 2, 3, 4];

// forEach
let total = 0;
numbers.forEach((number) =>{
    total = total + number;
});

console.log(total);

//reduce
const totalReduce = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue // 이 값이 다음 accumulator 들어감.
}, 0) // 0 은 accumulator 초기값

console.log(totalReduce);

// reduce - 가장 작은 값 가져오기
const numbers2 = [10, 4, 2, 8];

const samllest = numbers2.reduce((accumulator, currentValue) => {
    if(accumulator > currentValue){
        return currentValue;
    }
    return accumulator;
}) //  accummlator의 초기값을 지정해 주지 않으면, 첫번째 순번이 비고, 두번째 어큐뮬레이터에 첫번째 요소가 들어감

console.log(samllest);

// reduce 예제

const cart = [
    {
        name: '사과',
        price: 500,
    },
    {
        name: '바나나',
        price: 700,
    },
    {
        name: '포도',
        price: 300,
    },
];

// 이 과일들의 합계를 구하시오.
const cartTotal = cart.reduce((accumulator, fruit) => {
    return accumulator + fruit.price
}, 0)

console.log(cartTotal);