function requete(fichier) {

    var demo = document.getElementById("demo");
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange= function() { //fonction appelée à chaque changement d'état de la requete

        if (this.readyState == 4 && this.status == 200) {
            demo.innerHTML = this.responseText;
            /*var data = this.response;
            var utilisateurs = data.utilisateurs;
            for (var i = 0; i < utilisateurs.length; i++) {
                demo.innerHTML += utilisateurs[i].prenom + " ("+ utilisateurs[i].age + ") ";
            }*/
        } else if (this.readyState == 4 && this.status == 404) {
            alert('Erreur 404 :/');
        }
    };

    xhr.open("GET", "async/"+fichier, true); // ("method", "target", "async?"")
    xhr.responseType = "text";
    xhr.send();
}

document.getElementById("form-req").addEventListener("submit", function(e) {
    e.preventDefault();
    var fichierARecuperer = document.getElementById("input-fichier").value;
    console.log(fichierARecuperer);
    requete(fichierARecuperer);
    return false;
});
