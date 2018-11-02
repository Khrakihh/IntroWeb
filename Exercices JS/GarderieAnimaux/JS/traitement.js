function btnCalculer_onclick()
{
    var Veterinaire, NbJoursVete, Service, Toilettage, Animal, Total, Salaire, TotalVete, NbJour;


    Veterinaire = document.getElementById("lstVeterinaire").value;
    NbJour = parseFloat(document.getElementById("txtNbreJours").value);
    NbHeure = parseFloat(document.getElementById("NbHeure").value);


    if (document.getElementById("chkServ").checked == true) {
        Service = 5;
        Toilettage = "avec";
    }

    else {
        Service = 0;
        Toilettage = "sans";
    }

    if (document.getElementById("radChien").checked == true) {
        Animal = "Chien";
        Total = 18.50;
    }

    else {
        Animal = "Chat";
        Total = 16.95;

    }

    switch (Veterinaire)
    {
        case "Audrey Bouchard" :Salaire = 25;
                                break;
        case "Stéphane Tremblay" :Salaire = 25;
            break;
        case "Maxime Simard" :Salaire = 25;
            break;
        case "Mélissa Caron" :Salaire = 25;
            break;
    }

    TotalVete = NbJoursVete * Salaire;

    Total = (Total * NbJour * 1.14975) + TotalVete + Service;


    if (NbJoursVete >= 5 && NbJoursVete <= 10)
    {
        Total = Total / 1.05;
    }
    else if (NbJoursVete >= 10 && NbJoursVete <= 30)
    {
        Total = Total / 1.10;
    }
    else if (NbJoursVete > 30)
    {
        Total = Total / 1.15;
    }
    else
    {
        Total = Total * 1;
    }


    console.log("Vétérinaire responsable est " + Veterinaire + ". Le montant pour la garde de votre " + Animal + " est de " + Total.toFixed(2) + " pour " + NbJour + ", jour(s) " + Toilettage + " service de toilettage.");
}
function btnAfficher1_onclick ()
{
    document.getElementById("imgChien").src= "img/Chien.jpg";
}
function btnAfficher2_onclick ()
{
    document.getElementById("imgChat").src= "img/Chat.jpg";
}