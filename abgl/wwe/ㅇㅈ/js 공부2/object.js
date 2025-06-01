// //객체는 키와 값으로 이루워져있다 객체가 가지고 있는 값을 프로퍼티라고한다 프로퍼티가 함수인경우 객체가 가지고 있는 함수를 메서드 라고 한다
'use strict';
// //객체 리터럴 문법
// const person = {
//     name: '김서준',
//     age: 18
// };
// //객체 생성자 문법
// person.jab = '학생';
// console.log(person) 
// const ppap = new Object();
// ppap.name = '김서준';
// ppap.age = 16;
// console.log(ppap)
// console.log(ppap.name)
// const person = {
//     name: ['Bob', 'Smith'],
//     age: 32,
//     gender: 'male',
//     interests: ['music', 'health'],
//     hello: function() {
//         alert('Hello!');
// },
// greeting: function() {
//     alert('Hi!');
// },
// hobby: {
//     name: 'programing',
//     alert: function() {
//         alert('programing');
//     }
// },
// };
// console.log(person.name[0])
// console.log(person.name[1])
// // person.hello()
// // console.log(person.hobby.name)
// // console.log(person.hobby.alert())
// console.log(person['name'][0])
// console.log(person['name'][1])
// console.log(person['hobby']['name'])
// person['name'][0] = '값변경'
// delete person.name
// delete person['age']
// console.log(person)

// function printPerson(name, age, hobby) {
//     console.log(`제 이름은 ${adhd.name}이며, 나이는 ${adhd.age}살 입니다.그리고 취미는 ${adhd.hobby} 입니다.`);
// }
// const adhd = {
//     name: '김서준',
//     age: 17,
//     hobby: 'game'
// }

// const {name, age} = adhd;
// console.log('name:',name);
// console.log('age:',age);

// function printPerson({ name, age, hobby }) {
//     console.log(`제 이름은 ${name}이며, 나이는 ${age}살 입니다.그리고 취미는 ${hobby} 입니다.`);
// }

// printPerson(adhd);


// function createPerson(name, age, hobby){ //팩토리 함수
//     return{
//         name: name,
//         age: age,
//         hobby: hobby
//     }
// }
// const person1 = createPerson('김서준', 1, 'ㅁㅂㅈㅎ')
// const person2 = createPerson('김서준142', 1, 'ㅁㅂ124ㅈㅎ')
// const person3 = createPerson('김서준ㅁㄴㄹㅇ', 1, 'ㅁㅂㅈ1ㅎ')
// const person4 = createPerson('김서준ㅁㄴㅇㄹ', 1, 'ㅁㅂㅈ1241ㅎ')
// printPerson(person1)
// printPerson(person2)
// printPerson(person3)
// printPerson(person4)
//ES5
// function Person(name, age, hobby){
//     this.name = name;
//     this.age = age;
//     this.hobby = hobby;
// }

// ES6 클래스
// class Person{
//     constructor(name, age, hobby){
//         this.name = name;
//         this.age = age;
//         this.hobby = hobby;
//     }
// }
// const person1 = new Person('김서준1', 1, 'ㅁㄵㅎㅇㅂㅈㅎ')
// printPerson(person1)

let username = '김서준';
console.log(username);
changeName(username)
console.log(username);

function changeName(name){
    name = '김서윤';
}

let person = {
    name: '김서준',
    age: 16
}
console.log(person)
function changePersonName(person){
    person.name = '김석윤'; 
    person.age = 1557;
    
}
changePersonName(person)
console.log(person)

let obj = {
	name: '김서준',
	age: 20
};
let person1 = {
	...obj,
	hobby: '게임'
};
console.log('person1: ', person1);


let person4 = {
    name: '김서준',
    age: 18,
};
let person2 = {...person4 };
person2.name = '야잔';
console.log(person2)
console.log(person4)
//복사
let person3 = Object.assign({},person4);
person3.name = '둑스';
console.log(person3)
console.log(person4)

//for in 으로 키 항목을 반복하여 반환 가능함

//아래의 방식으로 키가 있는지 없는지 알 수 있음
if('name' in person4){
    console.log('존재합니다')
}else{
    console.log('없다')
}
if('name2' in person4){
    console.log('존재합니다')
}else{
    console.log('없다')
}

console.log(person4.hasOwnProperty('name'));
console.log(Object.hasOwn(person4, 'name'));

if (person4.name) {
	console.log('이름이 정의되어 있습니다.');
}