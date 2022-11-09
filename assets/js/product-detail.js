$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:false,
        margin: 7,
        lazyLoad: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })
});

const change = src => {
    document.getElementById('main').src = src
}

document.getElementById('description').style.display = "block"


const activeTab = (evt, id) => {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(id).style.display = "block";
    evt.currentTarget.className += " active";
}