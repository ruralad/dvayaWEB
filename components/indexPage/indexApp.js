console.log('Getting Into app.js');

const menuBurger = document.getElementById('menuBurger');
let menuBurgerOpen = false;

menuBurger.onclick = () => {    
    if(!menuBurgerOpen){
        menuBurger.classList.toggle('is-opened');
    }else{
        menuBurger.classList.toggle('is-opened');
    }
    menuBurgerOpen =!menuBurgerOpen;
}
