let inputbox = document.querySelector("#input-box") 
let img = document.querySelector("img")
// inputbox.addEventListener("keypress",function(){
//     console.log("keypress")
// });
// inputbox.addEventListener("keydown",function(){
//     console.log("keydown")
// });
// inputbox.addEventListener("keyup",function(){
//     console.log("keyup")
// });


// inputbox.addEventListener("keyup",function(event){
// console.log("event.key", event.key)
// });//키 입력을 출력함
// inputbox.addEventListener("keyup",function(event){
// console.log("event.keycode", event.keyCode)
// });//키의 아스키코드를 출력
// inputbox.addEventListener("blur",function(event){
//     alert('focus');
// });
//포커스가 있다가 사라지면 발생하는 이벤트
inputbox.addEventListener("change",function(event){
    console.log("change");
});
img.addEventListener('error',function(event){
    console.log("ERROR");
});


