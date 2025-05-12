console.log("hello!!!"); //콘솔창에 텍스트 출력력 명령문 끝에 세미콜론 넣기
console.log("hello", "hi", "nihao", "ㅎㅇ", "곤니찌와와"); //콤마로 여러개 가능
alert("반갑고"); //alert() == 경고창, 알람 기능
// 주석은 // 이나 /* */ css 랑 똑같음

let number = "반갑고"; //let 변수명 방식 변수 만들기
console.log(number);

function hello() {
    //함수 선언은 function 함수명(){기능}
    console.log("반갑고1");
    console.log("반갑고2");
    console.log("반갑고3");
}
hello(); //함수실행 함수명();
hello();
let obj = {
    number: 30, // 프로퍼티(속성) 객체가 가지고 있는 변수
    hi: function () {
        console.log("obj>반갑고1");
        console.log("obj>반갑고2");
        console.log("obj>반갑고3");
    },
};
console.log(obj.number);
obj.hi();
//이벤트 html 에서 발생한 사건을 알려줌
