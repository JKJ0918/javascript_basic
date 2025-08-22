// 실무에서 자주 쓰이는 자바스크립트 배열 함수 6 가지
// 1. find()
const fruits =[
    {name: '🍎', price: 300},
    {name: '🍉', price: 700},
    {name: '🍇', price: 500},
    {name: '🍊', price: 1000},   
]

const item = fruits.find((fruits, index) => {
    if(fruits.price === 500 && index === 2){
        return true;
    }
    return false;
});

console.log(item);

// 2. findIndex() 해당 요소의 index값을 출력해 준다.
const item2 = fruits.findIndex((fruits, index) => {
    if(fruits.price === 500 ){
        return true;
    }
    return false;
});
console.log(`인덱스 값은 ${item2} 입니다.`); // 조건을 만족하는 요소가 없으면 -1 출력

// 3. some()
// 배열안에서 특정 조건을 만족하는 요소가 하나라도 있는지 확인

const doesExist = fruits.some((fruit) => {
    if(fruit.price > 500){
        return true;
    }
    return false;
});

console.log(doesExist); // 출력 true or false

// 4. every()
// 모든 요소들이 특정 조건을 만족하고 있는지.
const isOver = fruits.every((fruit) => {
    if(fruit.price > 100){
        return true;
    }
    return false;
});

console.log(isOver);

// 5. filter()
// 특정 조건을 만족하는 것만 골라 새로운 배열로 만듬
const cheapFruits = fruits.filter((fruit) => {
    if(fruit.price <= 500){
        return true;  
    }
    return false;

});

console.log(cheapFruits); // *fruits 원본 배열은 건드리지 않는다. 기존 배열은 유지됨

// 6. map()
// 원본 배열의 요소들을 다른 형태로 변환해서 새로운 배열에 담아 줄 수 있음
const priceTags = fruits.map((fruit) => {
    return `${fruit.name}: ${fruit.price}원`;
});

console.log(priceTags); // 원본배열을 건드리지 않고, 새로운배열을 만든다.