// 문자열 병합
console.log('hello'+'world!');
console.log('3'+3); //숫자형은 문자열로 합쳐짐
console.log(typeof('3'+3)); //숫자형은 문자열로 합쳐짐
console.log(3+3+'3'); //왼쪽부터 수행하기 때문에 이런경우는 63이 출력
//산술 연산자
let x = 10;
let y = 20;
console.log(x+y); //더하기
console.log(x-y); //빼기
console.log(x/y); //나누기
console.log(x*y); //곱하기
console.log(9%4); //나머지

// const num1 = prompt('숫자를 입력해 주세요');
// if(num1 % 2 == 0){
//     console.log('짝수입니다');
// }
// else{
//     console.log('홀수입니다')
// }
//증감 연산자

const result = x + y; //++ 이 앞에 있으면 전위증가 뒤에 있으면 후위증가 X에 1만큼 증가시킨후 명령문 수행 , 명령문 수행후 1만큼 증가 감소도 똑같음
console.log('x:',x);
console.log('y:',y);
console.log('result:',result);

//비교연산자
const strnum = '12';
const intnum = 12;

console.log(strnum > intnum); //a 가 b 보다 크다
console.log(strnum >= intnum);// a 가 b보다 크거나 같다
console.log(strnum < intnum);// a가 b보다 작다
console.log(strnum <= intnum);// a가 b보다 작거나 같다 
console.log(strnum == intnum);// a 와 b가 같다
console.log(strnum === intnum);// a와 b가 데이터 타입까지 같다
console.log(strnum != intnum);//a와 b가 같지않다 
console.log(strnum !== intnum);//a와 b가 같지않다 (데이터 타입까지)

//할당 연산자

console.log(x=y);// x = y x에 y를 할당해라
console.log(x+=y);// x = x + y 와같음
console.log(x-=y);// x = x - y 와같음
console.log(x*=y);// x = x * y 와같음
console.log(x/=y);// x = x / y 와같음

let sum = 0;
for( let i = 1; i <= 10; i++){
    sum += i
    console.log(`${i}번째 sum은${sum}`)
}

//논리연산자 and or not
let x1 = true;
let y1 = false;
console.log(x1 && y1); // and 모두 true 일때 true, 그 외 false
console.log(x1 || y1); // or 하나라도 true 이면 true
console.log(!x1); // not 반대를 

//삼항 연산자

let number = 9;
let message = number % 2 === 1 ? '홀수 입니다.':'짝수입니다';

// if(number % 2  === 1){
//     message = '홀수 입니다.'
// }else{
//     message = '짝수 입니다.'
// }
console.log(message)