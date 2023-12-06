// Pfad zu den Bildern
let images = ['path/to/image1.jpg', 'path/to/image2.jpg', 'path/to/image3.jpg'];
let index = 0;

// Bildwechsel alle 2 Sekunden
setInterval(function() {
    let imgElement = document.querySelector('.img');
    imgElement.src = images[index];
    index = (index + 1) % images.length;
}, 2000);

// Textarea ein- und ausblenden
let link = document.querySelector('a[href="#"]');
link.addEventListener('click', function(e) {
    e.preventDefault();
    let textarea = document.querySelector('textarea[name="comment"]');
    if (textarea.style.display === 'none') {
        textarea.style.display = 'block';
    } else {
        textarea.style.display = 'none';
    }
});