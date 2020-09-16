var d = new Date("2015-05-14T14:15:00Z"); // Z pour garder le time zone.

// Permet d'executer la fonction au bout de xxx milliseconds
setTimeout(function() {
   console.log("Salut ! Je susi en retard...");
}, 3000);

function refreshTime() {
   d = new Date();
   var tempsCourant = document.getElementById("temps-actuel");
   tempsCourant.innerHTML = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}


var compteurTemps;

document.getElementById("stop").addEventListener("click", function() {
   clearInterval(compteurTemps); // Arrete l'interval
});

document.getElementById("start").addEventListener("click", function() {
   refreshTime();
   // Permet d'excecuter la fonction toutes les secondes
   compteurTemps = setInterval(refreshTime, 1000); // Demarre l'interval
});


/*
d.setFullYear(2018); // Change l'année

console.log(d.getFullYear());// Afficher l'année
console.log(d.getDate());// Afficher le jour
console.log(d.getMonth()+1);// Afficher le mois. Attention: JS compte les mois de 0 à 11!
console.log(d.getHours());// Afficher les heures
console.log(d.getMinutes());// Afficher les minutes
console.log(d.getSeconds());// Afficher les secondes
console.log(d.toString()); // Convertit la date en string
console.log(d.toUTCString()); // Convertit la date en string sans convertion de time zone
console.log(d.toDateString()); // Convertit la date en string dans un format sans l'heure
*/
