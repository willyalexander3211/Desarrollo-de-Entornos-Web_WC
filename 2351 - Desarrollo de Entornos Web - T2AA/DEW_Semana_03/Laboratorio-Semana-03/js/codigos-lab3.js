// JavaScript Document

function ver(n){
    if(n==0){
        document.getElementById("titulo").innerHTML = "Machu Picchu";
        document.getElementById("imgmar").src = "../imagenes/MP.jpg";
    }
    else if(n==1){
        document.getElementById("titulo").innerHTML = "Cuidadela de Caral";
        document.getElementById("imgmar").src = "../imagenes/caral.jpg";
    }
    else {
        document.getElementById("titulo").innerHTML = "Cuidadela de Kuelap";
        document.getElementById("imgmar").src = "../imagenes/kuelap.jpg";
    }
}


