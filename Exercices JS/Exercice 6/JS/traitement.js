function btnCalculer_onclick()
{ 
 	var Nb1,Nb5,Nb10,Nb25,Total;

    Nb1 = parseFloat(document.getElementById("Nb1").value);
    Nb5 = parseFloat(document.getElementById("Nb5").value);
    Nb10 = parseFloat(document.getElementById("Nb10").value);
    Nb25 = parseFloat(document.getElementById("Nb25").value);


    Total = ((Nb1*1)+(Nb5*5)+(Nb10*10)+(Nb25*25))/100;
 	console.log("Vous avez: " + Total + "$");
}