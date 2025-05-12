'use strict';

// //배열 생성
// const fruits = ['사과','바나나', '귤'];
// console.log(`fruits:${fruits}`);

// const game = new Array('이터널리턴',`롤`,`피파`);
// console.log(`game:${game}`);
// console.log(game[0]);

// //자주 사용하는 배열 API
// //lenth
// console.log(`fruits.length:${fruits.length}`);
// console.log(`마지막 값:`, fruits[fruits.length-1]); //마지막 값을 콘솔에 출려

// //push() append 같은거
// game.push('뭐지');
// console.log(`game:${game}`);

// //forEach()
// game.forEach(function(item, index){
//     console.log(index, item);
// });

// //pop 꺼내서 삭제
// // game.pop();
// // let removed_item = game.pop();
// // console.log(`removed_item = ${removed_item}`);
// // console.log(`제거완료:${game}`);

// //shift() 앞에서부터 제거
// game.shift();
// console.log(`game.shift:${game}`);

// //unshift() 앞에서부터 추가
// game.unshift(`아수라장`);
// console.log(game);

// //indexof() 몇번째에 있는지
// let index = game.indexOf('뭐지');
// console.log(index);

// //splice() 몇번째 부터 몇개까지 삭제
// fruits.splice(1, 1);
// console.log(fruits);

//구조분해할당
// const asu =  game[0];
// console.log(asu);
// const er = game[1];
// console.log(er);

// let [asu, er, lol, wt , ...athers] = [`아수라장`, `이터널리턴`, `롤`, `뭐지`, `a`, `b`];
// console.log(asu);
// console.log(er);
// console.log(lol);
// console.log(wt);
// console.log(...athers);

// //전개구문 
// let fruits1 = [`사과`, `용과`, `귤`];
// let fruits2 = [`이터리`, `터널턴`, `이털턴`];
// let item = [...fruits1, ...fruits2];
// console.log(item);
// //이런식으로 쓴다네용

// //Rest parameter
// print(`a`, `b`, `c`,`d`,`e`,`f`);
// function print(...values ){
//     values.forEach(function (value, index){
//         console.log(`index: ${index} value: ${value}`);
//     });
// };

// //앝은 복사
// let source = [`사과`, `용과`, `귤`];
// let target = source;

// console.log(`source:${source}`);
// console.log(`target:${target}`);

//깊은 복사
let source = [`사과`, `용과`, `귤`];
// let target = [...source];
// let target = Array.from(source);
let target = source.slice();
target[0] = `파인에플`;
console.log(`source:${source}`);
console.log(`target:${target}`);