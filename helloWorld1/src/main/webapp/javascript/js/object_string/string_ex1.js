//8월 30일 5교시 2번째
//string_ex1.js
let items =  'Lorem ad eiusmod. Sint consequat id sit culpa occaecat proident aliqua aute quis. Irure voluptate eiusmod et cupidatat esse id sit. In sit culpa Lorem reprehenderit eu ipsum officia reprehenderit dolore ut minim. Reprehenderit amet consequat eiusmod ut ex laborum ex et ea elit consectetur. Labore non laborum eu anim et. Id velit aliqua cillum mollit non.'

let bdy = document.querySelector('body'); //body 태그 찾아서 bdy 변수할당.
let div = document.createElement('div');  // div element 생성.
bdy.append(div); // body 자식요소로 붙임.

let words = items.split(' ');
words.forEach(word => {
    let span = document.createElement('span'); // <span></span>
    span.innerText = word;

    div.append(span);
});

let inp = document.createElement('input');
let btn = document.createElement('button');
btn.innerText = '찾기';

inp.onchange = function(){
    //버튼을 클릭하면 실행할 함수 내용 
    let findWord = inp.value; 
    let spans = document.querySelectorAll('span'); // 해당되는 내용을 다 가져오겠다 => 모든 span 태그 다가져옴
    // console.log(findWord);
    // console.log(spans);
    spans.forEach(function(span){
        //<span>Lorem,</span>  <span>ipsum</span>... 
        // findWord == span.innerText => span.remove();
        
        if(findWord == span.innerText){
            span.remove();
        }

        inp.val = ''; //초기화 (지워지게끔)
        inp.focus();
    });

}

document.querySelector('div').after(inp, btn);