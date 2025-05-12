let img = document.querySelector('img'); //img 태그 가져오고
let liList = document.querySelectorAll("li");//li도 가져오고 
let sitem = document.querySelector(".sitem")

liList[0].addEventListener('click',imgevent);
liList[1].addEventListener('click',imgevent);
liList[2].addEventListener('click',imgevent);
liList[3].addEventListener('click',imgevent);   





function imgevent(event){ //클릭하면 값을 변경하는 함수 만들고
    img.setAttribute("src", event.target.dataset.img);
    sitem.textContent = event.target.textContent;
}