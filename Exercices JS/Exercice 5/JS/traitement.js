function btnCalculer_onclick()
{ 
 	var Rev,Loyer,Nourri,Depl,Reste;

 	Rev = parseFloat(document.getElementById("Rev").value);
    Loyer = parseFloat(document.getElementById("Loyer").value);
	Nourri = parseFloat(document.getElementById("Nourri").value);
	Depl = parseFloat(document.getElementById("Dépl").value);

	Reste = (Rev - Loyer - Nourri - Depl)/4.33;
	console.log(Total.toFixed(2));
 	console.log("Il vous reste en dépense personelle: : " + Reste + " $");
}