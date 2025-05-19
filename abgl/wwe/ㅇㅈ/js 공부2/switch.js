'use strict'
// // switch 알맞은 case 가 나올때 까지 실행하고 그 케이스의 안에 들어있는 내용을 실행함 만약 break가 있다면 거기에서 종료
// // default else 같은건데 모든 case가 알맞지 않다면 이걸 실행함

// const subject = `html`;

// switch(subject){
//     case `javascript`:
//         console.log(`안녕반가워`);
//         // alert(`반갑다`);
//         // break;
//     case `html`:
//         console.log(`반가워 나는 html`);
//         // break;
//     case `css`:
//         console.log(`반가워 나는 css`);
//         // break;
//     case `python`:
//         console.log(`반가워 나는 python`);
//         // break;
//     default:
//         console.log(`default 수행문임`)
// }
//만약 알맞은 case 는 있지만 break 가 없다면 알맞은 case 부터 break 가 나올때까지의 모든것을 실행함
//switch 문으로 점수계산기 만들기
let score = prompt(`시험 점수를 입력하세요`);
let value = Math.floor(score / 10); //Math.floor 는 소수점 아래의 수를 버려줌
switch (value){
    case 10:
    case 9:
        console.log(`A학점 입니다.`);
        break;
    case 8:
    case 7:
        console.log(`B학점 입니다.`);
        break;
    case 6:
    case 5:
        console.log(`C학점 입니다.`);
        break;
    default:
        console.log(`D학점 입니다`);
}