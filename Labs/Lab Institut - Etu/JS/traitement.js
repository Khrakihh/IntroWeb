function frmMembre_onclick()
{
    if(validFormat() === true)
    {
        traiterInfo();
    }

}

function traiterInfo()
{

}

function ValidChampObligatoires()
{
    var tabVerif = new Array ("txtNom,txtPrenom,txtAdresse,txtVille,txtTel");
    var Valide = false;
    for (var i = 0; i< tabVerif.length; i++)
    {
        if(validExist(tabVerif[i])=== true)
        {
            Valide=true;
        }

        return Valide;
    }
}

function validExist(NomID)
{
    var validation;
    if(document.getElementById(NomID).value==="")
    {
        document.getElementById(NomID).style.backgroundColor = "red";
        validation=false;
    }
    else {
        document.getElementById(NomID).style.backgroundColor = "white";
        validation=true;
    }
    return validation;
}

function validFormat()
{
    var Valide = true;

    if(NomPrenomVilleValidation(document.getElementById("txtNom").value)==false)
    {
        document.getElementById("txtNom").style.borderColor = "red";
        Valide = false;
    }

    else if((NomPrenomVilleValidation(document.getElementById("txtPrenom").value)==false))
    {
        document.getElementById("txtPrenom").style.borderColor = "red";
        Valide = false;
    }

    else if((NomPrenomVilleValidation(document.getElementById("txtVille").value)==false))
    {
        document.getElementById("txtVille").style.borderColor = "red";
        Valide = false;
    }

    else if((AdresseValidation(document.getElementById("txtAdresse").value)==false))
    {
        document.getElementById("txtAdresse").style.borderColor = "red";
        Valide = false;
    }

    else if((TelephoneValidation(document.getElementById("txtTel").value)==false))
    {
        document.getElementById("txtTel").style.borderColor = "red";
        Valide = false;
    }

    else if((CodePostalValidation(document.getElementById("txtCodePostal").value)==false))
    {
        document.getElementById("txtCodePostal").style.borderColor = "red";
        Valide = false;
    }

    return Valide;
}


function NomPrenomVilleValidation()
{
    return /^(([A-Ë]|[a-ë])+(-)?([A-Ë]|[a-ë])+)$/
}

function AdresseValidation()
{
    return
}

function CodePostalValidation()
{
    return /^([A-z]{1}[0-9]{1}[A-z]{1} [0-9]{1}[A-z]{1}[0-9]{1})$/
}

function TelephoneValidation()
{
    /^(([0-9]{3}-[0-9]{3}-[0-9]{4})|(\([0-9]{3}\) [0-9]{3}-[0-9]{4}))$/
}

function CodePermanentValidation()
{

}



