function btnCalculer_onclick()
{ 
 	var ArgCAN,Euro,TauxChang;

 	ArgCAN = parseFloat(document.getElementById("Euro").value);
    TauxChang = parseFloat(document.getElementById("TauxChang").value);

    Euro= ArgCAN*TauxChang;
 	console.log("Vous avez: " + Euro + "€");
}