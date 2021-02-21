const $buttonMostrar = document.querySelector("#ingresar");

$buttonMostrar.onclick = function MostrarDatos() {
    let nombre1 = document.querySelector("#nombre1-usuario").value;
    let nombre2 = document.querySelector("#nombre2-usuario").value;
    let Apellidos = document.querySelector("#apellido-usuario").value;
    let edadDeUsuario = document.querySelector("#edad-usuario").value;

    document.querySelector("#resultado").innerText = nombre1+" "+ nombre2+ " "+Apellidos+" "+edadDeUsuario;
    document.querySelector("#h1").innerText += ` ${nombre1}`;
}