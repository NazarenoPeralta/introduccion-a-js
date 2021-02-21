let horas = 0;
let minutos = 0;
let segundos = 0;

const $buttonSumar = document.querySelector("#sumar");

$buttonSumar.onclick = function SumarDatos() {
    
    horas += Number(document.querySelector("#horas").value);
    minutos += Number(document.querySelector("#minutos").value);
    segundos += Number(document.querySelector("#segundos").value);
    
    if(minutos>=60){
        horas =  horas + 1;
        minutos = minutos - 60;
    }
    if(segundos>=60){
        minutos = minutos + 1;
        segundos = segundos- 60;
    }
        
}

const $buttonMostrar = document.querySelector("#Aceptar");

$buttonMostrar.onclick = function MostrarDatos() {
    
    let duracionTotal = "El curso tiene una duracion total de "+horas+" horas "+minutos+" minutos "+segundos+" segundos ";
    document.querySelector("#mostrar").innerText = duracionTotal;
    
}