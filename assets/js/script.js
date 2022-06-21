/*  --------------------JS CODE FOR THE NAVIGATION--------------------- */
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
    } else {
        document.getElementById("header").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}

// open & close sidebar
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navigation .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function () {
    navLinks.style.right = "0";
}
menuCloseBtn.onclick = function () {
    navLinks.style.right = "-100%";
}


function reveal() {
    var animation = document.querySelectorAll(".animated");

    for (var i = 0; i < animation.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = animation[i].getBoundingClientRect().top;
        var elementVisible = 130;

        if (elementTop < windowHeight - elementVisible) {
            animation[i].classList.add("reveal");
        }
    }
}

window.addEventListener("scroll", reveal);