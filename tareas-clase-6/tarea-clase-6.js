/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad,
la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente,
 borrando los inputs ya creados (investigar cómo en MDN).
*/

document.querySelector('#siguiente-paso').onclick = function(event){
    const $cantidadIntegrantes = document.querySelector('#cantidad-integrantes');
    const cantidadIntegrantes = Number($cantidadIntegrantes.value);

    borrarIntegrantesAnteriores()
    crearIntegrantes(cantidadIntegrantes);

    event.preventDefault();

}
function resetear(){
    borrarIntegrantesAnteriores();
    ocultarBotonCalculo();
    ocultarResultados()
}

document.querySelector('#resetear').onclick = resetear

document.querySelector('#calcular').onclick = function(event){
    const numeros = obtenerEdadesIntegrantes()
    mostrarEdad('mayor', numeroMayor(numeros))
    mostrarEdad('menor', numeroMenor(numeros))
    mostrarEdad('promedio', edadPromedio(numeros))
    mostrarResultados()

    event.preventDefault()
    
}



function crearIntegrantes(cantidadIntegrantes){
    if (cantidadIntegrantes > 0){
        mostrarBotonCalculo()
    } else{
        resetear()
    }
     for(let i=0; i < cantidadIntegrantes; i++){
    crearIntegrante(i)
     }

}

function borrarIntegrantesAnteriores(){
    const $integrantes = document.querySelectorAll('.integrante');
    for(let i=0; i < $integrantes.length ; i++){
        $integrantes[i].remove()
    }
}

function crearIntegrante(i){
    const $div = document.createElement('div')
    $div.className = 'integrante'

    const $label = document.createElement('label')
    $label.textContent = 'Edad integrante ' + (i+1)
    const $input = document.createElement('input')
    $input.type = 'number'

    $div.appendChild($label)
    $div.appendChild($input)

    const $integrantes = document.querySelector('#integrantes')
    $integrantes.appendChild($div)
};

function mostrarBotonCalculo(){
    document.querySelector('#calcular').className = ''
}

function ocultarBotonCalculo(){
    document.querySelector('#calcular').className = 'oculto'
}



function resetear(){
    borrarIntegrantesAnteriores();
    ocultarBotonCalculo();
    ocultarResultados();
}

function mostrarResultados(){
    document.querySelector('#analisis').className = ''
}

function ocultarResultados(){
    document.querySelector('#analisis').className= 'oculto'
}
    
function mostrarEdad(tipo, valor){
    document.querySelector(`#${tipo}-edad`).textContent = valor
}

function obtenerEdadesIntegrantes() {
    const $integrantes = document.querySelectorAll('.integrante input');
    const edades = [];
    for (let i = 0; i < $integrantes.length; i++) {
      edades.push(Number($integrantes[i].value));
    }
    return edades;
  }