/*

var chiffre1 = 10;
var chiffre2 = 5;
var chiffre3 = 8;
var maVariable = chiffre1 > chiffre2 && chiffre1 > chiffre3;

//alert(maVariable);

var cond1 = chiffre1 > chiffre2; //true
var cond2 = chiffre3 < chiffre2; //false

if(chiffre3 < chiffre2) {
    alert("C'est vrai également !");
} else if(chiffre2 > chiffre1) {
    alert("Chiffre2 est bien inférieur à chiffre1 !");
} else {
    alert("C'est faux :p!");
}

var userInput = prompt('Quelle a été ta dernière note ?');

if(userInput > 0 && userInput < 10) {
    alert('Peu mieux faire...');
} else if(userInput == 10) {
    alert('Pile la moyenne :p');
} else if(userInput > 10 && userInput < 20) {
    alert('Pas mal :D');
} else if(userInput == 20) {
    alert('Génial !');
} else {
    alert("Je n'ai pas compris ta note...");
}

var confirme = confirm('Voulez-vous entrer sur ma Page?');

if(confirme) {
    alert('Super !');
} else {
    alert('Dommage :p');
}

var maVariable2 = 0;

if(typeof maVariable2 !== 'undefined') {
    alert('Contient des informations !');
} else {
    alert('Ne contient pas grand chose...');
}

var langagePrefere = prompt('Quel est votre langage de programmation preféré ?');
if (langagePrefere == 'PHP') {
    alert('Pas mal, mais il y a mieux :p');
} else if (langagePrefere == 'JS') {
    alert('Parfait !');
} else if (langagePrefere == 'Ruby') {
    alert('Génial !');
} else if (langagePrefere == 'Python') {
    alert('Mouais bof !');
} else {
    alert('Je n\'ai aucune info sur ce langage !');
}

langagePrefere = prompt('Quel est votre langage de programmation preféré ?');

switch(langagePrefere) {
    case "PHP":
        message = 'Pas mal, mais il y a mieux :p';
    break;

    case "JS":
        message = 'Parfait !';
    break;

    case "Ruby":
        message = 'Génial !';
    break;

    case "Python":
        message = 'Mouais bof !';
    break;

    default:
        message = 'Je n\'ai aucune info sur ce langage !';
}

alert(message);


langagePrefere = prompt('Quel est votre langage de programmation preféré ?');

if(langagePrefere == "PHP") {
    alert('Cool !');
} else {
    alert('Dommage :p');
}
*/
langagePrefere = prompt('Quel est votre langage de programmation preféré ?');

//En condition ternaire cela donne :
alert((langagePrefere == "PHP") ? 'Cool :D' : 'Dommage :p');
