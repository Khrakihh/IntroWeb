function btnCalculer_onclick()
{ 
 	var Nbre1,Nbre2,Operateur,rep;

    Nbre1 = parseFloat(document.getElementById("txtNbre1").value);
    Nbre2 = parseFloat(document.getElementById("txtNbre2").value);
    Operateur = document.getElementById("txtOperateur").value;

    rep = operateur();

    afficherInfo();

}

function operateurCalculer(Nbr1,Nbr2,rep)
{
    var Operateur;
    switch(Operateur)
    {
        case "+": rep = Nbre1 + Nbre2;
            break;
        case "-": rep = Nbre1 - Nbre2;
            break;
        case "*": rep = Nbre1 * Nbre2;
            break;
        case "/": rep = Nbre1 / Nbre2;
            break;
    }

    return rep;
}
function afficherInfo()
{



    console.log("La réponse est : " + rep);

}