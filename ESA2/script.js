let aktuellesBild = 0;
const bilder = ["restaurant1.jpg", "restaurant2.jpg", "restaurant3.jpg"];

function wechselBild() {
    aktuellesBild = (aktuellesBild + 1) % bilder.length;
    document.getElementById("bild-container").style.backgroundImage = `url(${bilder[aktuellesBild]})`;
}

setInterval(wechselBild, 2000); // Wechselt das Bild alle 2 Sekunden

document.getElementById("kommentar-link").addEventListener("click", function() {
    document.getElementById("kommentar-textarea").style.display = "block";
});

const textBereich = document.getElementById("kommentar-textarea");
const zeichenZaehler = document.getElementById("zeichen-zaehler");

textBereich.addEventListener("input", function() {
    const verbleibendeZeichen = 500 - textBereich.value.length;
    zeichenZaehler.textContent = `${verbleibendeZeichen} Zeichen verbleibend`;
});
