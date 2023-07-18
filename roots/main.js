var header = document.getElementById('header');
var navbar = document.getElementById('navbar');
var mobile = document.getElementById('mobile');
var close = document.getElementById('close');
var scrollTop = document.getElementById('scroll');
var navLink = document.getElementsByClassName('navlink');

// ---------- navbar------- 
mobile.addEventListener('click', ()=>{
    if(navbar.style.right = '-350px'){
        navbar.style.right = '0';
    }
})
close.addEventListener('click', ()=>{
    if(navbar.style.right = '0'){
        navbar.style.right = '-350px';
    }
})

// -------header----- 
header.style.backgroundColor = 'transparent';
window.addEventListener('scroll', ()=>{
    if (pageYOffset > (window.innerHeight * 0.2)){
        header.style.backgroundColor = '#37517ef3';
        console.log(pageYOffset);
    }else{
        header.style.backgroundColor = 'transparent';
    }
})
scrollTop.addEventListener('click', ()=>{
    window.scrollTo(0, 0);
})

// ------scroll top button -----
scrollTop.style.display = 'none';
window.addEventListener('scroll', ()=>{
    if(pageYOffset > (window.innerHeight * 1.0)){
        scrollTop.style.display = 'flex';
    }else{
        scrollTop.style.display = 'none';
    }
})

