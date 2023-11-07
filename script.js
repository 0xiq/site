window.onload = function () {
    const menu_btn = document.querySelector('.hamburger')
    const mobile_menu = document.querySelector('.mobile-nav')
    const leistung_btn = document.querySelector('.leistungen__btn')
    const leistungen = document.querySelector('.leistungen__box-hide')


    menu_btn.addEventListener('click', function (){
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    });

    leistung_btn.addEventListener('click', function () {
        leistungen.style.display='flex';
        leistung_btn.style.display='none';
    });
}
