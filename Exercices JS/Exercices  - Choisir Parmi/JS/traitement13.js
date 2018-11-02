function btnCalculer_onclick()
{ 
 	var NumSem, jour;

    NumSem = parseFloat(document.getElementById("txtNumSem").value)




    switch(NumSem)
    {
        case "1" : jour = "Dimanche";
                   break;
        case "2" : jour = "Lundi";
            break;
        case "3" : jour = "Mardi";
            break;
        case "4" : jour = "Mercredi";
            break;
        case "5" : jour = "Jeudi";
            break;
        case "6" : jour = "Vendredi";
            break;
        case "7" : jour = "Samedi";
            break;
    }





    console.log("Le jour de la semaine est : " + jour)
}