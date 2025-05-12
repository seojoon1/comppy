'use strict';
/* 숫자 */
let number = 2;
const number1 = 15.57;
console.log(number);
console.log(5 / 0); //Infinity
console.log(-5 / 0); //-Infinity 아라비아숫자 말고도 이 두개도 있다
let nan = "hello" / 5;
console.log(nan); //NaN 도 숫자 타입임 
console.log(typeof nan); //NaN 도 숫자 타입임 

/* 문자열 */
const name1 = "김서준";
const name2 = '고차원';
const name3 = `이서윤`;
const age = 20;

console.log('안녕하세요 제 이름은'+name1+'이고,나이는'+age+'살 입니다');
console.log(`안녕하세요 제 이름은 ${name1}이고 나이는 ${age}살 입니다`); // `` 이거 사용하면 파이썬 포멧같은거 사용 가능한듯 방식은  `가나다라${name1}마바사` 이런식으로 

const message = `안녕하세요 이런식으로

사용

가능
해요`;
console.log(message);

const hello = `안녕하세요 제\n 이름은\t \'김서준\' 입니다.`; // \이스케이프 문자
console.log(hello);
/*불리언*/
const isProgramer = true;
const isDesign = false;
console.log(`isProgramer: ${typeof isProgramer}`);
console.log(`isDesign: ${typeof isDesign}`);

/*심볼(유일한 값을 생성할 때)*/
//쓸때 찾아봐라


/*null 과 nudifined-둘다 비어있는 상태 Null 은  값이 없는 상태 undifined 값을 할당 하지 않은 상태*/
const username = null;
console.log(`username:${typeof username}`);
let message2;
console.log(`message2:${message2}`);  
console.log(`message2:${typeof message2}`);


/*객체 타입 Array Object*/

const person = {
    name: `홍길동`,
    age: 25,
    isProgramer: true,
    say(){
        console.log('Hello~!');
    },
};

const arr = [1, 2, 3, 4, 5]; //리스트 같은건가

console.log(arr.length);
arr.push(99);
console.log(arr)
//객체 타입은 값을 여러개 가질 수 있다

//배열(Array) 리스트 같은건가?

const fruits = [`사과`, `바나나`, `딸기`];

console.log(fruits[0]);
console.log(fruits[1]);

fruits[0] = `치킨`;
console.log(fruits);