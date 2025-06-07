let first = document.querySelector("#first");
let second = document.querySelector("#second");
let result = document.querySelector("#result");
let btn = document.querySelector("button");
btn.addEventListener('click', function(){
    let firstnum = first.value;
    let secondnum = second.value;
    result.value = Number(firstnum) + Number(secondnum);
})