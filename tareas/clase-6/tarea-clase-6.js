/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/
let $button = document.querySelector("button");

function CreateInput(indice){
    textoEdad = document.createElement('label');
    textoEdad.appendChild('#integrantes');
    textoEdad.value = "Ingrese edad del familiar N° "+ i++;
    ingreseEdad = document.createElement('input');
    ingreseEdad.appendChild('#integrantes');
}
 
$button.onclick = function Mostrar(){ 
    
    let $cantidadDePersonas = Number(document.querySelector("#cantidadDePersonas").value)
    
    for(let i = 0; i<Number($cantidadDePersonas);i++){
        let indice = i
        CreateInput(indice);
        return false
    }   
}
/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/ 
