const hamMenu= document.getElementById('menu');
const toggle = document.querySelector('.toggle.close');
const navList = document.querySelector('.nav-list');

/*****************************************************************
NavList Here 
******************************************************************/
hamMenu.addEventListener('click',function(e){
    navList.style.display="block";
    navList.style.position="fixed";
    navList.addEventListener('onfocusout',function(e){
        navList.style.display="none";
    });
});

toggle.addEventListener('click',function(e){
    navList.style.display="none";
    navList.style.position="absolute";
});
window.onresize= function(e){
    if(window.innerWidth>768){
        navList.style.display="block";
        navList.style.position="relative";
    }else{
        navList.style.display="none";
        navList.style.position="absolute";
    } 
}

/************************************************
 Photo Slider or Photo menu Section 3rd
 ************************************************/
const img = document.querySelector('.second .right');
const slider = document.querySelector('.slider');
var show = document.querySelector('.show');
//use event delegation for accessing arrow keys 
//move show class to hightlight Image number 
//Copy the value of show class into background url

slider.addEventListener('click',function(e){
    if(e.target.classList.contains('fa-arrow-right')){
        var nextSib = show.nextElementSibling;
        nextSib.setAttribute('class','show');
        img.style.backgroundImage='url('+nextSib.firstElementChild.getAttribute('href')+')';
        show.classList.remove('show');
        show= nextSib;
    }
    if(e.target.classList.contains('fa-arrow-left')){
        var prevSib = show.previousElementSibling;
        prevSib.setAttribute('class','show'); img.style.backgroundImage='url('+ prevSib.firstElementChild.getAttribute('href')+ ')';
        show.classList.remove('show');
        show= prevSib;
    }
});