'use strict';

// window.onload = function(){
//     for (let i = 0; i < 5; i++){
//         for (let j = 0; j < 5; j++){ 
//             document.writeln("*");
//         } 
//         document.writeln("<br>");
//     }
//     document.writeln("<hr>")
//     document.writeln('*****');
//     document.writeln('<br>');
//     document.writeln('*****');
//     document.writeln('<br>');
//     document.writeln('*****');
//     document.writeln('<br>');
//     document.writeln('*****');
//     document.writeln('<br>');
//     document.writeln('*****');
//     document.writeln('<hr>');
// }
// window.onload = function(){
//     for(let i = 0; i < 5; i++){
//         for(let j = 0; j < 5; j++){
//             document.writeln("*");
//         }
//         document.writeln("<br>")
//     }
// }
window.onload = function(){
    // for(let i = 0 ; i < 5; i++){// 
    //     for(let j =0; j < (i + 1); j++){ //i 값에 따라 출력이 하나씩 늘어남
    //         document.writeln("*");
    //         document.writeln("&nbsp")
            
    //     }
    //     document.writeln("<br>")
    // }
    // document.writeln("<hr>")
    // for(let i = 0; i < 5; i++){
    //     for(let j = 0; j < (5 - i); j++){ 

    //         document.writeln("*")
    //         document.writeln("&nbsp")
            
    //     }
    //     document.writeln("<br>")
    // }
    for(let i = 0; i < 5; i++){
        for(let j = 4; j > i; j--){
            document.writeln("&nbsp")
        }
        for(let k = 0; k < (i+1); k++){
            document.writeln("*")

        }
        document.writeln("<br>")
    }
}
