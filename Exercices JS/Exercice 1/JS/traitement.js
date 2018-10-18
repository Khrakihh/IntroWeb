function btnCalculer_onclick()
{ 
 	var PoidsLbs,Kg;

 	PoidsLbs = parseFloat(document.getElementById("txtPoidsLbs").value);
 	Kg = PoidsLbs/2.2;

 	console.log("Votre poids est " + Kg);
}