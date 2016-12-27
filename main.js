// funcion para el checked del monoB
function loro_si()
{
    var img = document.getElementById("check_habla");
    var checksi = document.getElementById("loro_si");
    if(checksi.checked)
    {
        img_loro.innerHTML = '<img class="imagen img-responsive" src="image/habla.gif">';
    }
    else{
        img_loro.innerHTML = '<img class="imagen img-responsive" src="image/loro1.gif">';
    }
}
function loro_no()
{
    var img = document.getElementById("check_nohabla");
    var checkno = document.getElementById("loro_no");

    if(checkno.checked)
    {
         img_loro.innerHTML = '<img class="imagen img-responsive" src="image/loro1.gif">';
    }
    else{
       
        img_loro.innerHTML = '<img class="imagen img-responsive" src="image/habla.gif">';
    }
}
// funcion evaluar que se lanza cuando se presiona el button evaluar
function evaluar()
{
    var siTalk = document.getElementById("loro_si").checked;
    var noTalk = document.getElementById("loro_no").checked;
    var n = parseInt( document.getElementById("n").value);
    var salida = document.getElementById("salida");
      if((n<7||n>20)&&(siTalk==true))

               salida.innerHTML = "<h3 class='animated wobble'> Estamos en problemas!!! ayuda! </h3>";
            else{
                 salida.innerHTML = "<h3 class='animated wobble'> No hay problemas, no temas! </h3>";
            }
}
