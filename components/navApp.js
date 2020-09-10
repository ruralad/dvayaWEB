let dropDown = document.getElementById("dropdown");
let menuBurger = document.getElementById("menuBurger");
let menuBurgerOpen = false;

function showDropdown() {

    if(!menuBurgerOpen){
        menuBurger.classList.toggle('is-opened');
        dropDown.style.display = "block";
    }else{
        menuBurger.classList.toggle('is-opened');
        dropDown.style.display = "none";
    }
    menuBurgerOpen =!menuBurgerOpen;
}

//set favicon
function change_favicon(img) {
    let favicon = document.querySelector('link[rel="shortcut icon"]');
    
    if (!favicon) {
        favicon = document.createElement('link');
        favicon.setAttribute('rel', 'shortcut icon');
        let head = document.querySelector('head');
        head.appendChild(favicon);
    }
    
    
    favicon.setAttribute('type', 'image/png');
    favicon.setAttribute('href', '../assets/dvayaLogo.png');
}

change_favicon();