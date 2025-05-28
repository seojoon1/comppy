//스위치도 가능할거 같은데 잘 모르겠음
const LoginInput = document.querySelector(".input-form .id");
const PwInput = document.querySelector(".input-form .pw");
const LoginButton = document.querySelector(".input-form button");
function btnClick(){
    const id = LoginInput.value;
    const pw = PwInput.value;
    if(id == ""){
        alert("id를 입력하세요");
    }
    else if(id == "comppy"){
        alert("safdp")
    }
};