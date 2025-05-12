let retangle = document.querySelector('#retangle')
let body = document.querySelector('body')
retangle.addEventListener('mousedown',function(event){
    // console.log("mousedown");
    // console.log(event.target);
    console.log(event.target.getBoundingClientRect());
    // console.log("clientX", event.clientX,"clientY", event.clientY)
    // console.log("pageX", event.pageX,"pageY", event.pageY)
});
// retangle.addEventListener('mouseup',function(event){
//     console.log("mouseup");
// });
// retangle.addEventListener('mouseenter',function(event){
//     console.log("mouseenter"); //해당 요소 안에 있을때 발생생
// });
// retangle.addEventListener('mouseleave',function(event){
//     console.log("mouseleave"); //떠날때
// });
// retangle.addEventListener('mousemove',function(event){
//     console.log("mousemove");
//     alert("만지지마!")
// }); //움직일때

/*이벤트 속성이랑 메서드*/
// body.addEventListener("click", function(event){
//     console.log("pageX", event.pageX,"pageY", event.pageY);
//     let div = document.createElement('div');
//     div.classList.add('circle');
//     div.style.left = (event.pageX-25) + "px";
//     div.style.top = (event.pageY-25) + "px";
//     body.appendChild(div);
// }); //마우스를 클릭하면 그곳에 원을 생성하는 코드