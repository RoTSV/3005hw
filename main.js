let button=document.querySelector('.button');
let vert=document.querySelector('.vert');
let goriz=document.querySelector('.goriz');
let red_1=document.querySelectorAll('.red_1');        
let green_1=document.querySelectorAll('.green_1');
button.addEventListener('click',function(){             
    vert.style.backgroundColor = '#ef0404';
    goriz.style.backgroundColor = '#089108';
    for(let i=0; i < red_1.length; i++){
        red_1[i].style.backgroundColor='#ef0404';
    }
    for(let i=0; i < green_1.length; i++){
        green_1[i].style.backgroundColor='#089108';
    }
}); 

