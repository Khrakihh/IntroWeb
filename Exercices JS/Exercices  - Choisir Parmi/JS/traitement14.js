function btnCalculer_onclick()
{ 
 	var txtNbre1,txtNbre2,txtOperateur,rep;

    txtNbre1 = parseFloat(document.getElementById("txtNbre1").value);
    txtNbre2 = parseFloat(document.getElementById("txtNbre2").value);

    <!if(txtOperateur == "+")
    {
        rep = txtNbre1 + txtNbre2;
    }
    else if(txtOperateur == "-")
    {
        rep = txtNbre1 - txtNbre2;
    }
    else if(txtOperateur == "*")
    {
        rep = txtNbre1 * txtNbre2;
    }
    else if(txtOperateur == "/")
    {
        rep = txtNbre1 / txtNbre2;
    }

    console.log("La réponse est : " +rep);
}