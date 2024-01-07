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




//Ajax-Anfrage und dynamisches Laden des Inhalts
document.getElementById('auswahl').addEventListener('change', function() {
    var selectedValue = this.value;
    if (selectedValue) {
        fetch(selectedValue)
            .then(response => response.json())
            .then(data => {
                document.querySelector('#restaurant-panel .title').textContent = data.title;
                document.querySelector('#restaurant-panel .data1').textContent = data.data1;
                document.querySelector('#restaurant-panel .data2').textContent = data.data2;
            })
            .catch(error => console.error('Error:', error));
    } else {
        document.querySelector('#restaurant-panel .title').textContent = 'Nichts ausgewählt.';
        document.querySelector('#restaurant-panel .data1').textContent = '';
        document.querySelector('#restaurant-panel .data2').textContent = '';
    }
});