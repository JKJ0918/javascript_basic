// Promise를 사용하는 Web API -fetch API-
// fetch API : 특정 URL 네트워크 요청을 보내는 비동기 함수,
// 서버로 부터 데이터를 받아오는 일을 주로 함
// https://jsonplaceholder.typicode.com/users
/*
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log('Error Error');
    })
    .finally(() => {
        console.log("final - 마무리 작업")
    })
  */

// Promise를 이용한 쇼핑몰 예제

// 1. 로그인
function login(username){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(username){
                resolve(username);
            } else {
                reject(new Error("아이디를 입력하세요."))
            }

        }, 1000);
    })
}


// 2. 장바구니 넣기
function addToCart(product){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(product){
                resolve(product);
            } else {
                reject(new Error("장바구니에 상품이 없습니다."));
            }
        }, 1000);
    })
}

// 3. 결제하기
function makePayment(cardNumber, product){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(cardNumber.length !== 16) {
                reject(new Error("잘못된 카드 번호 입니다."));
                return;
            }

            if(!product){
                reject(new Error("결제할 상품을 넣어주세요."));
                return;
            }
            resolve({cardNumber, product});
        }, 1000);
    });
}

/*
login('') //홍길동, 김철수, 이영희
    .catch(() => {
        return '익명'
    })
    .then((username) => {
        console.log(`${username}님 환영 합니다.`);
        return addToCart(``);
    })
    .catch(() => {
        return '고구마';
    })
    .then((product) => {
        console.log(`${product}를 장바구니에 담았습니다.`);
        return makePayment(`2134546487982100`, product);
    })
    .then(({cardNumber, product}) => {
        console.log(`${cardNumber.slice(0, 6)}...카드로 ${product} 결제가 완료 되었습니다.`);
    })
    .catch((error) => {
        console.log(error.message);
    })
*/
// 코드 간결화
login('') //홍길동, 김철수, 이영희
    .catch(() => '익명')
    .then((username) => addToCart(``))
    .catch(() => '고구마')
    .then((product) => makePayment(`2134546487982100`, product))
    .then(({cardNumber, product}) => console.log(`${cardNumber.slice(0, 6)}...카드로 ${product} 결제가 완료 되었습니다.`))
    .catch((error) => console.log(error.message))
