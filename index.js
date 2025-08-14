/*
function main() {
    console.log("hello JavaScript");
}

// 함수 표현식
// 호이스팅이 되지 않는다.
const main = function() {
    console.log("hello JavaScript");
}

// 화살표 함수
const main = () => {
    console.log("ArrowFunction");
}

main();

// 화살표 함수 예제
function add(a, b) {
    return a+b
}

const add = (a,b) =>{
    return a+b
}

// return 한 줄인 경우 생략 가능
const add = (a, b) => a + b 

// const main = () => console.log("one Line")

add()

// 화살표함수 가변인자 처리
function main() {
    console.log(arguments) // arguments를 암묵적으로 전달 받음 arguments[0] = 1 / [1] = 2 ...
}

main(1,2,3)

*/

const main = (...args) => { // ... 나머지 매개변수구문, args 말고 아무거나 써도됨
    console.log(args)
}
main(1,2,3)

