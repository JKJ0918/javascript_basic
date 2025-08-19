// Promise 는 비동기 작업이 맞이할 성공 혹은 실패를 나타냄
// state -> 상태 result -> 결과물
// 상태 : Pending - undefined, Fullfilled - 결과값, Rejected - Error

// 예제 1

function getData(){

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = {name:'김민수'}; // 성공
            //const data = null; // 실패 
            if(data){
                console.log('(네트워크 요청 성공(가상 설정)');
                resolve(data);
            } else {
                reject(new Error('네트워크 오류(가상의 오류)'));
            }
        }, 1000);
    });

    return promise;

}


/*
const promise = getData();

promise.then((data)=> {
    console.log("완료!");
    console.log(data);
})
*/
// 간결식
// then(), catch(), finally()
getData().then((data) => {
    const name = data.name;
    console.log(`${name}님 안녕하세요.`);
}).catch((error) => {
    console.log("멋지게 에러처리를 했어요.")
}).finally(() => {
    // 비동기 작업이 성공하던 실패하던 실행
    console.log("마무리 작업");
})