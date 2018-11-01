function btnCalculer_onclick()
{ 
 	var txtBasePrix,txtAge,Total,Film;

    txtBasePrix = parseFloat(document.getElementById("txtBasePrix").value);
    txtAge = parseFloat(document.getElementById("txtAge").value);
    Rabais = parseFloat(document.getElementById("txtAge").value);

    if(txtAge <= 16)
	{
		if(document.getElementById("radMidi").checked==true)
		{
			Rabais  = 1.60;
		}
		else
		{
			Rabais = 1.40;
		}
	}
	if(txtAge > 16)
	{
		if(document.getElementById("radMidi").checked==true)
		{
			Rabais = 1.30;
		}
		else
		{
			Rabais = 1 ;
		}
	}
	if(document.getElementById("chkMiSession").checked == true)
	{
		Rabais = Rabais
	}
	else
	{
		Rabais = 1
	}

	if(document.getElementById("Au poste!").checked == true)
	{
		Film = "Au poste!"
	}
    else if(document.getElementById("Colette").checked == true)
    {
        Film = "Colette"
    }
    else if(document.getElementById("Halloween!").checked == true)
    {
        Film = "Halloween"
    }
    else if(document.getElementById("La religieuse").checked == true)
    {
        Film = "La religieuse"
    }

	Total = txtBasePrix / Rabais;

	console.log(Total.toFixed(2));
 	console.log("Le prix total de vos entrées pour le film " + Film + " est de : " + Total);
}