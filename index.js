const openMenu = document.querySelector('#menu');
const whiteLogo = document.querySelector('#logo');
const firstBurger = document.querySelector('.burger1');
const secondBurger = document.querySelector('.burger2');

function clicked(){
    
    openMenu.classList.toggle('open');
    whiteLogo.classList.toggle('white');
    firstBurger.classList.toggle('white-burger1');
    secondBurger.classList.toggle('white-burger2');
}