'use strict'
// for(let i = 0; i<=5; i++){
//     console.log(i)
// }

// let fruits =[`사과`, `바나나`, `치킨`, `토마토`];

// for(let i = 0; i<fruits.length; i++){
//     console.log(fruits[i])
// }
let person = {
    name:`김서준`,
    age:18,
    jab: `학생`,
};
// let key = prompt(`어떤 값을 출력할까요? 키를 입력하세요`)
// console.log(person[key]); //키를 모를때는 [`키명`] 이런식으로 가능 //prompt를 사용해서 key를 입력받기도 가능
// let keys = Object.keys(person);
// for(let i = 0; i < keys.length; i++){
//     // console.log(keys[i]);
//     let key =keys[i];
//     console.log(person[key]);
// }

console.log(`-------------`);
for (let key in person){
    console.log(key);
    console.log(person[key]);
} //in 으로 객체에 있는 키 항목들을 반복적으로 반환함
console.log(`-------------`);
let fruits = [`사과`, `바나나`, `치킨`, `오렌지`, `포도`];
for(let fruit of fruits){
    console.log(fruit);
} //for of 배열에 있는걸 반복해서 하나씩 반환해줌
console.log(`-------------`);
