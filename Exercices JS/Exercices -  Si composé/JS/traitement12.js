function btnCalculer_onclick()
{ 
 	var nb1,nb2,nb3,nb4;

    nb1 = parseFloat(document.getElementById("nb1").value);
    nb2 = parseFloat(document.getElementById("nb2").value);
    nb3 = parseFloat(document.getElementById("nb3").value);
    nb4 = 3;

    if(nb1 > nb2 && nb2 != nb3)
    {
        nb4 = nb4+2*nb1;
    }
    else if(nb1 == nb2 || nb2 > nb3)
    {
        nb4 = nb4+nb1;
    }
    else
    {
        nb4 = nb4*nb2/nb1-nb3;
    }

    console.log("Le résultat est : " + nb4);


}