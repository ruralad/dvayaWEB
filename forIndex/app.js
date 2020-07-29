console.log('Getting Into app.js');

const menuBurger = document.getElementById('menuBurger');
const navBar = document.getElementById('navBar');
const indexBody = document.getElementById('hero');
let menuBurgerOpen = false;

menuBurger.onclick = () => {    
    if(!menuBurgerOpen){
        menuBurger.classList.toggle('is-opened');
        navBar.style.display = 'flex';
        indexBody.style.display = 'none';
    }else{
        menuBurger.classList.toggle('is-opened');
        navBar.style.display = 'none';
        indexBody.style.display = 'flex';
    }
    menuBurgerOpen =!menuBurgerOpen;
}
