/*const jsonString = '{"nome": "Mario", "cognome": "Rossi", "eta":22 ,"facolta": "legge", "Universita": "Milano"}';
const persona = JSON.parse(jsonString);

console.log(persona.nome);    // Output: Mario
console.log(persona.cognome); // Output: Rossi
console.log(persona.eta);     // Output: 30
console.log(persona.facolta);   // Output legge
console.log(persona.Universita); //  Output Milano*/


// Oggetto JavaScript
/*/const persona = {
    nome: "Gianluca",
    eta: 48,
    citta: "taranto",
    corsista: "Full Stack Develompment"

  };
  
  // Serializzazione dell'oggetto in una stringa JSON
  const jsonString = JSON.stringify(persona);
  
  console.log(jsonString);
  // Output: {"nome":"Giovanni","eta":25,"citta":"Roma"}*/
  

  // La stringa JSON che vogliamo parsare



  /*const jsonString = '{"nome": "Mario", "cognome": "Rossi", "eta": 30, "citta": "Milano"}';

// Parsing della stringa JSON in un oggetto JavaScript
const persona = JSON.parse(jsonString);

// Aggiungere nuovi campi all'oggetto
persona.telefono = "+39 123 456 7890";
persona.email = "mario.rossi@example.com";
persona.indirizzo = "Via Roma 123, Milano, Italia";

// Ora possiamo serializzare nuovamente l'oggetto in una stringa JSON aggiornata
const updatedJsonString = JSON.stringify(persona, null, 2); // 'null, 2' per formattare il JSON in modo leggibile

// Mostra il JSON aggiornato
console.log(updatedJsonString);*/


// La stringa JSON che vogliamo parsare
/*const jsonString = '{"nome": "Mario", "cognome": "Rossi", "eta": 30, "citta": "Milano", "telefono": "+39 123 456 7890", "email": "mario.rossi@example.com", "indirizzo": "Via Roma 123, Milano, Italia"}';

// Parsing della stringa JSON in un oggetto JavaScript
const persona = JSON.parse(jsonString);

// Mostra l'oggetto prima di rimuovere i campi
console.log("Prima della rimozione:", persona);

// Rimuovere i campi 'telefono' e 'indirizzo'
delete persona.telefono;
delete persona.indirizzo;

// Mostra l'oggetto dopo aver rimosso i campi
console.log("Dopo la rimozione:", persona);

// Serializzare l'oggetto aggiornato in una stringa JSON
const updatedJsonString = JSON.stringify(persona, null, 2);

// Mostra il JSON aggiornato
console.log(updatedJsonString);*/


const StringProve= '{"squadra":"Fiorentina", "citta":"Firenze"}';
const team= JSON.parse(StringProve);
team.stadio="Artemio Franchi";
const updateStringProve= JSON.stringify(team,null,2);
console.log(updateStringProve);
delete team.citta;
console.log(updateStringProve);
/*updateStringProve;
console.log(updateStringProve);*/