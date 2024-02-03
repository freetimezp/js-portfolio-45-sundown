const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



var elemC = document.querySelector("#elem-container");
var fixed = document.querySelector("#fixed-image");
elemC.addEventListener("mouseenter", function () {
    fixed.style.display = "block";
});
elemC.addEventListener("mouseleave", function () {
    fixed.style.display = "none";
});

var elems = document.querySelectorAll(".elem");

elems.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        var image = elem.getAttribute("data-image");
        fixed.style.backgroundImage = `url(${image})`;
    });
});

















