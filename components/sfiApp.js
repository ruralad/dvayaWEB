console.log('Script Opened✅');

let menuBurger = document.getElementById('menuBurger');
let navBar = document.getElementById('navBar');
let sfiBody = document.getElementById('hero');

let menuBurgerOpen = false;
menuBurger.onclick = () => { 
    if(!menuBurgerOpen){
        menuBurger.classList.toggle('is-opened');
        navBar.style.display = 'block';
        sfiBody.style.display = 'none';
    }else{
        menuBurger.classList.toggle('is-opened');
        navBar.style.display = 'none';
        sfiBody.style.display = 'block';
    }
    menuBurgerOpen =!menuBurgerOpen;
}
