var paragraphe = document.getElementById("paragraphe");
alert(paragraphe.innerHTML);

var pseudo = prompt('Veuillez entrer votre pseudo');

paragraphe.innerHTML += '<b> '+ pseudo + '<b> !';

var image = document.getElementById("image");
var srcImage = image.src;
var paragraphe2 = document.getElementById("image-src");
paragraphe2.innerHTML = 'La source de l\'image est : ' +srcImage;
image.src = 'image/tortue.jpg';

image.className = prompt('Veuillez entrer une classe css : "grand" ou "petit"');

image.classList.add('bords'); //Pour ajouter une classe
image.classList.remove('bords'); //Pour supprimer une classe
image.classList.contains('bords'); //Pour savoir si la classe bords est appliquée


