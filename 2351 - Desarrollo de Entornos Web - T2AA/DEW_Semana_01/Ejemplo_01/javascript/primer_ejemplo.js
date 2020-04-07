// JavaScript Document

        var edad, sueldo, dias;
        
        edad=prompt("ingrese edad");
        sueldo=prompt("ingrese sueldo");
        dias=prompt("dias trabajados");
        
        var costoxDia=parseInt(sueldo)/parseInt(dias);
        
        if(costoxDia<15){
            for(var i=1; i<costoxDia; i++){
            document.write("<br>"+costoxDia+i);
            }
            alert("tu costo por dia es menor a 15 " +costoxDia);
        }
        else{
            //document.body.innerHTML="<h1> Esto es otro resultado </h1>";
            //document.body.innerText="";
            document.body.textContent="<h1> Esto es otro resultado </h1>";
        }