let horas 
let minutos 
let segundos

const $buttonSumar = document.querySelector("#sumar");

$buttonSumar.onclick = function SumarDatos() {
    
    horas += Number(document.querySelector("#horas").value);
    minutos = Number(document.querySelector("#minutos").value + minutos);
    segundos = Number(document.querySelector("#segundos").value + segundos);
    
    if(minutos>=60){
        horas =  horas + 1;
    }
    if(segundos>=60){
        minutos = minutos + 1;
    }
        
}

const $buttonMostrar = document.querySelector("#Aceptar");

$buttonMostrar.onclick = function MostrarDatos() {
    
    let duracionTotal = "El curso tiene una duracion total de "+horas+" horas "+minutos+" minutos "+segundos+" segundos ";
    document.querySelector("#mostrar").innerText = duracionTotal;
    
}