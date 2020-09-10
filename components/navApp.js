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