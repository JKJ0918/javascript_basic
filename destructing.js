// 구조분해 할당
// 배열이나 객체를 분해해서 각각의 값을 개별적인 변수에 담는 표현식

// 배열 구조 분해 할당
const animals = ["강아지", "고양이", "돼지", "소"];
// const [dog, , pig] = animals; // 강아지, 돼지로 출력
// const [dog, cat, pig, cow = "소"] = animals; // cow에 기본값을 넣어줘서 사용할 수 있음, 
// const [dog, cat, pig ="호랑이", cow = "소"] = animals; // pig는 기본값이 있어 할당해도 돼지로나옴
const [dog, cat, ... rest] = animals; // 배열 생성
// ...(스프레드 연산자) : 

console.log(dog, cat, rest); // ['돼지', '소']

// TIP 1 - 변수 값 교환 하기
let a = 1;
let b = 2;

[a, b] = [b, a]; // b-> a, a->b 에 할당됨
console.log(a, b)

// TIP 2 - 함수에서 변환된 배열을 구조분해 할당 하기
function getAnimals() {
    return ["코끼리", "호랑이", "사슴"];
}

const [elephant, tiger] = getAnimals();

console.log(elephant, tiger);

// 객체 구조 분해 할당
const animals2 = {
    dog2: "멍멍이",
    cat2: "야옹이",
    duck2: "꽥꽥이",
};
/*
const dog2 = "강아지";
const {cat2, dog2: dogName} = animals2;
console.log(dog2, cat2); // 강아지 야옹이
console.log(dogName); // 멍멍이

const {cat2, dog2 ="멍멍", cow2 ="소"} = animals2;
console.log(dog2, cat2); // 멍멍이, 야옹이
console.log(cow2); // 소
*/

const {dog2, ...rest2} = animals2;
console.log(dog2, rest);

// ** 반복문에서 구조 분해 할당하기
const users = [
    {name: "철수", age: 25},
    {name: "영희", age: 30},
]

for (const {name} of users){
    console.log(name); // 철수 (띄고) 영희 
}

// ** 함수의 매개변수로 전달된 객체를 구조 분해 할당하기
const user = { name: "James", age: 22};

function printUser({name, age}) {
    console.log(`${name}님은 ${age}살 이에요.`);
}

printUser(user); // James님은 22살 이에요.