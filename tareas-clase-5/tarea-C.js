//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

const $horasVideos = document.querySelectorAll('.hora')
const $minutosVideos = document.querySelectorAll('.minutos')
const $segundosVideos = document.querySelectorAll('segundos')
const $botonCalcular = document.querySelector('#calcular')

let horaTotal;
let minutosTotal;
let segundosTotal;
const segundoEnUnMinuto = 60

$botonCalcular.onclick = function(){
    horaTotal = 0
    minutosTotal = 0
    segundosTotal = 0

    for (let i=0; i < $horasVideos.length; i++){
        horaTotal += Number($horasVideos[i].value)
    } 
    for(let i=0; i < $minutosVideos.length; i++){
        const minutosVideos = $minutosVideos[i].value
        minutosTotal = Number(minutosVideos)
    } while (minutosTotal >= segundoEnUnMinuto){
        horaTotal ++
        minutosTotal -= segundoEnUnMinuto
    } for (let i=0; i < $segundosVideos.length; i++){
        segundosTotal += Number($segundosVideos[i].value)
    } while (segundosTotal >= segundoEnUnMinuto){
        minutosTotal++
        segundosTotal-= segundoEnUnMinuto
    }
    
    document.querySelector('#resultado').textContent = `${horaTotal} horas, ${minutosTotal} minutos, ${segundosTotal} segundos`
}