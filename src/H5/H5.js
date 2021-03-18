    pics = document.getElementById("pics");
    createPicsHolders();
    createLeeuwImages();
    function createPicsHolders() {
    for (var i = 0; i < 9; i++) {
    pictureHolder = document.createElement("div");
    pictureHolder.className = "picture-holder";
    pictureHolder.id = "picture-holder-" + i;
    pics.appendChild(pictureHolder)
}
}

    function createLeeuwImages() {
    pictureHolders = document.getElementsByClassName("picture-holder");
    for (var i = 0; i < pictureHolders.length; i++) {
    favoriet = document.createElement("div");
    favoriet.className = "favoriet";
    favoriet.id = "favoriet_" + (i+1);
    leeuwPlaatje = document.createElement("img");
    leeuwPlaatje.src = "img/leeuw" + (i+1) + ".png";
    leeuwPlaatje.id = (i+1);
    leeuwPlaatje.addEventListener("click", function () {
    maakFavoriet(this.id);
});
    pictureHolders[i].appendChild(favoriet);
    pictureHolders[i].appendChild(leeuwPlaatje);
}
}

    function maakFavoriet(id) {
    console.log("Maak mij favoriet het gaat om leeuw " + id );
    nietzofavoriet = document.getElementsByClassName("favoriet");

    for (var i = 0; i < nietzofavoriet.length; i++) {
    nietzofavoriet[i].style.backgroundImage = "none";
}

    favoriet = document.getElementById("favoriet_" + id);
    favoriet.style.backgroundImage = "url('img/Hartje.png')";
}