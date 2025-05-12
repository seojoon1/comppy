let title = document.getElementById("title"); //document.getElementById 이 아이디명을 가져온다 다른것도 가능한듯 tagname이나 classname 는 Elements 임 s 붙음
console.log(title);
title.textContent = "하체운동"; //변수명.textContent = "바꿀이름" 객체의 택스트콘탠츠 속성을 변경

let items = document.getElementsByClassName("item");
console.log(items);
let lilist = document.getElementsByTagName("li");
console.log(lilist);
//이러한 document 방식들로 html 요소들을 가져올 수 있음
//html 요소 쿼리
let h2 = document.querySelector("#title");
console.log("h2", h2);
let item = document.querySelector(".item");
console.log("item", item); //쿼리는 무조건 하나만 가져옴
let item2 = document.querySelectorAll(".item");
console.log("item2", item2); //뒤에 all 붙이면 다가져옴

// h2.textContent = "<span>하체운동!!!!</span>";
// h2.innerHTML = "<span>운동@@</span>";
// innerHTML 은 html 태그도 사용 가능하다 수정할때 사용
// 이런거 사용할 때 body 같은거 사용하면 그 안에 있는게 모두 삭제되고 이게 작성되는 방식이라 주의
let input = document.querySelector("input");
input.setAttribute("placeholder", "운동을 입력하세요"); //변수명.setAttribute("사용할 속성", 속성 값, 속성 설정
input.removeAttribute("placeholder"); //속성 삭제

//html 요소를 가져와서 조작하거나 수정 가능하다 어떠한 속성이나 메서드가 필요한지 알아야함

let hi = document.querySelector(".hello");
// hi.style.color = "blue"; //함수명.style.함수 = '값'
// hi.style.backgroundColor = "gray";
//이런식으로 css 수정 가능

hi.classList.add("light"); //추가하기 클래스 class
hi.classList.remove("light"); //지우기
//html 요소 생성
