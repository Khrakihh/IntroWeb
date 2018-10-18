function btnCalculer_onclick()
{ 
 	var MoyKmMois,TotKM;

 	MoyKmMois = parseFloat(document.getElementById("MoyKmMois").value);
 	TotKM = MoyKmMois*60;

 	console.log("Vous aller parcourir en moyenne:  " + TotKM);
}