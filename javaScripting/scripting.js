//adding event handler
var element1 = document.getElementById("projecthover");
var element2 = document.getElementById("image21");
element1.addEventListener("mouseover",function () {
    
})

var elements = document.getElementById("animationdiv");

let animation = anime({
    targets:elements,
    value: [0, 1000],
    round: 1,
    easing: 'easeInOutExpo'
});