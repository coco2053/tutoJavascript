// Créer des objets simples
var utilisateur = {
   nom: {
      prenom: "Paul",
      famille: "Dupont"
   },
   age: 25,
   sexe: "M"
};
console.log(utilisateur.nom.prenom);

// Créer des objets avec les constructeurs

function Personne(nom, age, sexe) {
   this.nom = nom;
   this.age = age;
   this.sexe = sexe;
}

function Voiture(fab, an, prop) {
   this.fabricant = fab;
   this.annee = an;
   this.proprietaire = prop;
   this.genererMessage = function() {
      alert(this.proprietaire.nom + ' possède une ' + this.fabricant + ' de ' + this.annee);
   };
}

var utilisateur1 = new Personne("Paul", 25, "M");
var utilisateur2 = new Personne("Matthieu", 17, "M");

var v = new Voiture("Peugeot", 2005, utilisateur1);

v.genererMessage();

v.proprietaire = utilisateur2;

v.genererMessage();
