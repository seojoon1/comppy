/*변수*/
let hello = "안녕"
console.log(hello);
hello = '곤니찌와'
console.log(hello);
//변수:다시 선언은 불가능하지만 안의 내용은 변경 가능 변수 앞은 무조건 글자, $, _ 만 사용가능하고 그외 특수문자나 숫자는 사용 불가능함 ,예약어도 사용 불가

/*상수*/
const username = "comppy";
alert('hello'+' '+username);
// username = "누구세요";
//상수는 변경 불가능
//예전에는 var 사용
//지금은 변수는 let 상수는 const 사용
//값이 바뀔경우 let 아닐경우 const 사용하는데 const 사용하는게 좋다고 함

/*스코프*/
{
    let a = 'a';
    console.log("a:",a);
    {
        let c = 'c';
        console.log("c:",a);
    }
}
// console.log("a:",a);
function sum(a,b){
    let result = a + b;
    return result;
}
//스코프: 변수나 함수가 접근 가능한 유효한 범위 sum 함수 안에 있는 변수면 그 안에서만 사용 가능함

/*var 안쓰는 이유*/
// var 는 여러번 선언가능
// 블럭 스코프의 영향을 받지 않음
// 유지보수&협업이 힘들어짐

/*호이스팅 */
//코드가 실행되기전 변수나 함수가 자바스크립트 파일 최 상단으로 끌어 올려지는 것을 말한다
console.log(sum1(100, 300)); 
function sum1(num1, num2){
    return num1 + num2;
};