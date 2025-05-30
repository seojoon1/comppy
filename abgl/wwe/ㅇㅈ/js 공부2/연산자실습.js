let btn = document.querySelector('#btn');
let emailEl = document.querySelector('[name = email]');
let passwordEl = document.querySelector('[name = password]');

btn.addEventListener('click',function(){
    let email = emailEl.value;
    let password = passwordEl.value;
    console.log('email:',email);
    console.log('password:',password);

    
    if(email === ""  || email.includes('@') === false){ //includes 어떤 문자가 포함이 됬는지 확인함 
        console.log('이메일이 유효하지 않습니다!')
    }
    else if(!password){ //이런식이면 빈값을 확인 가능
        console.log('비밀번호를 입력해 주세요')
    }
    else if((password.length >= 8 && password.length <= 16) === false){ //length 택스트의 글자 수 를 추출함 
        console.log('비밀번호는 8~16자 이내여야 합니다.')
    }
    else{
        console.log('로그인 성공')
    }
});