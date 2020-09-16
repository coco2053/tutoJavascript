/*var pseudo = 'PrimeFX';
var tableau = ['PHP', 'C++', 'C#', 'Ruby', 5, pseudo];
console.log(tableau);
tableau[4] = 'Python';
tableau.push('HTML', 'CSS'); //Ajouter une valeur au tableau
console.log(tableau);
tableau.pop(); //Supprimer la derniere valeur
console.log(tableau);
tableau.shift(); //Supprimer la premiere valeur
console.log(tableau);

var langagesProg = [];

while(true) {
    var promptText = prompt('Entrez un langage de programmation');
    if(promptText != '') {
        langagesProg.push(promptText);
    } else {
        break;
    }
}
console.log(langagesProg);

var langagesProg = ['C++', 'C#', 'Ruby', 'Python'];
alert(langagesProg.indexOf('Ruby')); //Affiche l'index de la valeur

var promptText = prompt('Entrez le nom d\'un langage de prog');
if(langagesProg.indexOf(promptText) != -1) {
    alert('Ton langage existe !');
} else {
    alert('Ton langage n\'existe pas!');
}


var langagesProg = ['C++', 'C#', 'Ruby', 'Python'];
console.log(langagesProg);
langagesProg.splice(1, 2, 'PHP', 'JS'); //On se deplace à l'index 1, on supprimme les 2 valeurs suivantes et on ajoute 2 nouvelles valeurs.
console.log(langagesProg);
console.log(langagesProg.length); //Affiche la taille du tableau

for(var i = 0; i < langagesProg.length; i++) {
    console.log('Index => '+i+' | Valeur => '+langagesProg[i]);
}


var langagesProg = ['C++', 'C#', 'Ruby', 'Python'];
var langagesProgText = langagesProg.join(' et ');//Convertie le tableau en string en separant les valeurs avec ' et '
console.log(langagesProgText);
*/
var langagesProg = 'C++ - PHP - HTML';
var langagesProgArray = langagesProg.split(' - ');
console.log(langagesProgArray);
