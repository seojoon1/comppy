let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
// console.log(btn1)
// console.log(btn2)
btn1.onclick = function(){
    alert("hello 프로퍼티 리스너")
};

btn2.addEventListener("click", helloevent1);
btn2.addEventListener("click", helloevent2);//2개도 가능함

function helloevent1(){
    alert("hello addEventListener1");
}



function helloevent2(){
    alert("hello addEventListener2");
}
btn2.removeEventListener("click",helloevent1) //변수.removeEventListener("이벤트",함수) 방식으로 리무브 가능함