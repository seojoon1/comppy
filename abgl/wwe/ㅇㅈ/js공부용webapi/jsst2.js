let addbtn = document.getElementById("button");
let addbeforebtn = document.getElementById("before");
let inputbox = document.querySelector("input");
let targetremove = document.querySelector("#targetremove");

let remove_btn = document.querySelector('.remove_btn')
// addbtn.addEventListener("click", function () {
//     alert("hello");
// });
//변수명.addEvntListener("동작", 함수(){기능, .....})
let li = document.createElement("li");
let ul = document.querySelector("ul");
// li.textContent = "데드리프트";
// ul.appendChild(li);
addbtn.addEventListener("click", function () {
    let li = document.createElement("li"); //새로운 요소를 생성 가능함
    let ul = document.querySelector("ul");
    li.textContent = inputbox.value; //value 로 인풋박스의 값을 가져오고 textContent에 지정\

    let button = document.createElement('button');
    button.textContent = 'X' //버튼 택스트를 X로 설정
    // button.setAttribute('class','remove_btn') //클래스를, remove_btn으로 설정
    button.classList.add('remove_btn'); //classList.add("클레스명") 을 사용해서도 설정 가능
    button.addEventListener("click",removeParentNode);
    li.appendChild(button) //li 뒤에 버튼을 추가
    ul.appendChild(li); //뒤에 추가됨
    inputbox.value = "";
    inputbox.focus()
})

addbeforebtn.addEventListener("click", function () {
    let li = document.createElement("li");
    let ul = document.querySelector("ul");
    let targetli = document.querySelector("li#target");
    li.textContent = inputbox.value;
    ul.insertBefore(li, targetli); //추가해야할 태그, 변수명 이건 앞에추가함
    let button = document.createElement('button');
    button.textContent = 'X' 
    button.classList.add('remove_btn');
    button.addEventListener("click",removeParentNode);
    li.appendChild(button)
    inputbox.value = "";
    inputbox.focus()
});

targetremove.addEventListener("click", function () {
    let targetli = document.querySelector("li#target");
    targetli.remove();
});

remove_btn.addEventListener("click", removeParentNode);


function removeParentNode(event){ //중복되는 함수는 한번 만들어놓고 돌려쓴다
    event.target.parentNode.remove(); //event(이벤트변수(클릭된)).target(타겟의).parentNode(부모요소를).remove(삭제한다)();
    inputbox.value = ""; //추가 버튼을 클릭했을 때 인풋박스의 값을 빈값으로 설정
    inputbox.focus(); //추가버튼을 눌렀을때 다시 인풋박스에 포커스가 감
}