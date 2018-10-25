function btnCalculer_onclick()
{ 
 	var BilletTot,BilEtu,Bil65,BilAut,Bil5ans,Prix;

    Bil65 = parseFloat(document.getElementById("65").value);
	BilAut = parseFloat(document.getElementById("Régu").value);
	BilEtu = parseFloat(document.getElementById("Etu").value);


    BilletTot = BilAut + BilAut + Bil65;
    Prix = (Bil65*15) + (BilEtu * 12) + (BilAut * 20);

    if(BilletTot >= 5)
	{
		Prix = Prix/1.10;
	}

	console.log(Prix.toFixed(2));
 	console.log("Le prix total de vos billets est de : " + Prix + " $");
}