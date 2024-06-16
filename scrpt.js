
//script para la carta
const envelope = document.querySelector('.envelope-wrapper');
        envelope.addEventListener('click', () => {
            envelope.classList.toggle('flap');
    });

//mostrar secciones
let sectionEntrar = document.getElementById("seccion-entrar")
let sectionRecuerdos = document.getElementById("seccion-recuerdos")
let sectionFotos = document.getElementById("seccion-fotos")
let sectionJuego = document.getElementById("juego")


sectionRecuerdos.style.display = "none"
sectionFotos.style.display = "none"
sectionJuego.style.display = "none"

function mostrarRecuerdos() {
    sectionEntrar.style.display = "none"
    sectionJuego.style.display = "none"
    sectionRecuerdos.style.display = "flex"
}

function mostrarFotos() {
    sectionEntrar.style.display = "none"
    sectionRecuerdos.style.display = "none"
    sectionJuego.style.display = "none"
    sectionFotos.style.display = "flex"
}

function mostrarJuego() {
    sectionFotos.style.display = "none"
    sectionEntrar.style.display = "none"
    sectionRecuerdos.style.display = "none"
    sectionJuego.style.display = "flex"
}

//array de respuestas
let correctas = [1,3,2,2,3]
//array donde se guardan las respuestas del usuario
let opcionElegida = []
let cantidadCorrectas = 0

//funcion que toma el numero de pregunta y el input elegido
function respuesta(numPregunta, seleccionada) {
    
    //respuesta elegida
    opcionElegida[numPregunta] = seleccionada.value

    id="p" + numPregunta
    labels = document.getElementById(id).childNodes
    labels[3].style.backgroundColor = "white"
    labels[5].style.backgroundColor = "white"
    labels[7].style.backgroundColor = "white"

    seleccionada.parentNode.style.backgroundColor = "#cec0fc"
}

//funcion que compara los arreglos para saber cuantas estuvieron correctas
function enviar() {
    cantidadCorrectas = 0
    for(let i = 0; i < correctas.length; i++ ) {
        if(correctas[i] == opcionElegida[i]) {
            cantidadCorrectas++
        }
    }

    document.getElementById("resultado").innerHTML = cantidadCorrectas
}
