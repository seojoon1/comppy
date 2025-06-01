//함수 선언식 호이스팅 영향 O = 선언하기 전에 사용 가능
// function SayHello(){
//     console.log('hello')
//     console.log('digga')
// }

//함수 표현식 호이스팅 영향 x
// const SayHello = function(){
//     console.log('hello')
//     console.log('digga1')
// }
// SayHello()
// function sayHello(name, age){//(name, age) 파라미터
//     console.log(`안녕하세요 제 이름은 ${name}이고 나이는${age}살 입니다`)
// }
// sayHello('김서준',16)
// sayHello('김서준',79)

// function sum(num1, num2){
//     let result = num1 + num2;
//     return result;
// }
// let result = sum(1557, 88848);
// console.log(result);

//함수 스코프 함수 내부에서 사용된 변수는 해당 함수 내에서만 접근 가능함

//익명함수 이름이 없는 함수 재사용 할 필요가 없는 함수를 만들 때 쓴다

//즉시실행 함수

// (function() { 
//     console.log('hello')
// })()

//파라미터 기본값 
// function sum(num1 = 0, num2 = 0){ //이런식으로 기본값을 설정해주면 NaN이 안뜸
//     let result = num1 + num2;
//     return result;
// }
// let result = sum(5)
// console.log(result)

//Arrow Function 
const hey = (name) => { //파라미터가 한개라면 괄호 생략 가능
    console.log(`hello${name}`);
};
const hi = name => console.log(`안녕${name}`) //명령문이 한줄이라면 이런식으로도 가능
hey('김서준');
hi('서준')
const bye = name => `안녕${name}`;  //리턴도 생략 가능
const str = bye('서준');
console.log(str)

//콜백 함수 다시 호출하는 함수

let fruits = ['사과', '바나나', '딸기'];
// fruits.forEach(function(item, index){
//     console.log('item:',item)
// })
fruits.forEach(printItem);
function printItem(item, index){
    console.log('item:',item);
}
fruits.forEach((item, index) => {
    console.log('item:',item)
})