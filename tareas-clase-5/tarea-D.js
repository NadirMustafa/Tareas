//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

document.querySelector('#siguiente-paso').onclick = function(event) {
    const numeros = obtenerNumeros()

    document.querySelector('#promedio').textContent = calcularPromedio(numeros)
    document.querySelector('#menor').textContent = calcularMenor(numeros)
    document.querySelector('#mayor').textContent = calcularMayor(numeros)
    document.querySelector('#mas-frecuente').textContent = obtenerMasFrecuente(numeros)

    mostrar('#totales')

    event.preventDefault();
}

function obtenerNumeros (){
    const $numeros = document.querySelectorAll('li');
    const numeros = []
    for (let i=0;i<$numeros.length;i++){
        numeros.push($numeros[i].innerText)
    }
    return numeros
}


function calcularPromedio (numeros){
    let acumulador = 0
    for (let i=0;i<numeros.length;i++){
        acumulador += Number(numeros[i])
    }
    return (acumulador / numeros.length).toFixed(2)
}

function calcularMenor (numeros){
    let menor = Number(numeros[0])
    for (let i=0;i<numeros.length;i++){
        if (Number(numeros[i]) < menor)  {
            menor = Number(numeros[i])
        } 
    }
    return menor
}

function calcularMayor (numeros){
    let mayor = Number(numeros[0])
    for (let i=0;i<numeros.length;i++){
        if (Number(numeros[i]) > mayor)  {
            mayor = Number(numeros[i])
        } 
    }
    return mayor
}

function obtenerMasFrecuente(numeros){
    let numeroMasFrecuente;
    let contadorRepeticiones;
    let contadorMaximasRepeticiones = 0;

    for(let i = 0; i < numeros.length; i++) {
        contadorRepeticiones = 0;
        for(let j = 0; j < numeros.length; j++){
            if(Number(numeros[i]) === Number(numeros[j])){
                contadorRepeticiones++;
            }
            if(contadorRepeticiones > contadorMaximasRepeticiones){
                contadorMaximasRepeticiones = contadorRepeticiones;
                numeroMasFrecuente = Number(numeros[i]);
            }
        }
    }
    return numeroMasFrecuente
}

function mostrar(selector) {
    document.querySelector(selector).style.display = ''
}