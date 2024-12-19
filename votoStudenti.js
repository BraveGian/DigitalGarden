function premiPulsante(){
   
       document.addEventListener("click",inserisciElemento);
  
  function inserisciElemento(){
      let somma=0;
     const archivio=[3]; 
     const votazioneITALIANO=  parseFloat(document.getElementById('votoIT').value);
     const votazioneMATEMATICA= parseFloat(document.getElementById('votoMAT').value);
     const votazioneCHIMICA= parseFloat(document.getElementById('votoCH').value);
     const votazioneINGLESE= parseFloat(document.getElementById('votoEN').value);
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
    }
       document.getElementById('testo').innerText= " la somma dell alunno è: " + somma;
  }


    