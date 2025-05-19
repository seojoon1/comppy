'use strict'
//while 과 do while의 차이 while 은 참일때만 실행하는 반복문이고 do while 은 조건이 참일때 실행하는 반복문이지만 최소 한번은 수행함
let count = 5;
while(count < 5){
    console.log(count);
    count++;
} //while 은 아에 실행하지 않고
console.log(`--------- `)
let num1 = 5;
do{
    console.log(num1);
    num1++;
}while (num1 < 5);
//do while 은 한번은 함

//continue
let text =``;
for(let i = 0 ; i < 10; i++){ 
    if (i == 3){
        // continue; //3은 제외하고
        break; //3에서부터 끝
    }
    text += i;
    console.log(`text${i}:`, text)
}
//break 만나는순간 종료해라