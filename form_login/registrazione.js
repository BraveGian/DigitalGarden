const http= require('http');
const server= http.createServer((req,res) =>{
   // console.log(req);
   //res.write(" benvenuto ");
   //res.end();
   if(req.url==="/"){
    res.end("benvenuto sul mio sito");
   }
   res.end("errore");
})
server.listen(3000);