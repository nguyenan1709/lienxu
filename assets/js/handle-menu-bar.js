function handleClose() {
    document.getElementsByClassName('header-mobile__menu')[0].style.left = '-250px'
    setTimeout(() => {
        document.getElementsByClassName('header-mobile__menu')[0].style.display = 'none'
    }, 1000);
}

function handleOpenMenu() {
    document.getElementsByClassName('header-mobile__menu')[0].style.left = 0
    document.getElementsByClassName('header-mobile__menu')[0].style.display = 'block'
}