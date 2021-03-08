/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

let mayorEdad = 0;
let menorEdad = 999;
let promedioEdad = 0;
let totalEdades = 0;
let numbers = [];

function CreateInput(numeroIntegrante){
    
        
    let integrante = document.createElement('DIV');
    integrante.className= "integrante";

    let textoEdad = document.createElement('LABEL');
    numeroIntegrante++;
    textoEdad.innerText = `Ingrese edad del familiar N° ${numeroIntegrante} `;
    integrante.appendChild(textoEdad);

    let ingreseEdad = document.createElement('INPUT');
    ingreseEdad.type = "number";
    ingreseEdad.className = "edad";
    integrante.appendChild(ingreseEdad);

    const  $integrantes = document.getElementById('integrantes')

    $integrantes.appendChild(integrante);
}

 
document.querySelector("#button").onclick = function Mostrar(event){ 
    
    let $cantidadDePersonas = document.querySelector("#cantidadDePersonas");
    const cantidadDePersonas = Number($cantidadDePersonas.value);
    for(let i = 0; i<cantidadDePersonas;i++){
    CreateInput(i);
    }
    document.querySelector("#calcular").className = "";
    event.preventDefault();   

}
document.querySelector("#calcular").onclick = function(event){

    const $numbers = document.querySelectorAll(".edad");
    
    for(let i = 0;i < $numbers.length; i++){
        numbers.push(Number($numbers[i].value))
        
        EdadMayor(numbers[i]);
        EdadMenor(numbers[i]); 
        EdadTotal(numbers[i]);
    }
    EdadPromedio();
    MostrarDatos();
    event.preventDefault();
    
}
function EdadMayor(edades){
    
    if (edades > mayorEdad){
        mayorEdad = edades
    }
}
function EdadMenor(edades){
    
    if (edades < menorEdad){
        menorEdad = edades
    }
}
function EdadTotal(edades){
    totalEdades += edades;
}
function EdadPromedio(){
    promedioEdad = totalEdades/numbers.length;
}
function MostrarDatos(){
    document.querySelector("#promedio").innerText = "El promedio es: "+promedioEdad;
document.querySelector("#mayor").innerText = "La edad mas grande es: "+mayorEdad;
document.querySelector("#menor").innerText = "La edad mas chica es: "+menorEdad;
   
}
/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/ 
