function verificaParole(){
    let arrX=[];      // creiamo un array dove inserire la prima parola nel primo input
    let arrY=[];      // creaio un  array dove inserire la seconda parola nel secondo input
    let contatoreX=0;  // creiamo un contatore e lo inizializzo a 0 
    let contatoreY=0;
    let contMinX=0;
    let contMinY=0;
    let x=document.getElementById('parola1').value;
    let y= document.getElementById('parola2').value;
            arrX= x.split("");   // tramite split andrò a prendere la stringa e la spezzatto per singolo carattere
            arrY= y.split("");
        for( let i=0; i<arrX.length; i++){    // ciclo for che mi analizza tutta la lunghezza dell' array
            if((arrX[i] === arrX[i].toUpperCase())){ // condizione che verifica la presenza di lettere maiuscole
            contatoreX +=1;   
            
            }else{
            if(arrX[i]===arrX[i].toLowerCase()){
                contMinX +=1;
            }
            }
         }  
        for( let i=0; i<arrY.length; i++){
            if((arrY[i] === arrY[i].toUpperCase())){
                contatoreY +=1;
                
            }else{
            if(arrY[i]===arrY[i].toLowerCase()){
                    contMinY +=1;
                }
            }
        }   
            console.log("ci sono in totale caratteri maiuscoli: ", contatoreX);  
            console.log("ci sono in totale caratteri minuscoli: ", contMinX);  
            console.log("ci sono in totale caratteri maiuscoli: ", contatoreY);  
            console.log("ci sono in totale caratteri minuscoli: ", contMinY); 
            }