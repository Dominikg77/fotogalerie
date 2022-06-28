let image = [`img/1.jpg`, `img/2.jpg`, `img/3.jpg`, `img/4.jpg`, `img/5.jpg`, `img/6.jpg`, `img/7.jpg`, `img/8.jpg`, `img/9.jpg`, `img/10.jpg`, `img/11.jpg`, `img/12.jpg`];

// funktion zum laden der bilder
function render() {

    for (let i = 0; i < image.length; i++) { // eine variable i wird definiert
        //variable i muss der Funktion mit geben werden openImage und unten eingefügt werden
        document.getElementById(`main-galerie`).innerHTML += /*html*/ `
        <div onclick="openImage(${i})" class="image"> <img src="${image[i]}"></div>
        `;
    }

}

function openImage(i) {
    //Variable i muss aufegrufen werden, da es sonst nicht weiss bei welchem bild er es gross anzeigen soll
    //bild wird gross angezeigt, da die klasse d-none entfernt wird
    document.getElementById(`opens`).classList.remove(`d-none`);
    document.getElementById(`opens`).innerHTML = /*html*/ `

   <div class="xx" ><img onclick="closeImage()" class="closeImage" src="img/x.png"> </div>
     <div class="pp" >
     <img class="swipeImage" onclick="swipeLeft(${i})" src="./img/links.png">
     <div class="image-big" > <img src="${image[i]}"></div>
     <img class="swipeImage" onclick="swipeRight(${i})" src="./img/rechts.png">
</div>
    `;
    //Variable i muss bei den swipe funktionen aufegrufen werden, das er weiss wo er steht 
}

function closeImage() {
    //bild wird wider in standart ansicht angezeigt, da d-none entfernt wird 
    document.getElementById(`opens`).classList.add(`d-none`);
}

function swipeRight(i) {
    //variable i muss aufgerufen werden, stand bei welche bild
    if (i < image.length - 1) { // wenn i kleiner als image.length -1 ist also true 
        //bedeute so lange wir nicht beim letzten bild sind, kann es jeweils um eins erhöht werden wenn der Pfeil nacht links gedrückt wird 
        openImage(i + 1); //ein bild weiter
    } else {
        openImage(0); // wenn es nicht mehr weiter geht, dann geh zurück zu 0
    };
}

function swipeLeft(i) {
    if (i > 0) {
        openImage(i - 1);
    } else {
        openImage(image.length - 1);
    };
}