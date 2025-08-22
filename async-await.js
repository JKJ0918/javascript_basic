// Async & Await

// Async : 비동기 함수로 만들어줌, promise로 감싸 반환함
/*
function networkRequest(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('데이터를 받아왔습니다.');
            resolve('서버 1');
        }, 2000)
    });
}

async function getUser() { // await 은 async 함수 내부에서만 사용가능
    await networkRequest(); // await : Promise가 완료될 때까지 기다려주는 역할
    await networkRequest(); // async - await 조합으로 이런식으로 비동기 작업을 순차적으로 진행 가능
    return '받아온 정보: 김덕배';
}

const user = getUser();
user.then((name) => console.log(name));

///////

function networkRequest(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 2000)
    });
}

async function getUser() { 
    throw new Error('이름에 에러 발생')
    await networkRequest(); 
    return '김덕배';
}

async function getTodo() { 
    await networkRequest(); 
    return ['게임하기', '달리기'];
}

async function getData(){
    let user
    try {
        const user = await getUser();
    } catch (error) {
        console.log(error.message);
        user = "익명"
    }
    
    const todo = await getTodo();
    console.log(`${user}님 ${todo}를(을) 하세요.`)
}

getData();
*/
// Fetch API : 특정 URL 네트워크 요청을 보내는 웹 API
async function fetchData(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
}

fetchData();