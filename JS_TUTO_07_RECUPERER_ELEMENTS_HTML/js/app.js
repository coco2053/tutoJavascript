var titre = document.getElementById("titre");// on recupere un element grace a son id
var paragraphes = document.getElementsByTagName('p'); //on recupere tous les elements dont le tag est p
alert(titre.innerHTML);

console.log(titre);
console.log(paragraphes);

for (var i = 0; i < paragraphes.length; i++) {
    console.log(paragraphes[i].innerHTML);
}

var input = document.getElementsByName('pseudo'); //on recupere tous les elements dont le nom est pseudo

for (var i = 0; i < input.length; i++) {
    console.log(input[i].value);
}

//Autre methode avec le selecteur css
var paragraphesbis = document.querySelectorAll('#test .paragraphe'); //on recupere tous les elements dont la classe est paragraphe dans la div #test

for (var i = 0; i < paragraphesbis.innerHTML; i++) {
    console.log(paragraphesbis[i].innerHTML);
}
