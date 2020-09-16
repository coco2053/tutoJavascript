var titre = document.getElementById('titre');
console.log(titre.style);
titre.style.color = "white";
titre.style.backgroundColor = prompt("Veuillez entrer le nom d'une color en anglais");
titre.style.paddingTop = "50px";
console.log(titre.style.backgroundColor);
var style = getComputedStyle(titre).backgroundColor;
console.log(style);
