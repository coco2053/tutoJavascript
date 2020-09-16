/*document.getElementById("inscription").addEventListener("submit", function(e) {
        var erreur;

        var inputs = this.getElementsByTagName("input");

        for (var i = 0; i < inputs.length; i++) {
            if (!inputs[i].value) {
                erreur = "Veuillez renseigner tous les champs";
            }
        }

        if (erreur) {
            e.preventDefault();
            document.getElementById("erreur").innerHTML = erreur;
            return false;
        } else {
            alert('Formulaire envoyé !');
        }
});
*/
document.getElementById("email2").addEventListener("input", function(e) {
    var paragrapheErreur = document.getElementById("erreur");

    if(this.value != document.getElementById("email").value) {
        paragrapheErreur.innerHTML = "Les deux adresses ne correspondent pas";
    } else {
        paragrapheErreur.innerHTML = "";
    }
});
document.forms["inscription"].addEventListener("submit", function(e) {

        var erreur;

        var inputs = this;

        // Traitement au cas par cas
        if (inputs["email"].value != "coco@truc.com") {
            erreur = "Adresse email incorecte !";
        }

        //Traitement générique
        for (var i = 0; i < inputs.length; i++) {
            if (!inputs[i].value) {
                erreur = "Veuillez renseigner tous les champs";
                break;
            }
        }

        if (erreur) {
            e.preventDefault();
            document.getElementById("erreur").innerHTML = erreur;
            return false;
        } else {
            alert('Formulaire envoyé !');
        }
});
