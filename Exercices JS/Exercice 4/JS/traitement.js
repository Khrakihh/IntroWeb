function btnCalculer_onclick()
{ 
 	var Dest,Dist,Cons,PrixL,Cout;

 	Dest =(document.getElementById("Dest").value);
    Dist = parseFloat(document.getElementById("Dist").value);
    Cons = parseFloat(document.getElementById("Cons").value);
    PrixL = parseFloat(document.getElementById("PrixL").value);

    Cout = (Dist/100)*Cons*PrixL;
    console.log(Cout.toFixed(2));
 	console.log("Votre voyage à " + Dest + " vous coûtera: " + Cout + " $");

}