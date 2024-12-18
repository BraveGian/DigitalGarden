function operazione(num1,num2,num3){                          //funzione che svolge l operazione somma
     
    var risultato= num1-num2-num3;
    return risultato;

}

function calcolaSomma(){

    var numero1= parseInt(document.getElementById('NumeroUno').value);    //prendi i numeri dai tre campi input
    var numero2= parseInt(document.getElementById('NumeroDue').value);
    var numero3= parseInt(document.getElementById('NumeroTre').value);

    var resulSott=operazione (numero1,numero2,numero3);

    document.getElementById('resulSomma').innerHTML= " Il risultato della sottrazione è: " + resulSott;


}