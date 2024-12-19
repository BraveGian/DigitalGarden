function premiPulsante(){
   
       document.addEventListener("click",inserisciElemento);
  
  function inserisciElemento(){
       
     let archivio=[3]; 
     const votazioneITALIANO= document.getElementById('votoIT').value;
     const votazioneMATEMATICA= document.getElementById('votoMAT').value;
     const votazioneCHIMICA= document.getElementById('votoCH').value;
     const votazioneINGLESE= document.getElementById('votoEN').value;
     console.log(votazioneITALIANO);
     console.log(votazioneMATEMATICA);
     console.log(votazioneCHIMICA);
     console.log(votazioneINGLESE);
     archivio.push(votazioneITALIANO,votazioneMATEMATICA,votazioneCHIMICA,votazioneINGLESE);
    
    
     console.log(archivio);
     
   }
      
}