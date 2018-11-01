function btnCalculer_onclick()
{ 
 	var txtBasePrix,txtAge,Total;

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

	Total = txtBasePrix / Rabais;

	console.log(Total.toFixed(2));
 	console.log("Le prix total de vos entrées de cinéma est de : " + Total);
}