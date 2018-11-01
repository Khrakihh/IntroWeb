function btnCalculer_onclick()
{ 
 	var Animaux,Jrs,Tar,Mont,;


	Jrs = parseFloat(document.getElementById("Jrs").value);
	Mont = parseFloat(document.getElementById("Mont").value);
	Tar = parseFloat(document.getElementById("Mont").value);

	if(document.getElementById("Chien").checked == true)
	{
		Tar = 18.50;
	}
	else
	{
		Tar = 16.95
	}
	Mont = Jrs * Tar * 1.14975;

	console.log(Mont.toFixed(2));
 	console.log("L prix de la garde de votre animal est de : " + Mont + " $");
}