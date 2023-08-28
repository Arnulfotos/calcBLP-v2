import { calcNoc } from "./calcNoc";
import { calcDia } from "./calcDia";
import { fecha } from "./dia";
import { printCot, endCot } from "./DOMoperators";
import { cotizarCabanas } from "./calcCab";

const btnCotizar = document.getElementById("calc");
const cotizacion = document.getElementById("cotizacion");
const totalInput = document.getElementById("total");
const deleteCot = document.getElementsByClassName

const dias = document.getElementById("entrada-general").value = 1
const camping = document.getElementById("camping").value = 1
const numDePersonas = document.getElementById("num-personas").value = 5
const numDeAutos = document.getElementById("auto").value = 1

let addDelete = (domElement) => {
  let button = document.createElement("button");
  let text = document.createTextNode('eliminar');
  button.appendChild(text);

  button.setAttribute('class', 'delete')





  domElement.appendChild(button); 
  let br = document.createElement("br");
    domElement.appendChild(br);

}





let cotizarCampingyEntrada = (e) => {
  const dias = document.getElementById("entrada-general").value;
  const camping = document.getElementById("camping").value;
  const numDePersonas = document.getElementById("num-personas").value;
  const numDeAutos = document.getElementById("auto").value;

  let cotCamping = calcNoc(camping, numDePersonas, numDeAutos);
  let cotEGeneral = calcDia(numDePersonas, dias);
  let calcTotal = ` El total a pagar es de ${
    cotCamping[0] + cotEGeneral[0]
  } pesos`;


printCot(cotCamping[1], cotizacion);
    printCot(cotEGeneral[1], cotizacion);
  printCot(calcTotal, cotizacion);
  addDelete(cotizacion);
 endCot(cotizacion);
  

  totalInput.value = cotCamping[0] + cotEGeneral[0];
  e.preventDefault();

}




fecha();
btnCotizar.addEventListener("click", (e) => {
  cotizarCampingyEntrada(e);
  cotizarCabanas(e);

  
});



