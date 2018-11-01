function btnCalculer_onclick()
{ 
 	var txtAge,Categorie;

    txtAge = parseFloat(document.getElementById("txtAge").value);

    if(txtAge>=6 && txtAge<= 8)
    {
        Categorie = "Poussins"
    }
    if(txtAge>=9 && txtAge<= 10)
    {
        Categorie = "Pupilles"
    }
    if(txtAge>=11 && txtAge<= 12)
    {
        Categorie = "Minimes"
    }
    if(txtAge>=13)
    {
        Categorie = "Cadets"
    }

    console.log("Votre enfant est dans la catégorie des : " + Categorie)

}