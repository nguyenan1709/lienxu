function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 1 : value;
    value++;
    document.getElementById('number').value = value;
}

function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 1 : value;
    value < 1 ? value = 1 : '';
    value--;
    if(value === 0) {
        value = 1
    }
    document.getElementById('number').value = value;
}

if(document.getElementsByClassName('cart-item') && document.getElementsByClassName('cart-item').length > 2) {
    document.getElementById('cart').style.height = 'calc(100% - 273px)'
}