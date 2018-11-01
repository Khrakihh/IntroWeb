function btnCalculer_onclick()
{ 
 	var nb1,nb2,Signe;

    nb1 = parseFloat(document.getElementById("nb1").value);
    nb2 = parseFloat(document.getElementById("nb2").value);

if(nb1 <= 0 && nb2 <=0 || nb1 >= 0 && nb2 >= 0)
{
	Signe = "Positif"
}
else
{
	Signe = "Négatif"
}

console.log("Le signe est : " + Signe);





}