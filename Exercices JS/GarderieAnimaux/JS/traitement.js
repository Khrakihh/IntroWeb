function btnCalculer_onclick()
{
    var veterinaire,jrs,toilettage,Total,Tarif,Align;


    jrs = parseFloat(document.getElementById("txtNbreJours").value);
    veterinaire = parseFloat(document.getElementById("txtNbreJours").value);
    Total = parseFloat(document.getElementById("txtNbreJours").value);


    if((document.getElementById("Audrey Bouchard").checked) == true)
    {
        veterinaire = "Audrey Bouchard";

    }
    else if ((document.getElementById("Stéphane Tremblay").checked) == true)
    {
        veterinaire = "Stéphane Tremblay";
    }
    else if ((document.getElementById("Maxime Simard").checked) == true)
    {
        veterinaire = "Maxime Simard";
    }
    else
    {
        veterinaire = "Maxime Simard";
    }


    if((document.getElementById("chkServ").checked) == true)
    {
        Total = Total+5;
    }

    if((document.getElementById("radChien").checked) == true)
    {
        Tarif = 18.50;
    }
    else
    {
        Tarif = 16.95
    }

    Total = (jrs * Tarif)* 1.14975 ;

    Console.log("Le vétérinaire responsable est " + veterinaire + "le coût du montant pour la garde de votre" + Align +"est de " + Total + "pour " + "jour(s)")









}