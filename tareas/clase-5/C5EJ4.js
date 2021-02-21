
let promedio = 0;
let mayor = 0;
let menor = 111111111;
let total = 0;
let array = document.querySelectorAll("li");



for(let i = 0; i<array.length;i++){
    function Calcular(){
        let numero = Number(array[i].innerText);
        if(numero>mayor){
            mayor = numero;
        }
        if(numero<menor){
            menor = numero;
        }
        total += numero;
        promedio= total/array.length;
        
    }  
    Calcular();
}
document.querySelector("#promedio").innerText = "El promedio es: "+promedio;
document.querySelector("#mayor").innerText = "El numero mas grande es: "+mayor;
document.querySelector("#menor").innerText = "El numero mas chico es: "+menor;
