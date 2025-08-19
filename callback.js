// callback-function : 다른 함수의 인자로 전달되는 함수

/*
function main(x){
    console.log("준비 작업 .... ")
    x(); // sayHi 함수를 호출
    console.log("정리 작업 .... ")
}

function sayHi(){
    console.log("hello");
}

// main(sayHi()) 일 경우 return 값을 반환 하거나, return 값이 없을 경우 undefine 발생
main(sayHi); 
*/

function greetToUser(greet){ // 여기서 greet은 매개 변수 (greetInKorean, greetInEnglish)
    const name = '홍길동';
    greet(name); // 전달된 함수가 실행 되는 곳
}

function greetInKorean(name){
    console.log(name+'님, 안녕하세요');
}

function greetInEnglish(name){
    console.log('Hello, ' + name);
}

greetToUser(greetInEnglish) 
// greetToUser(greetInKorean) -> name+'님, 안녕하세요'
// greetToUser(greetInEnglish) -> 'Hello, ' + name