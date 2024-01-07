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
3 // select-Element zur Spielauswahl im DOM finden
 4 var auswahl = document.querySelector("#auswahl");
 5 
 6 // Auf Änderungen des select-Elements reagieren
 7 auswahl.addEventListener("change", function(event) {
 8   // Referenz auf select-Elements
 9   var select = this;
10   
11   // Ausgewählten Wert auslesen
12   var restaurantFileName = select.value;
13 
14   // Informationen zum Spiel per AJAX laden.
15   var xhttp = new XMLHttpRequest();
16   xhttp.onreadystatechange = function() {
17     if (this.readyState == 4 && this.status == 200) {
18        // Inhalt der Daten von JSON in JavaScript-Objekt wandeln
19        var restaurantData = JSON.parse(this.responseText);
20        // Anzeige für das Spiel mit geladeden Daten aktualisieren
21        updateRestaurantPanel(restaurantData);
22     }
23   };
24   
25   xhttp.open("GET", "./" + restaurantFileName, true);
26   xhttp.send();
27 });
28 
29 var updateGamePanel = function(restaurantData) {
30   // Anzeigebereich für Spielinformationen im DOM finden
31   var restaurantPanel = document.querySelector("#game-panel");
32 
33   // Titel setzen
34   var title = restaurantPanel.querySelector(".title");
35   title.innerHTML = restaurantData.title;
36 
37   // Quellenangabe setzen
38   var ref = restaurantPanel.querySelector(".ref");
39   var label = ref.querySelector(".label");
40   ref.href = restaurantData.ref;
41   label.innerHTML = restaurantData.ref;
42 
43   // Beschreibung setzten
44   var description = restaurantPanel.querySelector(".description");
45   description.innerHTML = restaurantData.description;
46 }
