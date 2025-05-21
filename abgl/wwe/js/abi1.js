'use strict';
let img = document.querySelector(`.abipic`);
// function userNameRead(){
// }
img.addEventListener(`click`,function(){
    let userName = prompt(`닉네임을 입력하세요.`);
    if(userName && userName){ //&& and 를 사용해서 한곳이 빈값이면 자동으로 거짓이됨 
        alert(`안녕하세요${userName}`);
    }
    else{
        alert(`누구신지 모르겠습니다`)
    }
} );