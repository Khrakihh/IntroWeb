function btnCalculer_onclick()
{ 
 	var Nbre1,Nbre2,Operateur,rep;

    Nbre1 = parseFloat(document.getElementById("txtNbre1").value);
    Nbre2 = parseFloat(document.getElementById("txtNbre2").value);
    Operateur = document.getElementById("txtOperateur").value;



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



    console.log("La réponse est : " +rep);
}