const btn = document.getElementById("menu");
const nav = document.getElementById("navbar");

const open = "./assets/shared/icon-close.svg";
const close = "./assets/shared/icon-hamburger.svg";

btn.addEventListener("click", function() { 
    if(nav.classList.contains("active")){
        btn.src = close;
        nav.classList.toggle("active");
    }else{
        btn.src = open;
        nav.classList.toggle("active");   
    }
});