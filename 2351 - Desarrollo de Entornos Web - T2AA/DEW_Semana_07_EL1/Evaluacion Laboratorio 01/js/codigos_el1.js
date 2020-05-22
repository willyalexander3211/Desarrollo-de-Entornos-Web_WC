// JavaScript Document

function mostrar(n){
    if(n==0){
        document.getElementById("foto").src = "../imagenes/1.jpg";
    }
    else if(n==1){
        document.getElementById("foto").src = "../imagenes/2.jpg";
    }
    else {
        document.getElementById("foto").src = "../imagenes/3.jpg";
    }
}
