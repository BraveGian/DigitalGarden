function aggiungi(carattere) {
           
    const display = document.getElementById('display');
    display.value += carattere;
   
    }


function pulisci(){
    const display=document.getElementById('display');
    display.value=' ';

}



function OperazioneCalcolo(){
let input= document.getElementById('display').value;  //Leggiamo il valore presente nella inputBox
let regexSomma=/(\d+(\.\d+)?)\+(\d+(\.\d+)?)/         //Creaiamo quattro variabili corrispondenti alle quattro operazini
let regexSottrazione=/(\d+(\.\d+)?)\-(\d+(\.\d+)?)/   // aritmetiche che vogliamo che la nostra calcolatrice effettui.
let regexMoltipl=/(\d+(\.\d+)?)\*(\d+(\.\d+)?)/      // Creiamo 4 espressioni regolari ( mi sono aiutato usando il sito regex101 ),
let regexDividi=/(\d+(\.\d+)?)\/(\d+(\.\d+)?)/       // ci serviranno per dividere e leggere il contentuto che l utente scriverà.

if (regexSomma.test(input)){                         //  usaimo la variabile regexSomma e a questa applichiamo la proprietà test
let match = input.match(regexSomma);            // passeremo il contenuto della variabile input (contenente il valore della InputBox)
let num1 = parseFloat(match[1]);    // nelle variabili num1 e num2 verrano inseriti i due valori che vogliamo sommare.
let num2 = parseFloat(match[3]);   // i match sono le due parti che tramite espressione regolare abbiamo diviso.
let result =(num1+num2);                           // nella varibile result andremo ad inserire l operazione aritmetica
document.getElementById('display').value=result.toFixed(1); //La funzione parseFloat in JavaScript prende come argomento una stringa e restituisce un numero decimale. 

}else if(regexSottrazione.test(input)){
   match = input.match(regexSottrazione);
   num1 = parseFloat(match[1]); 
   num2 = parseFloat(match[3]); 
  result =(num1-num2);
document.getElementById('display').value=result.toFixed(1);

}else if(regexMoltipl.test(input)){
   match = input.match(regexMoltipl);
   num1 = parseFloat(match[1]); 
   num2 = parseFloat(match[3]); 
   result =(num1*num2);
document.getElementById('display').value=result.toFixed(1);

}else if(regexDividi.test(input)){
   match = input.match(regexDividi);
   num1 = parseFloat(match[1]); 
   num2 = parseFloat(match[3]); 
   result =(num1/num2);
document.getElementById('display').value=result.toFixed(1);
}
}

