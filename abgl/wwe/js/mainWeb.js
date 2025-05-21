// const dnm = document.querySelector(`#DnM`);
document.addEventListener(`DOMContentLoaded`, function(){ //DOMContentLoaded = html 의 모든 요소를 읽고 DOM 을 완성했을 때 실행하게 해줌
    const DnM = document.querySelector(`#DnM`);
    DnM.addEventListener('click', function(event){ //클릭시 함수실행
        const userInput = prompt(`관리자 ID를 입력하세요`); //관리자 id 프롬포트로 받음
        if(userInput !== `comppy`){
            event.preventDefault(); //이 조건이 실행되면 링크 실행 안됨
            alert('다시 입력 하세요.');
        }
        else{
            alert(`확인.`);
        }
    })
}) 

// dnm.addEventListener(`mousedown`,function(){
//     alert(`개발중 입니다.`)
// })