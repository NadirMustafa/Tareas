function edadPromedio(numeros){
    let acumulador=0
    for(let i=0; i < numeros.length; i++){
        acumulador += numeros[i]
    }
    
 return acumulador / numeros.length
}

function numeroMayor(numeros){
    let mayorNumero = numeros[0]
    for(let i=0; i < numeros.length; i++){
        if (mayorNumero < numeros[i]){
            mayorNumero = numeros[i]
        }
    }
  return mayorNumero  
}

function numeroMenor(numeros){
    let numeroMenor = numeros[0]
    for(let i=0; i<numeros.length;i++){
        if(numeroMenor > numeros[i]){
            numeroMenor = numeros[i]
        }
    }
 return numeroMenor
}

