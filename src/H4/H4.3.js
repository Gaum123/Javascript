var slider1 = document.getElementById("imgslider1");
var teller1 = 1;

var slider2 = document.getElementById("imgslider2");
var teller2 = 1;

var slider3 = document.getElementById("imgslider3");
var teller3 = 1;

slider1.style.backgroundImage = "url(Images/ogen1.png)"
slider1.addEventListener("click", function() {
    slide1();
    slider1.style.backgroundImage = "url(Images/ogen"+teller1+".png)";
})

slider2.style.backgroundImage = "url(Images/neus1.png)";
slider2.addEventListener("click", function() {
    slide2();
    slider2.style.backgroundImage = "url(Images/neus"+teller2+".png)";
})

slider3.style.backgroundImage = "url(Images/mond1.png)";
slider3.addEventListener("click", function() {
    slide3();
    slider3.style.backgroundImage = "url(Images/mond"+teller3+".png)";
})


function slide1() {
    if (teller1 == 3) {
        teller1 = 1;
    } else {
        teller1++;
    }
}
function slide2() {
    if (teller2 == 3) {
        teller2 = 1;
    } else {
        teller2++;
    }
}
function slide3() {
    if (teller3 == 3) {
        teller3 = 1;
    } else {
        teller3++;
    }
}