import { calcNoc } from "./calcNoc";
import { calcDia } from "./calcDia";
import { fecha } from "./dia";


const btnCotizar = document.getElementById("calc");
const cotizacion = document.getElementById("cotizacion")



let printCot = (cot) => {
    let p = document.createElement('p')
    let text = document.createTextNode(cot)
    /* let br = document.createElement('br') 
    let hr = document.createElement('hr')*/
    p.appendChild(text)

    cotizacion.appendChild(p)
    /* cotizacion.appendChild(br) 
    cotizacion.appendChild(hr)*/


}

fecha();
btnCotizar.addEventListener('click', (e) => {
    
const dias = document.getElementById("entrada-general").value;
const camping = document.getElementById("camping").value;
const numDePersonas = document.getElementById("num-personas").value;
const numDeAutos = document.getElementById("auto").value;


    
    let cotCamping = calcNoc(camping, numDePersonas, numDeAutos)
    let cotEGeneral = calcDia(numDePersonas, dias)
    let calcTotal = ` El total a pagar es de ${cotCamping[0] + cotEGeneral[0]} pesos`
    printCot(cotCamping[1])
    printCot(cotEGeneral[1])
    printCot(calcTotal)
    let br = document.createElement('br') 
    let hr = document.createElement('hr')
    cotizacion.appendChild(br) 
    cotizacion.appendChild(hr)

    e.preventDefault();
})

