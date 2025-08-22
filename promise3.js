// Promise Static 함수
// Promise.all, Promise.any, Promise.race, Promise.allSettled


function getName() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve('김법사');
            reject(new Error('에러: 이름이 없어요.'));
        }, 1000);
    })
}

function getTodo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve('밥먹기');
            reject(new Error('에러: 할일이 없어요.'));
        }, 500);
    })
}

/*
// Promise.all
// 병렬 실행
// 둘 중 하나라도 에러 발생시 바로 에러, 둘 다 실패시 첫번째 것만 출력
const promise = Promise.all({getName, getTodo});
promise
    .then((data) => {
        console.log(data);
    })
    .catch(() => {
        console.log(error);
    });

// Promise.allSettled()
// 모든 promise가 끝날 때 까지 기다려줌
const promise = Promise.allSettled([getName(), getTodo()]);
promise.then((data) => {
    console.log(data);
});

// Promise.any()
// 가장 먼지 resolve 되는 것을 출력
// 모두 실패 할 경우에만, 실패를 출력 -> AggregateError: All promises were rejected
const promise = Promise.any([getName(), getTodo()]);
promise.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})

*/
// Promise.race()
// 이중에서 가장빨리 처리되는 값에 따라 결과가 달라짐, 가장빨리 성공 또는 가장빨리 실패한 값을 출력
const promise = Promise.race([getName(), getTodo()]);
promise
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });
