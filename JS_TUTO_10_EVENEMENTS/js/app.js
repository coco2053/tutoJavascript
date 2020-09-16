/*document.getElementById("lien").onclick = function() {
    alert('Attention, lien mort !');
    return false;
};

 //Methode plus recente
document.getElementById("lien").addEventListener('click', function(e) {
    e.preventDefault();//Annuller le comportement par defaut de l'event
    console.log(e);
    alert('Attention, lien mort !');
    return false;
});

//Clique droit
document.getElementById("lien").addEventListener('contextmenu', function(e) {
    e.preventDefault();//Annuller le comportement par defaut de l'event
    alert('Vous avez ouvert le menu contextuel !');
    return false;
});
*/

window.addEventListener('resize', function() {
    document.querySelector("body").style.backgroundColor = 'lightblue';
});
