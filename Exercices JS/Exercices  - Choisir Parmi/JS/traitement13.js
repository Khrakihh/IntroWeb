function btnCalculer_onclick()
{ 
 	var txtNumSem, jour;

    txtNumSem = parseFloat(document.getElementById("txtNumSem").value)

    if(txtNumSem == 1)
    {
        jour = "dimanche";
    }
    else if(txtNumSem == 2)
    {
        jour = "Lundi";
    }
    else if(txtNumSem == 3)
    {
        jour = "Mardi";
    }
    else if(txtNumSem == 4)
    {
        jour = "Mercredi";
    }
    else if(txtNumSem == 5)
    {
        jour = "Jeudi";
    }
    else if(txtNumSem == 6)
    {
        jour = "Vendredi";
    }
    else if(txtNumSem == 7)
    {
        jour = "Samedi";
    }

    console.log("Le jour de la semaine est : " + jour)
}