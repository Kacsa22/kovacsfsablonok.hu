const body = document.querySelector('body');
const menu = document.querySelector('.menu');
const menuButton = document.querySelector(".menuButton");
var width = window.outerWidth;

let show = false;

menuButton.addEventListener('click', function(){
    if(show){
        close();
    }
    else {
        open();
    }
});

window.addEventListener('resize', resize);

function close(){
    menu.style.display = "none";
    show = false;
}

function open(){
    menu.style.display = "flex";
    show = true;
}

function resize(){
    width = window.innerWidth;
    if (width >= 1290){
        if (show){
            close();
            show = true;
        }
        else {
            close();
        }
    }
    if ((width < 1290) && show){
        open();
    }
}