/*var maVariable = 10;
var typeDeVariable = typeof maVariable;
alert(typeDeVariable);*/

/*var humeur = prompt('Comment ça va ?');
var prenom = prompt("Comment t'appelles-tu ?");
var phrase = 'Tu t\'appelles ' + prenom + ' et tu vas ' + humeur + ' !';
alert(phrase);*/

var varUne, varDeux = 10, varTrois;
var varQuatre;

console.log(varUne);
console.log(typeof varUne);

varUne = "Coucou 😀";

console.log(varUne);
console.log(typeof varUne);

console.log("Affichage du message de bienvenue");
alert('Bienvenue dans notre programme d\'addition');

var nombreUn = prompt('Votre premier nombre');
console.log("L'utilisateur a entré le nombre: " + nombreUn);

var nombreDeux = prompt('Votre second nombre');
console.log("L'utilisateur a entré le nombre: " + nombreDeux);

console.log("Opération en cours");
var resultat = Number(nombreUn) + Number(nombreDeux);

console.log("Affichage du résultat: "+resultat);
alert(resultat);
