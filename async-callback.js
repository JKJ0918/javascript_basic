// 예제 1
/*
function getData(callback) {
    setTimeout(() => {
        console.log('서버로 부터 데이터를 받아왔습니다.');
        callback({ name : '후처리 홍길동'})
    }, 2200);
}


// 참고
// function handleData(data) {
//     console.log(data.name);
// }

getData((data) => {
    console.log(data.name);
});
*/

// 쇼핑몰 예제

// 1. 로그인
function login(username, callback){ // username -> 문자열, callback -> 함수
// 참고
// const username = '홍길동' 을 하면, 
// login('홍길동', (username) => {   // 이부분에서 '홍길동' 을 대체해줌
    setTimeout(() => {
        callback(username);
    }, 1000);
}


// 2. 장바구니 넣기
function addToCart(product, callback){
    setTimeout(() => {
        callback(product);
    }, 1000);
}

// 3. 결제하기
function makePayment(username, cardNumber, product, callback){
    setTimeout(() => {
        callback(username, cardNumber, product);
    }, 1000);
}

// 실행
login('홍길동', (username) => {
    console.log(`${username}님 안녕하세요.`);
    addToCart('당근', (product) => {
        console.log(`${product}를 장바구니에 담았습니다.`);
        makePayment(username, '2134546487982100', product, (username, cardNumber, item) => {
            console.log(`${username}님께서 ${cardNumber.slice(0, 6)}...로 ${product}를 구매하였습니다.`)
        })
    })
})
// 콜백에 콜백을 더하면, 코드가 무수히 복잡해 질 수 있어 다음시간에 Promise에 대해 배워본다.