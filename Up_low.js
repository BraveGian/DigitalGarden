function verificaParole(){
    let arrX=[1];
    let arrY=[1];
    
    let x=document.getElementById('parola1').value;
    arrX[0]= x.split("");
    console.log(arrX);
    let y= document.getElementById('parola2').value;
    arrY[0]= y.split("");
    console.log(arrY)
    
        console.log("la prima parola inserita è: " , x );
        console.log("la seconda parola inserita è: ", y );

}