<?php

//echo json_encode($_POST);

$success = 0;
$msg = "Une erreur est survenue (script.php)";

if (!empty($_POST['pseudo']) and !empty($_POST['email']) and !empty($_POST['mdp'])) {
    $pseudo = htmlspecialchars(strip_tags($_POST["pseudo"]));
    $email = htmlspecialchars(strip_tags($_POST["email"]));
    $mdp = password_hash($_POST["mdp"], PASSWORD_DEFAULT);
    if (strlen($pseudo) < 10) {
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Ajout en base de données de l'utilisateur ici
            $success = 1;
            $msg = "Yes !";
        } else {
            $msg = "Adresse email invalide";
        }
    } else {
        $msg = "Votre pseudo doit contenir moins de 10 caracteres";
    }
} else {
    $msg = "Veuillez renseigner tous les champs.";
}

$res = ["success" => $success, "msg" => $msg];
echo json_encode($res);
