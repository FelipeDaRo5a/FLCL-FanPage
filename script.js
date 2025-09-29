let seasons = document.getElementsByClassName("header__seasons");
let menuBtn = document.getElementsByClassName("header__menu-button");
let menuSeasons = document.getElementsByClassName("menu__seasons");

let seasonsBtn = seasons[0];

menuSeasons[0].addEventListener('click', (event) => {

    
    document.getElementsByClassName("menu__seasons-menu")[0].classList.toggle("is-visible");
    

});

menuBtn[0].addEventListener('click', (event) => {

    menuBtn[0].classList.toggle("is-open");
    document.getElementsByClassName("menu")[0].classList.toggle("is-visible");
    document.getElementsByClassName("menu")[0].classList.toggle("is-complete");
    

});

seasonsBtn.addEventListener('click', (event) => {

    let seasonsMenu = document.getElementsByClassName("seasons__menu");
    seasonsMenu[0].classList.toggle("is-visible");

});

