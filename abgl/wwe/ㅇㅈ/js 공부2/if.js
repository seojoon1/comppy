'use strict';

// let num1 = 10;
// if(num1 > 100){ 
//     console.log("참 입니다.");
// }
// else{
//     console.log(`거짓입니다.`)
// }
// let score = prompt(`수학 점수를 입력하세요:`); //prompt 는 파이썬의 인풋(input)과 같음
// console.log(`score:${score}`);

// let testscore = prompt(`시험 점수를 입력해 주세요.`); //이런식으로 if와 else if else를 통해 성적 산출기 만들기 가능
// if(testscore >= 90){
//     console.log(`A입니다.`)
// }
// else if(testscor >=80){
//     console.log(`B입니다.`)
// }
// else if(testscor >=70){
//     console.log(`C입니다.`)
// }
// else if(testscor >=60){
//     console.log(`D입니다.`)
// }
// else{
//     console.log(`F입니다.`)
// }

let condition = 10; //js 는 값이 있을 경우 참으로 구분  하지만 0, null, undefined ,빈 문자열 "", NaN 은 거짓으로 분류
if(condition){
    console.log(`참 입니다`)
}
else{
    console.log(`거짓입니다.`)
}
