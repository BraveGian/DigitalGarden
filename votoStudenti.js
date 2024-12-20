function premiPulsante(){
   
       document.addEventListener("click",inserisciElemento);
  
  function inserisciElemento(){
      let somma=0;
     const archivio=[]; 
     const votazioneITALIANO=  parseInt(document.getElementById('votoIT').value);
     const votazioneMATEMATICA= parseInt(document.getElementById('votoMAT').value);
     const votazioneCHIMICA= parseInt(document.getElementById('votoCH').value);
     const votazioneINGLESE= parseInt(document.getElementById('votoEN').value);
     console.log(votazioneITALIANO);
     console.log(votazioneMATEMATICA);
     console.log(votazioneCHIMICA);
     console.log(votazioneINGLESE);
     archivio.push(votazioneITALIANO,votazioneMATEMATICA,votazioneCHIMICA,votazioneINGLESE);
     console.log(archivio);

     for( let i=0; i<archivio.length;i++){
         somma+=archivio[i];
       }
        let media=somma/archivio.length;
        console.log(" la media dell alunno è: " + media);
        document.getElementById('testo').innerHTML= " la somma dell alunno è: " + media;
        document.getElementById('votoIT').value="";
        document.getElementById('votoMAT').value="";
        document.getElementById('votoCH').value="";
        document.getElementById('votoEN').value="";
    
    }
       
  }

 