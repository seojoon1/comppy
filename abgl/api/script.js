const inputbox = document.querySelector("#qqq");
const rja = document.querySelector("#rja");

rja.addEventListener("click",function(){
    $.ajax({
        method: "GET", //메서드를 데이터를 가지고 오는 GET으로 설정
        url: "https://dapi.kakao.com/v3/search/book", //요청을 보낼 
        data: { query:inputbox.value},
        headers: {Authorization: "KakaoAK 21c8e9e7dc98b41c4257a2cc474e259d"}
    })
    .done(function( msg ) {
        // alert( "Data Saved: " + msg );
        console.log(msg);
        console.log(msg.documents[0].title);
        console.log(msg.documents[0].thumbnail);
        inputbox.value= "";
        $("p").append("<h2>"+msg.documents[0].title+"</h2>");
        $("p").append(`<img src = "${msg.documents[0].thumbnail}" />`);
        });
})