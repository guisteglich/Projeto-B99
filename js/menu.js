function openMenu() {
    document.getElementById('btn').style.display = 'block'
    let navlink = document.getElementsByClassName("nav-link")
    for (nav of navlink){
        nav.classList.remove("mobile-menu-closed");
        nav.classList.add("mobile-menu");
    }
    document.getElementById('closebt').setAttribute('onclick', 'closeMenu()');
}

function closeMenu() {
    let navlink = document.getElementsByClassName("nav-link")
    for (nav of navlink){
        nav.classList.remove("mobile-menu");
        nav.classList.add("mobile-menu-closed");
    }
    document.getElementById('closebt').setAttribute('onclick', 'openMenu()');
}