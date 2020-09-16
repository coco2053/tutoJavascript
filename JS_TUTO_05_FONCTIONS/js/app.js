function additionne(nbr1, nbr2) {
    var resultat = Number(nbr1) + Number(nbr2);
    return resultat;
}
/*
On peut egalement déclarer la fonction comme cela:
var additionne = function () {
    var resultat = Number(nbr1) + Number(nbr2);
    return resultat;
};
 */


var prompt1 = prompt('Votre nombre 1');
var prompt2 = prompt('Votre nombre 2');
var add = additionne(prompt1, prompt2);
console.log(add);
